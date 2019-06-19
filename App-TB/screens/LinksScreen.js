import React from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; 

const list = [
    {
        title: 'Categoria 1',
        icon: 'caret-right',
        action: 'Categoria1Screen'
    },
    {
        title: 'Categoria 2',
        icon: 'caret-right',
        action: 'Categoria2Screen'
    },
    {
        title: 'Categoria 3',
        icon: 'caret-right',
        action: 'Categoria3Screen'
    },
    {
        title: 'Categoria 4',
        icon: 'caret-right',
        action: 'Categoria4Screen'
    },
    {
        title: 'Categoria 5',
        icon: 'caret-right',
        action: 'Categoria5Screen'
    },
    {
        title: 'Categoria 6',
        icon: 'caret-right',
        action: 'Categoria6Screen'
    },
]


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
          {
              <View>
                  {
                      list.map((item, i) => (
                          <ListItem
                              key={i}
                              title={item.title}
                              leftIcon={{ name: item.icon, type: 'font-awesome' }}
                              bottomDivider={true} 
                              Component={TouchableScale}
                              friction={90} //
                              tension={100} //
                              activeScale={0.95} //
                              linearGradientProps={{
                                  colors: ['#F1F1F0', '#F1F1F0'],
                                  start: [1, 0],
                                  end: [0.2, 0],
                              }}
                              chevron
                              //onPress={() => this.props.navigation.navigate(item.action)} //Sistema de manvegación, aún no funciona :C
                          />
                      ))
                  }
              </View>
          }
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Almacen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
