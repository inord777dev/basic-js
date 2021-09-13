import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  result: [],

  getLength() {
    return this.result.length
  },

  addLink(value) {
    this.result.push(value)
    return this;
  },

  removeLink(position) {
    if (!(Number(position) === position && position % 1 === 0)
     || position < 1
     || position > this.result.length )
     {
      this.result.length = 0
      throw new Error('You can\'t remove incorrect link!')
     }
    this.result.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    this.result.reverse()
    return this;
  },

  finishChain() {
    const result = this.result.map( (x, i) => {
      return `( ${x} )${i == this.result.length - 1 ? '' : '~~'}`
    }).join('')
    this.result.length = 0;
    return result;
  }
}
