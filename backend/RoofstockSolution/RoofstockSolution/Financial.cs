using System;

namespace RoofstockSolution
{
    public partial class Financial
    {       
        public decimal? CapRate { get; set; }
        public string Occupancy { get; set; }
        public bool? IsSection8 { get; set; }
        public DateTime? LeaseStartDate { get; set; }
        public DateTime? LeaseEndDate { get; set; }
        public decimal? ListPrice { get; set; }
        public decimal? SalePrice { get; set; }
        public decimal? MarketValue { get; set; }
        public decimal? MonthlyHoa { get; set; }
        public decimal? MonthlyManagementFees { get; set; }
        public decimal? MonthlyRent { get; set; }
        public int? NetYield { get; set; }
        public decimal? TurnOverFee { get; set; }
        public decimal? RehabCosts { get; set; }
        public decimal? RehabData { get; set; }
        public decimal? YearlyInsuranceCost { get; set; }
        public decimal? YearlyPropertyTaxes { get; set; }
        public bool? IsCashOnly { get; set; }        
    }
}