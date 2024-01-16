import React, { FC, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { app_string } from "../../app-string";
import { vh, vw } from "../../constants/dimentation";
import { ProgressBar } from "react-native-paper";
import {
  Ionicons,
  Octicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { h } from "../../constants/dimensions";

const Win = ({ navigation }: { navigation: any }) => {
  let handleWin = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
      }}
    >
      <StatusBar hidden />
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: vh(200),
            flexDirection: "column",
          }}
        >
          <Image
            source={require("../../../assets/images/girl-icon.png")}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
            }}
          />
          <View
            style={{
              marginTop: vh(20),
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#2f6eda",
              }}
            >
              Excellent!
            </Text>
            <View
              style={{
                marginTop: vh(30),
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "rgba(84,85,89,255)",
                }}
              >
                Good! Solid performance
              </Text>
            </View>
            <TouchableOpacity
              style={{
                // marginLeft: 30,
                marginTop: vh(20),
              }}
            >
              <View
                style={{
                  marginTop: vh(3),
                  //   marginLeft: 25,
                  borderWidth: 1,
                  width: vw(380),
                  height: vh(60),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: "#d1e5fe",
                  borderColor: "#d1e5fe",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#2f6eda",
                  }}
                >
                  You are rewareded with 8 points
                </Text>
                <AntDesign
                  name="pluscircle"
                  size={20}
                  color="#2f6eda"
                  style={{
                    marginLeft: 6,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
          style={{
            marginTop:vh(25)
          }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "rgba(84,85,89,255)",
              }}
            >
              Your Score
            </Text>
          </View>
          <View
          style={{
            marginTop:vh(25),
            flexDirection:'row'
          }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#2f6eda",
              }}
            >
              8
            </Text>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "rgba(84,85,89,255)",
              }}
            >
              /10
            </Text>
          </View>
          <TouchableOpacity
              style={{
                marginTop: vh(180),
              }}
              onPress={handleWin}
            >
              <View
                style={{
                  marginTop: vh(3),
                  borderWidth: 1,
                  width: vw(500),
                  height: vh(60),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: "#2f6eda",
                  borderColor: "#2f6eda",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                  }}
                >
                  Continue
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 4,
    height: vh(30),
    width: vw(26),
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: vh(2),
  },
});

export default Win;
