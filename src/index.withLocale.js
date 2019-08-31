const dayjs = require('dayjs')

require('dayjs/locale/th')

//Format date with en locale
console.log("day js DD-MM-YYYY", dayjs('2019-08-01').locale('en').format('DD-MMMM-YYYY'))

//Format date with th
console.log("day js DD-MM-YYYY", dayjs('2019-08-01').locale('th').format('DD-MMMM-YYYY'))

//Find last date in month
console.log(dayjs('2019-08-01').endOf('month').toDate())