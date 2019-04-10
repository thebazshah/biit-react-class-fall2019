import { AsyncStorage } from "react-native";
// import axios from 'axios';

// const baseUrl = "https://localhost:5001";

// const getUrl = url => {
//   return baseUrl + url;
// };

// export const authenticate = async (username, password) => {
//   const url = getUrl("/Users/Authenticate");
//   console.log('url', url)
//   const authInfo = { username, password };
//   console.log("authInfo", authInfo);

//   // axios.post(url, authInfo)
//   //   .then(function (response) {
//   //     console.log('axios response', response);
//   //   })
//   //   .catch(function (error) {
//   //     console.log('axios error', error);
//   //   });

//   const response = fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     redirect: "follow",
//     body: JSON.stringify(authInfo)
//   }).then(data => {
//     console.log("success data", data)
//   }).catch(error => {
//     console.log("error", error)
//   });
//   console.log('response', response)
//   const result = await response.json();
//   AsyncStorage.setItem('auth', JSON.stringify(result));
//   return result;
// };

export const isUserAuthenticated = async () => {
  const authInfo = await AsyncStorage.getItem("auth");
  const user = JSON.parse(authInfo);
  console.log("user", user);
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const authenticate = (username, password) => {
  const user = {
    id: "1",
    username: "shahbaz",
    fullName: "Muhammad Shahbaz"
  };
  AsyncStorage.setItem('auth', JSON.stringify(user));
  return true;
};

export const getBlogs = () => {
  return blogs;
};

export const getBlog = blogId => {
  const blog = blogs.filter(b => {
    b.id === blogId
  });
  if (blog && blog.length > 0) {
    return blog[0];
  } else {
    return null;
  }
};

export const getUser = async userId => {
  const userJson = await AsyncStorage.getItem('auth');
  if (userJson) {
    const user = JSON.parse(userJson);
    return user;
  } else return null;
};

// export const getToken = async () => {
//   const authInfo = await AsyncStorage.getItem("auth");
//   const user = JSON.parse(authInfo);
//   if (user) {
//     return user.token;
//   } else {
//     return null;
//   }
// };

// export const getBlogs = async () => {
//   const url = getUrl("/api/blogs");
//   const token = await getToken();
//   const response = await fetch(url, {
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//       'Authorization': "Bearer " + token
//     },
//     redirect: 'follow'
//   });
//   const result = await response.json();
//   console.log('result', result);
//   return result;
// };

// export const getUser = id => {
//   const filteredUsers = users.filter(user => {
//     return user.id === id;
//   });
//   if (filteredUsers && filteredUsers.length === 1) {
//     return filteredUsers[0];
//   }
//   return null;
// };

// export const getBlogs = () => {
//   return blogs;
// };

// export const getBlog = id => {
//   const filteredBlogs = blogs.filter(blog => {
//     return blog.id === id;
//   });
//   if (filteredBlogs && filteredBlogs.length === 1) {
//     return filteredBlogs[0];
//   }
//   return null;
// };

// export const getUserBlogs = userId => {
//   const filteredBlogs = blogs.filter(blog => {
//     return blog.userId === userId;
//   });
//   if (filteredBlogs && filteredBlogs.length > 0) {
//     return filteredBlogs;
//   }
//   return null;
// };

// postData = async (url, data) => {
//   try {
//     const token = await this.fetchToken();
//     const response = await fetch(url, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-access-token": token
//       },
//       redirect: "follow",
//       referrer: "no-referrer",
//       body: JSON.stringify(data)
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
//   return null;
// };

// getData = async url => {
//   try {
//     const token = await this.fetchToken();
//     const options = {
//       method: "GET",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-access-token": token
//       },
//       redirect: "follow",
//       referrer: "no-referrer"
//     };

//     const response = await fetch(url, options);
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }

//   return null;
// };



export const users = [
  {
    id: "1",
    username: "shahbaz",
    fullName: "Muhammad Shahbaz"
  },
  {
    id: "2",
    username: "haider",
    fullName: "Haider Ali"
  }
];

export const blogs = [
         {
           id: "1",
           text:
             "Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. Tension between Pakistan and India. ",
           timestamp: 123,
           userId: "1"
         },
         {
           id: "2",
           text: "So Quetta wins PSL19...",
           timestamp: 123,
           userId: "1"
         },
         {
           id: "3",
           text:
             "Pakistan is playing fair game in CPEC. See what happens.",
           timestamp: 123,
           userId: "2"
         },
         {
           id: "4",
           text:
             "Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. Pakistan asks India to become part of CPEC. ",
           timestamp: 123,
           userId: "2"
         }
       ];
