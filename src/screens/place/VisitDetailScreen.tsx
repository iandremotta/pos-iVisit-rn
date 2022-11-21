import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { OutlinedButton } from '../../components/UI/OutlinedButton';
import { Colors } from '../../constants/colors';

export function VisitDetailsScreen({ route, navigation }) {
  function showOnMapHandler() {
    navigation.navigate('Map', {});
  }

  const selectedVisit = route.params.visit;
  const visit = selectedVisit;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View>
          <Text style={styles.title}>{visit.title}</Text>
          <Text style={styles.experience}>{visit.experience}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{visit.address}</Text>
          </View>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  locationContainer: {
    justifyContent: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  title: {
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 24,
  },
  experience: {
    color: Colors.primary100,
    padding: 24,
    fontSize: 16,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
