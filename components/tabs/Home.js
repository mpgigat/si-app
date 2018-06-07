import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import Footer from './../FooterTabs'
import CardComponent from './../CardComponent'

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent/>
        </Content>
        <Footer navigation={this.props.navigation}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Home