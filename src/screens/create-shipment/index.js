import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Button, Text } from 'src/components';
import {
  SelectPackages,
  Insurance,
  CustomerDetails,
  ShippingDetails
} from './Steps';

const data = [
  {
    tracking_code: 'Test',
    received_date: '09-05-2022',
    size: '2 x 2 x 2',
    weight: '2.00',
    selected: false
  },
  {
    tracking_code: 'UN455KHTJJ',
    received_date: '09-05-2022',
    size: '2 x 2 x 2',
    weight: '2.00',
    selected: false
  }
];

const CreateShipment = () => {
  const navigation = useNavigation();
  const [{}] = useStateValue();
  const [packages, setPackages] = useState(data);
  const [active, setActive] = useState(0);
  const [selectedInsurance, setSelectedInsurance] = useState(-1);
  const [pickUp, setPickUp] = useState(-1);
  const [_package, setPackage] = useState('');

  const handleNext = () => setActive(active + 1);
  const handlePrevious = () => setActive(active - 1);

  const handleCheckChange = (value, index) => {
    const _data = [...packages];
    const _item = _data[index];
    _item.selected = value;
    _data[index] = _item;
    setPackages(_data);
  };

  const handleInsuranceChange = value => {
    setSelectedInsurance(value);
  };

  const handlePickupChange = value => {
    setPickUp(value);
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.step}>
              <View
                style={
                  active === 0 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 0 ? styles.stepTextActive : styles.stepText
                  }>
                  1
                </Text>
              </View>
              <Text style={styles.stepTitle}>Select Packages</Text>
            </View>
            <View style={styles.step}>
              <View
                style={
                  active === 1 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 1 ? styles.stepTextActive : styles.stepText
                  }>
                  2
                </Text>
              </View>
              <Text style={styles.stepTitle}>Insurance</Text>
            </View>
            <View style={styles.step}>
              <View
                style={
                  active === 2 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 2 ? styles.stepTextActive : styles.stepText
                  }>
                  3
                </Text>
              </View>
              <Text style={styles.stepTitle}>Shipping Details</Text>
            </View>
            <View style={styles.step}>
              <View
                style={
                  active === 3 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 3 ? styles.stepTextActive : styles.stepText
                  }>
                  4
                </Text>
              </View>
              <Text style={styles.stepTitle}>Customer Details</Text>
            </View>
          </View>
          {active === 0 ? (
            <SelectPackages
              data={packages}
              handleCheckChange={handleCheckChange}
            />
          ) : active === 1 ? (
            <Insurance
              selectedInsurance={selectedInsurance}
              handleRadioChange={handleInsuranceChange}
              _package={_package}
              setPackage={setPackage}
            />
          ) : active === 2 ? (
            <ShippingDetails
              pickUp={pickUp}
              handleRadioChange={handlePickupChange}
            />
          ) : (
            <CustomerDetails />
          )}
          <View style={styles.buttonsContainer}>
            <Button
              label={active === 3 ? 'Create Shipment' : 'Next'}
              onPress={active === 3 ? navigation.goBack() : handleNext}
            />
            {active !== 0 && (
              <Button
                label="Previous"
                onPress={handlePrevious}
                fill={false}
                danger
              />
            )}
          </View>
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
  heading: {
    fontSize: 14,
    fontWeight: '500'
  },
  subHeading: {
    fontSize: 14
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5
  },
  buttonsContainer: {
    width: '100%',
    paddingBottom: 150
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  messageBox: {
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    alignSelf: 'center',
    marginTop: '50%'
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  packages: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  step: {
    width: '25%',
    alignItems: 'center'
  },
  stepNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f3f6f9'
  },
  stepNumberActive: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#c9f7f5'
  },
  stepText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  stepTextActive: {
    fontWeight: '500',
    fontSize: 16,
    color: '#1bc5bd'
  },
  stepTitle: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
});

export default CreateShipment;
