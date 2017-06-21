import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import Swipeable from 'react-native-swipeable';
import Swipeout from 'react-native-swipeout';

export default class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const startTime = moment(this.props.startTs).format('LT');
    const endTime = moment(this.props.endTs).format('LT');

    const eventItem = (
      <View style={styles.item}>
        <View style={styles.eventName}><Text style={styles.darkColorText}>{/*this.props.title*/'Title'}</Text></View>
        <View style={styles.eventTime}><Text style={styles.darkColorText}>{/*startTime*/'Time'}</Text></View>
        <View style={styles.eventLocation}><Text style={styles.darkColorText}>{/*this.props.location*/'Location'}</Text></View>
      </View>

    );
    const leftContent = <Text>Pull to activate</Text>;

    const rightButtons = [
      <TouchableHighlight style={styles.deleteButton}><Text style={styles.lightColorText}><Icon name="times" size={15} /></Text></TouchableHighlight>,
      <TouchableHighlight style={styles.editButton}><Text style={styles.lightColorText}><Icon name="pencil" size={15} /></Text></TouchableHighlight>
    ];

    return (
      <View>
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
          <View style={styles.item}>
            <View style={styles.eventName}><Text style={styles.darkColorText}>{this.props.title}</Text></View>
            <View style={styles.eventTime}><Text style={styles.darkColorText}>{startTime}</Text></View>
            <View style={styles.eventLocation}><Text style={styles.darkColorText}>{'Location'}</Text></View>
          </View>
        </Swipeable>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  border:{
    borderWidth: 1
  },
  lightColorText: {
    color: "#F5FCFF",
  },
  darkColorText: {
    color: "#888",
  },
  item: {
   backgroundColor: '#F5FCFF',
   height: 60,
   borderColor: '#bbb',
   borderBottomWidth: 1,
   borderLeftColor: '#17dfab',
   borderLeftWidth: 5,
   flexDirection: 'row',
   alignItems: 'center',
   padding: 15,
   margin: 2,
 },
 deleteButton:{
   backgroundColor: '#f94792',
//   backgroundColor: '#F5FCFF',
   height: 60,
   borderColor: '#bbb',
   borderBottomWidth: 1,
   margin: 2,
   justifyContent: 'center',
//   padding: 18,
   paddingLeft: 32

 },
 deleteButtonText: {
   color: '#f94792'
 },
 editButton:{
   backgroundColor: '#fae36d',
  // backgroundColor: '#F5FCFF',
   height: 60,
   borderBottomColor: '#888',
   borderBottomWidth: 1,
   margin: 2,
   justifyContent: 'center',
  // padding: 22,
   paddingLeft: 28,
   borderLeftColor: 'ghostwhite',
   borderLeftWidth: 4
 },
 editButtonText: {
   color: '#fae36d'
 },
 eventsText:{
   color: '#fff',
   fontSize: 16,
 },
 eventName:{
   flex: 1,
 },
 eventTime:{
   flex: 1
 },
 eventLocation:{
   flex: 1
 }
});
