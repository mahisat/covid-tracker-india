import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCovidData} from '../actions';
import MyDropdown from '../components/MyDropdown';
function CovidTracker() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);
  const [state, setSelectedState] = useState('Total');
  const {covidData} = useSelector(state => state.CovidTrackerReducer);
  const stateWiseData = covidData?.statewise;
  const stateList =
    stateWiseData?.length > 0 ? stateWiseData.map(state => state.state) : [];
  const filteredData =
    stateWiseData?.length > 0
      ? stateWiseData.filter(item => state == item.state)
      : [];
  const onDropDownChange = (name, value) => {
    setSelectedState(value);
  };
  const {
    active,
    confirmed,
    deaths,
    lastupdatedtime,
    recovered,
  } = filteredData[0];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Covid 19 Metrics</Text>
        <Text style={{fontSize: 16}}>India</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>State</Text>
          </View>
          <View style={{flex: 0.5}}>
            <MyDropdown
              value={state}
              name="state"
              onChange={onDropDownChange}
              data={stateList}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>As on {lastupdatedtime}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>Confirmed</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>{confirmed}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>Active</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>{active}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>Recovered</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>{recovered}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>Death</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>{deaths}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CovidTracker;
