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
} from "@expo/vector-icons";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { h } from "../../constants/dimensions";

const Wrong = ({ navigation }: { navigation: any }) => {
  let handleWrong = () => {
    navigation.navigate("Lost");
  };
  let handleTry = () => {
    navigation.navigate("NewChallenge");
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
            flexDirection: "row",
            marginTop: vh(30),
            alignItems: "center",
            borderRadius: 5,
            marginLeft: vw(60),
          }}
        >
          <View
            style={{
              marginRight: vw(30),
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              1/10
            </Text>
          </View>
          <ProgressBar
            style={{
              width: vw(300),
            }}
            progress={0.1}
            color={"#2f6eda"}
          />
          <MaterialCommunityIcons
            name="close-circle"
            size={30}
            color="#7d8db0"
            style={{
              marginLeft: vw(20),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: vh(30),
          }}
        >
          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 50,
              marginTop: vh(25),
              backgroundColor: "red",
              borderRadius: 10,
              borderColor: "red",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              N
            </Text>
          </View>

          <View
            style={styles.inputText}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              E
            </Text>
          </View>

          <View
             style={styles.inputText}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              L
            </Text>
          </View>

          <View
            style={styles.inputText}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              A
            </Text>
          </View>

          <View
             style={styles.inputText}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              P
            </Text>
          </View>

          <View
             style={styles.inputText}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color:'#FFFFFF'
              }}
            >
              T
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 50,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Defination
          </Text>
        </View>
        <View
          style={{
            marginLeft: 50,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              paddingTop: vh(10),
              color: "rgba(84,85,89,255)",
            }}
          >
            A celestial body that orbits around a star, such as {"\n"}the Earth
            around the sun.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                marginTop: vh(30),
                marginLeft: 50,
                borderWidth: 1,
                width: vw(120),
                height: vh(40),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                backgroundColor: "#2f6eda",
                borderColor: "#2f6eda",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Hint
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginTop: vh(30),
                marginLeft: 25,
                borderWidth: 1,
                width: vw(120),
                height: vh(40),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                backgroundColor: "#d1e5fe",
                borderColor: "#d1e5fe",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#2f6eda",
                }}
              >
                Reveal
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row-reverse",
            marginLeft: 30,
            marginTop:vh(110),
          }}
        >
          <View
            style={{
              marginTop: vh(30),
              marginLeft: 25,
              borderWidth: 1,
              width: vw(120),
              height: vh(40),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              backgroundColor: "#d1e5fe",
              borderColor: "#d1e5fe",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                color: "#2f6eda",
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: vh(100) * 2.5,
            marginTop: vh(100),
          }}
        >
          <View
            style={{
              flexDirection:'column',
              marginTop: 30,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <View
              style={{
                justifyContent: "center",
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
            </View>
            <View
              style={{
                justifyContent: "center",
                marginVertical:10,

              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
               Oops! Try again!
              </Text>
            </View>
          </View>
          <View
          style={{
            flexDirection: "row",
            justifyContent:'space-around'
          }}
        >
          <TouchableOpacity
          onPress={handleTry}
          >
            <View
              style={{
                marginTop: vh(30),
                // marginLeft: 50,
                borderWidth: 1,
                width: vw(120),
                height: vh(40),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                backgroundColor: "#d1e5fe",
                borderColor: "#d1e5fe",
                
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#2f6eda",
                }}
              >
                Try Again
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                alignItems: "center",

              }}
            >
              <MaterialCommunityIcons
            name="close-circle"
            size={60}
            color="red"
          />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleWrong}
          >
            <View
              style={{
                marginTop: vh(30),
                // marginLeft: 25,
                borderWidth: 1,
                width: vw(120),
                height: vh(40),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                backgroundColor: "#2f6eda",
                borderColor: "#2f6eda",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
  inputText: {
    borderWidth: 1,
    height: vh(38),
    justifyContent: "center",
    width: vw(35),
    marginLeft: 15,
    marginTop: vh(25),
    backgroundColor: "red",
    borderRadius: 10,
    borderColor: "red",
  },
});

export default Wrong;
