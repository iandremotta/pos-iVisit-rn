import React, { useCallback, useState } from 'react';
import { Coords } from '../../app/types';
import { Button } from '../UI/Button';
import { LocationPicker } from './LocationPicker';
import { Visit } from '../../models/visit';
import { Box, Input, ScrollView, Text, TextArea } from 'native-base';

export function VisitForm({ onCreateVisit }: any) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredExperience, setEnteredExperience] = useState('');
  const [enteredLocation, setEnteredLocation] = useState<Coords>();

  function changeTitleHandler(title: string) {
    setEnteredTitle(title);
  }

  function changeExperienceHandler(experience: string) {
    setEnteredExperience(experience);
  }

  const pickLocationHandler = useCallback((location: Coords) => {
    setEnteredLocation(location);
  }, []);

  function savePlaceHandler() {
    if (enteredTitle !== '' && enteredLocation !== null) {
      let visitData = new Visit(
        enteredTitle,
        enteredExperience,
        enteredLocation,
      );
      onCreateVisit(visitData);
    }
    return;
  }
  useState();
  return (
    <ScrollView flex="1" padding="4">
      <Box>
        <Text fontWeight="bold" marginBottom="4px">
          Title
        </Text>
        <Input
          paddingX="4px"
          paddingY="8px"
          borderBottomWidth="2px"
          borderColor="blue.700"
          backgroundColor="blue.100"
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
        <Text fontWeight="bold" marginBottom="4px">
          Experience
        </Text>
        <TextArea
          backgroundColor="blue.100"
          onChangeText={changeExperienceHandler}
          value={enteredExperience}
          autoCompleteType={undefined}
        />
      </Box>
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Save Visit</Button>
    </ScrollView>
  );
}
