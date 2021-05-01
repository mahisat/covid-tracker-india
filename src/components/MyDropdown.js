import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text} from 'react-native';

function MyDropdown(props) {
  const {onChange, name, value, data} = props;
  return (
    <View
      style={{
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
      }}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChange(name, itemValue)}>
        {data.map((item, index) => {
          return (
            <Picker.Item label={item.name} value={item.value} key={index} />
          );
        })}
      </Picker>
    </View>
  );
}
export default MyDropdown;
