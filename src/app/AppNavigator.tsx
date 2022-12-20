import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllVisits } from '../screens/place/AllVisitsScreen';
import { IconButton } from '../components/UI/IconButton';
import { AddVisit } from '../screens/place/AddVisitScreen';
import { Colors } from '../constants/colors';
import { MapScreen } from '../screens/map/MapScreen';
import { VisitDetailsScreen } from '../screens/place/VisitDetailScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { FeedScreen } from '../screens/feed/FeedScreen';

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
      <Stack.Screen
        name="AddVisit"
        component={AddVisit}
        options={{
          title: 'Add Visit',
        }}
      />
      <Stack.Screen
        name="VisitDetails"
        component={VisitDetailsScreen}
        options={{
          title: 'Details Screen',
        }}
      />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
