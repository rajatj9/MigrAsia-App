import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Profile from './screens/Profile';
import Courses from './screens/Courses';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Profile: screen: (props) => <Profile {...props.navigation.state.params} name='FirstName' location='Sheung Wan' birthDate='1920' />,
  Courses: Courses
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
