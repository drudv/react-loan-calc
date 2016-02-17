import React from 'react';
import ReactSlider from 'rc-slider';

require('rc-slider/assets/index.css');

const Styles = {
  Root: {},
  Top: {},
  Select: {},
  ReactSliderWrapper: {
  	marginTop: 10,
  	position: 'relative',
  	height: 50
  },
};

export default class Slider extends React.Component {

  static propTypes = {
  	title: React.PropTypes.string.isRequired,
  	value: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    min: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  renderOptions({min, max, step}) {
  	let options = [];
  	for (let value = min; value <= max; value += step) {
  		options.push(
  			<option key={value} value={value}>
  				{value}
  			</option>
  		)
  	}
  	return options;
  }

  render() {
  	let {
  		value, max, min, step, title, onChange
  	} = this.props;
  	return (
  	  <div style={Styles.Root}>
  	  	<div style={Styles.Top}>
  	  		<span style={Styles.Title}>
  	  			{title}
  	  		</span>
  	  		<select style={Styles.Select}
  	  						value={value}
  	  						onChange={
  	  							(event) => 
  	  								onChange(parseInt(event.target.value))
  	  						}>
  	  			{this.renderOptions({min, max, step})}
  	  		</select>
  	  	</div>
  	  	<div style={Styles.ReactSliderWrapper}>
	  	  	<ReactSlider value={value}
	  	  							 min={min}
	  	  							 max={max}
	  	  							 step={step}
	  	  							 onChange={onChange}
	  	  							 style={Styles.ReactSlider} />
	  	  </div>
  	  </div>
  	);
  }

}
