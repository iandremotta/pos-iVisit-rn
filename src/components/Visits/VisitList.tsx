import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Visit } from '../../models/visit';
import { PlaceItem } from './VisitItem';

export function VisitList({ visits }: { visits: Visit[] }) {
  if (!visits || visits.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>Add something new here.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={visits}
      keyExtractor={item => item.id}
      renderItem={(item: Visit) => <PlaceItem visit={item} onSelect="" />}
    />
  );
}

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackText: {
    fontSize: 16,
  },
});
