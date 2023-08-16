import React from 'react';
import { TextInput } from 'src/components';

const CustomerDetails = ({
  customerName = '',
  setCustomerName = () => {},
  customerEmail = '',
  setCustomerEmail = () => {},
  customerPhone = '',
  setCustomerPhone = () => {}
}) => {
  return (
    <>
      <TextInput
        label="Customer Name"
        placeholder=""
        value={customerName}
        onChangeText={value => setCustomerName(value)}
      />
      <TextInput
        label="Phone Number"
        placeholder=""
        value={customerPhone}
        onChangeText={value => setCustomerPhone(value)}
      />
      <TextInput
        label="Email"
        placeholder=""
        value={customerEmail}
        onChangeText={value => setCustomerEmail(value)}
      />
    </>
  );
};

export default CustomerDetails;
