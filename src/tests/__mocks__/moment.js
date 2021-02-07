const moment = require.requireActual('moment');

export default (timesnap = 0) => {
    return moment(timesnap);
}