﻿using Microsoft.AspNetCore.Identity;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    public class UserRole : IdentityUserRole<string>
    {
        public AppUser User { get; set; }
        public Role Role { get; set; }
    }
}