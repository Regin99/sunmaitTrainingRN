import {SETTINGS_ACTIONS_TYPES} from '../actionTypes';
import {ISettings} from '../types';

const setSettings = (settings: ISettings) => ({
  type: SETTINGS_ACTIONS_TYPES.SET_SETTINGS,
  payload: settings,
});

export default setSettings;
