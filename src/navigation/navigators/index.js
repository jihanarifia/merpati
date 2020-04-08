import { createAppContainer } from 'react-navigation';
import MainTabNavigator from './tab';

const appNavigator = createAppContainer(MainTabNavigator);

export default appNavigator;