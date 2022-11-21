import React from 'react';
import { VisitForm } from '../../components/Visits/VisitForm';

export function AddVisit({ navigation }: any) {
  function createPlaceHandler(place: any) {
    navigation.navigate('AllVisits', {
      place: place,
    });
  }
  return <VisitForm onCreateVisit={createPlaceHandler} />;
}
