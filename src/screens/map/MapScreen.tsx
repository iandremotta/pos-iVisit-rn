import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../../mapStyle.json';

const delta = 0.003;

export function MapScreen() {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: delta,
    longitudeDelta: delta,
  };
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        initialRegion={region}
        style={styles.map}
        showsBuildings={false}
        showsIndoors={false}
        showsMyLocationButton={false}
        showsCompass={false}
        toolbarEnabled={false}
        customMapStyle={mapStyle}
      />
      <View style={{ position: 'absolute', top: 100, left: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
