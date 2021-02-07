import moment from 'moment'

export default [
    {
        description: "Coffee",
        amount: 475,
        createdAt: 0,
        note: "",
        id: 1
    },

    {
        description: "Rent",
        amount: 130000,
        createdAt: moment(0).subtract(5, 'days').valueOf(),
        note: "",
        id: 2
    },

    {
        description: "Credit card",
        amount: 50000,
        createdAt: moment(0).add(5, 'days').valueOf(),
        note: "",
        id: 3
    }
];