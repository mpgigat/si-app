import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class Cardmejor extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
              <Image style={{ width: 130, height: 200 }}source={{uri: 'https://store.storeimages.cdn-apple.com/4666/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472'}} />
                <Body>
                    <Text style={{ color: '#34495e' }}>Tecnologia > Celulares</Text>
                        <Text note>Celular nuevo, color negro, con 32 GB de almacenamiento y 3 GB 
                        procesador snapdragon 625 y pantalla de 5.5 pulgadas        
                    </Text>
                    <View style={{  }}>
                        <Text style={{ fontSize: 20, color: 'orange', marginTop: 20, }}>$ 723.000</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#3498db', }}>Mejor</Text>
                        <Text style={{ fontSize: 15, color: 'black', marginTop: 10, }}>Cierra Mañana</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Right>
                            <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#7f8c8d', marginTop: 10,}}>¡Eres la mejor oferta hasta el momento!</Text>
                        </Right>
                    </View>
                </Body>
            </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}