using System;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TripRepository : Repository<Trip>, ITripRepository
    {
        public TripRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<Trip> GetTripByIdAsync(int tripId)
        {
            return await ApplicationDbContext.Trips
                .Include(t => t.UserInfo).ThenInclude(u => u.Identity)
                .Include(t => t.UserInfo).ThenInclude(u => u.Country).SingleOrDefaultAsync(t => t.Id.Equals(tripId));
        }
        public async Task<IEnumerable<Trip>> GetAllTripsAsync(int page,int pagesize)
        {
            var trips = await ApplicationDbContext.Trips
                .Include(t => t.UserInfo).ThenInclude(u => u.Identity)
                .Include(t => t.UserInfo).ThenInclude(u => u.Country)
                .Skip(page*pagesize - pagesize).Take(pagesize)
                .ToListAsync();
            return trips;
        }
        public async Task<IEnumerable<Trip>> GetAllTripsAsync()
        {
            var trips = await ApplicationDbContext.Trips
                .Include(t => t.UserInfo).ThenInclude(u => u.Identity)
                .Include(t => t.UserInfo).ThenInclude(u => u.Country)
                .ToListAsync();
            return trips.OrderBy(t => t.Name);
        }

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }
    }
}
