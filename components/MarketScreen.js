import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image, 
  TouchableOpacity, SafeAreaView, Dimensions, ScrollView,
  Grid
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {
   IconButton,
   Colors,
   Card,
   Button,
   List  } from 'react-native-paper';
import Constant from '../constant/Constant';
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {LineChart} from 'react-native-charts-wrapper';
// Setup Icon.Button onPress quay lại 
// Chưa Xử Lý SegmentControlTab
// Cài npm install -i react-native-segmented-control-tab --save


// const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
//   const data2 = [ -87, 66, -69, 92, -40, -61, 16, 62, 20, -93, -54, 47, -89, -44, 18 ]

//     const data = [
//         {
//             data: data1,
//             svg: { stroke: '#8800cc' },
//         },
//         {
//             data: data2,
//             svg: { stroke: 'green' },
//         },
//     ]
export default function App({ navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  const [expanded5, setExpanded5] = React.useState(false)
  const [customStyleIndex, setcustomStyleIndex] = React.useState(0);

  const handlePress = (expanded, setExpanded) => setExpanded(!expanded);

  
  
  return (
     <SafeAreaView style = {styles.container}>
      

        <Button style = {styles.button} mode = 'contained' 
         onPress = {() =>navigation.navigate(Constant.ProductDetailsScreen.goTo)}>
          <Text style={{ color:'#cee8e4', fontSize: 15}}>Yêu cầu thêm thông tin</Text>
        </Button>

        <ScrollView>
          <List.Section>

            <List.Accordion
              style={{ flex: 1}}
                title = {<Text style = {styles.headerstyle}>
                  Tình hình thị trường
                </Text>}
                expanded={expanded2}
                onPress={() => handlePress(expanded2, setExpanded2)}
              >
                  <View style = {{flexDirection: "row", flex: 1}}>
                    <Text style = {{flex: 1, textAlign: 'center', marginLeft: 10,color:'#667b78'}}>Giá trị trung bình theo đường{"\n"}</Text>
                    <Text style = {{flex: 1, textAlign: 'center',color:'#667b78'}}>Giá trị trung bình theo quận{"\n"}</Text>
                    <Text style = {{flex: 1, textAlign: 'center',marginRight: 10,color:'#667b78'}}>Giá trị dự báo trong 2021{"\n"}</Text>
                  </View>


                    <List.Accordion
                    style={{ flex: 1}}
                    title = {<Text style = {styles.headerstyle}>
                      Giá các căn hộ tương tự
                    </Text>}
                    expanded={expanded3}
                    onPress={() => handlePress(expanded3, setExpanded3)}
                    > 
                    <View>
                      <View style = {{flexDirection: "row", marginLeft: 15, borderBottomWidth: 1,
                      borderColor: 'black'}}>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Đống Đa{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Hai Bà Trưng{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Hoàng Mai{"\n"}</Text>
                      </View>
                      <View style = {{flexDirection: "row", marginLeft: 15}}>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Hoàn Kiếm{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Thanh Xuân{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Tây Hồ{"\n"}</Text>
                      </View>
                    </View>
                  </List.Accordion>
                  <List.Accordion
                  style={{ flex: 10}}
                    title = {<Text style = {styles.headerstyle}>
                      Biến động giá
                    </Text>}
                    expanded={expanded4}
                    onPress={() => handlePress(expanded4, setExpanded4)}
                    >
                      <View>
                        <View>
                        <SegmentedControlTab
                        style={{flex: 1}}
                              values={['Diện tích', 'Phân khúc']}
                              selectedIndex={customStyleIndex}
                              onTabPress={setcustomStyleIndex}
                              borderRadius={0}
                              tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
                              tabStyle={{
                                backgroundColor: '#cee8e4',
                                borderWidth: 0,
                                borderColor: 'transparent',
                              }}
                              activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
                              tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                              activeTabTextStyle={{ color: '#888888' }}
                            />
                          {customStyleIndex === 0 && (
                              
                              <SafeAreaView style={styles.chart}>
                                      <View style={styles.area}>
                                        <Button style={styles.buttonArea}><Text>25-50m²</Text></Button>
                                        <Button style={styles.buttonArea}><Text>50-80m²</Text></Button>
                                        <Button style={styles.buttonArea}><Text>80-100m²</Text></Button>
                                        <Button style={styles.buttonArea}><Text>100-150m²</Text></Button>
                                        <Button style={styles.buttonArea}><Text>150-200m²</Text></Button>

                                      </View>
                                      <LineChart style={styles.linechartOne}
                                        data={{dataSets:[{label: "demo1", values: [{y: 1}, {y: 2}, {y: 1}, {y: 1.2}]}]}}
                                      />
                                

                                  {/* <LineChart
                                              style={{ height: 200 }}
                                              data={ data }
                                              contentInset={{ top: 20, bottom: 20 }}
                                          >
                                              <Grid />
                                          </LineChart> */}
                                  </SafeAreaView>
                            )}
                          {customStyleIndex === 1 && (
                            <SafeAreaView style={styles.chart}>
                              <View style={styles.address}>
                                        <Button style={styles.buttonAddress}><Text>Bình thường</Text></Button>
                                        <Button style={styles.buttonAddress}><Text>Studio</Text></Button>
                                        <Button style={styles.buttonAddress}><Text>Officetel</Text></Button>
                                        <Button style={styles.buttonAddress}><Text>Condotel</Text></Button>

                                      </View>
                                <LineChart style={styles.linechartOne}
                                  data={{dataSets:[{label: "demo2", values: [{y: 1}, {y: 2}, {y: 1},{y: 1.2}]}]}}
                                />
                
                            </SafeAreaView>
                          )}
                        </View>
                      </View>
                  </List.Accordion>

            </List.Accordion>

            
          </List.Section>
        </ScrollView>
        <View style = {{height: 50}}></View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  headerstyle: {
    fontWeight: 'bold', 
    fontSize: 25,
    color: '#506461',
    //backgroundColor: '#e8f3f1'
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#00aa97',
    alignItems: "center",
    justifyContent: "center",
  },

  tabsContainerStyle: {
    backgroundColor: '#6c7a89',
  },
  area: {
  backgroundColor: '#00aa97',
  //  alignItems:'center',
  //  justifyContent:'center',
   flexDirection:'row',
   
  },
  address: {
    backgroundColor: '#00aa97',
    //  alignItems:'center',
    //  justifyContent:'center',
     flexDirection:'row',
     
    },

  chart:{
    flex: 1
  },
  linechartOne: {
    marginTop: "5%",
    marginLeft:"3%",
    width: 350,
    height: 500,
    color: 'green'
  },
  linechartTwo: {
    marginTop: "5%",
    marginLeft:"3%",
    width: 350,
    height: 500,
    color: 'red'

  }
})