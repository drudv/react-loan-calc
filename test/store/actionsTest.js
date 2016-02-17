/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import {isFSA} from 'flux-standard-action';
import reducer from 'store/reducer';
import {ActionCreators} from 'store/actions';
import defaults from 'store/defaults';

describe('actions', () => {

  it('consist of FSA-compliant set amount action', () => {
    const action = ActionCreators.setAmount(1);
    expect(isFSA(action)).to.be.true;
  });

  it('consist of FSA-compliant set term action', () => {
    const action = ActionCreators.setTerm(1);
    expect(isFSA(action)).to.be.true;
  });

});
