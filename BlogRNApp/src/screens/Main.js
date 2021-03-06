import React from "react";
import { View, ScrollView, Text } from 'react-native';

import { authenticate, getBlogs, isUserAuthenticated } from "../services/service";
import BlogFeed from "../components/BlogFeed";
import Header from "../components/header";
import ZakiActivityIndicator from "zakiactivityindicator";
import CarFeed from "../components/CarFeed";
import { getCars } from '../services/service';
// import TestComponentItem from '../components/TestComponentItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      cars: [],
      loading: true,
    //   students: [
    //     {
    //       id: 1,
    //       registered: false,
    //     },
    //     {
    //       id: 2,
    //       registered: false,
    //     },
    //     {
    //       id: 3,
    //       registered: false,
    //     },
    //   ],
    };
  }

  componentDidMount = async () => {
    const isAuthenticated = await isUserAuthenticated();
    console.log('isAuth', isAuthenticated);
    if (!isAuthenticated) {
      await authenticate('test1', 'test1');
    }
    await this.getBlogsFromApi();
    const cars = await getCars();
    this.setState({ cars, loading: false });
  };

  getBlogsFromApi = async () => {
    const blogs = await getBlogs();
    if (blogs) {
      setTimeout(() => {
        this.setState({ blogs, loading: false });
      }, 1300);
    } else {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1300);
    }
  };

//  THIS WAS JUST FOR DEMO PURPOSE !! 👇👇

//   handleChangeRegistration = studentId => {
//     const { students = [] } = this.state;
//     const modifiedStudents = [];
//     students.map(student => {
//       if (student.id === studentId) {
//         student.registered = !student.registered;
//       }
//       modifiedStudents.push(student);
//     });
//     this.setState({ students: modifiedStudents });
//   };

  render() {
    console.log('props', this.props);
    const { blogs = [], cars = [], loading } = this.state || {};
    const { navigation = {} } = this.props || {};
    console.log("cars", cars)
    let mainJsx = null;
    ///////////////////////////////////////////////////////////////
    /// for demonstration of checklist based on id, to be removed
    ///////////////////////////////////////////////////////////////
    // const { students = [] } = this.state;
    // const testJsx = students.map(student => {
    //   return <TestComponentItem
    //     student={student}
    //     onChangeRegistration={this.handleChangeRegistration}
    //   />
    // });
    ///////////////////////////////////////////////////////////////
    /// END: for demonstration of checklist based on id, to be removed
    ///////////////////////////////////////////////////////////////
    
    if(this.state.loading) {
        return <View style={styles.container}>
                    <ZakiActivityIndicator loading={this.state.loading} />
                    <Text style={{fontSize: 25, color: "#000", fontWeight: "bold"}} >
                        Loading...{'\n\n\n'}Please Wait 😇
                    </Text>
                </View>;
    }
    else {
        if (blogs.length > 0) {
        mainJsx =   <React.Fragment>
                        <Header title="My Blog Feed" onClickAdd={() => { }} navigation={navigation} />
                        {/* <View>{testJsx}</View> */}
                        <CarFeed cars={cars} navigation={navigation} />
                        {/* <BlogFeed blogs={blogs} navigation={navigation} /> */}
                    </React.Fragment>;
        } else {
        mainJsx =   <React.Fragment>
                        <View>
                        <Header title="My Blog Feed" onClickAdd={() => { }} navigation={navigation} />
                        <Text style={{fontSize: 22, color: "#000"}}>No blogs found.</Text>
                        </View>
                    </React.Fragment>;
        }
        return  <View style={styles.container}>
                    {mainJsx}
                </View>;
}
      
    
  }
};

export default Main;

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eee",
    marginTop: 35,
    marginBottom: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
};
