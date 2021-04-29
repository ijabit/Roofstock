export interface LeaseSummary {
    occupancy: string;
    leasingStatus: null;
    marketedRent: null;
    paymentStatus: null | string;
    leaseStartDate: string;
    leaseEndDate: string;
    monthlyRent: number;
    securityDepositAmount: number | null;
    hasPet: null;
    petFeeAmount: null;
    isPetsDeposit: boolean;
    petsDepositAmount: number | null;
    isLeaseConcessions: boolean | null;
    isRentersInsuranceRequired: boolean;
    isSection8: boolean;
    isTenantBackgroundChecked: boolean;
    isTenantIncomeAbove3x: boolean;
    isTenantMayTerminateEarly: null;
    isTenantPurchaseOption: null;
}