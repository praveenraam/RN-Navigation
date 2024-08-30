import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Details = ({route,navigation}) => {

  const {id,Data} = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>

      <Text>{JSON.stringify(id)}</Text>
      <Text>{JSON.stringify(Data)}</Text>
      <Button title='Go to same screen' onPress={()=>{navigation.push('Details')}} />
      <Button title='Go back to Back' onPress={()=>{navigation.goBack()}} />
      <Button title="Go to home (Pop all in stack)" onPress={()=>{navigation.popToTop()}} />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})