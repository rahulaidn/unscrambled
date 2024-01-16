// //global import
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Image, ImageBackground, StatusBar, View } from "react-native";

// //local import
// // import AuthNavigation from "@navigation/auth-navigation";
// // import DrawerNavigation from "@navigation/drawer-navigation";
// // import { h } from "@app/constants";
// // import { version } from "../../../package.json";
// // import { CustomFontsForBold } from "@app/components/custom-fonts";
// // import { app_string } from "@app/constants";
// // import styles from "./styles";
// //retrun statement
// export default function Router() {
//   const { userPresent } = useSelector((state: { authReducer: any }) => ({
//     userPresent: state.authReducer.userPresent,
//   }));
//   const [loader, setLoader] = useState<boolean>(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoader(false);
//     }, 3000);
//   }, []);

//   return loader === true ? (
//     <>
//       <StatusBar hidden />

//         <View>
//           <Image
//             source={require("../../assets/images/smartLync.png")}
//             resizeMode="contain"
//             style={styles.logoContainer}
//           />
//         </View>
//     </>
//   ) :
//     userPresent ? (
//       <DrawerNavigation />
//     ) : (
//       <AuthNavigation />
//     );
//   null
// }
