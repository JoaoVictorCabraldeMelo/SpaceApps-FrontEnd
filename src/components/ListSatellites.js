import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const list = [
  {
    name: 'TDRS1',
    categoria: 'Normal',
    avatar_url: '../asssets/sat2.jpeg',
  },
  {
    name: 'TDRS 13',
    categoria: 'Nasa',
    avatar_url: '../asssets/sat4.jpeg',
  },
  {
    name: 'TDRS 4',
    categoria: 'Normal',
    avatar_url: '../asssets/sat5.jpeg',
  },
  {
    name: 'TDRS-12',
    categoria: 'Desconhecida',
    avatar_url: '../asssets/sat1.jpeg',
  },
  {
    name: 'TDRS 3',
    categoria: 'Normal',
    avatar_url: '../asssets/sat3.png',
  },
  {
    name: 'TDRS-12',
    categoria: 'Desconhecida',
    avatar_url: '../asssets/sat1.jpeg',
  },
  {
    name: 'TDRS 3',
    categoria: 'Normal',
    avatar_url: '../asssets/sat3.jpeg',
  },
  {
    name: 'TDRS-12',
    categoria: 'Desconhecida',
    avatar_url: '../asssets/sat1.jpeg',
  },
  {
    name: 'TDRS-12',
    categoria: 'Desconhecida',
    avatar_url: '../asssets/sat1.jpeg',
  },
];

export default class ListSatellites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.categoria}
      leftAvatar={{source: require('../assets/sat2.jpeg')}}
    />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    height: 1000,
  },
});
