using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IAdminService
    {
        dynamic GetUserWithRoles();
    }
}
