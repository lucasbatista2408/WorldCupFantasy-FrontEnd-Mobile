import { Button as ButtonNativeBase, Text, IButtonProps} from "native-base";

interface buttonInterface extends IButtonProps{
  title: string,
  type?: 'PRIMARY' | 'SECONDARY'
}

function Button({title, type='PRIMARY', ...rest}: buttonInterface) {
  return ( 
      <ButtonNativeBase 
        w="full" h={16}
        rounded="sm"
        bgColor={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
        _pressed={{
          bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600' 
        }}
        _loading={{
          _spinner:{
            color:"black"
          }
        }}
      {...rest}>
      <Text
        fontSize="sm"
        textTransform="uppercase"
        fontFamily="heading"
        color={type === 'SECONDARY' ? 'white' : "black"}
      >
        {title}
      </Text>
      </ButtonNativeBase>
   );
}

export default Button;