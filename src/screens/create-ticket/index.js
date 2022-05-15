import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Button,
  TextInput,
  RichTextInput,
  ImageBrowser
} from 'src/components';

const CreateTicket = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const richText = useRef();
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <TextInput label="Ticket Subject" placeholder="" />
        <RichTextInput
          value={details}
          label="Message"
          placeholder=""
          onChangeText={value => setDetails(value)}
          ref={richText}
        />
        <ImageBrowser image={image} setImage={setImage} />
        <View style={styles.buttonsContainer}>
          <Button label="Create Ticket" onPress={() => {}} />
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
  buttonsContainer: {
    width: '100%'
  }
});

export default CreateTicket;
