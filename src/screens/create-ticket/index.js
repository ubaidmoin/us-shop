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
import { createSupportTickets, uploadFile } from 'src/services/api/ApiManager';

const CreateTicket = () => {
  const navigation = useNavigation();
  const [{ accessToken }, dispatch] = useStateValue();
  let richText = useRef();
  const [details, setDetails] = useState('');
  const [image, setImage] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (image.length > 0) {
      const files = [];
      image.map(async item => {
        const formData = new FormData();
        formData.append('file', {
          uri: item?.uri,
          type: item?.type,
          name: item?.fileName
        });
        const fileName = await uploadFile(accessToken, formData);
        console.log('fileName', fileName?.data?.name);
        files.push(fileName?.data?.name || '');
      });
      setFileNames(files);
    }
  };

  useEffect(() => {
    upload();
  }, [image]);

  const handleCreateTicket = async () => {
    setLoading(true);
    const data = {
      support_message: details,
      file: fileNames.join(',') || [],
      support_subject: subject
    };
    console.log(data);
    const res = await createSupportTickets(accessToken, data);
    console.log(res);
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
        <ImageBrowser images={image} setImages={setImage} />
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
    alignItems: 'center',
    paddingBottom: 200
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
    width: '100%',
    paddingBottom: 150
  }
});

export default CreateTicket;
