const moment=require('moment');

var moduleTime= function (dateValue) {

    if (isNaN(dateValue)) {
        var naturalDate = moment(dateValue).format("MMMM DD, YYYY");
        var unixDate = new Date(dateValue).getTime() / 1000;
        if (naturalDate == 'Invalid date') {
            naturalDate = null;
            unixDate = null;
            return  {unix: unixDate,natural:naturalDate};
        }
        return  {unix: unixDate,natural:naturalDate};
    }
    else {
        var unixDate = dateValue;
        var naturalDate = moment.unix(dateValue).format("MMMM DD, YYYY");

      return  {unix: unixDate,natural:naturalDate};
    }
}
module.exports=moduleTime;