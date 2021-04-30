using System;

namespace RoofstockSolution
{
    public partial class LeaseSummary
    {
        public string Occupancy { get; set; }
        public string LeasingStatus { get; set; }
        public decimal? MarketedRent { get; set; }
        public string PaymentStatus { get; set; }
        public DateTime? LeaseStartDate { get; set; }
        public DateTime? LeaseEndDate { get; set; }
        public decimal? MonthlyRent { get; set; }
        public decimal? SecurityDepositAmount { get; set; }
        public bool? HasPet { get; set; }
        public decimal? PetFeeAmount { get; set; }
        public bool? IsPetsDeposit { get; set; }
        public decimal? PetsDepositAmount { get; set; }
        public bool? IsLeaseConcessions { get; set; }
        public bool? IsRentersInsuranceRequired { get; set; }
        public bool? IsSection8 { get; set; }
        public bool? IsTenantBackgroundChecked { get; set; }
        public bool? IsTenantIncomeAbove3x { get; set; }
        public bool? IsTenantMayTerminateEarly { get; set; }
        public bool? IsTenantPurchaseOption { get; set; }
    }
}