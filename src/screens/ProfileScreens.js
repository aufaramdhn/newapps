import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import Transaksi from '../constant/Transaksi';
import COLORS from '../constant/Colors';

const ProfileScreens = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightgrey,
      }}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: COLORS.white, elevation: 3}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileScreens')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
              marginVertical: 25,
              paddingLeft: 20,
              width: '30%',
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Edit Profile
            </Text>
            <RemixIcon name="ri-arrow-right-s-line" size="28" color="white" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Image
              source={require('../assets/img.jpg')}
              style={{width: 60, height: 60, borderRadius: 25}}
            />
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 18, color: '#1d1d1d'}}>Your Name</Text>
              <View
                style={{
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                  paddingHorizontal: 5,
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>
                  Member Platinum
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              paddingVertical: 10,
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RemixIcon
                name="ri-file-list-2-line"
                color={COLORS.primary}
                size="28"
              />
              <Text style={{fontSize: 16, color: '#1d1d1d', marginLeft: 5}}>
                Pesanan Saya
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14}}>lihat Riwayat Pesanan</Text>
              <RemixIcon name="ri-arrow-right-s-line" size="28" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <RemixIcon
                name="ri-wallet-fill"
                size="34"
                color={COLORS.primary}
              />
              <Text style={{fontSize: 14, fontWeight: '400'}}>Belum Bayar</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon
                name="ri-truck-line"
                size="34"
                color={COLORS.primary}
              />
              <Text style={{fontSize: 14, fontWeight: '400'}}>Dikemas</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon
                name="ri-archive-line"
                size="34"
                color={COLORS.primary}
              />
              <Text style={{fontSize: 14, fontWeight: '400'}}>Dikirim</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon name="ri-star-fill" size="34" color={COLORS.primary} />
              <Text style={{fontSize: 14, fontWeight: '400'}}>
                Beri penilaian
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          <View style={{borderBottomWidth: 1}}>
            <Text style={{marginTop: 20, marginBottom: 10}}>
              Transaksi Terakhir
            </Text>
          </View>
          {Transaksi.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RemixIcon name="ri-wallet-fill" color="#1d1d1d" size="34" />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '87%',
                      marginLeft: 10,
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#1d1d1d',
                          fontWeight: '400',
                        }}>
                        {item.payment}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#1d1d1d',
                          fontWeight: '400',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#1d1d1d',
                          fontWeight: '400',
                        }}>
                        {item.price}
                      </Text>
                      <Text
                        style={
                          item.review === 'Berhasil'
                            ? {color: 'green'}
                            : {color: 'red'}
                        }>
                        {item.review}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
