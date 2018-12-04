using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync(PagingModel attribute);
        IQueryable<PostBlog> SearchBlog(Search searchQuery);
        Task<PostBlog> GetPostBlogByIdAsync(int postBlogId);
    }
}
