require('normalize.css');
require('styles/App.css');

import React from 'react';
import Slider from './Slider';
import Detail from './Detail';

const Styles = {
  Root: {},
  Offer: {}
};

export default class App extends React.Component {

  static propTypes = {
    amount: React.PropTypes.number,
    term: React.PropTypes.number,
    amountDefault: React.PropTypes.number,
    amountMax: React.PropTypes.number,
    amountMin: React.PropTypes.number,
    amountStep: React.PropTypes.number,
    termDefault: React.PropTypes.number,
    termMax: React.PropTypes.number,
    termMin: React.PropTypes.number,
    termStep: React.PropTypes.number,

    setTerm: React.PropTypes.func.isRequired,
    setAmount: React.PropTypes.func.isRequired,
    setAmountWithOfferUpdate: React.PropTypes.func.isRequired,
    setTermWithOfferUpdate: React.PropTypes.func.isRequired,
    fetchConstraints: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchConstraints();
  }

  renderLoading() {
    // TODO: implement something reasonable
    return (
      <div>
        Loading...
      </div>
    );
  }

  renderOffer() {
    const {
      totalCostOfCredit, monthlyPayment,
      totalPrincipal, totalRepayableAmount
    } = this.props;
    if (!this.props.calculated) {
      return (
        <div>
          Calculating...
        </div>
      );
    }
    return (
      <div style={Styles.Offer}>
        <Detail title="Monthly Payment"
                value={monthlyPayment} />
        <Detail title="Total Principal"
                value={totalPrincipal} />
        <Detail title="Total Repayable Amount"
                value={totalRepayableAmount} />
        <Detail title="Total Cost of Credit"
                value={totalCostOfCredit} />
      </div>
    );
  }

  render() {

    if (!this.props.initialized) {
      return this.renderLoading();
    }

    const {
      amount, amountMin, amountMax, amountStep, setAmountWithOfferUpdate,
      term, termMin, termMax, termStep, setTermWithOfferUpdate,
      ...props
    } = this.props;

    return (
      <div style={Styles.Root}>
        <Slider title="Amount"
                value={amount}
                min={amountMin}
                max={amountMax}
                step={amountStep}
                onChange={setAmountWithOfferUpdate} />
        <Slider title="Term (in months)"
                value={term}
                min={termMin}
                max={termMax}
                step={termStep}
                onChange={setTermWithOfferUpdate} />
        {this.renderOffer()}
      </div>
    );
  }
};
