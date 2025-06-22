using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        logger1.Log("First log message");

        Logger logger2 = Logger.GetInstance();
        logger2.Log("Second log message");

        if (logger1 == logger2)
        {
            Console.WriteLine("Logger is a Singleton (Only one instance exists).");
        }
        else
        {
            Console.WriteLine("Logger is NOT a Singleton.");
        }
    }
}
