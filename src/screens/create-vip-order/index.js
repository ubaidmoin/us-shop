import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Button,
  TextInput,
  RichTextInput,
  DateTimePicker
} from 'src/components';

const CreateVIPOrder = () => {
  const navigation = useNavigation();
  const [{}] = useStateValue();
  const richText = useRef();
  const [details, setDetails] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  const handleTimeChange = value => {
    setTime(value);
  };

  const handleDateChange = value => {
    setDate(value);
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <DateTimePicker
          label="Date"
          mode="date"
          open={openDatePicker}
          setOpen={value => setOpenDatePicker(value)}
          value={date}
          onChangeValue={handleDateChange}
          placeholder="dd/mm/yyyy"
        />
        <DateTimePicker
          label="Time"
          mode="time"
          open={openTimePicker}
          setOpen={value => setOpenTimePicker(value)}
          value={time}
          onChangeValue={handleTimeChange}
          placeholder="--:-- --"
        />
        <TextInput
          label="Total hours "
          placeholder=""
          helperMessage="Time required for shopping. 50$ for each hour and minimum one hour is required."
        />
        <TextInput
          label="Total Miles "
          placeholder=""
          helperMessage="1$ per mile and minimum charges are 15$."
        />
        <RichTextInput
          value={details}
          label="List of store: "
          onChangeText={value => setDetails(value)}
          ref={richText}
          helperMessage="Please provide store full name and full address."
        />
        <TextInput
          label="Note/Message "
          placeholder=""
          multiline
          numberOfLines={5}
          helperMessage="Please provide the detail of products."
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
  }
});

export default CreateVIPOrder;
