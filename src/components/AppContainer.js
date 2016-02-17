import {connect} from 'react-redux';
import App from './App';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
