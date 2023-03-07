import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Component/Header'
import Color from '../../Constants/Color';
import { TextInput } from 'react-native';

const Categories = ({navigation}:any) => {
    const [user, setUser] = useState(true);
    const Categories = [
        {
          id: 1,
          name: 'creators',
          image: require('../../Images/creators.png'),
        },
        {
          id: 2,
          name: 'comedians',
          image: require('../../Images/comedians.png'),
        },
        {
          id: 3,
          name: 'music',
          image: require('../../Images/music.png'),
        },
        {
          id: 4,
          name: 'actors',
          image: require('../../Images/actors.png'),
        },
        {
          id: 5,
          name: 'mentors',
          image: require('../../Images/mentors.png'),
        },
        {
          id: 6,
          name: 'anchors',
          image: require('../../Images/anchors.png'),
        },
        {
          id: 7,
          name: 'sports',
          image: require('../../Images/sports.png'),
        },
        {
          id: 8,
          name: 'tiktok',
          image: require('../../Images/tiktok.png'),
        },
      ];


const navigateToOtherScreen = (name : any) => {
  let firstLetter = name.slice(0,1)
  firstLetter = (firstLetter).toUpperCase()
  let otherLetter = name.slice(1)
  console.log(firstLetter,"first")
    console.log(name,"name")
  let fullName = firstLetter + otherLetter
  navigation.navigate(`${fullName}Screen`)
}

  return (
    <>
    <View style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal:10
      }}>
        <Header navigation={navigation} title='Categories'  user={user} backBtn/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
            {Categories &&
              Categories.map((e, i) => {

                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>  navigateToOtherScreen(e.name) }
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
                        width: Dimensions.get('window').width /2.28, height: Dimensions.get('window').height /7,
                        borderRadius: 10,
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                )
              })}
          </View>
          </ScrollView>
    </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})