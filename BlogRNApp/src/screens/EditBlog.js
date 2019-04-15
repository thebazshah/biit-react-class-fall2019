import React from 'react';
import { Text, View } from 'react-native';

const EditBlog = props => {
  const { navigation = {} } = props || {};
  const blog = navigation.getParam('blog', {});
  const headingText = blog.id === null ? "Add Blog" : "Edit Blog";
  const blogIdText = blog.id === null ? "No blogId passed" : "blogId: " + blog.id;
  return (
    <React.Fragment>
      <View>
        <Text>{headingText}</Text>
      </View>
      <View>
        <Text>{blogIdText}</Text>
      </View>
    </React.Fragment>
  );
};

export default EditBlog;
