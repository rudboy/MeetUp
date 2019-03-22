import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  RefreshControl
} from "react-native";
import axios from "axios"; // const axios = require('axios');
import Icon from "react-native-vector-icons/Ionicons";

const myIcon = <Icon name="ios-pin" size={10} color="grey" />;
const myIcon2 = <Icon name="ios-person" size={10} color="grey" />;

class Event extends React.Component {
  getInfo = tab => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            fontWeight: "600",
            color: "#EA3554"
          }}
        >
          Evenement à venir
        </Text>
        <FlatList
          data={tab}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#F5F6F7",
                height: 240,
                marginBottom: 20,
                marginTop: 20,
                borderRadius: 10,
                width: 280
              }}
            >
              <View style={{ margin: 10 }}>
                <Text style={{ color: "#3082A5", fontWeight: "600" }}>
                  {item.local_date}
                </Text>
                <Text
                  style={{
                    color: "#70797F",
                    fontWeight: "600",
                    fontSize: 20,
                    marginBottom: 10
                  }}
                >
                  {item.group.name}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  {myIcon}
                  {" " + item.venue.address_1 + ","} {item.venue.city}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  {myIcon2}
                  {" " + item.rsvp_limit} Participants
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      height: 80,
                      width: 100,
                      borderRadius: 5,
                      marginRight: 30,
                      marginLeft: 15
                    }}
                    source={{
                      uri:
                        "https://secure.meetupstatic.com/photos/event/6/a/a/e/600_477387310.jpeg"
                    }}
                  />
                  <View style={{ height: 20, marginTop: 15 }}>
                    <Button title="Participer" color="#3082A5" />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <>
        <View>{this.getInfo(this.props.eventInfo)}</View>
      </>
    );
  }
}

export default Event;
