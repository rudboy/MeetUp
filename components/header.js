import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Button } from "react-native";
import axios from "axios"; // const axios = require('axios');
import { getStatusBarHeight } from "react-native-status-bar-height";

class Header extends React.Component {
  render() {
    return (
      <>
        <View style={{}} />
        <Image
          style={{ height: 100 }}
          source={{
            uri:
              "https://cdn-images-1.medium.com/max/1600/1*wWvpAhcV7J-ueQoThDw5BQ.jpeg"
          }}
        />
      </>
    );
  }
}

export default Header;
