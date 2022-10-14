/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const KeyboardModule = ({fuelCost, setTripsArray}) => {
  const [values, setValues] = useState({
    distance: 0,
    avconsumption: 0,
  });
  const setTripHandler = () => {
    let trip = {
      id: Date.now() + Math.random(),
      date: new Date().toLocaleDateString(),
      distance: values.distance,
      avconsumption: values.avconsumption,
      consumption: avConsumptionHandler(
        values.avconsumption,
        values.distance,
      ).toFixed(2),
      cost: costHandler(
        values.avconsumption,
        values.distance,
        fuelCost,
      ).toFixed(2),
    };
    setTripsArray(trip);
  };
  const avConsumptionHandler = (avconsumption, distance) => {
    return avconsumption * (distance / 100);
  };
  const costHandler = (avconsumption, distance, cost) => {
    return avConsumptionHandler(avconsumption, distance) * cost;
  };
  useEffect(() => {
    isNaN(values.distance) ? setValues({...values, distance: 0}) : null;
    isNaN(values.avconsumption)
      ? setValues({...values, avconsumption: 0})
      : null;
  }, [values]);
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerNewTrip}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Dystans"
              style={styles.textInput}
              keyboardType="numeric"
              Defalutvalue={parseFloat(values.distance)}
              onChangeText={val =>
                setValues({...values, distance: parseFloat(val)})
              }
            />
            <TextInput
              placeholder="Srednie Spalanie"
              style={styles.textInput}
              keyboardType="numeric"
              value={parseFloat(values.avconsumption)}
              onChangeText={val =>
                setValues({...values, avconsumption: parseFloat(val)})
              }
            />
            <TouchableOpacity onPress={setTripHandler} style={styles.addButton}>
              <Text style={{color: 'white', padding: 5, fontWeight: '600'}}>
                Dodaj
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  inner: {
    padding: 24,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
  },
  containerNewTrip: {
    width: '100%',
    justifyContent: 'space-around',
  },
  addButton: {
    backgroundColor: '#4DC4FF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default KeyboardModule;
