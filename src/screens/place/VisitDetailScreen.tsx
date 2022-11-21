import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { OutlinedButton } from '../../components/UI/OutlinedButton';
import { Colors } from '../../constants/colors';
import { Visit } from '../../models/visit';

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
          <Text style={{ color: 'white' }}>{visit.title}</Text>
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
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
