import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React,{useState} from 'react'
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import { COLORS } from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

const Profile = ({navigation, route}: any) => {
  const data = route.params.data
  const [user, setUser] = useState(true);
  // console.log('data===>', data.name);
  const [myRating, setMyRating] = useState('')
  const [userRatingStars, setUserRatingStars] = useState(
    [{
      rating:0,
      selected:false
    },
    {
      rating:1,
      selected:false
    },
    {
      rating:2,
      selected:false
    },
    {
      rating:3,
      selected:false
    },
    {
      rating:4,
      selected:false
    },]
  )
  const ratingFunction =( e: any) :any => {
    setMyRating(e.rating)
    setUserRatingStars(userRatingStars.map((rate,i)=>{
      if(rate.rating == e.rating){
        return{
          ...rate,
          selected: true
        }
      }
      else{
        return{
          ...rate,
          selected: false
        }
      }
    }))
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <View style={{
      backgroundColor: Color.backgroundColor,
      height: Dimensions.get('window').height,
    }}>
      <View>
      <Image source={require('../../Images/Asset34.png')} resizeMode='cover' style={[styles.coverImage,{borderBottomLeftRadius:50,borderBottomRightRadius:50}]}/>
      <View style={{position:"absolute",left:10,top:10}} >
      <Header
          navigation={navigation}
          user={user}
          backBtn
          noLogo
          style={styles.HeaderStyle}
        />
        </View>
        <View style={{alignItems:"center", top:-140,}}>
      <Image source={require('../../Images/Asset34.png')} resizeMode='cover' style={[styles.pofileImage,{borderRadius:10,borderColor:'white', borderWidth:2}]}/>
        </View>
        <View style={{alignItems:"center",top:-140,}}>
        <Text style={{fontFamily:"Poppins-SemiBold", color:Color.mainColor, fontSize:24}}>{data.name}</Text>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:"row", alignSelf:"center",top:-140,}}>
        {userRatingStars && userRatingStars.map((e,i)=>{
          return(
            <View key={i} style={{alignContent:'center'}}>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>ratingFunction(e)}>
                  <Icon name="star-sharp" size={20} color={ (userRatingStars.some((j,ind)=> j.selected && e.rating <= j.rating)) ? "gold" : "grey"   }/>
              </TouchableOpacity>
            </View>
            )
          })}
          </View>
          <View style={{top:-120,}}>
          <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  coverImage:{
    height: Dimensions.get('window').height/3,
    width: Dimensions.get('window').width,

  },
  pofileImage:{
    height: Dimensions.get('window').height/3.1,
    width: Dimensions.get('window').width/2,
    alignItems:'center',

  },
  HeaderStyle:{
    top:-60
  }

})