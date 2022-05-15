import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  actions,
  RichEditor,
  RichToolbar
} from 'react-native-pell-rich-editor';
import Feather from 'react-native-vector-icons/Feather';
import { Label } from 'src/components';

const RichTextInput = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  ref,
  info = false,
  showInfo = false,
  setShowInfo = () => {},
  helperMessage = ''
}) => (
  <>
    {info && (
      <View style={styles.row}>
        <Label label={label} />
        <Feather name="info" color="#1584F7" size={25} onPress={setShowInfo} />
      </View>
    )}
    {!info && <Label label={label} />}
    <View style={styles.textInput}>
      <RichEditor
        ref={ref}
        placeholder={placeholder}
        style={styles.richText}
        onChange={descriptionText => {
          console.log('descriptionText:', descriptionText);
        }}
      />
    </View>
    <RichToolbar
      ref={ref}
      style={styles.toolbar}
      selectedIconTint="#1584F7"
      actions={[
        actions.setBold,
        actions.setItalic,
        actions.setUnderline,
        actions.heading1
      ]}
      iconMap={{
        [actions.heading1]: ({ tintColor }) => (
          <Text style={[{ color: tintColor }]}>H1</Text>
        )
      }}
    />
    {!!helperMessage && <Text style={styles.helper}>{helperMessage}</Text>}
  </>
);

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular'
  },
  richText: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Regular'
  },
  toolbar: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginTop: -40,
    borderTopWidth: 0.3,
    borderColor: '#1584F7'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 15
  },
  helper: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginVertical: 10,
    color: '#b5b5c3',
    fontFamily: 'Poppins-Regular'
  }
});

export default RichTextInput;
