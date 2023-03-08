import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../Constants/Color';
export type Props = {
  navigation: any;
 
};

const Header = (Props : any) => {
  let {navigation, user, Drawer, backBtn ,Notification,title,noSignUp,noLogo} = Props
  
  return (
    <View style={{
      backgroundColor: 'rgba(52, 52, 52, 0.0)',
      flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center',
  }}>
      {user ?
      <>
      {Drawer?
      <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.openDrawer()}>
      <Image source={require('../../Images/DrawerIcon.png')} resizeMode='contain' style={styles.icon} />
      </TouchableOpacity>
      : backBtn ? <TouchableOpacity onPress={()=>navigation.goBack()}><Text><Icon name="md-chevron-back" size={30} color="black" /></Text></TouchableOpacity> : <View></View>}
      
      {title? <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.mainColor, marginVertical:15}}>{title}</Text>
      : noLogo ? <View></View> :
      <Image source={require('../../Images/ColorLogo.png')} resizeMode='contain' style={styles.logo} />
      }
      {Notification ?
      <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.navigate('Notification')}>
      <Image source={require('../../Images/NotificationIcon.png')} resizeMode='contain' style={styles.icon} />
      </TouchableOpacity>
      : <View></View>}
      </>
      
        :
        <>
        {backBtn ?
        <TouchableOpacity onPress={()=>navigation.goBack()}><Text><Icon name="md-chevron-back" size={30} color="black" />
        </Text></TouchableOpacity> 
      :
      <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.navigate('Login')}>
      <Image source={require('../../Images/Login.png')} resizeMode='contain' style={styles.button} />
      </TouchableOpacity>
      }
      {title? <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.mainColor, marginVertical:15}}>{title}</Text>
      :
      <Image source={require('../../Images/ColorLogo.png')} resizeMode='contain' style={styles.logo} />
    }
      {noSignUp? <View></View> :
      <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.navigate('SignUp')}>
      <Image source={require('../../Images/Signup.png')} resizeMode='contain' style={styles.button} />
      </TouchableOpacity>
      }
      
      </>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  button:{
      height: Dimensions.get('window').height/12,
      width: Dimensions.get('window').width/5,
  },
  icon:{
      height: Dimensions.get('window').height/16,
      width: Dimensions.get('window').width/16,
  },
  logo:{
      height: Dimensions.get('window').height/12,
      width: Dimensions.get('window').width/2,
  }
})