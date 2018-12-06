using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TripRepository : Repository<Trip>, ITripRepository
    {
        public TripRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<Trip> GetTripByIdAsync(int tripId)
        {
            return await SingleOrDefaultAsync(t => t.Id.Equals(tripId));
        }

        public IList<Trip> GetAllTripsAsync(PagingModel pageModel, out int total)
        {
            var tripq = ApplicationDbContext.Trips.OrderBy(t => t.Name)
                .ThenBy(x => x.Description).ToList();
            total = tripq.Count();
            var data = tripq.Skip(pageModel.PageSize * (pageModel.PageNumber - 1))
                .Take(pageModel.PageSize);
            return data.ToList();

        }

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }

        public IQueryable<Trip> SearchTrips(Search searchQuery)
        {
            var word = searchQuery.SearchQuery;
            var result = ApplicationDbContext
                .Trips.Where(x => x.Name.ToLower().Contains(word)
                || x.Description.ToLower().Contains(word))
                .Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
                .Take(searchQuery.PageSize);

            return result;
        }

    }
}
