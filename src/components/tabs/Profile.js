import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Container,
  Content,
  Header,
  Tab,
  Tabs,
  List,
  ListItem,
  Icon,
  Body,
  Right,
  Image,
  Card,
  CardItem,
  Left,
  Button,
  Thumbnail,
  View,
  Row,
} from 'native-base';
import Card1 from './cardactive';
import Footer from './../FooterTabs';
import { blueFacebook } from '../colors';


class Profile extends Component {
  render() {
    console.log(this.props)
    const { navigation } = this.props
    return (
      <Container>
        <Content >
          <Card style={{height:300,backgroundColor:'#3B5998', alignItems:'center'}}>  
              <Text style={{color:'white',fontSize:20, marginTop:20}}>Andresito</Text>
              <Thumbnail style={{height:180,width:180, borderRadius:100, marginTop:10}} source={{uri: 'http://cdn.revistagq.com/uploads/images/thumbs/201501/brad_pitt_8257_645x485.jpg'}} />
          </Card>
        <Tabs initialPage={0}>
          <Tab heading="INFORMACION">
          <List style={{marginTop:0}}>
            <ListItem style={{marginVertical:20}} icon>
              <Body >
                <Text style={{fontSize:20, marginBottom:18}}>Andresito@subasta.com.co</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:25, color:'blue', marginBottom:20, }} name="plane"/>
              </Right>
            </ListItem>
            <ListItem  icon>
              <Body style={{marginVertical:20, justifyContent:'space-around'}}>
                <Text style={{fontSize:20,marginBottom:18}}>(+57) 321 332 6835 </Text>
              </Body>
              <Right>
                <Icon style={{fontSize:25, color:'blue',marginBottom:20}} name="thumbs-up"/>
              </Right>
            </ListItem>
            <ListItem style={{marginVertical:20}} icon>
              <Body>
                <Text style={{fontSize:20,marginBottom:18}}>San Gil, Santander, Colombia</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:25, color:'blue',marginBottom:20}} name="chatbubbles"/>
              </Right>
            </ListItem >
          </List>
          </Tab>  
          <Tab heading="MIS SUBASTAS">  
              <Card1/>
          </Tab>  
        </Tabs>
        </Content>
        <Footer navigation={navigation}/>
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

export default connect(mapStateToProps)(Profile)
