import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { Label } from 'src/components';

const DateTimePicker = ({
  label,
  placeholder = 'dd/mm/yyyy',
  value = null,
  onChangeValue = () => {},
  helperMessage = '',
  open = false,
  setOpen = () => {},
  mode = 'date'
}) => (
  <>
    <Label label={label} />
    <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
      <Text style={styles.placeholder}>
        {value
          ? moment(value).format(mode === 'date' ? 'DD/MM/YYYY' : 'hh:mm a')
          : placeholder}
      </Text>
    </TouchableOpacity>
    <DatePicker
      modal
      open={open}
      mode={mode}
      date={value ? value : new Date()}
      onConfirm={date => {
        setOpen(false);
        onChangeValue(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
    {!!helperMessage && <Text style={styles.helper}>{helperMessage}</Text>}
  </>
);

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: Platform.OS === 'ios' ? '100%' : '97.5%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    marginHorizontal: Platform.OS === 'ios' ? 0 : 5
  },
  placeholder: {
    fontFamily: 'Poppins-Regular'
  },
  textarea: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
    height: 100
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  helper: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#b5b5c3',
    fontFamily: 'Poppins-Regular'
  }
});

export default DateTimePicker;
