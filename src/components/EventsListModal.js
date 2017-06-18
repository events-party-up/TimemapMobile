import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ListItem,
  ScrollView
} from 'react-native';

import {connect} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getDayEvents} from '../states/calendar-actions';
import EventItem from './EventItem.js'

class EventsListModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      eventHeaderDate: 'Na'
    }

  }
  componentWillMount(){
    const date = this.props.date;
    const dateString = moment(date).format('MMMM D,   YYYY');
    console.log(dateString);
    this.setState({
      eventHeaderDate: dateString
    });
  }

  render() {
    const events = this.props.dayEvents;
    let children = (
        <View style={styles.empty}>
            <Text>No Events. Time to relax!</Text>
        </View>
    );
    if(events){
        if (events.length) {
            children = events.map((e, i) => (
                  <EventItem key={i} {...e}/>
            ));
        }
    }
    const eventItem = (
      <View style={styles.item}>
        <View style={styles.eventName}><Text>Event</Text></View>
        <View style={styles.eventTime}><Text>Location</Text></View>
        <View style={styles.eventLocation}><Text>Time</Text></View>
      </View>
    );

    return (
      <View>
        <View style={{padding: 0, height: 80}}>
          <View style={styles.dayHeader}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.eventsText}>Events</Text>
                <Text style={styles.dayHeaderText}>{this.state.eventHeaderDate}</Text>
              </View>
              <View style={{ justifyContent: 'center', marginRight: 15}}>
                <TouchableOpacity onPress={() => this.setState({isModalVisible: false})}>
                  <Icon name="plus"
                  color='#fff'
                  title="add"
                  size={20}
                  >
                  </Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{maxHeight: 390}}>
          {children}
        </ScrollView>
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
   marginRight: 5,
   marginLeft: 5
 },
 empty:{
   height: 80,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 5
 },
 dayHeader: {
    flex: 1,
    backgroundColor: '#17dfab',
    padding: 15,
    paddingLeft: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 80,
    marginBottom: 5
 },
 eventsText:{
   color: '#fff',
   fontSize: 16,
 },
 dayHeaderText: {
   color: '#fff',
   fontSize: 22,
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

export default connect(state => ({
    dayEvents: state.calendar.dayEvents
}))(EventsListModal);
