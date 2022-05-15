import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Button,
  RadioButton,
  RichTextInput,
  Label,
  CheckBox
} from 'src/components';
import { addons } from 'src/services/Settings';

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

const CreateAddon = () => {
  const navigation = useNavigation();
  const [{}] = useStateValue();
  const [packages, setPackages] = useState(data);
  const richText = useRef();
  const [details, setDetails] = useState('');
  const [addon, setAddon] = useState('');

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

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Label label="Select Packages" />
        <View style={styles.packages}>
          {data &&
            data.map((item, index) => (
              <CheckBox
                key={index}
                checked={item.selected}
                message={item.tracking_code}
                messageHighlight={`  Dimension: ${item.size}, Weight: ${item.weight}`}
                setChecked={value => handleCheckChange(value, index)}
              />
            ))}
        </View>
        <RadioButton
          label="Select Add-on"
          checked={addon}
          setChecked={handleAddonChange}
          items={addons}
        />
        <RichTextInput
          value={details}
          label="Notes/Requests Detail "
          onChangeText={value => setDetails(value)}
          ref={richText}
        />
        <View style={styles.buttonsContainer}>
          <Button label="Create Order" onPress={() => {}} />
          <Button
            label="Cancel"
            onPress={() => navigation.goBack()}
            fill={false}
            danger
          />
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
