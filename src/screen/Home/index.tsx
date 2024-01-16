import React, { FC, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { app_string } from "../../app-string";
import { vh, vw } from "../../constants/dimentation";
import { ProgressBar } from 'react-native-paper';
import {
  Ionicons,
  Octicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { h } from "../../constants/dimensions";

const Home = ({ navigation }: { navigation: any }) => {
  const DATA = [
    {
      id: "1",
      title: "Outer Space",
      difficulty: "Medium",
      desc: "Discover words related to the fascinating world of outer space and astronomy.",
    },
    {
      id: "2",
      title: "Art and Creativity",
      difficulty: "Medium",
      desc: "Devlve into the vocabulary associated with different forms of art and creative.",
    },
    {
      id: "3",
      title: "Outer Space",
      difficulty: "Medium",
      desc: "Discover words related to the fascinating world of outer space and astronomy.",
    },
  ];
  const Item = ({ title, difficulty, desc }) => (
   <TouchableWithoutFeedback onPress={handleHome}>
     <View style={[styles.item, styles.shadowPropNew]}>
      <View style={{ flexDirection: "row", marginTop: vh(10) }}>
        <View style={{ marginTop: vh(28) }}>
          <FontAwesome name="check-circle" size={24} color="#d1e5fe" />
        </View>
        <View
          style={{
            marginLeft: vw(10),
          }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <View
        style={{
          width:vw(160),

        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight:'600',
            marginLeft: vw(35),
            borderWidth:1,
            textAlign:'center',
            height:vh(25),
            borderRadius:100,
            paddingTop:vh(2),
            color:'#f1aa59',
            borderColor:'#f6d094',
            backgroundColor:'#f6d094',
          }}
        >
          {difficulty}
        </Text>
      </View>
      <View
          style={{
            marginLeft: vw(40),
            marginTop:vh(15),
            
          }}
        >
          <Text style={{fontWeight:'600'}}>{desc}</Text>
        </View>
       <View
       style={{
        flexDirection:'row',
         marginTop:vh(30),
         alignItems:'center',
         borderRadius:5,
         marginLeft: vw(35),
         justifyContent:'space-between'
       }}
       >
       <ProgressBar style={{
        width:vw(220),
          }
          }progress={0.5} color={"#d1e5fe"} />
          <View style={{
            marginLeft:vw(20)
          }}>
            <Text style={{
              fontSize:10,
              fontWeight:'bold'
            }}>0/10</Text>
          </View>
       </View>
    </View>
   </TouchableWithoutFeedback>
  );

  let handleHome = () => {
    navigation.navigate("Challenge");
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
        {/* BACK BUTTON */}
        <View style={[styles.container, styles.shadowPropNew]}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </View>
        {/* CIRCLE */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: vh(20),
            marginHorizontal: h(50),
          }}
        >
          <View style={[styles.circle, styles.shadowPropNew]}>
              <Image
                source={require("../../../assets/images/icons8-health-data-50.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  justifyContent:'center',
                  alignItems:'center'
                }}
              />
          </View>
          <View style={styles.learn}>
            <Text style={styles.learnFont}>{app_string.LEARN}</Text>
          </View>
        </View>
        {/* CHALLENEGE PROP & ALL */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* CHALLENEGE PROP */}
          <View style={[styles.friend, styles.shadowPropNew]}>
            <Octicons
              name="people"
              size={24}
              color="#2f6eda"
              style={{
                marginLeft: vw(10),
              }}
            />
            <View
              style={{
                width: vw(250),
                height: vh(30),
                marginLeft: vh(10),
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#2f6eda",
                  fontWeight:'bold'
                }}
              >
                {app_string.CHALLENEGE_A_FRIEND}
              </Text>
            </View>
          </View>
          {/* ALL */}
          <View
            style={{
              width: vw(100),
              height: vh(40),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginRight: vw(10),
            }}
          >
            <View
              style={{
                width: vw(100),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {app_string.ALL}
              </Text>
              <MaterialIcons
                name="filter-list"
                size={18}
                color="black"
                style={{
                  marginLeft: vw(10),
                }}
              />
            </View>
          </View>
        </View>
        <FlatList
        scrollEnabled={true}
        bounces={false}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              difficulty={item.difficulty}
              desc={item.desc}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vh(45),
    width: vw(61),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: vh(25),
    marginHorizontal: h(25),
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  shadowPropNew: {
    shadowColor: "#FFFFF",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  circle: {
    height: vh(108),
    width: vw(140),
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    marginRight: h(50),
    justifyContent:'center',
    alignItems:'center'
  },
  learn: {
    width: vw(260),
    marginVertical: vh(20),
    // height:vh(200)
  },
  learnFont: {
    fontSize: 14,
    fontWeight: "bold",
  },
  friend: {
    width: vw(320),
    height: vh(55),
    flexDirection: "row",
    alignItems: "center",
    marginLeft: vh(25),
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    // borderWidth:1
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: vh(250),
    marginTop: vh(25),
    borderRadius: 18,
    borderWidth:1,
    borderColor:'#FFFFFF'
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default Home;
