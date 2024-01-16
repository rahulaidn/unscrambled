import { Dimensions, PixelRatio, Platform } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const DesignHeight = Dimensions.get("window").height;
export const DesignWidth = Dimensions.get("window").width;
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// It is based on the screen width of your design layouts e.g Height for now window height x Width for now window width
const scale = SCREEN_WIDTH / DesignWidth;

export const width: number = Dimensions.get("window").width;
export const height: number = Dimensions.get("window").height;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}
const heightPercent = () => {
  if (DesignHeight <= 650) {
    return 60;
  } else if (DesignHeight > 650 || DesignHeight <= 750) {
    return 85;
  } else if (DesignHeight > 750 || DesignHeight <= 800) {
    return 95;
  } else {
    return 100;
  }
};
const widthPercent = () => {
  if (DesignWidth <= 1000) {
    return 65;
  } else {
    return 100;
  }
};

export const vw = (width: number) => {
  // Parse string percentage input and convert it to number.
  let percent =
    (width / DesignWidth) * (Platform.OS === "ios" ? 100 : widthPercent());
  const elemWidth = parseFloat(percent + "%");
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const vh = (height: number) => {
  // Parse string percentage input and convert it to number.
  let percent =
    (height / DesignHeight) * (Platform.OS === "ios" ? 100 : heightPercent());
  const elemHeight = parseFloat(percent + "%");

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
