// import axios from 'axios'
// import history from '../history'
import React from 'react'

const ALERT_INTERACTION = 'ALERT_INTERACTION';

const defaultState = {

  alertStatus: false,
  alertTemplate: null,
}

const alertInteracted = (status, template, customStyles) => ({
  type: ALERT_INTERACTION,
  status,
  template,
  customStyles
});

export const alertInteraction = (
  status,
  template,
  customStyles
) => dispatch => {
  dispatch(alertInteracted(status, status ? template : <div />, customStyles));
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ALERT_INTERACTION:
    return {
      ...state,
      alertStatus: action.status,
      alertTemplate: action.template,
      customStyles: action.customStyles
    };
    default:
      return state
  }
}
