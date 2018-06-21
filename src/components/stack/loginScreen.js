import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity, 
  Image,
  Icon
} from 'react-native';
import {
  Item,
  Container,
  Content,
  Input,
  Form,
  Item as FormItem,
  Label,
  Button,
  Text, Card, CardItem, Thumbnail,Left,Body,Righ
} from 'native-base'
import { gray } from '../colors';
 class LoginScreen extends Component {
	render(){
		return(
      <Container style={{backgroundColor:'white'}}>
        <Content style={styles.container}>
        <Card>
            <CardItem Image>
            <Image source={{uri: 'https://files.informabtl.com/uploads/2013/11/subasta.png'}} style={{flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center', width:200, height:200, marginLeft:120 }}/>
            </CardItem> 
          </Card>
          <Text style={{justifyContent: 'center', marginLeft:170, fontSize:20 }}>SubastaInversa</Text>
          <Form>
            <Item style={styles.Item} stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item style={styles.Item} stackedLabel >
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
          </Form>
          <Button style={{marginTop: 10,  width:430, marginLeft:25, paddingVertical:50 }} full primary>
            <Text> Login </Text>
          </Button>
          <Button style={{marginTop: 10,  width:430, marginLeft:25, paddingVertical:50 }} full primary>
            <Text> Sign Up </Text>
          </Button>
            <Text style={{marginLeft:165, marginTop: 50, color: '#A4A4A4'}}>¿Forgot your password?</Text>	
            <Text style={{marginLeft:145, marginTop: 30, color: '#A4A4A4'}}>¿Log in with another account?</Text>	
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
    
  },
  Item: {
    width: 430,
    backgroundColor:'#E0F2F7',
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:25,
    marginTop: 20,   
  }
});

export default LoginScreen