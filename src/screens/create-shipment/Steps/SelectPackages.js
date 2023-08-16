import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'src/components';

const SelectPackages = ({ data = [], handleCheckChange = () => {} }) => {
  return (
    <>
      <View style={styles.packages}>
        {data &&
          data.map((item, index) => (
            <CheckBox
              key={index}
              checked={item.selected}
              message={item?.tracking_id}
              messageHighlight={`  Dimension: ${item?.package_size}, Weight: ${item?.package_weight}`}
              setChecked={value => handleCheckChange(value, item?.id)}
            />
          ))}
      </View>
    </>
  );
};

export default SelectPackages;

const styles = StyleSheet.create({
  packages: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10
  }
});
