import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { addCar } from '../services/service';

export default class AddCar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			car: {},
			maker: "",
			model: "",
			year: "2019",
		};
	}

	componentDidMount = () => {
		const { navigation = {} } = this.props || {};
		const car = navigation.getParam('car', {});
		this.setState({ car });
	}

	addNewCar = () => {
		const { maker, model, year } = this.state;
		const { navigation } = this.props;
		const response = addCar(maker, model, year);
		if (response) {
			alert('Car added successfully.');
			navigation.goBack();
		} else {
			alert('Error in adding car.')
		}
	}

	render() {
		const { car = {} } = this.state;
		const headingText = car.id === null ? 'Add Blog' : 'Edit Blog';
		const blogIdText = car.id === null ? 'No blogId passed' : 'blogId: ' + car.id;
		return (
			<React.Fragment>
				{/* <View>
					<Text>{headingText}</Text>
				</View>
				<View>
					<Text>{blogIdText}</Text>
				</View> */}
				<View>
					<TextInput
						style={{
							backgroundColor: '#f4f4f4',
							margin: 10,
							fontSize: 17,
							borderColor: '#000',
							borderWidth: 1,
							borderRadius: 20,
							padding: 10
						}}
						placeholder="Maker"
						value={this.state.maker}
						multiline={true}
						scrollEnabled={true}
						textBreakStrategy={'balanced'}
						onChangeText={maker => this.setState({ maker })}
					/>
					<TextInput
						style={{
							backgroundColor: '#f4f4f4',
							margin: 10,
							fontSize: 17,
							borderColor: '#000',
							borderWidth: 1,
							borderRadius: 20,
							padding: 10
						}}
						value={this.state.model}
						placeholder="Model"
						multiline={true}
						scrollEnabled={true}
						textBreakStrategy={'balanced'}
						onChangeText={model => this.setState({ model })}
					/>
					<TextInput
						style={{
							backgroundColor: '#f4f4f4',
							margin: 10,
							fontSize: 17,
							borderColor: '#000',
							borderWidth: 1,
							borderRadius: 20,
							padding: 10
						}}
						value={this.state.year}
						placeholder="Year"
						multiline={true}
						scrollEnabled={true}
						textBreakStrategy={'balanced'}
						onChangeText={year => this.setState({ year })}
					/>
					<Button
						title={'Submit'}
						onPress={this.addNewCar}
					/>
				</View>
			</React.Fragment>
		);
	}
};

