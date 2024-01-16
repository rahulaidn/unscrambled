import * as React from "react";
import { StackActions } from "@react-navigation/native";

export const navigationRef: React.RefObject<{
  navigate: any;
  goBack: any;
  dispatch: any;
}> = React.createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}
export function goBack() {
  navigationRef.current?.goBack();
}

export function push(...args: any) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}
