using System.Linq;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class PostBlogRepository : Repository<PostBlog>, IPostBlogRepository
    {
        public PostBlogRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<PostBlog> GetPostBlogByIdAsync(int postBlogId)
        {
            return await SingleOrDefaultAsync(c => c.Id.Equals(postBlogId));
        }

        public async Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync(PagingModel attribute)
        {

            var postBlogs = await FindAllAsync();

            return postBlogs
                .OrderBy(pb => pb.Name)
                .ThenBy(pb => pb.Id)
                .ThenBy(pb => pb.DateOfCreation)
                .Skip(attribute.PageSize * (attribute.PageNumber - 1))
                .Take(attribute.PageSize)
                .ToList();
        }

        public IQueryable<PostBlog> SearchBlog(PagingModel attribute)
        {
            var result = ApplicationDbContext.PostBlogs.Where(x =>
                x.Name.ToLower().Contains(attribute.SearchQuery) || x.Plot.ToLower().Contains(attribute.SearchQuery))
                .Skip(attribute.PageSize * (attribute.PageNumber - 1))
                .Take(attribute.PageSize);

            return result;
        }

    }
}
