<template>
    <div>
        <v-card>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="properties"
                class="elevation-1"
                pagination.sync="pagination"
                item-key="id"
                :loading="isLoading"
                :search="search"
                single-expand
                :expanded.sync="expandedItems"
                show-expand
            >
                <template v-slot:[`item.address.address1`]="{ item }">
                    <template v-if="item.address">
                        {{ `${item.address.address1} ${item.address.address2 || ""}` }}<br>
                        {{ `${item.address.city}, ${item.address.state} ${item.address.zip}` }}
                    </template>
                </template>
                <template v-slot:[`item.financial.listPrice`]="{ item }">
                    <template v-if="item.financial">{{ item.financial.listPrice | toCurrency }}</template>
                </template>
                <template v-slot:[`item.lease.leaseSummary.monthlyRent`]="{ item }">
                    <template v-if="item.lease">{{ item.lease.leaseSummary.monthlyRent | toCurrency }}</template>
                </template>
                <template v-slot:[`item.financial.grossYield`]="{ item }">
                    <template v-if="item.financial && item.lease">{{
                      (item.lease.leaseSummary.monthlyRent * 12 / item.financial.listPrice) | toPercent(2)
                    }}</template>
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <v-card
                            class="mx-auto my-12"
                            max-width="374"
                        >
                            <v-img
                                v-if="item.mainImageUrl !== null"
                                height="250"
                                :src="item.mainImageUrl"
                            ></v-img>

                            <v-card-title>{{ `${item.address.address1} ${item.address.address2 || ""}` }}<br>
                                {{ `${item.address.city}, ${item.address.state} ${item.address.zip}` }}</v-card-title>
                            <v-card-text>
                                <div
                                    v-if="item.status == 'OffMarket'"
                                    class="my-4 subtitle-1"
                                >
                                    Off Market
                                </div>
                                <div
                                    v-else
                                    class="my-4 subtitle-1"
                                >
                                    Lorem ipsum
                                </div>

                                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>

                            <v-card-title v-if="item.financial && item.lease">Financial</v-card-title>

                            <v-card-text v-if="item.financial && item.lease">
                                List Price ${{ item.financial.listPrice.toFixed(2) }} <br>
                                Monthly Rent ${{ item.lease.leaseSummary.monthlyRent.toFixed(2) }}
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    color="deep-purple lighten-2"
                                    text
                                >
                                    Invest
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </td>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script lang="ts">
import { DataTableHeader } from "vuetify";
import Vue from "vue";
import { Property } from "@/types/Property";

export default Vue.extend({
    created() {
        fetch(
            // "https://samplerspubcontent.blob.core.windows.net/public/properties.json"
            "https://localhost:44316/properties"
        )
            .then((response) => {
                if (!response.ok) {
                    this.dataFetchErrorMessage = response.statusText;
                    return;
                }

                response.json().then((json) => {
                    this.properties = json.properties;
                    this.isLoading = false;
                });
            })
            .catch(this.errorHandler);
    },
    data() {
        return {
            dataFetchErrorMessage: "",
            expandedItems: [] as Property[],
            isLoading: true,
            properties: [] as Property[],
            search: "",
        };
    },
    computed: {
        headers(): DataTableHeader[] {
            const headers = [
                {
                    sortable: true,
                    text: "Address",
                    value: "address.address1",
                },
                {
                    sortable: true,
                    text: "Year Built",
                    value: "physical.yearBuilt",
                },
                {
                    sortable: true,
                    text: "List Price",
                    value: "financial.listPrice",
                },
                {
                    sortable: true,
                    text: "Monthly Rent",
                    value: "lease.leaseSummary.monthlyRent",
                },
                {
                    sortable: true,
                    text: "Gross Yield %",
                    value: "financial.grossYield",
                },
                { text: "", value: "data-table-expand" },
            ] as DataTableHeader[];

            return headers;
        }
    },
    methods: {
        errorHandler(response: any) {
            this.dataFetchErrorMessage = response.message;
        },
    },
    watch: {
        dataFetchErrorMessage(newValue: string) {
            console.error(newValue);
        },
    },
});
</script>
