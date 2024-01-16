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
  Alert,
  Modal,
  Pressable
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

const Challenge = ({ navigation }: { navigation: any }) => {

  let handleChallenge = () => {
    navigation.navigate("Wrong");
  };
 
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");
  const [text5, onChangeText5] = React.useState("");
  const [text6, onChangeText6] = React.useState("");

  const [modalVisible, setModalVisible] = useState(false);


  const showToast = () => {
    ToastAndroid.show('An Error occured while rendring', ToastAndroid.LONG);
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
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <View
           style={{
            flexDirection:'row'
           }}
           >
           <Text style={styles.modalText}>Are you sure</Text>
            <MaterialCommunityIcons
            name="close-circle"
            size={30}
            color="#7d8db0"
            style={{
              marginLeft: vw(150),

            }}
            onPress={() => setModalVisible(!modalVisible)}
          />
           </View>
            <Text style={{
              fontSize:14,
              fontWeight:'bold',
              color:'rgba(84,85,89,255)'
            }}>Once you close, your points will be lost.</Text>
           <View
           style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:vh(50)
           }}
           >
           <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyl2}>No</Text>
            </Pressable>
           </View>
          </View>
        </View>
      </Modal>
    </View>
        <View
          style={{
            margin: 50,
            flexDirection: "row",
          }}
        >
          <View style={{}}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText1(text)}
              value={text1}
            />
          </View>
          <View style={{ marginLeft: vw(20) }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText2(text)}
              value={text2}
            />
          </View>
          <View style={{ marginLeft: vw(20) }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText3(text)}
              value={text3}
            />
          </View>
          <View style={{ marginLeft: vw(20) }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText4(text)}
              value={text4}
            />
          </View>
          <View style={{ marginLeft: vw(20) }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText5(text)}
              value={text5}
            />
          </View>
          <View style={{ marginLeft: vw(20) }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText6(text)}
              value={text6}
            />
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
        <View
          style={{
            flexDirection: "row",
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
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              A
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 15,
              marginTop: vh(25),
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              E
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 15,
              marginTop: vh(25),
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              P
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 15,
              marginTop: vh(25),
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              N
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 15,
              marginTop: vh(25),
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              L
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: vh(38),
              justifyContent: "center",
              width: vw(35),
              marginLeft: 15,
              marginTop: vh(25),
              backgroundColor: "#ececee",
              borderRadius: 10,
              borderColor: "#ececee",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              T
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row-reverse",
            marginLeft: 30,
            marginTop: 20,
          }}
          onPress={handleChallenge}
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
              flexDirection: "row",
              marginTop: 30,
              marginLeft: 10,
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
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Find the words from shuffled words or {"\n"}speak
              </Text>
            </View>
          </View>
         <TouchableOpacity
         onPress={() => showToast()}
         >
         <View
            style={{
              alignItems: "center",
            }}
          >
            <Ionicons name="mic-circle" size={100} color="black"/>
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:vh(230)
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:vw(100)
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:vw(100)
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonClose2: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyl2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize:20,
    fontWeight:'bold'
  },

});


export default Challenge;
