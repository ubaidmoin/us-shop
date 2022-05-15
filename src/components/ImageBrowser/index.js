import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ImageBrowser = ({
  image,
  setImage,
  attachmentTitle = 'Attachments',
  attachmentMessage = 'Please upload image/pdf only less than 5 MB in size.'
}) => {
  const openImageSelector = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'mixed',
        quality: 0.6,
        includeBase64: true
      },
      response => {
        if (response.assets && response.assets[0]) {
          setImage(response.assets[0]);
        }
      }
    );
  };
  const handleRemoveImage = () => setImage(null);

  return (
    <>
      <TouchableOpacity style={styles.browser} onPress={openImageSelector}>
        <Text style={styles.title}>{attachmentTitle}</Text>
        <Text style={styles.message}>{attachmentMessage}</Text>
      </TouchableOpacity>
      {!!image && (
        <View style={styles.selectedImage}>
          <Text style={styles.selectedImageText}>{image.fileName}</Text>
          <AntDesign
            name="closecircle"
            color="red"
            size={25}
            onPress={handleRemoveImage}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  browser: {
    padding: 10,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#b5b5c3',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center'
  },
  message: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#b5b5c3',
    textAlign: 'center'
  },
  selectedImage: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginTop: 25,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selectedImageText: {
    width: '90%',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default ImageBrowser;
