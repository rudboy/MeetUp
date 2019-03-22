import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from "react-native";
import axios from "axios"; // const axios = require('axios');
import Icon from "react-native-vector-icons/Ionicons";

const myIcon2 = <Icon name="ios-person" size={10} color="grey" />;

class Body extends React.Component {
  render() {
    let String_description = this.props.descrip.split("<p><span>").join("");
    String_description = String_description.split("</span></p>").join("");
    String_description = String_description.split("<br></p>").join("");
    String_description = String_description.split("</p>").join("");
    String_description = String_description.split("<p>").join("");

    //console.log(this.props.description);
    return (
      <>
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 12,
              marginRight: 20
            }}
          >
            {myIcon2} Nombre de Membre({this.props.numberGroupe})
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 20 }}>
            Categorie: {this.props.cate}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500"
            }}
          >
            Description
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5F6F7"
          }}
        >
          <Text style={{ color: "grey", margin: 10 }}>
            {String_description}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ paddingBottom: 10, fontWeight: "500" }}>
            Organisateur
          </Text>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{
              uri:
                "https://secure.meetupstatic.com/photos/member/d/3/0/6/highres_271794022.jpeg"
            }}
          />
        </View>
      </>
    );
  }
}

export default Body;
