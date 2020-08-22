import  React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, 
    TouchableOpacity,
    TextInput,
    image,
    FlatList,
    Dimensions,
    Linking
    
} from 'react-native';

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import DropdownMenu from 'react-native-dropdown-menu';
import AutoHeightImage from 'react-native-auto-height-image';
import Constant from '../constant/Constant';

const data = [
  {
      src: Constant.SearchResultScreen.banner,
      money: '3.9000.000.000 đ',
      address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
      numberbedroom: '3',
      numberbathroom: '2',
      size: '102.6m²',
      date: '5/8/2020'
  },
  {
      src: Constant.SearchResultScreen.banner,
      money: '3.9000.000.000 đ',
      address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
      numberbedroom: '3',
      numberbathroom: '2',
      size: '102.6m²',
      date: '5/8/2020'
  },
  {
      src: Constant.SearchResultScreen.banner,
      money: '3.9000.000.000 đ',
      address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
      numberbedroom: '3',
      numberbathroom: '2',
      size: '102.6m²',
      date: '5/8/2020'
  },
  {
      src: Constant.SearchResultScreen.banner,
      money: '3.9000.000.000 đ',
      address: 'Tổ 3, Trung Sơn, Tam Điệp, Ninh Bình',
      numberbedroom: '3',
      numberbathroom: '2',
      size: '102.6m²',
      date: '5/8/2020'
  }
]


function Header(props) {
  return(
      <View style = {styles.header}>
          <Text style = {styles.headertext}>1/7 - 31/7 , Giá trung bình: {props.money}</Text>
      </View>
  )
}

function Item(props) {
  return(
      <TouchableOpacity>
          <View>
              <AutoHeightImage
                  width = {Dimensions.get('window').width}
                  source = {Constant.SearchResultScreen.banner}/>
              <Text style = {styles.itemtext}>{props.money}</Text>
          </View>
          <View>
              <Text style = {styles.addresstext}>
                  {props.address}
              </Text>
              <View style = {styles.detailinformation}>
                  <View style = {styles.detail}>
                      <Text style = {{marginRight: 5}}>{props.numberbedroom}</Text>
                      <Image style = {{marginRight: 5}} source ={Constant.SearchResultScreen.bedroom}/>
                      <Text style = {{marginRight: 5}}>{props.numberbathroom}</Text>
                      <Image style = {{marginRight: 5}}source ={Constant.SearchResultScreen.bathroom}/>
                      <Text>{props.size}</Text>
                  </View>

                  <View style = {styles.date}>
                      <Text>
                          {props.date}
                      </Text>
                  </View>
              </View>
          </View>
      </TouchableOpacity>
  )
}


export default function SearchResultScreen({navigation}) {
    const [valueSearch, onChangeTextSearch] = useState('');
    const [valueMenu, onChangeTextMenu] = useState('');

    var data = [["Phường","Thụy Khuê", "Định Công", "Đại Kim", "Thanh Nhàn","Bạch Mai"],
               ["Đường","Nguyễn cảnh Dị", "Láng","Minh Khai","Gốc Đế"],
               ["Vị trí căn","ĐN", "TN"],
               ["Diện tích","75m2","100m2"]];

    return (

    <SafeAreaView style={{flex: 1}}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}
        style={styles.iconback}
        >
          <Icon name="chevron-left" size={30} color="black" 
          style={{textAlign:'center', marginTop: 10}} />
        </TouchableOpacity>
        
        <TextInput
          placeholder = "Tìm địa điểm, căn hộ chung cư..."
          style={{ height: 50, borderColor: '#468684', borderWidth: 1, flex: 8 }}
          onChangeText={text => onChangeTextSearch(text)}
          value={valueSearch}
          //style={styles.search}
          />
      </View>
      
      <DropdownMenu
        style={{flex: 1}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'#238778'}
        handler={(selection, row) => onChangeTextMenu({text: data[selection][row]})}
        data={data}
        
      >
      </DropdownMenu> 
      <TouchableOpacity onPress = {() => Linking.openURL('https://www.facebook.com/')} style={{ flex: 5}}>
                <AutoHeightImage
                    width = {Dimensions.get('window').width}
                    source = {Constant.SearchResultScreen.banner}
                />
            </TouchableOpacity>
            
            <FlatList
                ListHeaderComponent = {() => <Header money = {"3000"}/>}
                renderItem = {({item}) => 
                    <Item 
                        money = {item.money}
                        address = {item.address}
                        numberbedroom = {item.numberbedroom}
                        numberbathroom= {item.numberbathroom}
                        date = {item.date}
                        size = {item.size}/>    
                 }
                data = {data}
                />

  </SafeAreaView>
      
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    header:{
        flexDirection:'row',
        flex: 1,
        //height:50
    },
    iconback:{
        flex: 1,
        backgroundColor:'#468684',
        height: 50
    },

})


