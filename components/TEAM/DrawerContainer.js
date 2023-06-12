import * as React from 'react';
import { Text, View,Button, StyleSheet,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HOME from "./Home";
import VehicleData from "./VehicleData";  
import EmployeeData from "./EmployeeData";  
import Orders from "./Orders";
import ProfileAccount from "./ProfileAccount"; 
import SignOut from './SignOut';
const Drawer = createDrawerNavigator();
export default function DrawerContainer(navigation) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation
        screenOptions={{ drawerPosition: 'left' }} initialRouteName="HOME">
        <Drawer.Screen name='Profile Account' component={ProfileAccount} options={{
          title:"Profile Account",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name='HOME' component={HOME} options={{
          title:"Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Vehicle Data' component={VehicleData} options={{
          title:"Vehicle Data",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Employee Data' component={EmployeeData} options={{
          title:"Employee Data",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Orders' component={Orders} options={{
          title:"Orders",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='SignOut' component={SignOut} options={{
          title:"Sign Out",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}