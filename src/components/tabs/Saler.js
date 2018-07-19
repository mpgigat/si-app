import React, {Component} from 'react'
import {Container, Content, Text, Segment, Button} from 'native-base'
import Footer from './../FooterTabs';
import Subasta from './subasta';
import Misarticulos from './misarticulos';


class Saler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1
    }
  }

  setSegment = (seg) => {
    this.setState({
      seg
    })
  }

  render() {
    return(
      <Container>
        <Content>
        <Segment>
          <Button
          active={this.state.seg === 1 ? true : false}
          onPress={() => this.setSegment(1)}
          first
          >
            <Text>Subastas</Text>
          </Button>
          <Button
          active={this.state.seg === 2 ? true : false}
          onPress={() => this.setSegment(2)} 
          last>
            <Text>Mis Artículos</Text>
          </Button>
        </Segment>
        <Content padder>
          {this.state.seg === 1 && <Subasta />}
          {this.state.seg === 2 && <Misarticulos />}
        </Content>
        </Content>
        <Footer navigation={this.props.navigation}/>
      </Container>
    );
  }
}

export default Saler
