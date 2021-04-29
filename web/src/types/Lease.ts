import { ApplianceOwnership } from "./ApplianceOwnership";
import { LeaseSummary } from "./LeaseSummary";
import { UtilitiesOwnership } from "./UtilitiesOwnership";

export interface Lease {
    leaseSummary: LeaseSummary;
    utilitiesOwnership: UtilitiesOwnership;
    applianceOwnership: ApplianceOwnership;
}