import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert
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
import { createSupportTickets } from 'src/services/api/ApiManager';

const CreateTicket = () => {
  const navigation = useNavigation();
  const [{ accessToken }, dispatch] = useStateValue();
  let richText = useRef();
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateTicket = async () => {
    setLoading(true);
    const data = {
      support_message: details,
      file: image,
      support_subject: subject
    };
    const res = await createSupportTickets(accessToken, data);
    // console.log(res.data);
    if (res && res.data && res.data.message) {
      Alert.alert('Ticket successfully created', `${res.data.message}`);
      navigation.goBack();
    }
    setLoading(false);
  };

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <TextInput
          label="Ticket Subject"
          placeholder=""
          value={subject}
          onChangeText={value => setSubject(value)}
        />
        <RichTextInput
          value={details}
          label="Message"
          placeholder=""
          onChangeText={value => setDetails(value)}
          ref={richText}
        />
        <ImageBrowser image={image} setImage={setImage} />
        <View style={styles.buttonsContainer}>
          <Button
            loading={loading}
            label="Create Ticket"
            onPress={handleCreateTicket}
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
