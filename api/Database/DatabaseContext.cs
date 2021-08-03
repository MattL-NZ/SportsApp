using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
    }
}