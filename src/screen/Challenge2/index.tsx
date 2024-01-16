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

const NewChallenge = ({ navigation }: { navigation: any }) => {
  let handleNewChallenge = () => {
    navigation.navigate("Win");
  };
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");
  const [text5, onChangeText5] = React.useState("");
  const [text6, onChangeText6] = React.useState("");

  const showToast = () => {
    ToastAndroid.show("Good Job", ToastAndroid.LONG);
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
              2/10
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
              backgroundColor: "#2f6eda",
              borderRadius: 10,
              borderColor: "#2f6eda",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              M
            </Text>
          </View>

          <View style={styles.inputText}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              O
            </Text>
          </View>

          <View style={styles.inputText}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              O
            </Text>
          </View>

          <View style={styles.inputText}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              N
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
            marginTop: vh(110),
          }}
        >
          <View
            style={{
              marginTop: vh(30),
              marginLeft: 25,
              borderWidth: 1,
              width: vw(220),
              height: vh(45),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              backgroundColor: "#d1e5fe",
              borderColor: "#d1e5fe",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="staro"
              size={20}
              color="#2f6eda"
              style={{
                marginRight: 5,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                color: "#2f6eda",
              }}
            >
              Add to favourite
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
              flexDirection: "column",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
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
                marginVertical: 10,
                
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Excellent
              </Text>
            </View>
          </View>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginLeft: vh(140),
                marginRight: vh(50),
              }}
            >
              <FontAwesome name="check-circle" size={60} color="#2f6eda" />
            </View>
            <TouchableOpacity
            onPress={handleNewChallenge}
            >
              <View
                style={{
                  borderWidth: 1,
                  width: vw(120),
                  height: vh(40),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: "#2f6eda",
                  borderColor: "#2f6eda",
                  left:vh(30),
                  marginTop:vh(20)
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
    backgroundColor: "#2f6eda",
    borderRadius: 10,
    borderColor: "#2f6eda",
  },
});

export default NewChallenge;
