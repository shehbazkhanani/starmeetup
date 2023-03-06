import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  return (
    <View style={{
      backgroundColor: 'rgba(52, 52, 52, 0.0)',
      flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center',
  }}>
      <Icon name="rocket" size={30} color="#900" />
      <Text style={{fontFamily:'Poppins-Bold'}}>Header</Text>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})