import * as Actions from './actions';
import { bindActionCreators } from 'redux';

export default function mapDispatchToProps(dispatch) {
  let actions = {};
  let ActionCreators = Actions.ActionCreators;
  for (let k in ActionCreators) {
  	if (ActionCreators.hasOwnProperty(k)) {
  		let action = ActionCreators[k];
    	actions[k] = bindActionCreators(action, dispatch);
	}
  }
  return actions;
};