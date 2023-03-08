import { Dimensions, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Component/Header'
import Color from '../../Constants/Color';

const ForgotPassword = ({navigation} :any) => {
    const [user, setUser] = useState(false);
    const [forgotPassword, setForgotPassword] = useState('')
    
    const SendOtp = () => {
        navigation.navigate('Verification')
    }
  return (
    <View style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal: 10
      }}>
        <Header
          navigation={navigation}
          user={user}
          backBtn
          noSignUp
          title='Forgot Password'
        />
      <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16,fontWeight:'bold'}}>Enter Email Address</Text>
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
            onChangeText={(e)=> setForgotPassword(e)}
            style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
          />
        </View>
          {/* Send Button */}
        <View style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 5,
            marginVertical:20
          }}>
            <TouchableOpacity activeOpacity={0.8} onPress={SendOtp} style={{alignItems:'center', padding:10, backgroundColor:Color.mainColor}}>
              <Text style={{color:'white', fontSize:18, fontFamily:'Poppins-Regular'}}>Send</Text>
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

export default ForgotPassword

const styles = StyleSheet.create({})