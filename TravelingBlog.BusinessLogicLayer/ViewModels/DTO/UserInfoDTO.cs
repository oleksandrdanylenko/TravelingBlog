using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class UserInfoDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public int? CountryId { get; set; }
        public string PictureUrl { get; set; }
        public long? FacebookId { get; set; }
    }
}
