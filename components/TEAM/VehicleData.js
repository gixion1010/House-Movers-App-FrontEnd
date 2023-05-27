import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView,TouchableOpacity, StyleSheet } from 'react-native';

const VehicleData = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleManufacturer, setVehicleManufacturer] = useState('');
  const [vehicleRegisterNumber, setVehicleRegisterNumber] = useState('');
  const [loadingCapacity, setLoadingCapacity] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [vehicleList, setVehicleList] = useState([]);
  const addVehicle = () => {
    if (
      vehicleName === '' ||
      vehicleModel === '' ||
      vehicleManufacturer === '' ||
      vehicleRegisterNumber === '' ||
      loadingCapacity === ''
    ) {
      alert('Please enter data in all fields.');
      return;
    }

    const newVehicle = {
      vehicleName,
      vehicleModel,
      vehicleManufacturer,
      vehicleRegisterNumber,
      loadingCapacity,
      vehicleCategory,
    };

    setVehicleList([...vehicleList, newVehicle]);
    // Clear input fields
    setVehicleName('');
    setVehicleModel('');
    setVehicleManufacturer('');
    setVehicleRegisterNumber('');
    setLoadingCapacity('');
    setVehicleCategory("");
  };

  const deleteVehicle = (index) => {
    const updatedList = [...vehicleList];
    updatedList.splice(index, 1);
    setVehicleList(updatedList);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Name:</Text>
          <TextInput
            style={styles.input}
            value={vehicleName}
            onChangeText={setVehicleName}
            clearButtonMode="always"
            keyboardType="Default"
            placeholder='Enter Vehicle Name i.e; FUSO FIGHTER'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Model Year:</Text>
          <TextInput
            style={styles.input}
            value={vehicleModel}
            onChangeText={setVehicleModel}
            clearButtonMode="always"
            keyboardType="numeric"
            placeholder='Enter Moder Year i.e; (1995)'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Manufacturer:</Text>
          <TextInput
            style={styles.input}
            value={vehicleManufacturer}
            onChangeText={setVehicleManufacturer}
            clearButtonMode="always"
            keyboardType="Default"
            placeholder='Enter Manufacturer i.e; Mitsubishi'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Register Number Plate:</Text>
          <TextInput
            style={styles.input}
            value={vehicleRegisterNumber}
            onChangeText={setVehicleRegisterNumber}
            clearButtonMode="always"
            keyboardType="Default"
            placeholder='Enter Vehicle Reg.# i.e; LHR-1234'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Loading Capacity in Kilogrammes/Tonnes:</Text>
          <TextInput
            style={styles.input}
            value={loadingCapacity}
            onChangeText={setLoadingCapacity}
            clearButtonMode="always"
            keyboardType="Default"
            placeholder='Enter Loading Capacity i.e; 1000 kgs'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category Type:</Text>
          <TextInput
            style={styles.input}
            value={vehicleCategory}
            onChangeText={setVehicleCategory}
            placeholder='Enter Type(Truck/Pickup/Rickshaw/Container)'
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={addVehicle}>
          <Text style = {styles.addButtontext}>Add Vehicle </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Vehicle List:</Text>
        {vehicleList.map((vehicle, index) => (
          <View style={styles.vehicleItem} key={index}>
            <Text>{`Name: ${vehicle.vehicleName}`}</Text>
            <Text>{`Model: ${vehicle.vehicleModel}`}</Text>
            <Text>{`Manufacturer: ${vehicle.vehicleManufacturer}`}</Text>
            <Text>{`Register Number: ${vehicle.vehicleRegisterNumber}`}</Text>
            <Text>{`Loading Capacity: ${vehicle.loadingCapacity}`}</Text>
            <Text>{`Category: ${vehicle.vehicleCategory}`}</Text>
            <TouchableOpacity style={styles.buttonContainerdelete} onPress={() => deleteVehicle(index)}>
                <Text style = {styles.deleteButtontext}>Delete</Text>
            </TouchableOpacity>
            
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf9000',
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: 'Black',
    fontWeight:'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 10, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    marginBottom: 20,
  },
  addButtontext:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF9000'
  },
  buttonContainerdelete:{
    backgroundColor: 'red',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  deleteButtontext: { 
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  heading: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  vehicleItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default VehicleData;
