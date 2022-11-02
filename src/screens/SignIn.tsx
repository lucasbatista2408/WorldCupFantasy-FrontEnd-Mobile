import {NativeBaseProvider, Center, Text, StatusBar} from 'native-base'
import Logo from '../assets/logo.svg'

function SignIn() {


  return ( 
    <NativeBaseProvider>
      <Center flex={1} bgColor="gray.700" alignItems={'center'} justifyContent={'center'}>
        <Logo width={112} height={40} />
      </Center>
    </NativeBaseProvider>
   );
}

export default SignIn;