import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../Component/Header'
import Color from '../../Constants/Color'
import Icon from 'react-native-vector-icons/Ionicons';

const NewPassword = ({navigation}: any) => {
    const [user, setUser] = useState(false);
    const [passwordEye, setPasswordEye] = useState(true)

    const [newPasswordFields, setNewPasswordFields] = useState({
        password:'',
        NewPassword:'',
      })
      console.log('newPasswordFields',newPasswordFields);
      

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
          title='New Password'
        />

        {/* Password */}
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16, fontWeight:'bold'}}>New Password</Text>
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
            onChangeText={(e)=> setNewPasswordFields({...newPasswordFields, password:e })}
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
        <View style={{marginHorizontal: 5,marginVertical:5}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16, fontWeight:'bold'}}>Confirm Password</Text>
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
            onChangeText={(e)=> setNewPasswordFields({...newPasswordFields, NewPassword:e })}
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

         {/* Send Button */}
         <View style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 5,
            marginVertical:20
          }}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('Login')} style={{alignItems:'center', padding:10, backgroundColor:Color.mainColor}}>
              <Text style={{color:'white', fontSize:18, fontFamily:'Poppins-Regular'}}>Submit</Text>
            </TouchableOpacity>
        </View>
        </View>
  )
}

export default NewPassword

const styles = StyleSheet.create({})