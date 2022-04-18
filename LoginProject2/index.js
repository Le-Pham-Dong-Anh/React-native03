/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DataBidingScreen from './screen/databiding/DataBidingScreen';
import {name as appName} from './app.json';
import NewFeedCreen from './screen/newfeed/NewFeedCreen'
AppRegistry.registerComponent(appName, () => NewFeedCreen);
