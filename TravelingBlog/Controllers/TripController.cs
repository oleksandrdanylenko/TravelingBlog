using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Controllers
{    
    [Route("api/trip")]
    [Authorize]
    public class TripController : Controller
    {
        private readonly ClaimsPrincipal caller;
        private IUnitOfWork unitOfWork;
        private ILoggerManager logger;
        private const int pageSize = 10;

        public TripController(ILoggerManager logger, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            this.logger = logger;
            this.unitOfWork = unitOfWork;
            caller = httpContextAccessor.HttpContext.User;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAllTrips(int page = 1)
        {
            try
            {
                var trips = await unitOfWork.Trips.GetAllTripsAsync(page,pageSize);
                if (trips == null)
                {
                    logger.LogInfo("TripsNotFound");
                    return NotFound();
                }
                logger.LogInfo("Return all trips from database");
                var list = new List<TripDTO>();
                for (int i = 0; i < trips.Count(); i++)
                {
                    list.Add(new TripDTO
                    {
                        Id = trips.ElementAt(i).Id,
                        Name = trips.ElementAt(i).Name,
                        IsDone = trips.ElementAt(i).IsDone,
                        Description = trips.ElementAt(i).Description,
                        User = new UserInfoDTO
                        {
                            Id = trips.ElementAt(i).UserInfo.Id,
                            FirstName = trips.ElementAt(i).UserInfo.FirstName,
                            LastName = trips.ElementAt(i).UserInfo.LastName,
                            Phone = trips.ElementAt(i).UserInfo.Phone,
                            PictureUrl = trips.ElementAt(i).UserInfo.Identity.PictureUrl,
                            FacebookId = trips.ElementAt(i).UserInfo.Identity.FacebookId
                        }
                    });
                }
                return Ok(list);
            }
            catch(Exception ex)
            {
                logger.LogError($"Error occured inside GetAllTripsAction:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [AllowAnonymous]
        [HttpGet("{id}",Name = "GetTrip")]
        public async Task<IActionResult> GetTrip(int id)
        {
            try
            {
                var trip = await unitOfWork.Trips.GetTripByIdAsync(id);
                if (trip == null)
                {
                    logger.LogInfo("TripNotFound");
                    return NotFound();
                }
                logger.LogInfo("Return trip with id=" + id);
                return Ok(new TripDTO { Id = trip.Id, Name = trip.Name, Description = trip.Description,IsDone = trip.IsDone,User = new UserInfoDTO {
                    Id = trip.UserInfo.Id,
                    FirstName = trip.UserInfo.FirstName,
                    LastName = trip.UserInfo.LastName,
                    Phone = trip.UserInfo.Phone,
                    PictureUrl = trip.UserInfo.Identity.PictureUrl,
                    FacebookId = trip.UserInfo.Identity.FacebookId
                } });
            }
            catch(Exception ex)
            {
                logger.LogError($"Error occured inside GetTripAction:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [AllowAnonymous]
        [HttpGet("GetTripWithPosts/{id}", Name = "GetTripWithPost")]
        public async Task<IActionResult> GetTripWithPostBlogs(int id)
        {
            try
            {
                var trip = await unitOfWork.Trips.GetTripByIdAsync(id);
                if (trip == null)
                {
                    logger.LogInfo("TripNotFound");
                    return NotFound();
                }
                trip = unitOfWork.Trips.GetTripWithPostBlogs(id);
                logger.LogInfo("Return trip with postblogs id=" + id);
                var list = new List<PostBlogDTO>();
                for (int i = 0; i < trip.PostBlogs.Count; i++)
                {
                    list.Add(new PostBlogDTO
                    {
                        Id = trip.PostBlogs.ElementAt(i).Id,
                        Name = trip.PostBlogs.ElementAt(i).Name,
                        Plot = trip.PostBlogs.ElementAt(i).Plot,
                        TripId = trip.PostBlogs.ElementAt(i).TripId,
                        DateOfCreation = trip.PostBlogs.ElementAt(i).DateOfCreation
                    });
                }
                return Ok(new TripDetailsDTO(trip) {PostBlogs = list });
            }
            catch (Exception ex)
            {
                logger.LogError($"Error occured inside GetTripAction:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddTripAsync([FromBody]TripDTO model)
        {
            try
            {
                if(model==null)
                {
                    logger.LogError($"Object sent from client is null");
                    return BadRequest("Trip object is null");
                }
                if(!ModelState.IsValid)
                {
                    logger.LogError($"Object state is not valid");
                    return BadRequest("Trip object is invalid");
                }
                var trip = new Trip { Name = model.Name, IsDone = model.IsDone,Description = model.Description };
                var userId = caller.Claims.Single(c => c.Type == "id");
                var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
                trip.UserInfo = user;
                unitOfWork.Trips.Add(trip);
                await unitOfWork.CompleteAsync();
                model.User = new UserInfoDTO {
                    Id = trip.UserInfo.Id,
                    FirstName = trip.UserInfo.FirstName,
                    LastName = trip.UserInfo.LastName,
                    Phone = trip.UserInfo.Phone,
                    PictureUrl = trip.UserInfo.Identity.PictureUrl,
                    FacebookId = trip.UserInfo.Identity.FacebookId
                };
                return Ok(model);
            }
            catch(Exception ex)
            {
                logger.LogError($"Error occured inside AddTripAsync:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var trip = await unitOfWork.Trips.GetTripByIdAsync(id);
                if (trip == null)
                {
                    return NotFound();
                }
                var userid = caller.Claims.Single(c => c.Type == "id");
                var user = await unitOfWork.Users.GetUserByIdentityId(userid.Value);
                if (unitOfWork.Trips.IsUserCreator(user.Id, id)||caller.IsInRole("admin"))
                {
                    unitOfWork.Trips.Remove(trip);
                    await unitOfWork.CompleteAsync();
                    return NoContent();
                }
                return StatusCode(403, "Forbidden");
            }
            catch (Exception ex)
            {
                logger.LogError($"Error occured in DeleteTripAction:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id,[FromBody]TripDTO model)
        {
            try
            {
                if (model == null)
                {
                    logger.LogError($"Object sent from client is null");
                    return BadRequest("Trip object is null");
                }
                if (!ModelState.IsValid)
                {
                    logger.LogError("Invalid object trip recieved from client");
                    return BadRequest("Invalid object sent");
                }
                var trip = await unitOfWork.Trips.GetTripByIdAsync(id);
                if (trip == null)
                {
                    logger.LogError($"Trip with id :{id} has not been found");
                    return NotFound();
                }
                var userid = caller.Claims.Single(c => c.Type == "id");
                var user = await unitOfWork.Users.GetUserByIdentityId(userid.Value);
                if (unitOfWork.Trips.IsUserCreator(user.Id, id)||caller.IsInRole("admin"))
                {
                    trip.Name = model.Name;
                    trip.Description = model.Description;
                    trip.IsDone = model.IsDone;
                    unitOfWork.Trips.Update(trip);
                    await unitOfWork.CompleteAsync();
                    return Ok(new TripDTO { Id = trip.Id, Name = trip.Name, IsDone = trip.IsDone});
                }
                return StatusCode(403, "Forbidden");
            }
            catch(Exception ex)
            {
                logger.LogError($"An error occured UpdateTripAction;{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}