import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

// import { App } from '../App';
import Main from './screens/Main';
import EditBlog from './screens/EditBlog';
import Login from './screens/Login';

// const topSwitchNavigator = createSwitchNavigator({
//   LoggedIn: {
//     screen: mainNavigator,
//   },
//   LoggedOut: {
//     screen: loginNavigator,
//   }
// });

const mainNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
  EditBlog: {
    screen: EditBlog,
  },
});

const loginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
});

export const selectAppContainer = loggedIn => {
  if (loggedIn) {
    return createAppContainer(mainNavigator);
  } else {
    return createAppContainer(loginNavigator);
  }
};
