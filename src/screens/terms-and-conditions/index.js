import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Button, Text, Header, Label } from 'src/components';

const TermsAndConditions = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Label label="Terms and Conditions" />
        <View style={styles.body}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.
          </Text>
          <Text style={styles.text}>
            Quaerat provident commodi consectetur veniam similique ad earum
            omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
            labore suscipit quas? Nulla, placeat. Voluptatem quaerat non
            architecto ab laudantium modi minima sunt esse temporibus sint
            culpa, recusandae aliquam numquam totam ratione voluptas quod
            exercitationem fuga. Possimus quis earum veniam quasi aliquam
            eligendi, placeat qui corporis!
          </Text>
          <Text style={styles.text}>
            Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
            debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!
          </Text>
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
    width: '100%',
    marginBottom: 50
  },
  text: {
    fontSize: 14,
    color: '#5A5A6E',
    marginTop: 15
  }
});

export default TermsAndConditions;
