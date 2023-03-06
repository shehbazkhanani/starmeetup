import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../../Component/Header'

const Home = ({navigation}: any) => {
  return (
    <View style={{ marginVertical: 10, marginHorizontal: 10,}}>
      <Header/>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Go to LOgin</Text>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ color: "purple", fontSize: 18, fontWeight: "bold", marginTop: 0 }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})