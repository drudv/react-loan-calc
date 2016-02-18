import Immutable from 'immutable';

export default function keyIn() {
  var keySet = Immutable.Set(arguments);
  return function (v, k) {
    return keySet.has(k);
  }
}
