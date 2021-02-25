import moment from 'moment'

export const selectOptionsByRange = (options, { startDate, endDate }, propsDate) => {
    return options.filter((option) => {
        const createdAtMoment = moment(option.createdAt);
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        const propsDateMatch = propsDate ? createdAtMoment.isSame(propsDate, 'day') : true;

        return startDateMatch && endDateMatch && propsDateMatch;
    })
}

export const selectOptionsByDate = (options, { date }) => {
    return options.filter((option) => {
        const createdAtMoment = moment(option.createdAt);
        const dateMatch = date ? createdAtMoment.isSame(date, 'day') : true;

        return dateMatch;
    })
}





