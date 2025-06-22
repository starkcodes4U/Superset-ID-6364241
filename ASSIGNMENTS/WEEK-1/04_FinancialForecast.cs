using System;

class Program
{
    // Recursive method to calculate future value
    static double PredictFutureValue(double presentValue, double growthRate, int years)
    {
        if (years == 0)
            return presentValue;

        return PredictFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Optimized version using memoization
    static double PredictFutureValueMemo(double presentValue, double growthRate, int years, double[] memo)
    {
        if (years == 0)
            return presentValue;

        if (memo[years] != 0)
            return memo[years];

        memo[years] = PredictFutureValueMemo(presentValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    static void Main(string[] args)
    {
        double presentValue = 10000;
        double annualGrowthRate = 0.08; 
        int years = 10;

        Console.WriteLine("📈 Financial Forecast Using Recursion:");
        double futureValue = PredictFutureValue(presentValue, annualGrowthRate, years);
        Console.WriteLine($"Future value after {years} years: ₹{futureValue:F2}");

        Console.WriteLine("\n⚡ Optimized Forecast Using Memoization:");
        double[] memo = new double[years + 1];
        double optimizedValue = PredictFutureValueMemo(presentValue, annualGrowthRate, years, memo);
        Console.WriteLine($"Future value after {years} years (memoized): ₹{optimizedValue:F2}");
    }
}
