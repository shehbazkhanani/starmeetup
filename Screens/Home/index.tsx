import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import Color from '../../Constants/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../Constants';
import { ScrollView } from 'react-native-gesture-handler';
const Home = ({navigation}: any) => {
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
  const Comedians = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset29.png'),
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../Images/Asset26.png'),
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
  const Music = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset30.png'),
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../Images/Asset29.png'),
    },
    {
      id: 3,
      name: 'www',
      image: require('../../Images/Asset26.png'),
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
  const Actors = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset31.png'),
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
  const Mentors = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset34.png'),
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
  const Ancors = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset29.png'),
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../Images/Asset45.png'),
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
  const Sports = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset46.png'),
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
  const Tiktok = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/Asset45.png'),
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

  const navigateToOtherScreen = (name : any) => {
    let firstLetter = name.slice(0,1)
    firstLetter = (firstLetter).toUpperCase()
    let otherLetter = name.slice(1)
    console.log(firstLetter,"first")
      console.log(name,"name")
    let fullName = firstLetter + otherLetter
    navigation.navigate(`${fullName}Screen`)
  }

  const renderCategoriesItems = ({item}: any): any => {
    return(
    <View style={{ paddingHorizontal: 2,  marginBottom: 10 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={user ? () =>  navigateToOtherScreen(item.name) : () => navigation.navigate('Login')}
                   >
                    <Image
                        source={item.image}
                        resizeMode='contain'
                        style={{ width: Dimensions.get('window').width /2.6, height: Dimensions.get('window').height /8,  borderRadius: 10, }}
                    />
                </TouchableOpacity>
            </View>
            )
  };
  const renderCreatorsItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          onPress={user ? ()=>navigation.navigate('Profile', {data : item})  : () => navigation.navigate('Login')}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderComediansItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderMusicItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderActorsItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderMentorsItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderAncorsItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderSportsItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }
  const renderTiktokItems = ({item}: any): any =>{
    return(
      <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={{
              borderWidth: 0,
              paddingVertical: 1,
              alignItems: 'center',
              borderRadius: 10,
          }}>
          <Image
              source={item.image}
              resizeMode={'cover'}
              style={{ width: Dimensions.get('window').width /2.7, height: Dimensions.get('window').height /4,borderRadius: 10, }}
          />

          <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:Color.textColor}}>{item.name}</Text>

      </TouchableOpacity>
  </View>
    )
  }

  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal: 10
      }}>
        <Header
          navigation={navigation}
          user={user}
          Drawer={true}
          Notification
        />
        {/* Search */}
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
        {/* Categories */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Categories
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={user ? ()=>navigation.navigate('Categories') : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Categories}
            renderItem={renderCategoriesItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{borderWidth:0.2, borderColor: Color.viewAll, marginVertical:5}}></View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Creators */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Creators
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={user ? ()=>navigation.navigate('CreatorsScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Creators}
            renderItem={renderCreatorsItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Comedians */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Comedians
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('ComediansScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Comedians}
            renderItem={renderComediansItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Music */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Music
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('MusicScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Music}
            renderItem={renderMusicItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Actors */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Actors
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('ActorsScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Actors}
            renderItem={renderActorsItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Mentors */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Mentors
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('MentorsScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Mentors}
            renderItem={renderMentorsItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Anchors */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Anchors
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('AnchorsScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Ancors}
            renderItem={renderAncorsItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Sports */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Sports
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('SportsScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Sports}
            renderItem={renderSportsItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
          {/* Tiktok */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Tiktok
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={ user ? ()=>navigation.navigate('TiktokScreen')  : () => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Tiktok}
            renderItem={renderTiktokItems}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
