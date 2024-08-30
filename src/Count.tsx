import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const Count = ({navigation}) => {
  const [count,setCount] = useState(0);
  

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Count : {count}</Text>
    </View>
  )
}

export default Count

const styles = StyleSheet.create({})