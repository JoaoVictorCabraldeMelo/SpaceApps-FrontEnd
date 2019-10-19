import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import TabNavigator from '../components/BottomBar';

const App = () => {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f5',
  },
});

export default App;
