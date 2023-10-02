import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Button,
  TextInput,
  RichTextInput,
  ImageBrowser,
  RadioButton,
  MessageBox
} from 'src/components';
import { paymentSchedules } from 'src/services/constants';
import { createBuyForMe, uploadFile } from 'src/services/api/ApiManager';

const CreateOrder = ({ route }) => {
  const navigation = useNavigation();
  const [{ accessToken }] = useStateValue();
  let richText = useRef();
  const [details, setDetails] = useState('');
  const [image, setImage] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [paymentSchedule, setPaymentSchedule] = useState('');
  const [showTopMessage, setShowTopMessage] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [state, setState] = useState({
    price: '',
    total_websites: '',
    note: ''
  });
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

  const handleStateChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const handlePaymentChange = value => {
    setPaymentSchedule(value);
  };

  const handleCreateOrder = async () => {
    setLoading(true);
    const order = {
      price: state.price,
      total_websites: parseInt(state.total_websites, 0),
      file: fileNames || [],
      price_schedule: paymentSchedule,
      product_detail: details,
      notes: state.note
    };
    const res = await createBuyForMe(accessToken, order);
    if (res && res.data && res.data.data) {
      Alert.alert('Order successfully created', `${res.data.message}`);
      navigation.navigate('BuyForMe');
    }
    setLoading(false);
  };

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.topRow}>
          <View />
          <Feather
            name="info"
            color="#1584F7"
            size={25}
            onPress={() => setShowTopMessage(true)}
          />
        </View>
        <TextInput
          label="Total Product Price (USD) "
          placeholder=""
          value={state.price}
          onChangeText={value => handleStateChange('price', value)}
          keyboardType="number-pad"
        />
        <TextInput
          label="Number of Website(s) "
          placeholder=""
          value={state.total_websites}
          onChangeText={value => handleStateChange('total_websites', value)}
          keyboardType="number-pad"
        />
        <RadioButton
          label="Product Payment Schedule"
          checked={paymentSchedule}
          setChecked={handlePaymentChange}
          items={paymentSchedules}
          helperMessage="For 50% payment option we only deliver your product after paying remaining 50% once we have successfuly bought your product."
        />
        <RichTextInput
          value={details}
          label="Product Details"
          placeholder="Please tap on info icon and follow the example."
          onChangeText={value => setDetails(value)}
          ref={richText}
          info
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(!showInfo)}
        />
        <ImageBrowser
          images={image}
          setImages={setImage}
          attachmentTitle="Screenshot of your Cart/Basket"
          attachmentMessage="Please upload image file only less than 5 MB in size."
        />
        <TextInput
          label="Note/Message "
          placeholder=""
          multiline
          numberOfLines={5}
          helperMessage="Including any coupon code you want to use in the website"
          value={state.note}
          onChangeText={value => handleStateChange('note', value)}
        />
        <View style={styles.buttonsContainer}>
          <Button
            loading={loading}
            label="Create Order"
            onPress={handleCreateOrder}
          />
          <Button
            label="Cancel"
            onPress={() => navigation.goBack()}
            fill={false}
            danger
            disabled={false}
          />
        </View>
      </ScrollView>
      <Modal
        visible={showInfo}
        transparent
        style={styles.modal}
        animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowInfo(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.messageBox}>
          <MessageBox
            borderRadius={13}
            message={`Link
Item Name
Item SKU / Model name
Detail item
Price
Quantity

Example:
https://www.fossil.com/en-us/products/farrah-crossbody/SHB2756558.html
FARRAHCROSSBODY
Item #: SHB2756558
Size: XL
Price: $65`}
          />
        </View>
      </Modal>
      <Modal
        visible={showTopMessage}
        transparent
        style={styles.modal}
        animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowTopMessage(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.messageBox}>
          <MessageBox
            borderRadius={13}
            message={
              "We will purchase within 1-2 working days. If you want item to be purchased immediately, you can opt to purchase on your own with the locker number and address in your account dashboard. Note : This is item price + USA Ground shipment only. You'll pay final shipping charges once your shipment has been finalized."
            }
            type="info"
          />
        </View>
      </Modal>
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
  }
});

export default CreateOrder;
