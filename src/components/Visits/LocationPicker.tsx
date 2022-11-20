import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { getCoords } from '../../gelocation/getCoords';
import { OutlinedButton } from '../UI/OutlinedButton';

export function LocationPicker() {
  async function getLocationHandler() {
    var coors = await getCoords();
    console.log(coors);
  }

  function pickOnMapHandler() { }

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="globe" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map-marker" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary400,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
