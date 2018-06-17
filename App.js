import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { getChineseGardenMRTTimingsInfo, getMoviesListFromFB } from './GetBusTimings';

export default class MySGBusTimings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoading: true, dataSource: {}};

    let api_url = 'https://arrivelah.herokuapp.com/?id=';
    let chinese_garden_bus_stop_id = '28341';
    this.req_url = api_url + chinese_garden_bus_stop_id;
    this.req_url = 'https://facebook.github.io/react-native/movies.json';
  }

  componentDidMount() {
    getMoviesListFromFB(this.req_url)
      .then((movieList) => {
        this.setState({
            isLoading: false,
            dataSource: JSON.stringify(movieList)
          });
        });
  }

  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, paddingTop:20}}>
          <Text> {this.state.dataSource} </Text>
        </View>
      );
    }
  }
}
