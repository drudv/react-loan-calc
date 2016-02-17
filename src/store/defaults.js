'use strict';

import Immutable from 'immutable';

export default {
  DEFAULT_STATE: Immutable.fromJS({
  	loaded: false,
    amount: null,
    term: null,
  }),

  CONSTRAINT_URL: 'https://js-developer-second-round.herokuapp.com/api/v1/application/constraints',
  LOAN_OFFER_URL: 'https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer'
};
