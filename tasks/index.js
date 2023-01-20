import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackNavigator);
