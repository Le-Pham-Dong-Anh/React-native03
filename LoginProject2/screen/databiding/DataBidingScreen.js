import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBidingStyles'
/*
statefull => class co1 kế thừa compoment
stateless => giao diện render bởi function
*/ 
const data = [
  "gia tri 1", "gia tri 2","gia tri 3"
]
const dataAvatar = [
  {
      name: 'Sahara',
      image: require('../../asset/images/image1.jpeg'),
  },
  {
      name: 'Sophia',
      image: require('../../asset/images/image2.jpeg'),
  },
  {
      name: 'Hana',
      image: require('../../asset/images/image3.jpeg'),
  },
  {
      name: 'Naul',
      image: require('../../asset/images/image4.jpeg'),
  },
  {
      name: 'Kimihana',
      image: require('../../asset/images/image5.jpeg'),
  },
  {
      name: 'Yoko',
      image: require('../../asset/images/image6.jpeg'),
  },
  {
      name: 'Su',
      image: require('../../asset/images/image7.jpeg'),
  },
  {
      name: 'Finnia',
      image: require('../../asset/images/image8.jpeg'),
  },
  {
      name: 'Subana',
      image: require('../../asset/images/image9.jpeg'),
  },
  {
      name: 'Corohe',
      image: require('../../asset/images/image10.jpeg'),
  }
]



export default class DataBidingScreen extends Component {
  // name =" hello donganh"
  // soA = 1;
  // soB = 2;
  
  // state ={
  //   tinhTong: 0
  // }
  // onPress = () =>{
  //   console.log('hi boy');
  // }
  //  onPressTinhTong = () =>{
  //    let kq = this.soA + this.soB
  //    this.setState({tinhTong: kq}) //set lại giá trị của tinhTong
  //    console.log(`Tinh Tong: ${kq}`)
  //  }
  //  isRenderHello = false
  //  RenderHello = () => {

  //  }
  
  //  RenderHelloReact = () => {
  //   return <Text> Render hello </Text>
  // }
  // renderArray = () =>{
  //   return data.map((value,indes) =>(
  //     <Text>{value}</Text>
  //   )
  //   ) ;
  // }
  render() {
    return (
      // <View>
      //   <Text>{this.name}</Text>
      //   <Button
      //   title='sign in' 
      //   color='#841584'
      //   onPress={this.onPress}
      //   />
      //   <Button
      //   title='Tinh Tong' 
      //   color='#841584'
      //   onPress={this.onPressTinhTong}
      //   />
      //   <Text>Tong: {this.state.tinhTong}</Text>
      //   {this.RenderHelloReact()}
      //   {this.renderArray()}
        
      // </View>

      <View>{dataAvatar}</View>
    )
  }
}