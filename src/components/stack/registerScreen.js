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
class Register extends React.Component {
    render() {
        const {width}=Dimensions.get('window');
        return(
            <Container style={{backgroundColor:'white'}}>
              <Content style={styles.container}>
              <Card style={{height:80,backgroundColor:'white', alignItems:'center'}}>  
                    <Text style={{color:'black',fontSize:42, marginTop:6, alignItems:'center',fontWeight:'300'}}>Register</Text>
                </Card>
                <Form>
                  <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 40,marginRight:16,borderRadius:10 }} stackedLabel>
                    <Label>Username</Label>
                    <Input />
                  </Item>
                  <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 40,marginRight:16,borderRadius:10 }} stackedLabel>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 40,marginRight:16,borderRadius:10 }} stackedLabel >
                    <Label>Password</Label>
                    <Input secureTextEntry={true}/>
                  </Item>
                  <Item style={{ backgroundColor:'#E0F2F7', alignItems:'center',justifyContent: 'center',marginTop: 40,marginRight:16,borderRadius:10 }} stackedLabel >
                    <Label>Confirm Password</Label>
                    <Input secureTextEntry={true}/>
                  </Item>
                </Form>
                <Button onPress={() => this.props.navigation.navigate('Register')} style={{alignItems: 'center',marginLeft:16, justifyContent: 'center', marginTop: 40,marginRight:16,borderRadius:20 }} full primary>
                  <Text>Accept</Text>
                </Button>
                 <Body>
                  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                      <Right>
                        <Text style={{ fontSize: 15, color: 'gray',marginTop: 10 }}>¿log in with another account?</Text>
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

export default Register