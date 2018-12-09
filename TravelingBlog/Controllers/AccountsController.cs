using System.Threading.Tasks;
using TravelingBlog.Helpers;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.Contracts;
using Microsoft.AspNetCore.Authorization;

namespace TravelingBlog.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;
        private readonly IMapper mapper;

        public AccountsController(UserManager<AppUser> userManager, IMapper mapper, IUnitOfWork unitOfWork)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = mapper.Map<AppUser>(model);

            var result = await userManager.CreateAsync(userIdentity, model.Password);
            

            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            userIdentity = await userManager.FindByNameAsync(userIdentity.UserName);
            await userManager.AddToRoleAsync(userIdentity, "Member");
            unitOfWork.Users.Add(new UserInfo { IdentityId = userIdentity.Id, FirstName = model.FirstName, LastName = model.LastName });
            await unitOfWork.CompleteAsync();

            return new OkObjectResult("Account created");
        }
    }
}