import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PlaceRow = ({data}) => {
  let icon = null;
  if (data.description === 'Home') {
    icon = <Entypo name="home" size={20} color={'white'} />;
  } else if (data.description === 'Work') {
    icon = <Entypo name="briefcase" size={20} color={'white'} />;
  } else {
    icon = <Entypo name="location-pin" size={20} color={'white'} />;
  }

  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;
