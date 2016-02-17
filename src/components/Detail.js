import React from 'react';
import niceNumber from '../utils/niceNumber';

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
    const {
      title, value
    } = this.props;
    return (
      <div style={Styles.Root}>
        <div style={Styles.Title}>
          {title}
        </div>
        <div style={Styles.Value}>
          {niceNumber(value)}
        </div>
      </div>
    );
  }

}
