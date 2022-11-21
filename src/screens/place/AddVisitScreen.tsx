import React from 'react';
import { VisitForm } from '../../components/Visits/VisitForm';

export function AddVisit({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate('AllVisits', {
      place: place,
    });
  }
  return <VisitForm onCreatePlace={createPlaceHandler} />;
}
