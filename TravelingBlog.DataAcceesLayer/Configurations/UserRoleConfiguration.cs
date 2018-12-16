using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.HasKey(u => new { u.UserId, u.RoleId });

            builder.HasOne(u => u.Role).WithMany(r => r.UserRoles)
                .HasForeignKey(u => u.RoleId).IsRequired();

            builder.HasOne(u => u.User).WithMany(u => u.UserRoles)
                .HasForeignKey(u => u.UserId).IsRequired();
        }
    }
}