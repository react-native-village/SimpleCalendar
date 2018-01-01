const locale = {
  name: 'ru',
  config: {
    months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    monthsShort: 'Янв_Фев_Мрт_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
    weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
    weekdaysShort: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY LT',
      LLLL: 'dddd D MMMM YYYY LT'
    },
    calendar: {
      sameDay: '[Hoje] LT',
      nextDay: '[Amanhã] LT',
      nextWeek: 'dddd [para] LT',
      lastDay: '[Ontem no] LT',
      lastWeek: 'dddd [passado para] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'une année',
      yy: '%d années'
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'ème')
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M'
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD'
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
  }
}

export default locale
