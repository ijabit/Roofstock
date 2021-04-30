using System;

namespace RoofstockSolution
{
    public partial class Valuation
    {        
        public decimal? AvmBpiValue { get; set; }
        public decimal? AvmBpoAdjValue { get; set; }
        public DateTime? AvmBpoDate { get; set; }
        public decimal? RsAvmValue { get; set; }
        public DateTime? RsAvmDate { get; set; }
        public decimal? RsBpoMergeValue { get; set; }
    }
}