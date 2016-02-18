import Immutable from 'immutable';
import Defaults from './defaults';
import fetch from 'isomorphic-fetch';

export const ActionTypes = {
  SET_AMOUNT: 'SET_AMOUNT',
  SET_TERM: 'SET_TERM',
  REQUEST_CONSTRAINTS: 'REQUEST_CONSTRAINTS',
  RECEIVE_CONSTRAINTS: 'RECEIVE_CONSTRAINTS',
  REQUEST_OFFER: 'REQUEST_OFFER',
  RECEIVE_OFFER: 'RECEIVE_OFFER'
};

export const ActionCreators = {

  setAmount(amount) {
    return {
      type: ActionTypes.SET_AMOUNT,
      payload: {
        amount: amount
      }
    };
  },

  setTerm(term) {
    return {
      type: ActionTypes.SET_TERM,
      payload: {
        term: term
      }
    };
  },

  setAmountWithOfferUpdate(amount) {
    return (dispatch, getState) => {
      const state = getState();
      const term = state.get('term');
      dispatch(ActionCreators.setAmount(amount));
      if (!state.getIn(['offers', amount.toString(), term.toString()])) {
        dispatch(ActionCreators.fetchOffer(amount, term));
      }
    };
  },

  setTermWithOfferUpdate(term) {
    return (dispatch, getState) => {
      const state = getState();
      const amount = state.get('amount');
      dispatch(ActionCreators.setTerm(term));
      if (!state.getIn(['offers', amount.toString(), term.toString()])) {
        dispatch(ActionCreators.fetchOffer(amount, term));
      }
    };
  },

  requestConstraints() {
    return {
      type: ActionTypes.REQUEST_CONSTRAINTS,
    }
  },

  requestOffer() {
    return {
      type: ActionTypes.REQUEST_OFFER,
    }
  },

  receiveConstraints(constraints) {
    return {
      type: ActionTypes.RECEIVE_CONSTRAINTS,
      payload: {
        constraints
      }
    }
  },

  receiveOffer(amount, term, offer) {
    return {
      type: ActionTypes.RECEIVE_OFFER,
      payload: {
        amount, term, offer
      }
    }
  },

  fetchConstraints() {
    return dispatch => {
      dispatch(ActionCreators.requestConstraints());
      return fetch(Defaults.CONSTRAINT_URL)
        .then(req => req.json())
        .then(json => dispatch(ActionCreators.receiveConstraints(json)));
    }
  },

  fetchOffer(amount, term) {
    return dispatch => {
      dispatch(ActionCreators.requestOffer(amount, term));
      return fetch(`${Defaults.LOAN_OFFER_URL}?amount=${amount}&term=${term}`)
        .then(req => req.json())
        .then(json => dispatch(ActionCreators.receiveOffer(amount, term, json)));
    }
  }

};
