import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShippingStatusStepper = ({ admin_notes = '', shipping_status = 0 }) => {
  return (
    <View style={[styles.card, { marginBottom: 10, padding: 10 }]}>
      <Text style={[styles.subHeading, { width: '100%' }]}>
        {admin_notes || ''}
      </Text>
      <Text style={[styles.heading, { width: '100%' }]}>
        Admin Notes/Updates:
      </Text>
      <View style={styles.stepperRow}>
        <View style={{ width: '20%' }}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              width: '100%'
            }}>
            <MaterialCommunityIcons
              name={
                shipping_status === 0
                  ? 'checkbox-marked-circle-outline'
                  : 'radiobox-marked'
              }
              size={20}
              color="#3699ff"
            />
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              width: '100%'
            }}>
            <MaterialCommunityIcons
              name={
                shipping_status === 1
                  ? 'checkbox-marked-circle-outline'
                  : 'radiobox-marked'
              }
              size={20}
              color={shipping_status < 1 ? '#404254' : '#3699ff'}
            />
          </View>
          <View
            style={{
              height: 70,
              justifyContent: 'center',
              width: '100%'
            }}>
            <MaterialCommunityIcons
              name={
                shipping_status === 2
                  ? 'checkbox-marked-circle-outline'
                  : 'radiobox-marked'
              }
              size={20}
              color={shipping_status < 2 ? '#404254' : '#3699ff'}
            />
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              width: '100%'
            }}>
            <MaterialCommunityIcons
              name={
                shipping_status === 3
                  ? 'checkbox-marked-circle-outline'
                  : 'radiobox-marked'
              }
              size={20}
              color={shipping_status < 3 ? '#404254' : '#3699ff'}
            />
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              width: '100%'
            }}>
            <MaterialCommunityIcons
              name={
                shipping_status === 4
                  ? 'checkbox-marked-circle-outline'
                  : 'radiobox-marked'
              }
              size={20}
              color={shipping_status < 4 ? '#404254' : '#3699ff'}
            />
          </View>
        </View>
        <View style={{ width: '80%' }}>
          <View style={{ width: '100%', height: 50 }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              Shipment Pending
            </Text>
            <Text style={[styles.subHeading, { width: '100%' }]}>
              In Overseas Warehouse
            </Text>
          </View>
          <View style={{ width: '100%', height: 50 }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              Departed
            </Text>
            <Text style={[styles.subHeading, { width: '100%' }]}>
              Shipment left your overseas locker
            </Text>
          </View>
          <View style={{ width: '100%', height: 70 }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              Transit
            </Text>
            <Text style={[styles.subHeading, { width: '100%' }]}>
              Pending available connecting flight, Custom & airport clearance
            </Text>
          </View>
          <View style={{ width: '100%', height: 50 }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              Shipment Dispatch
            </Text>
            <Text style={[styles.subHeading, { width: '100%' }]}>
              Out for delivery
            </Text>
          </View>
          <View style={{ width: '100%', height: 50 }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              Delivered
            </Text>
            <Text style={[styles.subHeading, { width: '100%' }]}>
              Shipment delivered
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: '60%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  stepperRow: {
    flexDirection: 'row',
    width: '100%',
    padding: 5
  }
});

export default ShippingStatusStepper;
