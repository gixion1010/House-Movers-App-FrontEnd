import React, { useState, useEffect  } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView,
  TouchableHighlight,
  ToastAndroid 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, Button } from 'react-native-paper'
const EmployeeData = (navigation) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [image, setImage] = useState(null);
  const [employeeList, setEmployeeList] = useState([]);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCnicChange = (value) => {
    setCnic(value);
  };

  const handleImageChange = (value) => {
    setImage(value);
  };
  const [galleryPermission, setGalleryPermission] = useState(null);
    const [imageUri, setImageUri] = useState(null);
  
    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    const permisionFunction = async () => {

        const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log(imagePermission.status);

        setGalleryPermission(imagePermission.status === 'granted');

        if (imagePermission.status !== 'granted') {
            setToastMsg('Permission for media access needed.');
        }
    }
    useEffect(() => {
        permisionFunction();
    }, []);

    const pick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    }

    const removeImage = () => {
        setImageUri('');
        setToastMsg('Image Removed');
    }
  const handleAddEmployee = () => {
  if(image === ''|| name === '' || phone === '' || (phone.length < 11) || (phone.length > 13) ||cnic === '' || ((cnic.length < 13) || (cnic.length > 13))) {
      alert('Please Fill All the Fields Correctly');
    } else {
      const newEmployee = {
        id: employeeList.length + 1,
        name: name,
        phone: phone,
        cnic: cnic,
        image: imageUri
      };
      setEmployeeList([...employeeList, newEmployee]);
      setName('');
      setPhone('');
      setCnic('');
      setImage(null);
      //setImageUri('');
      alert('Employee Details Added Successfully');
    }
  };

  const handleEditEmployee = (id) => {
    const employee = employeeList.find(emp => emp.id === id);
    setName(employee.name);
    setPhone(employee.phone);
    setCnic(employee.cnic);
    setImage(employee.image);
    setEmployeeList(employeeList.filter(emp => emp.id !== id));
  };

  const handleDeleteEmployee = (id) => {
    setEmployeeList(employeeList.filter(emp => emp.id !== id));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Add Employee</Text>
          <View style={styles.innerContainer}>
                <TouchableHighlight
                    onPress={pick}
                    underlayColor='rgba(0,0,0,0)'
                    onChangeText={handleImageChange}
                >
                    <Avatar.Image
                        size={75}
                        source={{ uri: imageUri }}
                    />
                </TouchableHighlight>
            </View>
            <View style={[styles.innerContainer, { marginTop: 5, flexDirection: 'colomn' }]}>
                <Button
                    mode='contained'
                    onPress={pick}
                    style = {{backgroundColor: '#Bf9000'}}
                >
                    Upload Image
                </Button>
                <Button
                    mode='contained'
                    onPress={() => removeImage()}
                    style={{marginTop : 10, marginBottom : 10 ,backgroundColor: '#Bf9000'}}
                >
                    Remove Image
                </Button>
            </View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={handleNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
          />
          <TextInput
            style={styles.input}
            placeholder="CNIC without dashes e.g:(3250215963863)"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={cnic}
            onChangeText={handleCnicChange}
          />
          
          <TouchableOpacity style={styles.addButton} onPress={handleAddEmployee}>
            <Text style={styles.buttonText}>Add Employee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.employeeListContainer}>
          <Text style={styles.heading}>Employee List</Text>
          {employeeList.map(employee => (
              <View style={styles.employeeCard} key={employee.id}>
              <Avatar.Image
                        size={75}
                        source={{ uri: imageUri }}
                        style = {styles.employeeImage}
              />
              <Text style={styles.employeeName}>Name : {employee.name}</Text>
              <Text style={styles.employeePhone}>Phone# : {employee.phone}</Text>
              <Text style={styles.employeeCnic}>CNIC : {employee.cnic}</Text>
              <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEditEmployee(employee.id)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteEmployee(employee.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              </View>
        </View>
      ))}
    </View>
  </ScrollView>
</KeyboardAvoidingView>
);
};
export default EmployeeData;
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff'
},
scrollContainer: {
flex: 1,
padding: 20
},
innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
formContainer: {
marginBottom: 20
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10
},
input: {
height: 40,
borderColor: '#bf9000',
borderWidth: 1,
borderRadius: 5,
padding: 10,
color:'black',
marginBottom: 10
},
addButton: {
backgroundColor: '#bf9000',
padding: 10,
marginTop : 10, 
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
employeeListContainer: {
marginTop: 20,
marginBottom:20
},
employeeCard: {
borderColor: '#000000',
borderWidth: 1,
backgroundColor: '#bf9000',
padding: 10,
borderRadius: 5,
marginBottom: 10
},
employeeName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5
},
employeeImage:{
  
},
employeePhone: {
fontSize: 16,
marginBottom: 5
},
employeeCnic: {
fontSize: 16,
marginBottom: 10
},
editButton: {
    backgroundColor: '#007cc3',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginRight:5,
},
deleteButton: {
    backgroundColor: 'red',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    padding: 5,
    borderRadius: 5
},
buttonText: {
fontSize: 16,
fontWeight: 'bold',
color: 'black'
}
});
             
