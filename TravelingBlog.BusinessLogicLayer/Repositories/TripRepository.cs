using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;
using Remotion.Linq.Clauses;
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

        public async Task<IEnumerable<Trip>> GetAllTripsAsync(PagingModel attribute)
        {
            var trips = await FindAllAsync();
            return trips.OrderBy(t => t.Name)
                .ThenBy(x=>x.Description)
                .Skip(attribute.PageSize * (attribute.PageNumber - 1))
                .Take(attribute.PageSize)
                .ToList();
        }

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }

        public IQueryable<Trip> SearchTrips(string search)
        {
            var result = ApplicationDbContext.Trips.Where(x => x.Name.ToLower().Contains(search));

            return result;
        }

        public IEnumerable<Trip> FilterTripsByCountry(string country)
        {
            //var result = ApplicationDbContext.Countries.Where(o => o.Name == country)
            //    .Include(c => c.CountryTrips)
            //    .ThenInclude(m => m.Trip);
           return ApplicationDbContext.Trips.Where(i => i.CountryTrips.Any(t => t.Country.Name == country))
                .ToList();
            //return result.SelectMany(i=>i.CountryTrips).Select(i=>i.Trip).ToList();
        }
    }
}
