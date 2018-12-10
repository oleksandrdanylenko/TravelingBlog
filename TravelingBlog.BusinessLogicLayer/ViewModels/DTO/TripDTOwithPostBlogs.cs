using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TripDTOWithPostBlogs
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public UserInfoDTO User { get; set; }
        public IEnumerable<PostBlogDTO> PostBlogs {get; set;}
    }
}