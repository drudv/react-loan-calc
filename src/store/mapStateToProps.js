export default function mapStateToProps(state) {
  return {
  	loaded: state.get('loaded'),
  	amount: state.get('amount'),
  	amountMin: state.get('amountMin'),
  	amountMax: state.get('amountMax'),
  	amountStep: state.get('amountStep'),
  	term: state.get('term'),
  	termMin: state.get('termMin'),
  	termMax: state.get('termMax'),
  	termStep: state.get('termStep'),

	monthlyPayment: state.get('monthlyPayment'),
	paymentTerm: state.get('paymentTerm'),
	totalCostOfCredit: state.get('totalCostOfCredit')

  };
};