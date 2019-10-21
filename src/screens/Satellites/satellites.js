import React from 'react';
import {SafeAreaView} from 'react-native';
import ListSatellites from '../../components/ListSatellites';

const Satellites = props => {
  return (
    <SafeAreaView>
      <ListSatellites />
    </SafeAreaView>
  );
};

export default Satellites;
