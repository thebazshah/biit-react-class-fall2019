import React from 'react';

const EditBlog = props => {
  const { match = {} } = props;
  const { params = {} } = match;
  const { blogId = null } = params;
  const headingText = blogId === null ? "Add Blog" : "Edit Blog";
  const blogIdText = blogId === null ? "No blogId passed" : "blogId: " + blogId;
  return (
    <React.Fragment>
      <h2>{headingText}</h2>
      <div>{blogIdText}</div>
    </React.Fragment>
  );
};

export default EditBlog;
