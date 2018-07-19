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
import api from '../../utils/http'
import loginQuery from '../../utils/queries/login'
import { gray } from '../colors';

 class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  changueUsername = (email) => {
    this.setState({
      email
    })
  }
  changuePassword = (password) => {
    this.setState({
      password
    })
  }
  handleLogin =  async () => {
    const data = {
      ...this.state,
    }
    const query = loginQuery(data)
    let response = await api('query', query)
    response = await response.json()
    console.log(response, data, query)
  }
	render(){
    const {width}=Dimensions.get('window');
		return(
      <Container style={{backgroundColor:'white'}}>
        <Content style={styles.container}>
        <Card style={{height:210,backgroundColor:'white', alignItems:'center'}}>  
              <Image style={{height:160,width:160,  marginTop:10}} source={{uri: 'https://files.informabtl.com/uploads/2013/11/subasta.png'}} />
              <Text style={{color:'black',fontSize:18, marginTop:8, alignItems:'center'}}>SubastaInversa</Text>
          </Card>
          <Form>
            <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 20,marginRight:16,borderRadius:10 }} stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={this.changueUsername} />
            </Item>
            <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 20,marginRight:16,borderRadius:10 }} stackedLabel >
              <Label>Password</Label>
              <Input secureTextEntry={true}  onChangeText={this.changuePassword}/>
            </Item>
          </Form>
          <Button onPress={this.handleLogin} style={{alignItems: 'center',marginLeft:16, justifyContent: 'center',marginTop: 25,marginRight:16,borderRadius:20 }} full primary>
            <Text> Login </Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Register')} style={{alignItems: 'center',marginLeft:16, justifyContent: 'center', marginTop: 15,marginRight:16,borderRadius:20 }} full primary>
            <Text> Sign Up </Text>
          </Button>
           <Body>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Right>
                  <Text style={{ fontSize: 15, color: 'gray',alignItems: 'center',marginRight:60 }}>¿Forgot your password?</Text>
                  <Text onPress={() => this.props.navigation.navigate('Account')} style={{ fontSize: 15, color: '#3B5998', marginLeft:25, marginTop:40 }}>¿Do you already have an account? Long in</Text>
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