const dayjs = require("dayjs")

//Format date
console.log("Format date DD-MM-YYYY", dayjs('2019-08-01').format('DD-MM-YYYY'))

//Format date
console.log("Format date DD-MMMM-YYYY", dayjs('2019-08-01').format('DD-MMMM-YYYY'))

//Find last date in month
console.log("Last date in August 2019", dayjs('2019-08-01').endOf('month').toDate())