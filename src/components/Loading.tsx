import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Center, Spinner} from "native-base"

function Loading() {
  return ( 
    <Center flex={1} bgColor={'gray.700'}>
      <Spinner color={"yellow.500"}/>
      <StatusBar style="auto" />
    </Center>
   );
}

export default Loading;