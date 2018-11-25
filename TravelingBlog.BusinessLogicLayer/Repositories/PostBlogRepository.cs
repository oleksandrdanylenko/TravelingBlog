using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using TravelingBlog.BusinessLogicLayer.Repositories;
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

        public async Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync(ResourseAttribute attribute)
        {
            var postBlogs = await FindAllAsync();
            return postBlogs
                .OrderBy(pb => pb.Name)
                .ThenBy(pb => pb.DateOfCreation)
                .Skip(attribute.PageSize * (attribute.PageNumber -1 ))
                .Take(attribute.PageSize)
                .ToList();
        }

    }
}
