import {NativeBaseProvider, Center, Text, StatusBar} from 'native-base'

function SignIn() {
  return ( 
    <NativeBaseProvider>
      <Center flex={1} bgColor="gray.700" alignItems={'center'} justifyContent={'center'}>
        <Text color={"green.500"} fontSize="xl" fontFamily={"heading"}>
          SignIn!
        </Text>
      </Center>
    </NativeBaseProvider>
   );
}

export default SignIn;