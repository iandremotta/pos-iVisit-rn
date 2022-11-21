import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { Visit } from '../../models/visit';
import { VisitItem } from './VisitItem';

export function VisitList({ visits }) {
  if (!visits || visits.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>Add something new here.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={visits}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <VisitItem visit={item} onSelect={console.log('nothing')} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallBackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
