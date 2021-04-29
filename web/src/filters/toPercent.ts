import Vue from "vue";

Vue.filter("toPercent", (value: any, digits?: number) => {
    if (typeof value !== "number") {
        return value;
    }

    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: digits !== null ? digits : 0,
        style: "percent"
    });

    return formatter.format(value);
});