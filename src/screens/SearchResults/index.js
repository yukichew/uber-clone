import React from 'react';
import {Dimensions, View} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useRoute} from '@react-navigation/native';

const SearchResult = () => {
  const route = useRoute(); // this is to get the params from the previous screen
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 450}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResult;
