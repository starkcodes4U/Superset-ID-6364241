using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SwaggerDemoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "Alice", "Bob", "Charlie" };
        }
    }
}
