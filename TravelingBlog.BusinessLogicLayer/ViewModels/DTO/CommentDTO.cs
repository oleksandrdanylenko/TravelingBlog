using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class CommentDTO
    {
        public int? Id { get; set; }
        public string Content { get; set; }
        public int? TripId { get; set; }
    }
}
