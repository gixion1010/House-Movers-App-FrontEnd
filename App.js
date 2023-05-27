import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from "./components/GetStarted";
import SignInAs from './components/SignInAs';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import SignInCustomer from './components/USER/SignInCustomer';
import SignUpCustomer from './components/USER/SignUpCustomer';
import SignInTeam from './components/TEAM/SignInTeam';
import SignUpTeam from './components/TEAM/SignUpTeam';
import SignInEmployee from './components/EMPLOYEE/SignInEmployee';
import DrawerContainer from "./components/TEAM/DrawerContainer";
export default function App() {
  const Stack = createNativeStackNavigator();
   return (
     <NavigationContainer independent={true}>
          <Stack.Navigator>
               <Stack.Screen name='Welcome' component={GetStarted} options={{
          title:"WELCOME TO HOUSE MOVERS!",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
               <Stack.Screen name="Sign In As" component={SignInAs} options={{
          headerStyle: {
            backgroundColor: '#BF9000',
            textAlign:"center", 
          },
          headerTintColor: '#000000',
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
              <Stack.Screen name="Customer Sign In" component={SignInCustomer} 
               options={({ navigation }) => ({
            title: 'Customer Sign In',
            headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.replace('Sign In As')} style={{marginLeft: 10}}>
                <Text style={{color: '#000000'}}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Stack.Screen name="Customer Sign Up" component={SignUpCustomer} options={{
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Stack.Screen name="Team Sign In" component={SignInTeam} options={({ navigation }) => ({
            title: 'Team Sign In',
            headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.replace('Sign In As')} style={{marginLeft: 10}}>
                <Text style={{color: '#000000'}}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Team Sign Up" component={SignUpTeam} options={{
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Stack.Screen name="Team Drawer" component={DrawerContainer} options={{ headerShown: false }}/>
          <Stack.Screen name="Employee Sign In" component={SignInEmployee} options={({ navigation }) => ({
            title: 'Employee Sign In',
            headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTitleAlign: "center",
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.replace('Sign In As')} style={{marginLeft: 10}}>
                <Text style={{color: '#000000'}}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}/>
          </Stack.Navigator>
     </NavigationContainer>
   );
}