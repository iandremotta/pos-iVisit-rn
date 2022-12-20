import React from 'react';
import { Button, Column, Input, Text, useColorMode } from 'native-base';
import {
  userActions,
  useAppDispatch,
  useAppSelector,
  appActions,
} from '../../app/appStore';

export function ProfileScreen() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.user.name);
  const isDarkTheme = useAppSelector(state => state.app.isDarkTheme);
  const { toggleColorMode } = useColorMode();

  return (
    <Column
      alignItems="center"
      justifyContent="center"
      space="4"
      padding="4"
      height="full"
    >
      <Text>Name</Text>
      <Input
        placeholder="Primeiro Nome"
        value={name}
        onChangeText={name => {
          dispatch(
            userActions.setName({
              name,
            }),
          );
        }}
      />
      <Button
        width="full"
        onPress={() => {
          toggleColorMode();
          dispatch(
            appActions.setDarkTheme({
              isDarkTheme: !isDarkTheme,
            }),
          );
        }}
      >
        Change Global Theme
      </Button>
    </Column>
  );
}
