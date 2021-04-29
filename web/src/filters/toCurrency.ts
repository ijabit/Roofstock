import Vue from "vue";

Vue.filter("toCurrency", (value: any) => {
    if (typeof value !== "number") {
        return value;
    }
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});