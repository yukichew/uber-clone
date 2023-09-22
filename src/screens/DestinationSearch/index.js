import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};

const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    // when originPlace and destinationPlace have data
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  }, [originPlace, destinationPlace]);

  return (
    // SafeAreaView is to avoid the notch
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false} // this is to remove the powered by google logo
          suppressDefaultStyles // this is to override the default styles
          userLocation={true} // this is to show the current location
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBPfQTjbshG3vtMCAL5_u4HiUTr7D-0uDo',
            language: 'en',
          }}
          currentLocation={true}
          currentLocationLabel="Current Location"
          renderRow={data => <PlaceRow data={data} />} // this is to override the default row
          renderDescription={data => data.description || data.vicinity} // this is to override the default description
          predefinedPlaces={[homePlace, workPlace]} // this is to add predefined places
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 60},
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBPfQTjbshG3vtMCAL5_u4HiUTr7D-0uDo',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input  */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Circle near Destination input  */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
