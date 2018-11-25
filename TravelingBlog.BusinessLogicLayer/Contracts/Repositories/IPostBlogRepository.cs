using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using System.IO;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync(ResourseAttribute attribute);
        Task<PostBlog> GetPostBlogByIdAsync(int postBlogId);
    }
}
