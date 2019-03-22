/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Statusbar
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Logo from "./components/logoPresentation";
import axios from "axios"; // const axios = require('axios');
import Body from "./components/bodyPresentation";
import Evenement from "./components/listevent";
import Header from "./components/header";
import { getStatusBarHeight } from "react-native-status-bar-height";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// type Props = {};
export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "MeetUp LeReacteur" },
      { key: "second", title: "Event LeReacteur" }
    ],
    groupName: "",
    numberMember: "",
    category: "",
    description: "",
    tab: []
  };
  renderTabs = props => (
    <>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "blue" }}
        style={{ backgroundColor: "#EA3554" }}
      />
    </>
  );

  _renderTabs = props => {
    return (
      <View>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => this.setState({ index: i })}
            >
              <Text style={styles.tabBarText}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    // console.log(this.state.groupName)
    let FirstRoute = () => (
      <ScrollView style={[styles.scene, { backgroundColor: "white" }]}>
        <Logo nameGroupe={this.state.groupName} />
        <Body
          numberGroupe={this.state.numberMember}
          cate={this.state.category}
          descrip={this.state.description}
        />
      </ScrollView>
    );
    let SecondRoute = () => (
      <View style={[styles.scene, { backgroundColor: "white" }]}>
        <Evenement eventInfo={this.state.tab} />
      </View>
    );

    return (
      <>
        <View
          style={{
            paddingTop: Platform.OS === "ios" ? 40 : 0,
            backgroundColor: "white"
          }}
        >
          <Header />
        </View>

        <TabView
          navigationState={this.state}
          renderTabBar={this.renderTabs}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        />
      </>
    );
  }
  componentDidMount = async () => {
    try {
      // On charge les données ici
      const response = await axios.get(
        "https://api.meetup.com/LeReacteurIO?&sign=true&photo-host=public&key=5c84e557fb3e4970643a15094d26"
      );
      //console.log(response.data);

      this.setState({
        groupName: response.data.name,
        numberMember: response.data.members,
        category: response.data.category.name,
        description: response.data.description
      });

      const Eresponse = await axios.get(
        "https://api.meetup.com/LeReacteurIO/events?&sign=true&photo-host=public&key=5c84e557fb3e4970643a15094d26"
      );
      //console.log(Eresponse.data);

      this.setState({
        tab: Eresponse.data
      });

      //console.log(this.state.todos);

      // Un nouveau render sera déclenché
    } catch (error) {}
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  scene: {
    flex: 1
  },
  tabBarText: {
    fontSize: 20,
    color: "white"
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    borderBottomColor: "blue",
    borderBottomWidth: 2,

    backgroundColor: "#EA3554"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
