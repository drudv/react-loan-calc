import {connect} from 'react-redux';
import App from './App';
import mapDispatchToProps from '../store/mapDispatchToProps';
import {rootSelector} from '../store/selectors';

export default connect(
  rootSelector,
  mapDispatchToProps
)(App);
