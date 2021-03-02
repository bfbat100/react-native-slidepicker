/*
 * @Author: xuwei
 * @Date: 2021-03-01 15:24:05
 * @LastEditTime: 2021-03-02 10:14:21
 * @LastEditors: xuwei
 * @Description:
 */
import 'react-native-gesture-handler';

import React from 'react';
import {Text, View} from 'react-native';
//导入导航容器
import {NavigationContainer} from '@react-navigation/native';
//导入堆栈导航容器
import {createStackNavigator} from '@react-navigation/stack';
//创建堆栈导航
const Stack = createStackNavigator();

import Picker from '../index';

let App = () => {
  //   <View style={{flex: 1}}>
  //   <Text>aaa</Text>
  // </View>

  // <Picker></Picker>

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          gestureEnabled: false,
          gestureResponseDistance: {
            horizontal: 0,
            vertical: 0,
          },
        }}>
        {/* <Picker></Picker> */}
        <Stack.Screen name="HomeScreen" component={Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

function Test() {
  return (
    <View style={{flex: 1}}>
      <Text>aaa</Text>
    </View>
  );
}
