import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ZakiActivityIndicator from 'zakiactivityindicator';
import { isUserAuthenticated } from '../services/service';

class AppStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		isUserAuthenticated()
			.then((isUserAuthenticated) => {
				this.setState({
					loading: false
				});
				this.props.navigation.navigate(isUserAuthenticated ? 'LoggedIn' : 'LoggedOut');
			})
			.catch((err) => {
				console.error(`AUTH_ERR: ${err}`);
			});
	}

	render() {
		return <ZakiActivityIndicator loading={this.state.loading} />;
	}
}

export default AppStart;
