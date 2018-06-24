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
  Text, Card, CardItem, Thumbnail,Left,Body,Right,Center
} from 'native-base'
import { gray } from '../colors';

 class LoginScreen extends Component {
	render(){
    const {width}=Dimensions.get('window');
		return(
      <Container style={{backgroundColor:'white'}}>
        <Content style={styles.container}>
        <Card style={{height:210,backgroundColor:'white', alignItems:'center'}}>  
              <Thumbnail style={{height:160,width:160,  marginTop:10}} source={{uri: 'https://files.informabtl.com/uploads/2013/11/subasta.png'}} />
              <Text style={{color:'black',fontSize:18, marginTop:8, alignItems:'center'}}>SubastaInversa</Text>
          </Card>
          <Form>
            <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 20,marginRight:16 }} stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 20,marginRight:16 }} stackedLabel >
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
          </Form>
          <Button style={{alignItems: 'center',marginLeft:16, justifyContent: 'center',marginTop: 15,marginRight:16 }} full primary>
            <Text> Login </Text>
          </Button>
          <Button style={{alignItems: 'center',marginLeft:16, justifyContent: 'center', marginTop: 10,marginRight:16 }} full primary>
            <Text> Sign Up </Text>
          </Button>
           <Body>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Right>
                  <Text style={{ fontSize: 15, color: 'gray',alignItems: 'center',marginRight:20 }}>¿Forgot your password?</Text>
                  <Text style={{ fontSize: 15, color: 'gray',marginTop: 30 }}>¿log in with another account?</Text>
                </Right>
            </View>	
            </Body>
        </Content>
  		</Container>
     
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