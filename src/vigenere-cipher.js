import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct  = direct;
    this.start = 'a'.toUpperCase().charCodeAt(0);
    this.finish = 'z'.toUpperCase().charCodeAt(0);
   }

  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!')

    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(message.length / key.length))
    //key =  'alphon se alphonse'.toUpperCase();
    let x;
    for (let i = 0; i < message.length; i++) {
      x = message[i].charCodeAt(0);
      if (x >= this.start && x <= this.finish) {
        x = message[i].charCodeAt(0) + (key[i].charCodeAt(0) - this.start);
        if (x > this.finish) {
          x = this.start + x - this.finish - 1;
        }
      } else {
        key = key.slice(0, i) + message[i] + key.slice(i)
      }
      result.push(String.fromCharCode(x));
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!')

    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(message.length / key.length))
    //key =  'alphon se alphonse'.toUpperCase();
    let x;
    for (let i = 0; i < message.length; i++) {
      x = message[i].charCodeAt(0);
      if (x >= this.start && x <= this.finish) {
        x = this.start + x - key[i].charCodeAt(0);
        if (x < this.start) {
          x = this.finish - (this.start - x) + 1;
        }
      } else {
        key = key.slice(0, i) + message[i] + key.slice(i)
      }
      result.push(String.fromCharCode(x));
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}
