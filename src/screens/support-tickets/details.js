import React, { useState, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Linking
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  SearchBar,
  TextHighlight,
  Header,
  Title,
  TextInput,
  ImageBrowser
} from 'src/components';
import {
  editSupportTickets,
  getReceivedPackages,
  uploadFile,
  viewReceivedPackage,
  viewSupportTickets
} from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, TICKET_STATUS } from 'src/services/enums';
import moment from 'moment';
import { humanDifferenceDate, normalizeDate } from 'src/services/constants';
import { settings } from 'src/services/Settings';

const TicketDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currentUser }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState([]);
  const [fileNames, setFileNames] = useState([]);

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

  const handleGetSupportTicket = async () => {
    setLoading(true);
    const response = await viewSupportTickets(accessToken, id);
    console.log(response?.data);
    if (response.status === 200) {
      setItem(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetSupportTicket();
  }, []);

  const handleEditTicket = async () => {
    setLoading(true);
    const data = {
      support_message: message,
      file: fileNames.join(',') || [],
      id: id
    };
    console.log(data);
    const res = await editSupportTickets(accessToken, data);
    console.log(res);
    setImage([]);
    setFileNames([]);
    setMessage('');
    handleGetSupportTicket();
    setLoading(false);
  };

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <FlatList
            data={item?.chat_details || []}
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              paddingBottom: 10,
              marginBottom: 10,
              maxHeight: 400
            }}
            nestedScrollEnabled
            // initialScrollIndex={(item?.chat_details?.length || 1) - 1}
            renderItem={({ item: chat, index }) => (
              <View>
                {(!!chat?.reply_by_user || index === 0) && (
                  <View style={[styles.row, { marginBottom: 5 }]}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: '#e1f0ff',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                      <Text>{currentUser?.name[0]}</Text>
                    </View>
                    <Text style={{ marginLeft: 10, fontWeight: '500' }}>
                      You
                    </Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontWeight: '500',
                        color: 'lightgrey'
                      }}>
                      {humanDifferenceDate(chat?.created_at)}
                    </Text>
                  </View>
                )}
                {!!chat?.reply_by_admin && (
                  <View
                    style={[
                      styles.row,
                      { marginBottom: 5, justifyContent: 'flex-end' }
                    ]}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontWeight: '500',
                        color: 'lightgrey'
                      }}>
                      {humanDifferenceDate(chat?.created_at)}
                    </Text>
                    <Text style={{ marginRight: 10, fontWeight: '500' }}>
                      Admin
                    </Text>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: '#c9f7f5',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                      <Text>A</Text>
                    </View>
                  </View>
                )}
                <View
                  style={[
                    styles.myMsgContainer,
                    {
                      backgroundColor: chat?.reply_by_admin
                        ? '#c9f7f5'
                        : '#e1f0ff'
                    }
                  ]}>
                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.myMsg,
                      {
                        textAlign: chat?.reply_by_admin ? 'right' : 'left'
                      }
                    ]}>
                    {chat?.message?.replace(/<[^>]+>/g, '') || ''}
                  </Text>
                </View>
                {index === 0 && !!item?.ticket_details?.user_attachments && (
                  <View style={styles.myMsgContainer}>
                    <View style={styles.row}>
                      <Entypo
                        name="attachment"
                        size={20}
                        color="#3699ff"
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        adjustsFontSizeToFit={true}
                        style={[styles.myMsg, { color: '#3699ff' }]}>
                        Attachment
                      </Text>
                    </View>
                    <Image
                      source={{
                        uri: `${settings?.imagePath}/${item?.ticket_details?.user_attachments}`
                      }}
                      style={{ width: '100%', height: 200, borderRadius: 5 }}
                    />
                  </View>
                )}
                {!!chat?.chat_attachment && (
                  <View style={styles.myMsgContainer}>
                    <View style={styles.row}>
                      <Entypo
                        name="attachment"
                        size={20}
                        color="#3699ff"
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        adjustsFontSizeToFit={true}
                        style={[styles.myMsg, { color: '#3699ff' }]}>
                        Attachment
                      </Text>
                    </View>
                    <Image
                      source={{
                        uri: `${settings?.imagePath}/${chat?.chat_attachment}`
                      }}
                      style={{ width: '100%', height: 200, borderRadius: 5 }}
                    />
                  </View>
                )}
              </View>
            )}
          />
          <TextInput
            label="Type a message"
            placeholder=""
            value={message}
            onChangeText={value => setMessage(value)}
          />
          <ImageBrowser images={image} setImages={setImage} />
        </View>
        <View style={styles.buttonsContainer}>
          <Button loading={loading} label="Send" onPress={handleEditTicket} />
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
  flatlist: {
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    padding: 10
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    width: '40%'
  },
  subHeading: {
    fontSize: 14,
    width: '60%',
    marginLeft: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  newShipmentContainer: {
    position: 'absolute',
    bottom: 110,
    right: 20,
    backgroundColor: '#1584F7',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 5
  },
  newShipmentText: {
    width: '100%',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center'
  },
  myMsgContainer: {
    backgroundColor: '#e1f0ff',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10
  },
  myMsg: {
    color: '#7e8299',
    fontSize: 14,
    fontWeight: '500'
  },
  buttonsContainer: {
    width: '100%',
    paddingBottom: 150
  }
});

export default TicketDetails;
