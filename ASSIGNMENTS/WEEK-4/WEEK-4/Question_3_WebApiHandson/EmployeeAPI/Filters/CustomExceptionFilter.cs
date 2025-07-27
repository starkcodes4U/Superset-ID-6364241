using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace EmployeeAPI.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var ex = context.Exception;
            var logPath = Path.Combine(Directory.GetCurrentDirectory(), "logs.txt");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {ex.Message}{Environment.NewLine}");

            context.Result = new ObjectResult("Something went wrong.") { StatusCode = 500 };
        }
    }
}
