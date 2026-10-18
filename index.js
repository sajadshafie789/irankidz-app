/**
 * @format
 */
import { I18nManager } from 'react-native';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
I18nManager.forceRTL(true);
// Allow RTL on Android (optional)
I18nManager.allowRTL(true);
AppRegistry.registerComponent(appName, () => App);
