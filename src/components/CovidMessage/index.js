import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary </Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>
      <Text style={styles.learnMore}>
        Learn more <AntDesign name={'arrowright'} size={18} />
      </Text>
    </View>
  );
};

export default CovidMessage;
