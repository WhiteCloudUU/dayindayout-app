import moment from 'moment'

export const selectOptions = (options, { startDate, endDate, date }) => {
    return options.filter((option) => {
        const createdAtMoment = moment(option.createdAt);
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        const dateMatch = date ? createdAtMoment.isSame(date, 'day') : true;

        return startDateMatch && endDateMatch && dateMatch;
    })
}





