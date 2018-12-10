using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Controllers
{
    [Route("api/admin")]
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly ILoggerManager _logger;

        public AdminController(ApplicationDbContext context, UserManager<AppUser> userManager, ILoggerManager logger)
        {
            _context = context;
            _userManager = userManager;
            _logger = logger;
        }
        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            try
            {
                var userList = await (from user in _context.UserInfoes
                                      join app in _context.Users
                                      on user.IdentityId equals app.Id
                                      orderby app.UserName
                                      select new
                                      {
                                          app.Id,
                                          app.UserName,
                                          Roles = (from approle in app.UserRoles
                                                   join role in _context.Roles
                                                   on approle.RoleId equals role.Id
                                                   select role.Name)
                                      }).ToListAsync();
                return Ok(userList);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured inside GetUsersWithRolesAction:{ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("editUserRoles/{userName}")]
        public async Task<IActionResult> EditUserRoles(string userName, RoleEditDTO roleEditDTO)
        {
            var user = await _userManager.FindByNameAsync(userName);

            var userRoles = await _userManager.GetRolesAsync(user);

            var selectedRoles = roleEditDTO.RoleNames;

            selectedRoles = selectedRoles ?? new string[] { };

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));
            if (!result.Succeeded)
            {
                return BadRequest("Failed to add to roles");
            }

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));
            if (!result.Succeeded)
            {
                return BadRequest("Failed to remove the roles");
            }

            return Ok(await _userManager.GetRolesAsync(user));
        }
    }
}
