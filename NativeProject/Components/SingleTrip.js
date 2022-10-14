/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SingleTrip(props) {
  return (
    <View style={styles.singleTrip}>
      <View style={styles.test}>
        <Text style={styles.labelInfo}>Data</Text>
        <Text style={styles.labelInfo}>{props.date}</Text>
      </View>
      <View style={styles.test}>
        <Text style={styles.labelInfo}>Dystans:</Text>
        <Text style={styles.labelInfo}>{props.distance} Km</Text>
      </View>
      <View style={styles.test}>
        <Text style={styles.labelInfo}>Sr. spalanie:</Text>
        <Text style={styles.labelInfo}>{props.avconsumption} L</Text>
      </View>
      <View style={styles.test}>
        <Text style={styles.labelInfo}>Spalono:</Text>
        <Text style={styles.labelInfo}>{props.consumption}L</Text>
      </View>
      <View style={styles.test}>
        <Text style={styles.labelInfo}>Koszt:</Text>
        <Text style={styles.labelInfo}>{props.cost} zł</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => props.deleteTrip(props.id)}>
        <View style={styles.test}>
          <Text style={{fontWeight: '800', color: 'white'}}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  singleTrip: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  labelInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    color: 'black',
  },
  test: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
