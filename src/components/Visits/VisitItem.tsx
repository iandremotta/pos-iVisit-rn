import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Visit } from '../../models/visit';

export function PlaceItem({
  visit,
  onSelect,
}: {
  visit: Visit;
  onSelect: any;
}) {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Text>{visit.title}</Text>
        <Text>{visit.address}</Text>
      </View>
    </Pressable>
  );
}
