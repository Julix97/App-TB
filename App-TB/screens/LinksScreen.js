import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
    {
        title: 'Categoria 1',
        icon: 'caret-right'
    },
    {
        title: 'Categoria 2',
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
