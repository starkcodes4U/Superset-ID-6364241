using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeJWTApi.Controllers
{
    [Authorize(Roles = "Admin,POC")]
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(new[] { "Aayushi", "Jagannath", "Brahmananda", "Piyush" });
        }
    }
}
