using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RoofstockSolution.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PropertiesController : ControllerBase
    {
        private readonly RoofstockContext _context;

        public PropertiesController(RoofstockContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Property>> Get()
        {
            var result = await _context.Properties.Include(x => x.Lease.LeaseSummary).ToListAsync();
            return result;
        }
    }
}
