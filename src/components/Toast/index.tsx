import React,{ useState,useEffect} from 'react';
import { View,Text,StatusBar,Platform,TouchableWithoutFeedback,StyleSheet,Dimensions,Animated,Easing } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Ionicons  } from "@expo/vector-icons";

import { hideToast } from '../../store/modules/toast/actions'

const {width} = Dimensions.get('window')

let timer:any = null

const Toast: React.FC = () => {
  const colors:any = {
    success: '#43D29E',
    warning: '#fd951f',
    error: 'red',
    default:'#3a405b'
  }

  const [styleStatusBar,setStyleStatusBar] = useState<any>('dark-content')

  const [position] = useState (new Animated.Value(-(getStatusBarHeight() + 60)))

  const dispatch= useDispatch()

  const toastFy = useSelector( (state:any) => state.toast)

  useEffect(() => {
    toastFy.show && show()
  },[toastFy])

  function show(){
    clearTimeout(timer);
    setStyleStatusBar('light-content');
    Animated.timing(position,{
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start();
    timer = setTimeout(()=>{
      hide()
      setStyleStatusBar('dark-content');
    },toastFy.duration)
  }

  function hide(){
    Animated.timing(position,{
      toValue: -(getStatusBarHeight()+60),
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(()=> {
      dispatch(hideToast())
    });
  }

  function zIndex(val:any){
    return Platform.select({
      ios:{zIndex:val},
      android:{elevation:val}
    })
  }

  return (
    <View style={{...zIndex(100)}}>
     <StatusBar 
     barStyle={styleStatusBar} 
     translucent={true} 
     backgroundColor="transparent"
     />
     <TouchableWithoutFeedback
       onPress={()=>{
         clearTimeout(timer)
         hide()
       }}
     >
       <Animated.View style={[styles.default,{backgroundColor:colors[toastFy.type], transform:[{translateY:position}]}]}>
          <View style={styles.msgContainer}>
            {toastFy.iconName !== ' ' && (
              <Ionicons 
              name={toastFy.iconName}
              size={26}
              color="#FFFF"
              />
            )}
            <Text style={styles.txt}>{toastFy?.message}</Text>
          </View>
       </Animated.View>
     </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  default:{
    position: 'absolute',
    width,
    paddingHorizontal: 7,
    paddingBottom: 20,
    paddingTop: getStatusBarHeight() + 7,
    alignSelf:'center',
    justifyContent:'center',

  },
  msgContainer:{
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal:15,
  },
  txt:{
    color: '#FFFF',
    fontSize:14,
    marginHorizontal:10,
  }
})

export default Toast;