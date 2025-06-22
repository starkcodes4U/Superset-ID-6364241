using System;

class Program
{
    static void Main(string[] args)
    {
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Notebook", "Stationery"),
        };

        Console.WriteLine("🔍 LINEAR SEARCH:");
        string searchName = "Smartphone";
        var linearResult = SearchAlgorithms.LinearSearch(products, searchName);
        Console.WriteLine(linearResult != null ? $"Found: {linearResult}" : "Product not found");

        // Sort for Binary Search (by ProductName)
        Array.Sort(products, (p1, p2) => string.Compare(p1.ProductName, p2.ProductName));

        Console.WriteLine("\n🔍 BINARY SEARCH:");
        var binaryResult = SearchAlgorithms.BinarySearch(products, searchName);
        Console.WriteLine(binaryResult != null ? $"Found: {binaryResult}" : "Product not found");
    }
}
