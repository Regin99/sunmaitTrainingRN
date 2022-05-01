import {SETTINGS_ACTIONS_TYPES} from '../actionTypes';
import {ISettings} from '../types';

const initialState = {
  touchId: false,
  theme: 'light',
  notifications: false,
};

interface ISettingsAction {
  type: string;
  payload: ISettings;
}

const settingsReducer = (state = initialState, action: ISettingsAction) => {
  switch (action.type) {
    case SETTINGS_ACTIONS_TYPES.SET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
