import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Pressable, Text} from 'react-native';
import {Auth} from 'aws-amplify';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User Row */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 24, paddingBottom: 5}}>
              Vadim Savin
            </Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>

          {/* Do More */}
          <Pressable
            onPress={() => {
              console.warn('Do more with your account');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>
              Do more with your account
            </Text>
          </Pressable>

          {/* Make money */}
          <Pressable
            onPress={() => {
              console.warn('Make money driving');
            }}>
            <Text style={{color: 'white', paddingVertical: 5}}>
              Make money driving
            </Text>
          </Pressable>
        </View>
      </View>

      <DrawerItemList {...props} />

      <Pressable
        onPress={() => {
          Auth.signOut();
        }}>
        <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
