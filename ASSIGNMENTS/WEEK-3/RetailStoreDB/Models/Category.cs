using System.Collections.Generic;   // Required for List<>
using RetailStoreDB.Models;

namespace RetailStoreDB.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }   // This should work fine now
        public List<Product> Products { get; set; }
    }
}
