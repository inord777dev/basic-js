import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let rpt = '', rptAd = '';

  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  if (options.addition) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      rptAd += '' + options.addition + (j == additionRepeatTimes - 1 ? '' : additionSeparator);
    }
  }

  let separator = options.separator ? options.separator : '+';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  for (let i = 0; i < repeatTimes; i++) {
    rpt += '' + str + rptAd + (i == repeatTimes - 1 ? '' : separator);
  }

  return rpt;
}
