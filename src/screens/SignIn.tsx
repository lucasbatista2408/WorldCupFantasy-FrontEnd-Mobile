import {Center, Text, Icon} from 'native-base'
import Logo from '../assets/logo.svg'
import Button from '../components/Button';
import {Fontisto} from "@expo/vector-icons"

function SignIn() {


  return ( 
      <Center flex={1} bgColor="gray.900" alignItems={'center'} justifyContent={'center'} p={6} >
        <Logo width={212} height={40} />
        <Button title="Entrar com o Google" type='SECONDARY' isLoading={false} leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>} mt={12}/>
        <Text mt={4} color={"white"} textAlign="center" >
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
        </Text>
      </Center>
   );
}

export default SignIn;