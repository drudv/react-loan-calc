import {ActionTypes} from './actions';
import Defaults from './defaults';

function applyConstraints({initial, min, max, defaultValue, step}) {
  if (initial >= min && initial <= max) {
    return initial;
  }
  return defaultValue;
}

function saveConstraints(state, constraints) {
  const {amountInterval, termInterval} = constraints;
  const amount = state.get('amount');
  const term = state.get('term');
  return state.withMutations(state => {
    state.mergeDeep({
      constraints: {
        amount: {
          defaultValue: amountInterval.defaultValue,
          max: amountInterval.max,
          min: amountInterval.min,
          step: amountInterval.step
        },
        term: {
          defaultValue: termInterval.defaultValue,
          max: termInterval.max,
          min: termInterval.min,
          step: termInterval.step
        }
      }
    });
    state.set('amount', applyConstraints({
      ...amountInterval,
      initial: amount
    }));
    state.set('term', applyConstraints({
      ...termInterval,
      initial: term
    }));
  });
}

function saveOffer(state, amount, term, offer) {
  return state.mergeDeep({
    'offers': {
      [amount]: {
        [term]: {
          monthlyPayment: offer.monthlyPayment,
          totalCostOfCredit: offer.totalCostOfCredit,
          totalPrincipal: offer.totalPrincipal,
          totalRepayableAmount: offer.totalRepayableAmount
        }
      }
    }
  });
}

export default function(state = Defaults.DEFAULT_STATE, action) {
  switch (action.type) {
  case ActionTypes.SET_AMOUNT:
    return state.set('amount', action.payload.amount);
  case ActionTypes.SET_TERM:
    return state.set('term', action.payload.term);
  case ActionTypes.RECEIVE_CONSTRAINTS:
    return saveConstraints(state, action.payload.constraints);
  case ActionTypes.RECEIVE_OFFER:
    return saveOffer(
      state,
      action.payload.amount,
      action.payload.term,
      action.payload.offer
    );
  }
  return state;
}
