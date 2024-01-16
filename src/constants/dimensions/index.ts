import { Dimensions, Platform } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export let updateWidth = screenWidth < screenHeight ? screenHeight : screenWidth
export let updateHeight = screenWidth < screenHeight ? screenWidth : screenHeight

Dimensions.addEventListener('change', (e) => {
  if (e.screen.width < e.screen.height) {
    updateWidth = Dimensions.get("window").height;
    updateHeight = Dimensions.get("window").width;
  } else {
    updateWidth = Dimensions.get("window").width;
    updateHeight = Dimensions.get("window").height;
  }
});

//width
export const w = (givenWidth: number) => {
  return (updateWidth * givenWidth) / (100 * 10);
};

//height
export const h = (givenHeight: number) => {
  return Platform.OS === "android"
    ? updateHeight > 601
      ? (updateHeight * givenHeight * 0.925) / (100 * 10)
      : (updateHeight * givenHeight * 0.9) / (100 * 10)
    : (updateHeight * givenHeight) / (100 * 10);
};
