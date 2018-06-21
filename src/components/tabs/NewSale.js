import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Image, Dimensions} from 'react-native';
import {
  Container, 
  Header, 
  Title, 
  Content, 
  Button, 
  Icon,  
  Body, 
  Left, 
  Picker, 
  Form, 
  View, 
  Text,
  Card,
  CardItem,
  Textarea,
  Grid
  } from 'native-base';
  import Footer from './../FooterTabs';
  import { blueFacebook } from '../colors';

  class NewSale extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selected2: undefined
      };
    }
    onValueChange2(value: string) {
      this.setState({
        selected2: value
      });
    }
    render() {
      console.log(this.props)
      const { navigation } = this.props
      const {width}=Dimensions.get('window');
      return (
        <Container style={{ backgroundColor: 'white',flexDirection:'column', justifyContent:'center'}}>
          <Content >
            <Card  transparent>
              <CardItem>
              <Left>
                <Text style={{ alignItems: 'flex-start', borderBottomWidth: 3, borderBottomColor:'#00aced', fontSize:20 }}>Iniciar una subasta</Text>
              </Left>
              </CardItem>
            </Card>
            <Form style={{borderColor:'black', borderWidth:1, width:400, marginBottom:15}}>
            <Picker 
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Categoría" value="key0" />
              <Picker.Item label="Categoría 2" value="key1" />
              <Picker.Item label="Tecnología" value="key2" />
              <Picker.Item label="Tecnología" value="key3" />
              <Picker.Item label="Tecnología" value="key4" />
            </Picker>
          </Form>
          <Form style={{borderColor:'black', borderWidth:1, width:400, marginBottom:25 }}>
            <Picker 
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Subcategoría" value="key0" />
              <Picker.Item label="Categoría 2" value="key1" />
              <Picker.Item label="Tecnología" value="key2" />
              <Picker.Item label="Tecnología" value="key3" />
              <Picker.Item label="Tecnología" value="key4" />
            </Picker>
          </Form>
          <Textarea style={{ borderColor:'gray', borderBottomWidth:1, marginBottom:25, height:160 }} placeholder="Descripción" ></Textarea>
          <Button>
            <Text>SUBIR FOTO</Text>
          </Button>

          <Card  transparent>
            <CardItem>
              <Image style={{ width: 150, height: 150 }}source={{ uri:'https://http2.mlstatic.com/saxofon-alto-laton-negro-importado-estuche-nuevos-saxo-negro-D_NQ_NP_584025-MCO25346564786_022017-F.webp'}}/>
              <Image style={{ width: 150, height: 150 }}source={{ uri:'https://http2.mlstatic.com/saxofon-alto-laton-negro-importado-estuche-nuevos-saxo-negro-D_NQ_NP_584025-MCO25346564786_022017-F.webp'}}/>
              <Image style={{ width: 150, height: 150 }}source={{ uri:'https://http2.mlstatic.com/saxofon-alto-laton-negro-importado-estuche-nuevos-saxo-negro-D_NQ_NP_584025-MCO25346564786_022017-F.webp'}}/>
            </CardItem>
          </Card>  
          <Button style={{ width:width*.9}}>
            <Text style={{ paddingLeft: 150 }}>CREAR SUBASTA</Text>
          </Button>   
          </Content>
        </Container>
      )
    }
  }
  function mapStateToProps(state, props) {
    return {
      ...props,
      redux: state
    }
  }
  
  export default connect(mapStateToProps)(NewSale)