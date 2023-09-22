import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },

  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
    marginLeft: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },

  locationText: {
    // fontWeight: 'bold',
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },

  listView: {
    position: 'absolute',
    top: 125,
  },

  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: 15,
    borderRadius: 5,
  },

  line: {
    width: 1,
    height: 40,
    backgroundColor: '#d2d2d2',
    position: 'absolute',
    top: 40,
    left: 16.5,
  },

  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 85,
    left: 15,
  },
});

export default styles;
