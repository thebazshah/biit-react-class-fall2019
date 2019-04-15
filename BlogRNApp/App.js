/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { selectAppContainer } from './src/routes';

const loggedIn = false;
const AppContainer = selectAppContainer(loggedIn);

export default AppContainer;
