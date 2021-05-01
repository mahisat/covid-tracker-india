import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCovidData} from '../actions';
import MyDropdown from '../components/MyDropdown';
function CovidTracker() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCovidData();
  }, []);
  const getCovidData = () => {
    dispatch(fetchCovidData());
  };

  const [state, setSelectedState] = useState('Total');
  const {covidData, isFetchLoading, isFetchNetworkFailed} = useSelector(
    state => state.CovidTrackerReducer,
  );
  const stateWiseData = covidData?.statewise;
  const stateList =
    stateWiseData?.length > 0
      ? stateWiseData.map(state =>
          state.state == 'Total'
            ? {name: 'All', value: state.state}
            : {name: state.state, value: state.state},
        )
      : [];
  const filteredData =
    stateWiseData?.length > 0
      ? stateWiseData.filter(item => state == item.state)
      : [];
  const onDropDownChange = (name, value) => {
    setSelectedState(value);
  };
  const {
    active = '',
    confirmed = '',
    deaths = '',
    lastupdatedtime = '',
    recovered = '',
  } = filteredData[0] || {};
  const Row = props => {
    const {label, value} = props;
    return (
      <View style={styles.dataContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{label}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#ccc',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 20}}>
          Covid 19 Metrics
        </Text>
        <Text style={{fontSize: 16, marginBottom: 20}}>India</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 0.3, alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>State</Text>
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
        }}>
        {isFetchLoading && <ActivityIndicator size="large" color={'blue'} />}
        {!isFetchLoading && isFetchNetworkFailed && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 30}}>
              Some Failure Occured!
            </Text>
            <Button
              onPress={() => getCovidData()}
              title="Try Again"
              color="blue"
            />
          </View>
        )}
        {!isFetchLoading && !isFetchNetworkFailed && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', marginVertical: 20, fontSize: 16}}>
              As on {lastupdatedtime}
            </Text>
            <Row label={'Confirmed'} value={confirmed} />
            <Row label={'Active'} value={active} />
            <Row label={'Recovered'} value={recovered} />
            <Row label={'Death'} value={deaths} />
          </View>
        )}
      </View>
    </View>
  );
}
export default CovidTracker;

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
