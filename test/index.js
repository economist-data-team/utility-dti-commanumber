import 'babel-polyfill';
import commaNumber from '../src';
import chai from 'chai';
chai.should();

const testNumbers = [
  [ 0, '0' ],
  [ 4, '4' ],
  [ 4000, '4,000' ],
  [ 40.3, '40.3' ],
  [ -29943, '-29,943' ],
  [ 2319.383, '2,319.383' ],
  [ 358234771566, '358,234,771,566' ],
  [ -358234771566, '-358,234,771,566' ],
  [ NaN, '0' ],
  [ 'a giant fork', '0' ],
  [ '-1034.30', '-1,034.3' ],
];
describe('commaNumber', () => {
  for (const [ n, expected ] of testNumbers) {
    it(`should comma-delimit ${ n } correctly`, () => {
      commaNumber(n).should.equal(expected);
    });
  }
});
