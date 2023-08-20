import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button';

const MembershipCard = ({
  name = 'Silver',
  isCurrent = false,
  isFree = false,
  price = '',
  freeStorage = '30 days',
  storageFee = 1,
  photoRequestFee = '$5',
  boxInspectionFee = '$10',
  returningItemFee = '$50',
  sellerTrackingNumberRequest = '$10',
  repackingFee = '$20',
  advacingPackingFee = '$25',
  delicateFee = '$',
  isUpgradeable = false
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>{name}</Text>
        {isCurrent && (
          <View style={styles.current}>
            <Text style={styles.currentText}>Current</Text>
          </View>
        )}
      </View>
      <View style={styles.price}>
        <Text style={styles.heading}>{isFree ? 'Free' : price}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>{`${freeStorage} FREE Storage`}</Text>
        <Text style={styles.subText}>
          No charges for storing your item in our warehouse
        </Text>
        <Text style={styles.text}>{`$${storageFee}/Day Storage Fees`}</Text>
        <Text style={styles.subText}>Storage fees after 30 days</Text>
        <Text style={styles.text}>{`${photoRequestFee} Photo Request`}</Text>
        <Text style={styles.subText}>Get photo of the item you ordered</Text>
        <Text style={styles.text}>{`${boxInspectionFee} Box Inspection`}</Text>
        <Text style={styles.subText}>
          Our team insepct the item you ordered
        </Text>
        <Text
          style={styles.text}>{`${returningItemFee} for Returning Item`}</Text>
        <Text style={styles.subText}>
          Return item if you're not satisfied with the seller (For USA)
        </Text>
        <Text
          style={
            styles.text
          }>{`${sellerTrackingNumberRequest} Seller Tracking Number Request`}</Text>
        <Text style={styles.subText}>
          Tracking number from website to warehouse (USA)
        </Text>
        <Text
          style={
            styles.text
          }>{`${repackingFee} Repacking (20 Tracking Numbers)`}</Text>
        <Text style={styles.subText}>Open box and combine all parcels</Text>
        <Text
          style={styles.text}>{`${advacingPackingFee} Advancing Packing`}</Text>
        <Text style={styles.subText}>
          Packing with air pillow / paper / cardboards so the boxes filled and
          sturdy (for 10 Tracking Numbers)
        </Text>
        <Text
          style={
            styles.text
          }>{`${delicateFee} Delicate and Extra Care Repack`}</Text>
        <Text style={styles.subText}>
          Bubble wrap each item such as plates,glasses, bicycle, guitar etc
        </Text>
      </View>
      {isUpgradeable && (
        <View style={{ width: '100%' }}>
          <Button
            customStyle={{
              paddingHorizontal: 30,
              paddingVertical: 5
            }}
            label="Upgrade"
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },
  heading: {
    fontSize: 20,
    fontWeight: '500'
  },
  message: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  current: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1bc5bd',
    borderRadius: 5
  },
  currentText: {
    fontSize: 12,
    color: '#fff'
  },
  price: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(54,153,255,.04)',
    borderRadius: 10,
    marginTop: 10
  },
  card: {
    backgroundColor: '#fff'
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 10
  },
  subText: {
    fontSize: 12,
    color: '#7e8299',
    marginTop: 5
  }
});

export default MembershipCard;
