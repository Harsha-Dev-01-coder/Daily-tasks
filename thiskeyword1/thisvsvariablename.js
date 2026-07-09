const city = "Delhi";

const state = {
    city: "Hyderabad",

    show() {
        console.log(city);
        console.log(this.city);
    }
};

state.show();