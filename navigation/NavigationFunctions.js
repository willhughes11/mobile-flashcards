import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current.navigate(name, params);
}

export function push(...args) {
  navigationRef.current.dispatch(StackActions.push(...args));
}

function goBack(name) {
  navigationRef.current.navigate(name);
}

export default {
  navigate,
  goBack,
  push,
};
