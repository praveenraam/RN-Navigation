import { Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation,route}) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>On Home Screen</Text>
        <Button title='Go to Details (2ndScreen)' onPress={()=>navigation.navigate('Details',{id:2,Data:"Checking pass working"})} />

        <Button style={{MarginTop:10}}
            title="Create post"
            onPress={() => navigation.navigate('InputText')}
        />
        <Button title='Counter'  onPress={()=> navigation.navigate('Count')}/>
    </View>
  )
}

export default Home