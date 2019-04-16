import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// import { App } from '../App';
import Main from './screens/Main';
import EditBlog from './screens/EditBlog';
import Login from './screens/Login';
import AppStart from './screens/AppStart';

const mainNavigator = createStackNavigator({
	Home: {
		screen: Main,
		navigationOptions: {
			header: null
		}
	},
	EditBlog: {
		screen: EditBlog
	}
});

const loginNavigator = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			header: null
		}
	}
});

export const topSwitchNavigator = createSwitchNavigator({
	AppStart: AppStart,
	LoggedOut: loginNavigator,
	LoggedIn: mainNavigator
});

// export const selectAppContainer = loggedIn => {
//   if (loggedIn) {
//     return createAppContainer(mainNavigator);
//   } else {
//     return createAppContainer(loginNavigator);
//   }
// };
