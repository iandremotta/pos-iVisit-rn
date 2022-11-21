import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { VisitList } from '../../components/Visits/VisitList';
import { Visit } from '../../models/visit';

export function AllVisits({ route }) {
  const isFocused = useIsFocused();
  const [loadedVisits, setLoadedVisits] = useState<Visit[]>([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedVisits(curVisits => [...curVisits, route.params.place]);
    }
  }, [isFocused, route]);

  return <VisitList visits={loadedVisits} />;
}
