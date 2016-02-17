'use strict';

import Immutable from 'immutable';
import {createSelector} from 'reselect';

const amountSelector = (state) => state.get('amount');
const termSelector = (state) => state.get('term');

export const resultSelector = createSelector(
  amountSelector,
  termSelector,
  (amount, term) => ({
    amount,
    term
  })
);
