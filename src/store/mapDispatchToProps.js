import * as Actions from './actions';
import { bindActionCreators } from 'redux';

export default function mapDispatchToProps(dispatch) {
  return Object.keys(Actions.ActionCreators).reduce(
    (result, name) => {
      result[name] = bindActionCreators(Actions.ActionCreators[name], dispatch);
      return result;
    }, {});
};
