import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Button,
  RadioButton,
  RichTextInput,
  Label,
  CheckBox,
  Text,
  MessageBox
} from 'src/components';
import { addons } from 'src/services/constants';
import {
  createAddOns,
  createGetAddon,
  getReceivedPackages
} from 'src/services/api/ApiManager';
import { PACKAGE_STATUS } from 'src/services/enums';

const CreateAddon = () => {
  const navigation = useNavigation();
  const [{ accessToken, currentUser }] = useStateValue();
  const [packages, setPackages] = useState([]);
  const [count, setCount] = useState(0);
  const [services, setServices] = useState([]);
  let richText = useRef();
  const [details, setDetails] = useState('');
  const [addon, setAddon] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetReceivedPackages = async () => {
    setLoading(true);
    const response = await createGetAddon(accessToken);
    console.log(response);
    if (response.status === 200) {
      setCount(response?.data?.count);
      setPackages(response?.data?.packages);
      setServices(response?.data?.services);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetReceivedPackages();
  }, []);

  const handleAddonChange = value => {
    setAddon(value);
  };

  const handleCheckChange = (value, index) => {
    const _data = [...packages];
    const _item = _data[index];
    _item.selected = value;
    _data[index] = _item;
    setPackages(_data);
  };

  const handleCreateAddon = async () => {
    setLoading(true);
    const data = {
      addon: addon,
      details,
      packages: packages.filter(p => p.selected)?.map(p => p.id)
    };
    console.log(data);
    const res = await createAddOns(accessToken, data);
    console.log(res);
    if (res.status === 200) {
      Alert.alert('Success', 'Addon created successfully');
      navigation.pop();
    }
    setLoading(false);
  };

  console.log(currentUser);

  return (
    <>
      <Header isStack />
      {count === 0 && !loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
          }}>
          <MessageBox
            type="danger"
            borderRadius={8}
            message="There is no available package for additional services to be request.
            Only recieved packages which has not been yet processed for shipping
            can be requested for additional services."
          />
        </View>
      )}
      {count > 0 && (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Label label="Select Packages" />
          <View style={styles.packages}>
            {packages &&
              packages.map((item, index) => (
                <CheckBox
                  key={index}
                  checked={item.selected}
                  message={item.tracking_id}
                  messageHighlight={`  Dimension: ${item?.package_size}, Weight: ${item?.package_weight}`}
                  setChecked={value => handleCheckChange(value, index)}
                />
              ))}
          </View>
          <RadioButton
            label="Select Add-on"
            checked={addon}
            setChecked={handleAddonChange}
            items={services?.map(item => ({
              label: item?.name,
              value: item?.id,
              description: `(${
                JSON.parse(item?.cost)?.[currentUser?.membership - 1]
              } for ${item?.quantity} ${item?.Descriptions})`
            }))}
          />
          <RichTextInput
            value={details}
            label="Notes/Requests Detail "
            onChangeText={value => setDetails(value)}
            ref={richText}
          />
          <View style={styles.buttonsContainer}>
            <Button
              loading={loading}
              label="Create Order"
              onPress={handleCreateAddon}
            />
            <Button
              label="Cancel"
              onPress={() => navigation.goBack()}
              fill={false}
              danger
              disabled={loading}
            />
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
    paddingTop: 50,
    width: '100%'
  },
  heading: {
    fontSize: 14,
    fontWeight: '500'
  },
  subHeading: {
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
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
    paddingBottom: 50
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
  }
});

export default CreateAddon;
