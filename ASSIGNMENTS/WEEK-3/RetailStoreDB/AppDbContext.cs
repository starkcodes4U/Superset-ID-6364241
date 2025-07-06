using Microsoft.EntityFrameworkCore;
using RetailStoreDB.Models;

namespace RetailStoreDB
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=RetailStoreDb.db");
        }

    }
}
