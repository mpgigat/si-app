import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Card1 from './cardactive';
import Card2 from './cardcurso';
import Card3 from './cardmejor';
import Card4 from './cardhistory';

export default class Subasta extends Component {
    render() {
        return(
            <Container>
                <Tabs initialPage={0}>
                    <Tab heading="ACTIVAS">
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </Tab>
                    <Tab heading="EN CURSO">
                        <Card2 />
                        <Card3 />
                    </Tab>
                    <Tab heading="HISTORIAL">
                        <Card4 />
                        <Card4 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}