import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn({ navigation, onLogin }) {
  const width = useWindowDimensions().width;

  const [isSignupPage, setisSignupPage] = useState(false);
  const [isUserName, setisUserName] = useState('');
  const [isEmailId, setisEmailId] = useState('');
  const [isPassword, setisPassword] = useState('');

  useEffect(() => {
    
    const loadStoredData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        const userName = await AsyncStorage.getItem('username');
        if (email && password) {
          setisEmailId(email);
          setisPassword(password);
          setisUserName(userName || '');
        }
      } catch (error) {
        console.error('Error loading stored data:', error);
      }
    };
    loadStoredData();
  }, []);

  const handlePage = useCallback(() => {
    clearInputs();
    setisSignupPage((prevPage) => !prevPage);
  }, []);

  const clearInputs = () => {
    setisUserName('');
    setisEmailId('');
    setisPassword('');
  };

  const handleNavigation = async () => {
    if (isSignupPage) {
      if (validateInputs()) {
        try {
         
          await AsyncStorage.setItem('email', isEmailId);
          await AsyncStorage.setItem('password', isPassword);
          await AsyncStorage.setItem('username', isUserName);
          Alert.alert('Success', 'Account created successfully. Please Sign In.');
          clearInputs();
          setisSignupPage(false); 
        } catch (error) {
          Alert.alert('Error', 'Failed to save user data.');
        }
      }
    } else {
     
      if (validateInputs()) {
        try {
          const storedEmail = await AsyncStorage.getItem('email');
          const storedPassword = await AsyncStorage.getItem('password');


          if (!storedEmail || !storedPassword) {
            Alert.alert('No Account Found', 'Please sign up to create an account.');
            return; 
          }

         
          if (storedEmail === isEmailId && storedPassword === isPassword) {
            onLogin();
            clearInputs();
          } else {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
          }
        } catch (error) {
          Alert.alert('Error', 'Failed to validate user data.');
        }
      }
    }
  };



  const validateInputs = () => {
    if (isSignupPage && !isUserName.trim()) {
      Alert.alert('Validation Error', 'Please enter a username');
      return false;
    }
    if (!isEmailId.trim()) {
      Alert.alert('Validation Error', 'Please enter an email address');
      return false;
    }
    if (!isPassword.trim()) {
      Alert.alert('Validation Error', 'Please enter a password');
      return false;
    }
    return true;
  };



  return (
    <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
     <View>
        <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />

        <View style={{ margin: 15, padding: 10, marginTop: 25 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold' }}>
            {isSignupPage ? 'Hello,' : 'Welcome Back,'}
          </Text>
          <Text style={{ fontSize: 35, fontFamily: 'Poppins-Bold' }}>
            {isSignupPage ? 'Sign In' : 'Sign Up'}
          </Text>
        </View>

        <View style={{ justifyContent: 'center', margin: 20 }}>


          {isSignupPage && (
            <>
              <Text style={{ fontSize: 10, textAlign: 'left', marginTop: -10 }}>
                USER NAME
              </Text>
              <View style={[styles.Input, { width: width - 30 }]}>
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder="User name"
                  value={isUserName}
                  onChangeText={(text) => setisUserName(text)}
                />
              </View>
            </>
          )}
          <Text style={{ fontSize: 10, textAlign: 'left', marginTop: 20 }}>
            EMAIL ADDRESS
          </Text>
          <View style={[styles.Input, { width: width - 30 }]}>
            <TextInput
              style={{ marginLeft: 10}}
              placeholder="Email address"
              value={isEmailId}
              textContentType='emailAddress'
              keyboardType='email-addresss'
              returnKeyType='next'
              inputMode='email'
              scrollEnabled='false'
              onChangeText={(text) => setisEmailId(text)}
              
            />
          </View>

          <Text style={{ fontSize: 10, textAlign: 'left', marginTop: 20 }}>
            PASSWORD
          </Text>
          <View style={[styles.Input, { width: width - 30 }]}>
            <TextInput
              style={{ marginLeft: 10 }}
              placeholder="Password"
              secureTextEntry
              value={isPassword}
              textContentType='password'
              onChangeText={(text) => setisPassword(text)}
            />
          </View>
        </View>

        <Text
          style={{
            fontSize: 10,
            textAlign: 'right',
            margin: 10,
            marginTop: -10,
            marginRight: 33,
          }}
        >
          Forget Password?
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30 }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              borderRadius: 30,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleNavigation}
          >
            <Text style={{ textAlign: 'center', fontFamily: 'Inter_18pt-Light' }}>
              {isSignupPage ? 'Sign In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
          <View style={styles.signInContainer}>
            <Text style={styles.slogan}>
              {isSignupPage ? 'Have an account?' : "Don't have an account?"}
            </Text>
            <TouchableOpacity onPress={handlePage}>
              <Text style={{ color: '#465CFF', fontSize: 13 }}>
                {isSignupPage ? 'Sign Up' : 'Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 10,

  },
  slogan: {
    fontSize: 11,
    fontFamily: 'Inter_18pt-ExtraLight',
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
});
