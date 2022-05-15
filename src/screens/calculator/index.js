import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Button, TextInput, Dropdown, Text } from 'src/components';

const Calculator = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.body}>
          <View style={styles.estimatedContainer}>
            <Text style={styles.estimatedText}>Estimated Cost:</Text>
            <View style={styles.costContainer}>
              <Text style={styles.cost}>371.6</Text>
            </View>
          </View>
          <Dropdown label="Country" placeholder="Country" />
          <Dropdown label="Shipping Type" placeholder="Shipping Type" />
          <View style={styles.row}>
            <View style={styles.column}>
              <TextInput label="Weight" placeholder="" />
            </View>
            <View style={styles.column}>
              <Dropdown label="Type" placeholder="Type" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TextInput label="Length" placeholder="" />
            </View>
            <View style={styles.column}>
              <TextInput label="Width" placeholder="" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TextInput label="Height" placeholder="" />
            </View>
            <View style={styles.column}>
              <Dropdown label="Type" placeholder="Type" />
            </View>
          </View>
          <Button label="Calculate" onPress={() => {}} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  contentContainer: {
    alignItems: 'center'
  },
  body: {
    paddingTop: 20,
    width: '100%'
  },
  flatlist: {
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    padding: 10
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    width: '40%'
  },
  subHeading: {
    fontSize: 14,
    width: '60%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5
  },
  left: {
    width: '58%'
  },
  right: {
    width: '40%'
  },
  column: {
    width: '49%'
  },
  estimatedContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    padding: 20
  },
  estimatedText: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  costContainer: {
    backgroundColor: '#1bc5bd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: 100,
    alignItems: 'center'
  },
  cost: {
    fontSize: 14,
    color: '#fff'
  }
});

export default Calculator;
