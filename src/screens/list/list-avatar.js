import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Image,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHListAvatar extends Component {
  state = {
    datas: []
  }
    componentDidMount() {
    let URL = 'http://its.yaz.com.tr/asumService/api/Mobil/getRestoranGetir?enlem=44.0000&boylam=55.0000';
  
    fetch(URL)
    .then(res => res.json())
    .then(res => {
      const datas = res.ListRestoran;
      this.setState({datas});
      console.log('response:', res.ListRestoran);
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Restoranlar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={this.state.datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{uri: data.KurumLogo}} />
                </Left>
                <Body>
                  <Text>
                    {data.SubeAdi}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.mesafe}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListAvatar;
