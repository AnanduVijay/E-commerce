import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {DevHeight, DevWidth} from '../theme/Device';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Home() {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: DevWidth,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <TouchableOpacity>
            <Ionicons name="ios-menu-outline" size={30} color="#413434" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-search-outline" size={30} color="#413434" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingStart: 20,
            color: '#413434',
            fontSize: 30,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Categories
        </Text>
        <View style={{paddingStart: 20, marginTop: 20, flexDirection: 'row'}}>
          <View style={{height: 20}}>
            <Text
              style={{
                borderBottomWidth: 1,
                borderColor: '#413434',
                marginRight: 55,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              ALL
            </Text>
          </View>
          <Text style={{marginRight: 55, fontSize: 15}}>Living room</Text>
          <Text style={{marginRight: 55, fontSize: 15}}>Bedroom</Text>
          <Text style={{marginRight: 55, fontSize: 15}}>Bathroom</Text>
          <Text style={{marginRight: 55, fontSize: 15}}>Kitchen</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginRight: 10}}>
          <View
            style={{
              backgroundColor: '#9CACB8',
              height: 350,
              width: 209,
              marginLeft: 10,
              borderRadius: 15,
              marginTop: 25,
            }}>
            <Text style={{color: '#FFFFFF', padding: 10}}>Category Name</Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                paddingLeft: 10,
                fontSize: 25,
              }}>
              RED CHAIR
            </Text>
            <Image
              source={require('../images/redchair.png')}
              style={{marginLeft: 25, marginTop: 12}}></Image>

            <View style={{position: 'absolute', bottom: 5, left: 10}}>
              <View
                style={{
                  backgroundColor: '#1A0E0A',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#9C001E',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 10,
                }}></View>
            </View>
            <View
              style={{
                height: 29,
                width: 73,
                backgroundColor: '#41647E',
                alignSelf: 'flex-end',
                marginRight: 15,
                borderRadius: 6,
                opacity: 0.4,
              }}>
              <Text style={{color: '#fff', alignSelf: 'center', marginTop: 5}}>
                350 USD
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#736565',
              height: 350,
              width: 209,
              marginLeft: 10,
              borderRadius: 15,
              marginTop: 25,
            }}>
            <Text style={{color: '#FFFFFF', padding: 10}}>Category Name</Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                paddingLeft: 10,
                fontSize: 25,
              }}>
              WHITE CHAIR
            </Text>
            <Image
              source={require('../images/whitechair.png')}
              style={{marginLeft: 35, marginTop: 14}}></Image>

            <View style={{position: 'absolute', bottom: 5, left: 10}}>
              <View
                style={{
                  backgroundColor: '#836969',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#F6F0FF',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 5,
                }}></View>
              <View
                style={{
                  backgroundColor: '#C6B9B3',
                  height: 25,
                  width: 25,
                  borderRadius: 6,
                  marginBottom: 10,
                }}></View>
            </View>
            <View
              style={{
                height: 29,
                width: 73,
                backgroundColor: '#836969',
                alignSelf: 'flex-end',
                marginRight: 15,
                borderRadius: 6,
                opacity: 0.4,
                marginTop: 20,
              }}>
              <Text style={{color: '#fff', alignSelf: 'center', marginTop: 5}}>
                350 USD
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#9CACB8',
              height: 350,
              width: 209,
              marginLeft: 10,
              borderRadius: 15,
              marginTop: 25,
            }}>
            <Text style={{color: '#FFFFFF', padding: 10}}>Category Name</Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                paddingLeft: 10,
                fontSize: 25,
              }}>
              YELLOW CHAIR
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <Image
                source={require('../images/yellowchair.png')}
                style={{width: '80%', height: '80%'}}></Image>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 17,
                  left: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#9B86A5',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginBottom: 5,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#38CCE1',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginBottom: 5,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#EDD454',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginBottom: 10,
                  }}></View>
              </View>
              <View>
                <Text>350 USD</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 35,
            marginTop: 20,
            position: 'relative',
            marginLeft: 10,
          }}>
          Trending Items
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 150,
            width: DevWidth - 20,
            backgroundColor: '#EEF1F4',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 16,
          }}>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../images/TurquoiseChair.png')}
              resizeMode={'contain'}
              style={{
                height: '85%',
                width: '80%',
                marginLeft: 15,
              }}></Image>
          </View>
          <View style={{flex: 0.6}}>
            <View
              style={{
                flex: 2,
                // flexDirection: 'row',
                justifyContent: 'flex-end',
                // alignItems: 'flex-end',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '800',
                    }}>
                    Turquoise Chair
                  </Text>
                  <MaterialIcons
                    name="favorite-border"
                    size={30}
                    color="#413434"
                    style={{}}
                  />
                </View>
                <Text
                  style={{
                    opacity: 0.4,
                  }}>
                  Category Name
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                opacity: 0.4,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 55,
                }}>
                <Entypo name="eye" size={25} color="#413434" />
                <Text style={{marginTop: 4, fontSize: 17}}>1.5K</Text>
              </View>
              <View
                style={{
                  marginLeft: 40,
                  marginTop: 4,
                  flexDirection: 'row',
                  width: 55,
                }}>
                <MaterialIcons name="favorite" size={20} color="#413434" />
                <Text style={{fontSize: 17}}>212</Text>
              </View>
              <View
                style={{
                  marginLeft: 40,
                  marginTop: 4,
                  flexDirection: 'row',
                  width: 55,
                }}>
                <MaterialIcons name="shopping-bag" size={18} color="#413434" />
                <Text style={{fontSize: 17}}>120</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{justifyContent: 'center', opacity: 0.4, marginTop: 5}}>
                <Text style={{fontSize: 20, fontWeight: '800'}}>145 USD</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <View
                  style={{
                    backgroundColor: '#2BA8AE',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginHorizontal: 2,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#7F4A83',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginHorizontal: 2,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#E3E937',
                    height: 25,
                    width: 25,
                    borderRadius: 6,
                    marginHorizontal: 2,
                  }}></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          height: 47,
          width: DevWidth - 10,

          alignSelf: 'center',
          marginTop: 10,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{height: 45, backgroundColor: '#EEF1F4', borderRadius: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop:3,
              }}>
              <Ionicons name="home" size={30} color="#413434" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 8,
                  marginTop: 5,
                }}>
                HOME
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 55, marginTop: 5}}>
            <Feather name="shopping-bag" size={30} color="#413434" />
          </View>
          <View style={{marginRight: 20, marginTop: 5}}>
            <AntDesign name="profile" size={30} color="#413434" />
          </View>
        </View>
      </View>
    </View>
  );
}
