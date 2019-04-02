import { AsyncStorage } from 'react-native';
import { isJSXMemberExpression } from '@babel/types';

const baseUrl = "http://localhost:5001";

const getUrl = url => {
  return baseUrl + url;
};

export const authenticate = async (username, password) => {
  const url = getUrl("/Users/Authenticate");
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow',
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const result = await response.json();
  AsyncStorage.setItem('auth', JSON.stringify(result));
  return result;
};

export const isUserAuthenticated = () => {
  const user = JSON.parse(AsyncStorage.getItem('auth'));
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  if (user) {
    return user.token;
  } else {
    return null;
  }
};

export const getBlogs = async () => {
  const url = getUrl("/api/blogs");
  const response = await fetch(url, {
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': "Bearer " + getToken()
    },
    redirect: 'follow'
  });
  const result = await response.json();
  return result;
};

export const users = [
  {
    id: '1',
    username: 'shahbaz',
    fullName: 'Muhammad Shahbaz'
  },
  {
    id: '2',
    username: 'haider',
    fullName: 'Haider Ali'
  }
];

export const blogs = [
  {
    id: '1',
    text: 'Tension between Pakistan and India',
    timestamp: 123,
    userId: '1'
  },
  {
    id: '2',
    text: 'So Quetta wins PSL19...',
    timestamp: 123,
    userId: '1'
  },
  {
    id: '3',
    text: 'Pakistan is playing fair game in CPEC. See what happens.',
    timestamp: 123,
    userId: '2'
  },
  {
    id: '4',
    text: 'Pakistan asks India to become part of CPEC.',
    timestamp: 123,
    userId: '2'
  }
];

export const getUser = id => {
  const filteredUsers = users.filter(user => {
    return user.id === id;
  });
  if (filteredUsers && filteredUsers.length === 1) {
    return filteredUsers[0];
  }
  return null;
};

// export const getBlogs = () => {
//   return blogs;
// };

export const getBlog = id => {
  const filteredBlogs = blogs.filter(blog => {
    return blog.id === id;
  });
  if (filteredBlogs && filteredBlogs.length === 1) {
    return filteredBlogs[0];
  }
  return null;
};

export const getUserBlogs = userId => {
  const filteredBlogs = blogs.filter(blog => {
    return blog.userId === userId;
  });
  if (filteredBlogs && filteredBlogs.length > 0) {
    return filteredBlogs;
  }
  return null;
};
