import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!'
  try {
    if (date instanceof Date && !isNaN(date)) {
      const month = date.getMonth();
      if (month < 2 || month == 11)
        return "winter"
      else if (month < 5)
        return "spring"
      else if (month < 8)
        return "summer"
      else if (month < 11)
        return "autumn"
    } else {
      throw ''
    }
  }
  catch {
    throw new Error('Invalid date!')
  }
}
