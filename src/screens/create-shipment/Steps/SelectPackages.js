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
              message={item.tracking_code}
              messageHighlight={`  Dimension: ${item.size}, Weight: ${item.weight}`}
              setChecked={value => handleCheckChange(value, index)}
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
