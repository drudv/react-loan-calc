import {ActionTypes} from './actions';
import Defaults from './defaults';

function applyConstraints({initial, min, max, defaultValue, step}) {
	if (initial >= min && initial <= max) {
		return initial;
	}
	return defaultValue;
}

function saveConstraints(state, constraints) {
	let {amountInterval, termInterval} = constraints;
	let amount = state.get('amount');
	let term = state.get('term');
	return state.withMutations(state => {
		state.set('amountDefault', amountInterval.defaultValue);
		state.set('amountMax', amountInterval.max);
		state.set('amountMin', amountInterval.min);
		state.set('amountStep', amountInterval.step);
		state.set('termDefault', termInterval.defaultValue);
		state.set('termMax', termInterval.max);
		state.set('termMin', termInterval.min);
		state.set('termStep', termInterval.step);
		state.set('amount', applyConstraints({
			...amountInterval,
			initial: amount
		}));
		state.set('term', applyConstraints({
			...termInterval,
			initial: term
		}));
		state.set('loaded', true);
	});
}

function saveOffer(state, offer) {
	return state.withMutations(state => {
		state.set('monthlyPayment', offer.monthlyPayment);
		state.set('paymentTerm', offer.term);
		state.set('totalCostOfCredit', offer.totalCostOfCredit);
	});	
}

export default function(state = Defaults.DEFAULT_STATE, action) {
	console.log('action.type', action.type, action.payload);
  switch (action.type) {
  case ActionTypes.SET_AMOUNT:
  	return state.set('amount', action.payload.amount);
  case ActionTypes.SET_TERM:
  	return state.set('term', action.payload.term);
  case ActionTypes.RECEIVE_CONSTRAINTS:
  	return saveConstraints(state, action.payload.constraints);
  case ActionTypes.RECEIVE_OFFER:
  	return saveOffer(state, action.payload.offer);
  }
  return state;
}
