import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Button, Text, MessageBox } from 'src/components';
import {
  SelectPackages,
  Insurance,
  CustomerDetails,
  ShippingDetails,
  TaxAndDuty
} from './Steps';
import {
  createShipment,
  getCreateShipment,
  uploadFile
} from 'src/services/api/ApiManager';
import { taxAndDuty } from 'src/services/constants';

const CreateShipment = () => {
  const navigation = useNavigation();
  const [{ accessToken, currentUser, countries }] = useStateValue();
  const [packages, setPackages] = useState([]);
  const [active, setActive] = useState(0);
  const [selectedInsurance, setSelectedInsurance] = useState(0);
  const [pickUp, setPickUp] = useState(0);
  const [_package, setPackage] = useState('');
  const [newShipment, setNewShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [packageValue, setPackageValue] = useState('');
  const [duties, setDuties] = useState([]);
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const { name, email, phone } = currentUser;
  const [customerName, setCustomerName] = useState(name);
  const [customerEmail, setCustomerEmail] = useState(email);
  const [customerPhone, setCustomerPhone] = useState(phone);
  const [openShippingCountry, setOpenShippingCountry] = useState(false);
  const [shippingCountry, setShippingCountry] = useState(1);
  const [address, setAddress] = useState(currentUser?.street_address);
  const [city, setCity] = useState(currentUser?.city);
  const [postalCode, setPostalCode] = useState(currentUser?.postal_code);
  const [state, setState] = useState(currentUser?.state);
  const [openCountry, setOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries?.find(c => currentUser?.country === c?.name)?.id
  );

  const upload = async () => {
    if (images.length > 0) {
      const files = [];
      images.map(async item => {
        const formData = new FormData();
        formData.append('file', {
          uri: item?.uri,
          type: item?.type,
          name: item?.fileName
        });
        const fileName = await uploadFile(accessToken, formData);
        console.log('fileName', fileName, fileName?.data?.name);
        files.push(fileName?.data?.name || '');
      });
      setFileNames(files);
    }
  };

  useEffect(() => {
    upload();
  }, [images]);

  const handleNext = () => setActive(active + 1);
  const handlePrevious = () => setActive(active - 1);

  const handleCheckChange = (value, id) => {
    const _data = [...newShipment?.packages];
    const _item = _data?.find(item => item.id === id);
    const index = _data?.findIndex(item => item.id === id);
    _item.selected = value;
    _data[index] = _item;
    setPackages(_data);
  };

  const handleTaxCheckChange = (value, index) => {
    const _data = [...taxAndDuty];
    const _item = _data[index];
    _item.selected = value;
    _data[index] = _item;
    console.log(_data?.filter(item => item?.selected));
    setDuties(_data?.filter(item => item?.selected));
  };

  const handleInsuranceChange = value => {
    setSelectedInsurance(value);
  };

  const handlePickupChange = value => {
    setPickUp(value);
  };

  const handleNewShipment = async () => {
    setLoading(true);
    const response = await getCreateShipment(accessToken);
    console.log(response?.data?.count);
    setNewShipment(response?.data);
    setLoading(false);
  };

  const handleCreateShipment = async () => {
    setLoading(true);
    const data = {
      packages: packages?.map(item => item?.id),
      shipment_type: shippingCountry,
      street_address: address,
      city,
      postal_code: postalCode,
      state,
      shipment_country: selectedCountry,
      warehouse: pickUp,
      customer_name: customerName,
      phone: customerPhone,
      email: customerEmail,
      insurance: selectedInsurance,
      package_value: packageValue,
      products_type: duties?.map(item => item?.label),
      shipment_detail: shipmentDetails,
      file: fileNames
    };
    const response = await createShipment(accessToken, data);
    console.log(response, response?.data);
    if (response.status === 200) {
      Alert.alert('Success', 'Shipment created successfully');
      navigation.pop();
    }
    setLoading(false);
  };

  useEffect(() => {
    handleNewShipment();
  }, []);

  return (
    <>
      <Header isStack />
      {newShipment?.count === 0 && !loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
          }}>
          <MessageBox
            type="danger"
            borderRadius={8}
            message="There is no pending package for shipment. If you already created shipment with existing packages you might not be able to create new shipment. You may delete existing shipment to start over if you haven't yet paid."
          />
        </View>
      )}
      {newShipment?.count > 0 && (
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
                <Text style={styles.stepTitle}>Shipping Details</Text>
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
                <Text style={styles.stepTitle}>Customer Details</Text>
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
                <Text style={styles.stepTitle}>Insurance</Text>
              </View>
              <View style={styles.step}>
                <View
                  style={
                    active === 4 ? styles.stepNumberActive : styles.stepNumber
                  }>
                  <Text
                    style={
                      active === 4 ? styles.stepTextActive : styles.stepText
                    }>
                    5
                  </Text>
                </View>
                <Text style={styles.stepTitle}>Tax & Duty</Text>
              </View>
            </View>
            {active === 0 ? (
              <SelectPackages
                data={newShipment?.packages}
                handleCheckChange={handleCheckChange}
              />
            ) : active === 1 ? (
              <ShippingDetails
                pickUp={pickUp}
                handleRadioChange={handlePickupChange}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                openCountry={openCountry}
                setOpenCountry={setOpenCountry}
                countries={countries}
                shippingCountry={shippingCountry}
                setShippingCountry={setShippingCountry}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                state={state}
                setState={setState}
                openShippingCountry={openShippingCountry}
                setOpenShippingCountry={setOpenShippingCountry}
              />
            ) : active === 2 ? (
              <CustomerDetails
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerEmail={customerEmail}
                setCustomerEmail={setCustomerEmail}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
              />
            ) : active === 3 ? (
              <Insurance
                selectedInsurance={selectedInsurance}
                handleRadioChange={handleInsuranceChange}
                _package={_package}
                setPackage={setPackage}
              />
            ) : (
              <TaxAndDuty
                duties={duties}
                handleCheckChange={handleTaxCheckChange}
                packageValue={packageValue}
                setPackageValue={setPackageValue}
                shipmentDetails={shipmentDetails}
                setShipmentDetails={setShipmentDetails}
                images={images}
                setImages={setImages}
              />
            )}
            <View style={styles.buttonsContainer}>
              <Button
                label={active === 4 ? 'Create Shipment' : 'Next'}
                loading={loading}
                disabled={packages.length === 0}
                onPress={() =>
                  active === 4 ? handleCreateShipment() : handleNext()
                }
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
      )}
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
    width: '20%',
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
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10
  }
});

export default CreateShipment;
