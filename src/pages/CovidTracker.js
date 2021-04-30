import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCovidData} from '../actions';
function CovidTracker() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);
  const data = useSelector(state => state.CovidTrackerReducer);
  console.log('data', JSON.stringify(data));
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
          }}>
          <View>
            <Text>State</Text>
          </View>
          <View>
            <Text>Drop Down</Text>
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
        <Text>As on 08/06/2020 10:54:46</Text>
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
            <Text>100</Text>
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
            <Text>Confirmed</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>100</Text>
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
            <Text>Confirmed</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>100</Text>
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
            <Text>Confirmed</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CovidTracker;
