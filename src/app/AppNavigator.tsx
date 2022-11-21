import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllVisits } from '../screens/place/AllVisitsScreen';
import { IconButton } from '../components/UI/IconButton';
import { AddVisit } from '../screens/place/AddVisitScreen';
import { Colors } from '../constants/colors';
import { MapScreen } from '../screens/map/MapScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
      }}
    >
      <Stack.Screen
        name="AllVisits"
        component={AllVisits}
        options={({ navigation }) => ({
          title: 'Your Visiting Places',
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="plus"
              size={24}
              color={tintColor}
              onPress={() =>
                navigation.navigate('AddVisit', { screen: 'AddVisit' })
              }
            />
          ),
        })}
      />
      <Stack.Screen name="AddVisit" component={AddVisit} />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}
