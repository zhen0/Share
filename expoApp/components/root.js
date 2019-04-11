import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import styles from "../style";

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={styles.box}>
              <Text style={styles.header}>Welcome </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.paragraph}>
                The idea of this app is to set up a community that shares the
                strollers, scooters, bikes, toys and more that our kids want but
                our apartments can not hold!{" "}
              </Text>
            </View>

            <Image
              source={{
                uri:
                  "https://freedesignfile.com/upload/2017/09/Happy-little-girl-playing-doll-house-filled-with-mini-furniture-toys-Stock-Photo-07.jpg"
              }}
              style={{ width: 400, height: 400, borderRadius: 8 }}
            />
            {/* <SignUp /> */}
          </View>

          <View style={styles.box}>
            <Text>Sign Up</Text>
          </View>

          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="name"
              onChangeText={name => this.setState({ name })}
            />
            <View style={{ padding: 10 }}>
              <TextInput
                style={{ height: 40 }}
                placeholder="address"
                onChangeText={address => this.setState({ address })}
              />
            </View>
          </View>

          <Button
            onPress={() => {
              console.log(this.state);
              Alert.alert("You have been added!");
            }}
            title="Add Me"
          />

          <Text>{this.state.name}</Text>
          <Text>{this.state.address}</Text>
        </View>
      </ScrollView>
    );
  }
}
