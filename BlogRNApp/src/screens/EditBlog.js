import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const EditBlog = (props) => {
	const { navigation = {} } = props || {};
	const blog = navigation.getParam('blog', {});
	const headingText = blog.id === null ? 'Add Blog' : 'Edit Blog';
	const blogIdText = blog.id === null ? 'No blogId passed' : 'blogId: ' + blog.id;
	return (
		<React.Fragment>
			<View>
				<Text>{headingText}</Text>
			</View>
			<View>
				<Text>{blogIdText}</Text>
			</View>
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
					value={blog.text}
					multiline={true}
					scrollEnabled={true}
					textBreakStrategy={'balanced'}
				/>
				<Button
					title={'Submit'}
					onPress={(txt) => {
						alert('Submit Clicked');
					}}
				/>
			</View>
		</React.Fragment>
	);
};

export default EditBlog;
