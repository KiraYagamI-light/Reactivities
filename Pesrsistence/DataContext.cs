using Microsoft.EntityFrameworkCore;
using Domain;
 
namespace Pesrsistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Activity> Activties { get; set; }
    }
}