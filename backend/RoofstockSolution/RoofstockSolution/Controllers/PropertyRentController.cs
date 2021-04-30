using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace RoofstockSolution.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PropertyRentController : ControllerBase
    {
        private readonly RoofstockContext _context;

        public PropertyRentController(RoofstockContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("~/properties/{id:int}/rent")]
        public async Task<decimal?> Get(int id)
        {
            var result = await _context.Properties.Include(x => x.Lease).Where(x => x.Id == id).Select(x => x.Lease.LeaseSummary.MonthlyRent).FirstOrDefaultAsync();

            return result;
        }

        [HttpPost]
        [Route("~/properties/{id:int}/rent")]
        public async Task UpdateRent(int id, decimal? updatedRent)
        {
            var property = await _context.Properties.Include(x => x.Lease).Where(x => x.Id == id).FirstOrDefaultAsync();
            if (property?.Lease?.LeaseSummary != null)
            {
                property.Lease.LeaseSummary.MonthlyRent = updatedRent;

                await _context.SaveChangesAsync();
            }
        }
    }
}
