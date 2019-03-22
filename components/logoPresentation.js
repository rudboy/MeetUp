import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Button } from "react-native";
import axios from "axios"; // const axios = require('axios');

class Logo extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            height: 140,
            marginTop: 10,
            marginRight: 10,
            marginLeft: 10,
            paddingLeft: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5F6F7",
            borderRadius: 10
          }}
        >
          <Image
            style={{ borderRadius: 10, width: 150, height: 100, flex: 1 }}
            source={{
              uri:
                "https://secure.meetupstatic.com/photos/event/1/7/a/8/600_470586056.jpeg"
            }}
          />
          <Text
            style={{
              flex: 1,
              paddingLeft: 10,
              marginRight: 10,
              fontSize: 20
            }}
          >
            {this.props.nameGroupe}
          </Text>
        </View>
      </>
    );
  }
}

export default Logo;
