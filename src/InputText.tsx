import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = ({ navigation }) => {
  const [postText, setPostText] = useState('');  // Correct state initialization

  return (
    <View>
      <TextInput 
        placeholder='Pass data to pass' 
        style={{ height: 200, padding: 10, backgroundColor: 'white' }} 
        value={postText} 
        onChangeText={setPostText} 
      />
      <Button 
        title='Go back with data' 
        onPress={() => navigation.navigate('Home', { post: postText })}  // Correct navigation syntax
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});