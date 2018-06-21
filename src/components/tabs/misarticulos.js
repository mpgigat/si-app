import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, View, Card, CardItem, Left, Right, Button, } from 'native-base';

export default class misarticulos extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize:25, color: '#778ca3', borderLeftWidth: 8, borderLeftColor: '#3B5998', paddingLeft: 15 }}>Celular</Text>
        <Card>
          <CardItem>
            <Left>
              <Image style={{ width: 130, height: 200, marginRight: 20 }} source={{ uri: 'https://tigocolombia.vteximg.com.br/arquivos/ids/155533-1200-1200/iphone-7-jet-black-2.jpg?v=636531320188400000' }}/>
              <View style={{ marginTop: 10 }}>
                <Text style={{ marginTop: -100}}>Iphone 7</Text>
                <Text note style={{ marginTop: 20}} >Espacio de Disco 32 GB.
                Color: Gris, blanco dorado, rojo.</Text>
              </View>
            </Left>
            <Right>
              <Button style={{ marginTop: 120 }}>
                <Text>EDITAR</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Text style={{ fontSize:25, color: '#778ca3', borderLeftWidth: 8, borderLeftColor: '#3B5998', paddingLeft: 15 }}>Computador</Text>
        <Card>
          <CardItem>
            <Left>
              <Image style={{ width: 190, height: 200, marginRight: 20 }} source={{ uri: 'https://http2.mlstatic.com/computador-portatil-dell-30-intel-i5-x4-270gz-8ram-1000gb-D_NQ_NP_753662-MCO26064902145_092017-F.webp' }}/>
              <View style={{ marginTop: 10 }}>
                <Text style={{ marginTop: -100}}>Iphone 7</Text>
                <Text note style={{ marginTop: 20}} >Disco: 500 GB SSD.
                Colores: Gris, blanco dorado, rojo.
                Procesador: Intel Core i5.
                Pantalla: 15 inch.
                RAM: 8 GB.</Text>
              </View>
            </Left>
            <Right>
              <Button style={{ marginTop: 120 }}>
                <Text>EDITAR</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Text style={{ fontSize:25, color: '#778ca3', borderLeftWidth: 8, borderLeftColor: '#3B5998', paddingLeft: 15 }}>Bicicleta</Text>
        <Card>
          <CardItem>
            <Left>
              <Image style={{ width: 180, height: 200, marginRight: 20 }} source={{ uri: 'https://i.ebayimg.com/images/g/uwEAAOSwgiRZwXoF/s-l1600.jpg' }}/>
              <View style={{ marginTop: 10 }}>
                <Text style={{ marginTop: -100}}>Giant Proppel</Text>
                <Text note style={{ marginTop: 20}} >Cuadro: Giant Proppel.
                Grupo: Shimano Durace 11v
                Rines: Zipp</Text>
              </View>
            </Left>
            <Right>
              <Button style={{ marginTop: 120 }}>
                <Text>EDITAR</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </View>
      
    );
  }
}