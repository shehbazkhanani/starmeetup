import { Dimensions, Image, StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React,{useState,useRef} from 'react'
import Color from '../../Constants/Color'
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import { COLORS } from '../../Constants';

const SignUp = ({navigation}: any) => {
  const [passwordEye, setPasswordEye] = useState(true)
  const [rememberMe, setRememberMe] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const [signupFields, setSignupFields] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
  })
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal: 10,
        paddingBottom:30
      }}>
       
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../Images/ColorLogo.png')} resizeMode='contain' style={styles.logo}/>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{color:Color.textColor,fontSize:30, fontFamily:'Poppins-SemiBold'}}>Sign<Text style={{color:Color.mainColor,fontSize:30, fontFamily:'Poppins-SemiBold'}}> up</Text></Text>
        </View>
        {/* Name */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16,fontWeight:'bold'}}>Name</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 5,
            marginBottom:10
          }}>
          <TextInput
            placeholder="Name"
            onChangeText={(e)=> setSignupFields({...signupFields, name:e })}
            style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
          />
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
            marginBottom:10
          }}>
          <TextInput
            placeholder="Email"
            onChangeText={(e)=> setSignupFields({...signupFields, email:e })}
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
            marginBottom:10
          }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={passwordEye ? true : false}
            onChangeText={(e)=> setSignupFields({...signupFields, password:e })}
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
        {/*  Confirm Password */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16, fontWeight:'bold'}}>Repeat Password</Text>
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
            marginBottom:10
          }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={passwordEye ? true : false}
            onChangeText={(e)=> setSignupFields({...signupFields, confirmPassword:e })}
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
        {/* Phone Number */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16, fontWeight:'bold'}}>Mobile Number</Text>
        </View>
        <View style={styles.container}>
              <PhoneInput
                ref={phoneInput}
                placeholder="Enter Your Number"
                defaultValue={phoneNumber}
                defaultCode="PK"
                layout="first"
                // withShadow
                autoFocus
                textInputStyle={{ color: Color.textColor, height: 50, }}
                textInputProps={{ placeholderTextColor: Color.textColor, }}
                codeTextStyle={{ marginLeft: -15, paddingLeft: -55, color: "black" }}
                containerStyle={styles.phoneNumberView}
                textContainerStyle={{ height: 60, backgroundColor: 'white', borderRadius: 10,  borderColor : 'transparent' }}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
              />
        </View>
        {/* Term and conditions*/}
        <View style={{marginHorizontal:10, marginVertical:10}}>
              <View style={{display:'flex', flexDirection:"row", alignItems:'center', gap:3}}>
                <TouchableOpacity style={{width:14, height:14, borderWidth:1, borderRadius:5}} onPress={()=> setRememberMe(!rememberMe)}>
                {rememberMe?
                <Icon name="md-checkmark-sharp" size={11} color='white' style={{backgroundColor:Color.mainColor}} />
                  :
                  ''
                }
                </TouchableOpacity>
                <Text style={{color:Color.textColor,fontSize:15, fontFamily:'Poppins-Regular'}}> By signing up, i agree with  
                <Text style={{color:Color.mainColor,fontSize:15, fontFamily:'Poppins-SemiBold'}}> Terms of use</Text>
                <Text style={{color:Color.textColor,fontSize:15, fontFamily:'Poppins-Regular'}}>and</Text>
                <Text style={{color:Color.mainColor,fontSize:15, fontFamily:'Poppins-SemiBold'}}> Privacy policy </Text>
                </Text>
               

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
            <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Login')} style={{alignItems:'center', padding:10, backgroundColor:Color.mainColor}}>
              <Text style={{color:'white', fontSize:18, fontFamily:'Poppins-Regular'}}>Sign up</Text>
            </TouchableOpacity>
        </View>
        {/* Don't Have Account */}
        <View style={{alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Login')}>
          <Text style={{color:Color.textColor,fontSize:15, fontFamily:'Poppins-Regular'}}>Already have an Account?  
          <Text style={{color:Color.mainColor,fontSize:15, fontFamily:'Poppins-SemiBold'}}> Login</Text>
          </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height/6,
    width: Dimensions.get('window').width/1.4,
  },
  container: {
    paddingHorizontal: 10,
  },
  phoneNumberView: {
    // height: 70,
    width: '100%',
    backgroundColor: 'white',
    borderColor: COLORS.textColor,
    borderRadius: 10,
    borderWidth: 1,
    color: '#E5E5E5',
    flexShrink: 22,
  },
})