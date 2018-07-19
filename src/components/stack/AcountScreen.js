import React, { Component } from 'react';
import {Image,  Dimensions} from 'react-native';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity, 
  Icon
} from 'react-native';
import {
  Item,
  Container,
  Content,
  Input,
  View,
  Form,
  Item as FormItem,
  Label,
  Button,
  Text, Card, CardItem, Thumbnail,Left,Body,Right,Center,
  ImageBackground
} from 'native-base'
import { gray } from '../colors';

 class LoginScreen extends Component {
	render(){
    const {width}=Dimensions.get('window');
    const {height}=Dimensions.get('window');
		return(
      <ImageBackground source= {{uri: 'https://images.wallpapersden.com/image/download/dunes-galaxy-s8-stock_58437_720x1280.jpg'}}>
      <Container style={{backgroundColor:'white'}}>
      
      <Content style={styles.container}>
          {/* <Card style={{height:height*.4,width:width,backgroundColor:'white', alignItems:'center'}}>  
              <Image style={{height:763,width:840,  alignItems:'center',justifyContent: 'center',}} source={{uri: 'https://images.wallpapersden.com/image/download/dunes-galaxy-s8-stock_58437_720x1280.jpg'}} />

            */}
        </Content>
  		</Container>
      </ImageBackground>
			)
	}
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  }
});

export default LoginScreen