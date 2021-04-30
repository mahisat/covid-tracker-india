import React from 'react';
import {Picker} from '@react-native-picker/picker';

function MyDropdown(props) {
  const {onChange, name, value, data} = props;
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => onChange(name, itemValue)}>
      {data.map(item => {
        return <Picker.Item label={item} value={item} />;
      })}
    </Picker>
  );
}
export default MyDropdown;
