using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class CountryDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }        
        public string MobCode { get; set; }
    }
}