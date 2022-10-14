/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import SummaryModule from './Components/SummaryModule';
import SingleTrip from './Components/SingleTrip';
import KeyboardModule from './Components/KeyboardModule';

const App = () => {
  const [trips, setTrips] = useState([]);
  const [fuelCost, setFuelCost] = useState(8.5);
  const [avDistance, setAvDistance] = useState(0);
  const [avFuel, setAvFuel] = useState(0);
  const [AvCost, setAvCost] = useState(0);

  useEffect(() => {
    isNaN(fuelCost) ? setFuelCost(0) : null;
  }, [fuelCost]);

  const setTripsArray = trip => {
    setTrips([...trips, trip]);
    // // setTrips([]);
  };
  const deleteTrip = id => {
    let tripsArrayCopy = trips.filter(val => val.id !== id);
    setTrips(tripsArrayCopy);
  };
  useEffect(() => {
    let costTab = [];
    let distanceTab = [];
    let fueltab = [];
    trips.forEach(val => costTab.push(parseFloat(val.cost)));
    trips.forEach(val => distanceTab.push(parseFloat(val.distance)));
    trips.forEach(val => fueltab.push(parseFloat(val.avconsumption)));
    const setAvHandler = x => {
      return x.reduce((a, b) => a + b, 0) / trips.length;
    };
    if (trips.length > 0) {
      setAvCost(setAvHandler(costTab).toFixed(2));
      setAvFuel(setAvHandler(fueltab).toFixed(2));
      setAvDistance(setAvHandler(distanceTab).toFixed(2));
    }
  }, [trips]);

  useEffect(() => {
    if (trips.length === 0) {
      isNaN(avFuel ? setAvFuel(0) : null);
      isNaN(avDistance ? setAvDistance(0) : null);
      isNaN(AvCost ? setAvCost(0) : null);
    }
  }, [trips, avFuel, avDistance, AvCost]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.title}>Kalkulator spalania</Text>
          <View style={styles.summary}>
            <Text>Podsumowanie:</Text>
            <View style={styles.summarySingleModule}>
              <SummaryModule
                title="Przejechane KM"
                value={avDistance}
                unit="Km"
              />
              <SummaryModule
                title="Spalone paliwo (l)"
                value={avFuel}
                unit="L"
              />
              <SummaryModule title="Koszt" value={AvCost} unit="Zl" />
            </View>
          </View>
          <View style={styles.fuelPrinceContainer}>
            <TextInput
              keyboardType="numeric"
              placeholder="Cena paliwa:"
              value={parseFloat(fuelCost)}
              onChangeText={val => setFuelCost(parseFloat(val))}
            />
            <View style={styles.fuelSummary}>
              <Text>Cena Paliwa:</Text>
              <Text>{fuelCost}</Text>
            </View>
          </View>
          <KeyboardModule
            fuelCost={fuelCost}
            setTripsArray={trip => setTripsArray(trip)}
          />
          <View style={styles.tripsContainer}>
            {trips.length > 0
              ? trips.map(val => (
                  <SingleTrip
                    key={val.id}
                    deleteTrip={id => deleteTrip(id)}
                    {...val}
                  />
                ))
              : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 32,
    // paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '900',
    color: 'black',
    fontSize: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  summary: {
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  summarySingleModule: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 15,
    padding: 10,
  },
  fuelPrinceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
  },
  fuelSummary: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'grey',
  },
  tripsContainer: {},
});

export default App;
