import React from 'react';

const Styles = {
  Root: {
  	display: 'flex',
  },
  Title: {
  	fontWeight: 'bold',
  	flexBasis: '50%',
  	flexGrow: 0,
  	flexShrink: 0
  },
  Value: {
  	flexBasis: '50%',
  	flexGrow: 0,
  	flexShrink: 0
  }
};

export default class Detail extends React.Component {

  static propTypes = {
  	title: React.PropTypes.string.isRequired,
  	value: React.PropTypes.number.isRequired
  };

  render() {
  	let {
  		title, value
  	} = this.props;
  	if (value % 1 !== 0) {
	  	value = parseFloat(value).toFixed(2);
  	}
  	return (
  		<div style={Styles.Root}>
  			<div style={Styles.Title}>
  				{title}
  			</div>
  			<div style={Styles.Value}>
  				{value}
  			</div>
  		</div>
  	)
  }

}