import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';



const options = ['Orders', 'Wishlist', 'Coupons', 'Help Center']

const Profile = ({ navigation, onLogout }) => {
  const { width, height } = useWindowDimensions();
  // console.log(width)

  const handleOptions = (item) => {
    { console.log(item) }
    if (item === 'Orders') {
      navigation.navigate('Orders')
    }
    if (item === 'Wishlist') {
      navigation.navigate()
    }
    if (item === 'Coupons') {
      // navigation.navigate()
    }
    if (item === 'Help Center') {
      // navigation.navigate()
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear()
      Alert.alert('Logged Out', 'You have been logged out.');
      onLogout()
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  const [isUserData, setisUserData] = useState({
    userName: null,
    email: null,
    password: null,
  })

  const loadStoredData = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      const userName = await AsyncStorage.getItem('username');

      if (email || password || userName) {
        setisUserData({ email, password, userName });
      }
    }
    catch (error) { console.error('Error retrieving data:', error); }
  }
  useEffect(() => {
    loadStoredData();
  }, []);


  return (
    <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>

      <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.heading}>Profile</Text>

        <View style={[styles.profileContainer, { width: width - 40, height: width / 2 }]}>

          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg' }}
          />
          {/* <View style={{margin:10}}> */}
          <Text style={styles.profileContainerText}>{isUserData.userName}</Text>
          <Text style={styles.profileContainerText}>{isUserData.email}</Text>
          {/* </View> */}
          <TouchableOpacity
            style={{
              // justifyContent:'flex-end',
              alignItems: 'flex-start',
              position: 'absolute',
              top: 5,
              right: 5,
            }}
          >
            <Image
              style={{
                width: 22, height: 22,

              }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9369/9369424.png' }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20, marginBottom: 0 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold' }}>Hey!</Text>
        </View>

        <View style={{ flexDirection: 'row', columnGap: 20, margin: 20, flexWrap: 'wrap', rowGap: 20, }}>
          {
            options.map((item) => {
              return (
                <View>
                  <TouchableOpacity
                    style={[styles.optionCantainer, { width: (width - 62) / 2 }]}
                    onPress={() => handleOptions(item)}

                  >

                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }

        </View>


        <View>
          <Text style={styles.heading}>Account Settings</Text>
          <Text style={styles.headingOption}>Saved Addresses</Text>
          <Text style={styles.headingOption}>Selected Language</Text>
          <Text style={styles.headingOption}>Notification Settings</Text>

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.logOutButton}
            // onPress={handleLogout}
            onPress={handleLogout}
          >
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 20,

    margin: 20,
    flexWrap: 'wrap',
    rowGap: 20,
  },
  optionCantainer: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    // backgroundColor:'red',

    justifyContent: 'center'

  },
  optionText: {
    // fontSize
    textAlign: 'center'
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    margin: 20,
    marginBottom: 10
  },
  headingOption: {
    fontSize: 16,
    fontFamily: 'Inter_18pt-Light',
    margin: 10,
    marginLeft: 20,
    textShadowColor: 'white',
    textShadowRadius: 2
  },
  logOutText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter_18pt-Light',

  },
  logOutButton: {
    width: 200,
    height: 55,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    margin: 30,
  },
  profileContainer: {
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    marginTop: 10,
    // justifyContent:'flex-start',
    alignItems: 'center',

    padding: 10
  },
  profileContainerText: {
    fontFamily: 'Raleway-SemiBold',

  }
})