﻿namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TripDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public string Description { get; set; }
        public int UserInfoId { get; set; }

    }
}
