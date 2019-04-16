import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { Component } from 'react';

import { formatPrettyDate } from '../components/common';
import { authenticate } from '../services/service';
// import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			userName: '',
			password: ''
		};
	}

	componentDidMount() {
		this.setState({ loading: false });
	}

	render() {
		// const time = new Date(1551484800000);
		// const prettyTime = formatPrettyDate(time);

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.txtInput}
					placeholder={'Username'}
					onChangeText={(txt) => {
						this.setState({ userName: txt });
					}}
				/>
				<TextInput
					style={styles.txtInput}
					placeholder={'Password'}
					secureTextEntry={true}
					onChangeText={(txt) => {
						this.setState({ password: txt });
					}}
				/>
				<Button
					style={styles.btnSubmit}
					onPress={() => {
						if (this.state.userName === '' || this.state.password === '') {
							alert('Please enter your credential');
						} else {
							this.setState({ loading: true });
							authenticate(this.state.userName, this.state.password);
							this.props.navigation.navigate('AppStart');
						}
					}}
					title={'LogIn'}
				/>

				{/* <Text>Last login date: {prettyTime}</Text> */}
			</View>
		);
	}
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		padding: 50
	},
	txtInput: {
		fontSize: 18
    },
    btnSubmit: {
        fontSize: 18
    }
});
