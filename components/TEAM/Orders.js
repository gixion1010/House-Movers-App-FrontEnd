import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from Expo vector icons library
import { AntDesign } from '@expo/vector-icons';
import OrdersRequest from './OrdersRequests'; 
import PendingOrders from './PendingOrders';
import CompletedOrders from './OrdersCompleted'
import TrackingOrder from './TrackOrder';
import OrderDetails from './ViewOrderDetails';
import Chats from './Chats';
const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const OrdersScreen = () => {
  const showHiddenScreen = false;
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
      shifting={true}
      tabBarOptions={{
        activeTintColor: '#bf9000',
        inactiveTintColor: 'grey',
        style: { backgroundColor: '#bf9000' },
        tabBarLabelStyle: {
          fontSize: 7.6,
          fontWeight: 'bold',
        },
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: '#bf9000'
          },
          null,
        ],
      }}
    >
      <Tab.Screen name="Requests" component={OrdersRequest} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={18} /> // Replace with your custom icon or remove the icon to hide it
          ),tabBarBadge: 2 // Set the badge value to a number or any custom content
          , headerShown: false }}/>
      <Tab.Screen name="Pending" component={PendingOrders} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={18} /> // Replace with your custom icon or remove the icon to hide it
          ),tabBarBadge: 'New',
          headerShown: false }}/>
      <Tab.Screen name="Completed" component={CompletedOrders} options={{ tabBarIcon: ({ color, size }) => (
            <AntDesign name="checkcircle" size={18} color={color} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: false }}/>
      <Tab.Screen name="Tracking" component={TrackingOrder} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-shipping" color={color} size={18} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: false }}/> 
      <Tab.Screen name="Details" component={OrderDetails} options={{ tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" size={18} color={color} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: false }}/>
      <Tab.Screen name="Chats" component={Chats} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="comment" size={18} color={color} /> // Replace with your custom icon or remove the icon to hide it
          ),tabBarBadge: 1,
      headerShown: false }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OrdersScreen;
