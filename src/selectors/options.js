import moment from 'moment'

export default (options, { startDate, endDate }) => {
    return options.filter((option) => {
        const createdAtMoment = moment(option.createdAt);
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        
        return startDateMatch && endDateMatch;

    })
}