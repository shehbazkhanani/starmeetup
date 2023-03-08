import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Constants/Color'
import Header from '../../Component/Header'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { COLORS } from '../../Constants';

const Verification = ({navigation}: any) => {
    const [user, setUser] = useState(false);
    const CELL_COUNT = 6;
    // const { confirmation, phoneNum } = route.params;
    const [code, setCode] = useState('');
    const [uploading, setUploading] = useState(false);
    const [codeError, setCodeError] = useState(false)
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const Verify =() =>{
        navigation.navigate('NewPassword')
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
          title='Verification'
        />
        <View style={{marginHorizontal: 5,marginVertical:5, alignItems:"center"}}>
        <Text style={{fontFamily:'Poppins-Regular', color:Color.textColor, fontSize:16,fontWeight:'bold'}}>Enter Verification Code</Text>
        </View>
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={{alignItems:'center', marginVertical:20}}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('SignUp')}>
          <Text style={{color:Color.textColor,fontSize:15, fontFamily:'Poppins-Regular'}}>If you didn,t receive a code! 
          <Text style={{color:Color.mainColor,fontSize:15, fontFamily:'Poppins-SemiBold'}}> Resend </Text>
          </Text>
          </TouchableOpacity>
        </View>


           {/* Verify Button */}
           <View style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 5,
            marginVertical:20
          }}>
            <TouchableOpacity activeOpacity={0.8} onPress={Verify} style={{alignItems:'center', padding:10, backgroundColor:Color.mainColor}}>
              <Text style={{color:'white', fontSize:18, fontFamily:'Poppins-Regular'}}>Verify</Text>
            </TouchableOpacity>
        </View>
        </View>
  )
}

export default Verification

const styles = StyleSheet.create({
    digitbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
        flex: 1,
        height: 50,
        borderRadius: 4,
        backgroundColor: COLORS.mainColor,
        borderWidth: 1,
        borderColor: COLORS.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
      },
      codeFieldRoot: {
        marginTop: 20,
        justifyContent: 'center',
      },
      cell: {
        width: 50,
        height: 60,
        padding: 10,
        alignItems: 'center',
        lineHeight: 38,
        fontSize: 24,
        marginHorizontal: 4,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: COLORS.mainColor,
        textAlign: 'center',
      },
      focusCell: {
        borderColor: COLORS.mainColor,
      }
})