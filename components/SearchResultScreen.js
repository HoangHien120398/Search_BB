import {useState} from 'react';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Linking,
} from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import DropdownMenu from 'react-native-dropdown-menu';
import AutoHeightImage from 'react-native-auto-height-image';
import Constant from '../constant/Constant';
//import ProductDetailScreen from '../components/ProductDetailScreen';

const dataList = [
  {
    src: Constant.SearchResultScreen.banner,
    money: '3.9000.000.000 đ',
    address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
    numberbedroom: '3',
    numberbathroom: '2',
    size: '102.6m²',
    date: '5/8/2020',
  },
  {
    src: Constant.SearchResultScreen.banner,
    money: '3.9000.000.000 đ',
    address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
    numberbedroom: '3',
    numberbathroom: '2',
    size: '102.6m²',
    date: '5/8/2020',
  },
  {
    src: Constant.SearchResultScreen.banner,
    money: '3.9000.000.000 đ',
    address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
    numberbedroom: '3',
    numberbathroom: '2',
    size: '102.6m²',
    date: '5/8/2020',
  },
  {
    src: Constant.SearchResultScreen.banner,
    money: '3.9000.000.000 đ',
    address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
    numberbedroom: '3',
    numberbathroom: '2',
    size: '102.6m²',
    date: '5/8/2020',
  },
];

const BANNER =
  'https://static.vecteezy.com/system/resources/previews/000/358/274/non_2x/vector-hotel-online-booking-banner.jpg';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>
        1/7 - 31/7 , Giá trung bình: {props.money}
      </Text>
    </View>
  );
}

function Item(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffffff',
        marginTop: props.index === 0 ? 0 : 16,
      }}
      activeOpacity={0.9}
       onPress={() =>props.nav.navigate(Constant.SearchResultScreen.goTo)} 
      >
      <View>
        <AutoHeightImage
          width={Dimensions.get('window').width}
          source={Constant.SearchResultScreen.banner}
        />
        <Text style={styles.itemtext}>{props.money}</Text>
      </View>
      <View style={{padding: 8}}>
        <Text style={styles.addresstext}>{props.address}</Text>
        <View style={styles.detailinformation}>
          <View style={styles.detail}>
            <Text style={{marginRight: 5}}>{props.numberbedroom}</Text>
            <Image
              style={{marginRight: 5}}
              source={Constant.SearchResultScreen.bedroom}
            />
            <Text style={{marginRight: 5}}>{props.numberbathroom}</Text>
            <Image
              style={{marginRight: 5}}
              source={Constant.SearchResultScreen.bathroom}
            />
            <Text>{props.size}</Text>
          </View>

          <View style={styles.date}>
            <Text>{props.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function SearchResultScreen({navigation}) {
  const [valueSearch, onChangeTextSearch] = useState('');
  const [valueMenu, onChangeTextMenu] = useState('');

  var data = [
    ['Phường', 'Thụy Khuê', 'Định Công', 'Đại Kim', 'Thanh Nhàn', 'Bạch Mai'],
    ['Đường', 'Nguyễn cảnh Dị', 'Láng', 'Minh Khai', 'Gốc Đế'],
    ['Vị trí', 'ĐN', 'TN'],
    ['Diện tích', '75m2', '100m2'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconback}>
          <Icon
            name="chevron-left"
            size={30}
            color="black"
            style={{textAlign: 'center', marginTop: 10}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Tìm địa điểm, căn hộ chung cư..."
          style={{height: 50, borderColor: '#468684', borderWidth: 1, flex: 8}}
          onChangeText={(text) => onChangeTextSearch(text)}
          value={valueSearch}
        />
      </View>
      <View style={{flex: 1}}>
        {/* Filter bar */}
        <DropdownMenu
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'#238778'}
          handler={(selection, row) =>
            onChangeTextMenu({text: data[selection][row]})
          }
          data={data}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com/')}>
            <AutoHeightImage
              width={Dimensions.get('window').width}
              height={100}
              source={{uri: BANNER}}
            />
          </TouchableOpacity>

          {/* Label List */}
          <Text
            style={{
              fontSize: 18,
              marginVertical: 8,
              color: '#707070',
              marginLeft: 8,
            }}>
            Danh sách phù hợp
          </Text>

          {/* Danh sách địa chỉ */}
          <FlatList
            // ListHeaderComponent={() => <Header money={'3000'} />}
            renderItem={({item, index}) => (
              <Item
                index={index}
                money={item.money}
                address={item.address}
                numberbedroom={item.numberbedroom}
                numberbathroom={item.numberbathroom}
                date={item.date}
                size={item.size}
                nav={navigation}
                
              />
            )}
            keyExtractor={(_, i) => i.toString()}
            data={dataList}
          />
        </DropdownMenu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fa',
  },

  header: {
    flexDirection: 'row',
  },
  iconback: {
    backgroundColor: '#468684',
    height: 50,
    width: 50
  },

  headertext: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  itemtext: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ff9831',
    padding: 8,
    borderRadius: 20
  },

  addresstext: {
    marginTop: 2,
    marginBottom: 8,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  detailinformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  detail: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
  },

  date: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
  },
});
