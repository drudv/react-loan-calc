'use strict';

import Immutable from 'immutable';

export default {
  DEFAULT_STATE: Immutable.fromJS({
    constraints: null,
    amount: null,
    term: null,
    offers: {},
  }),

  CONSTRAINT_URL: 'https://js-developer-second-round.herokuapp.com/api/v1/application/constraints',
  LOAN_OFFER_URL: 'https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer'
};
