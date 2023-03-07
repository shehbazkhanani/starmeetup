import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Component/Header'
import Color from '../../Constants/Color'
import Icon from 'react-native-vector-icons/Ionicons';
const CreatorsScreen = ({navigation}:any) => {
  const [user, setUser] = useState(true);
  const Creators = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset26.png'),
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../Images/Asset29.png'),
    },
    {
      id: 3,
      name: 'www',
      image: require('../../Images/Asset30.png'),
    },
    {
      id: 4,
      name: 'anchors',
      image: require('../../Images/Asset31.png'),
    },
    {
      id: 5,
      name: 'www',
      image: require('../../Images/Asset34.png'),
    },
    {
      id: 6,
      name: 'sd',
      image: require('../../Images/Asset45.png'),
    },
    {
      id: 7,
      name: 'sdd',
      image: require('../../Images/Asset46.png'),
    },
  ];
  return (
    <>
    <View style={{
      backgroundColor: Color.backgroundColor,
      height: Dimensions.get('window').height,
      paddingHorizontal:10
    }}>
      <Header navigation={navigation} title='Creators'  user={user} backBtn/>
     <View
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <TextInput
            placeholder="Search"
            style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
          />
          <TouchableOpacity onPress={() => navigation}>
            <Text>
              <Icon name="search" size={25} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
    
    
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
          {Creators &&
            Creators.map((e, i) => {
              return (
                <>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {}}
                  key={i}
                  style={{
                    borderWidth: 0,
                    paddingVertical: 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                    width: '49%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={e.image}
                    resizeMode={'contain'}
                    style={{
                      width: Dimensions.get('window').width /2.25, height: Dimensions.get('window').height /3.8,
                      borderRadius: 10,
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.4,
                      shadowRadius: 2,
                    }}
                  />
                <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{e.name}</Text>
                </TouchableOpacity>
                </>
              )
            })}
        </View>
        </ScrollView>
  </View>
  </>
  )
}

export default CreatorsScreen

const styles = StyleSheet.create({})