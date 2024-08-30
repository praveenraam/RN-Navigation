import { View,Text,Image,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Home from './Home';
import Details from './Details';
import InputText from './InputText';
import Count from './Count';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://freelogopng.com/google-logo-png' }}  // Use uri for remote images
    />
  );
}


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Working" component={Home}  options={{ title: 'Overview' }}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#007BFF" // Example: Set button color to a shade of blue
              />
            ),
          }}          
          />
          <Stack.Screen name="Details" component={Details}  
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}    
          />
          <Stack.Screen name="InputText" component={InputText} 
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen name="Count" component={Count}
            options={{headerRight: () => (<Button title=' '/>),
              headerBackTitle:'Custom Back Title',       headerBackTitleStyle: { fontSize: 30 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;