import { Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>On Home Screen</Text>
        <Button title='Go to Details (2ndScreen)' onPress={()=>navigation.navigate('Details')} />

    </View>
  )
}

export default Home