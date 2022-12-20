import { useNavigation } from '@react-navigation/native';
import { FlatList, Flex, Text } from 'native-base';
import React from 'react';
import { VisitItem } from './VisitItem';

export function VisitList({ visits }) {
  const navigation = useNavigation();
  function selectVisitHandler(visit) {
    navigation.navigate('VisitDetails', { visit: visit });
  }
  if (!visits || visits.length === 0) {
    return (
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Text fontSize="16">Add something new here.</Text>
      </Flex>
    );
  }

  return (
    <FlatList
      data={visits}
      margin="24"
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <VisitItem visit={item} onSelect={selectVisitHandler} />
      )}
    />
  );
}
