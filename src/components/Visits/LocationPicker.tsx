import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Coords } from '../../app/types';
import { Colors } from '../../constants/colors';
import { getCoords } from '../../gelocation/getCoords';
import { getAddress, getMapPreview } from '../../utils/location';
import { OutlinedButton } from '../UI/OutlinedButton';

export function LocationPicker({ onPickLocation }: any) {
  const [pickedLocation, setPickedLocation] = useState<Coords>();
  const navigation = useNavigation();
  async function getLocationHandler() {
    var location = await getCoords();
    setPickedLocation({
      latitude: location?.latitude,
      longitude: location?.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation);
        onPickLocation({ ...pickedLocation, address: address });
      }
    }

    handleLocation();
  }, [pickedLocation, onPickLocation]);

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview({
            latitude: pickedLocation?.latitude,
            longitude: pickedLocation?.longitude,
          }),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
