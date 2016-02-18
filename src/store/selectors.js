'use strict';

import Immutable from 'immutable';
import {createSelector} from 'reselect';
import niceNumber from '../utils/niceNumber';
import defined from '../utils/defined';

const amountSelector = (state) => state.get('amount');
const termSelector = (state) => state.get('term');
const offersSelector = (state) => state.get('offers');
const constraintsSelector = (state) => state.get('constraints');

const offerSelector = createSelector(
  amountSelector,
  termSelector,
  offersSelector,
  (amount, term, offers) =>
    (defined(amount) && defined(term) ?
      offers.getIn([amount.toString(), term.toString()]) : null)
);

export const rootSelector = createSelector(
  amountSelector,
  termSelector,
  offerSelector,
  constraintsSelector,
  (amount, term, offer, constraints) => {
    let result = {
      amount,
      term,
      initialized: !!constraints,
      calculated: !!offer
    };
    if (constraints) {
      const {amount: amountCstr, term: termCstr} = constraints.toJS();
      result = {
        ...result,
        amountDefault: amountCstr.defaultValue,
        amountMax: amountCstr.max,
        amountMin: amountCstr.min,
        amountStep: amountCstr.step,
        termDefault: termCstr.defaultValue,
        termMax: termCstr.max,
        termMin: termCstr.min,
        termStep: termCstr.step
      };
    }
    if (offer) {
      const plain = offer.toJS();
      result = {
        ...result,
        monthlyPayment: niceNumber(plain.monthlyPayment),
        totalCostOfCredit: niceNumber(plain.totalCostOfCredit),
        totalPrincipal: niceNumber(plain.totalPrincipal),
        totalRepayableAmount: niceNumber(plain.totalRepayableAmount)
      };
    }
    return result;
  }
);
