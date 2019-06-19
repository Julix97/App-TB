import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; 

const list = [
    {
        title: 'Categoria 1',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 2',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 3',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 4',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 5',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 6',
        icon: 'caret-right'
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
                              tension={100} // These props are passed to the parent component (here TouchableScale)
                              activeScale={0.95} //
                              linearGradientProps={{
                                  colors: ['#C8EBFA', '#C8EBFB'],
                                  start: [1, 0],
                                  end: [0.2, 0],
                              }}
                              chevron
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
