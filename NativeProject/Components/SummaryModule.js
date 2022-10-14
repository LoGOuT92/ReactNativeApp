/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SummaryModule({title, value, unit}) {
  return (
    <View style={styles.ContainerSummary}>
      <Text>{title}:</Text>
      <Text>
        {value} {unit}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  ContainerSummary: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    flex: 1,
  },
});
