import React, { Component } from 'react'
import { StyleSheet } from "react-native";
import { colors } from './colors';
import { h,w } from '../dimensions';
import opacity from './opacity';

const Globalstyles = StyleSheet.create({
    whiteButton:{
    height:h(120),
    width:w(250),
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.color_black,
    borderRadius:8,
   },
   whiteButtonText :{
    color:colors.color_black
   },
    whiteText :{
    color:colors.color_white
   },
   blueButton:{
    height:h(120),
    width:w(250),
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    backgroundColor:colors.color_app_color,
    borderColor:colors.color_app_color,
    borderRadius:8,
   },
   blackButtonText:{
    color:colors.color_white,
   }
})
export default Globalstyles;