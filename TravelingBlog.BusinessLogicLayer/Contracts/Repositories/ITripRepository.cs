using System.Collections;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        Task<IEnumerable<Trip>> GetAllTripsAsync(PagingModel attribute);
        Task<Trip> GetTripByIdAsync(int tripId);
        bool IsUserCreator(int userId, int tripId);
        Trip GetTripWithPostBlogs(int id);
        IQueryable<Trip> SearchTrips(string search);
        IEnumerable<Country> FilterTripsByCountry(string country);
    }
}
