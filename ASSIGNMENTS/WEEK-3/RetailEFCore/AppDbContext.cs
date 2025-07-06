using Microsoft.EntityFrameworkCore;
using RetailEFCore.Models;

namespace RetailEFCore
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=RetailEFCoreDB;Trusted_Connection=True;");

        }

    }
}
