import { Dimensions, Image, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Color from '../../Constants/Color'
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}: any) => {
  const [passwordEye, setPasswordEye] = useState(true)
  const [rememberMe, setRememberMe] = useState(false)
  const [loginFields, setLoginFields] = useState({
    email:'',
    password:''
  })

  
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal: 10
      }}>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../Images/ColorLogo.png')} resizeMode='contain' style={styles.logo}/>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{color:Color.textColor,fontSize:30, fontFamily:'Poppins-SemiBold'}}>Log<Text style={{color:Color.mainColor,fontSize:30, fontFamily:'Poppins-SemiBold'}}>in</Text></Text>
        </View>
        {/* Email */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16,fontWeight:'bold'}}>Email</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 5,
          }}>
          <TextInput
            placeholder="Email"
            onChangeText={(e)=> setLoginFields({...loginFields, email:e })}
            style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
          />
        </View>
        {/* Password */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16, fontWeight:'bold'}}>Password</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={passwordEye ? true : false}
            onChangeText={(e)=> setLoginFields({...loginFields, password:e })}
            style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={()=> setPasswordEye(!passwordEye)}>
            <Text>
              {passwordEye?
              <Icon name="eye" size={25} color="black" />
              :
              <Icon name="eye-off" size={25} color="black" />
              }
            </Text>
          </TouchableOpacity>
        </View>
        {/* remember me and forgot */}
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginHorizontal:10, marginVertical:10}}>
              <View style={{display:'flex', flexDirection:"row", alignItems:'center', gap:3}}>
                <TouchableOpacity style={{width:14, height:14, borderWidth:1, borderRadius:5}} onPress={()=> setRememberMe(!rememberMe)}>
                {rememberMe?
                <Icon name="md-checkmark-sharp" size={11} color='white' style={{backgroundColor:Color.mainColor}} />
                  :
                  ''
                }
                </TouchableOpacity>
                <Text style={{color:Color.mainColor, fontFamily:"Poppins-SemiBold"}}>Remember</Text></View>
              <View>
                <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
                <Text style={{color:Color.mainColor, fontFamily:"Poppins-SemiBold"}}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
        </View>
        {/* Login Button */}
        <View style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 5,
            marginVertical:20
          }}>
            <TouchableOpacity style={{alignItems:'center', padding:10, backgroundColor:Color.mainColor}}>
              <Text style={{color:'white', fontSize:18, fontFamily:'Poppins-Regular'}}>Login</Text>
            </TouchableOpacity>

        </View>
        {/* Don't Have Account */}
        <View style={{alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('SignUp')}>
          <Text style={{color:Color.textColor,fontSize:15, fontFamily:'Poppins-Regular'}}>Don’t have an Account? 
          <Text style={{color:Color.mainColor,fontSize:15, fontFamily:'Poppins-SemiBold'}}> Sign up</Text>
          </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height/6,
    width: Dimensions.get('window').width/1.4,
  },
})