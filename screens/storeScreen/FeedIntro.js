import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { root } from '../../ui/components';
import SearchBar from '../genericScreen/searchbar';

export default function FeedIntro() {
  return (
    <View style={styles.containerImage}>
      <Image
        source={require('../../assets/Group 13(1).png')}
        style={styles.image}
      />
      <SearchBar style={styles.SearchBar}placeholder={"Buscar"}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    height: 315,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 315,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  SearchBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
}
});
