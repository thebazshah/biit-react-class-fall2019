import React from 'react';
import { ScrollView, View } from 'react-native';

import CarItem from './CarItem';

const CarFeed = props => {
  const { cars = [], navigation = {} } = props || {};
  const blogsJsx = cars.map(car => {
    return <CarItem key={car.id} car={car} navigation={navigation} />;
  });
  console.log('Blog feed props', props)
  return (
    <ScrollView style={styles.blogFeed}>
      {blogsJsx}
    </ScrollView>
  )
}

export default CarFeed;

const styles = {
  blogFeed: {
    width: "95%",
  }
};