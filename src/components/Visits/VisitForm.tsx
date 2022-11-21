import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Coords } from '../../app/types';
import { Colors } from '../../constants/colors';
import { Button } from '../UI/Button';
import { LocationPicker } from './LocationPicker';
import { Visit } from '../../models/visit';
import styled from 'styled-components/native';

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
    <Form>
      <Container>
        <Label>Title</Label>
        <Input onChangeText={changeTitleHandler} value={enteredTitle} />
        <Label>Experience</Label>
        <Input
          multiline={true}
          onChangeText={changeExperienceHandler}
          value={enteredExperience}
        />
      </Container>
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Save Visit</Button>
    </Form>
  );
}

export const Container = styled.View``;

export const Form = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${Colors.primary500};
`;

export const Input = styled.TextInput`
  padding: 4px 8px;
  font-size: 16px;
  border-color: ${Colors.primary700};
  border-bottom-width: 2px;
  background-color: ${Colors.primary100};
`;
