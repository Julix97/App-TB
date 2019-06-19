import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
    View,
    FlatList,
} from 'react-native';

import {
    Card,
    ListItem,
    Button,
    Badge,
    Icon
} from 'react-native-elements';


const list = [
    {
        title: 'Tacos',
        subtitle: 'Adobada',
        icon: 'plus'
    },
    {
        title: 'Tortas',
        subtitle: 'Adobada',
        icon: 'plus'
    },
    {
        title: 'Tacos',
        subtitle: 'Adobada',
        icon: 'plus'
    },
    {
        title: 'Tortas',
        subtitle: 'Adobada',
        icon: 'plus'
    }
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
              style={styles.container}
              horizontal={true}
              alwaysBounceVertical={true}
              contentContainerStyle={styles.contentContainer}>
              <View style={styles.containerList}>
                  <Card title="Ejemplo de Orden" titleStyle={{ backgroundColor: "#458AD5", top: 7, height:30 }} containerStyle={{ padding: 0 }}>
                      {
                          <View>
                              {
                                  list.map((l, i) => (
                                      /*<ListItem
                                          key={i}                                          
                                          badge={{ value: "99+", status: "error", containerStyle: { marginTop: -20} }}  
                                          title={l.title}
                                          leftIcon={{ name: l.icon, type: 'font-awesome' }}
                                          subtitle={l.subtitle}
                                          bottomDivider={true}
                                      />,*/

                                      /*Aqui se realiza la lista --->Mucha suerte y no se estrese por fas >:v */
                                      <View style={styles.row} key={i}>
                                          <Button                                              
                                              icon={
                                                  <Icon
                                                      name="plus"
                                                      type="font-awesome"
                                                      size={15}
                                                      color="white"
                                                  />
                                              }                                              
                                              style={styles.btnmas1}
                                              buttonStyle={{ backgroundColor: '#5AAC44' }}
                                          />
                                          <Text style={styles.titles}>{l.title}</Text>
                                          
                                      </View>                                      
                                  ))

                              }                              
                              <View style={styles.row}>
                                  <Button //Este View es para lo botones de cancelar y finalizar orden
                                      icon={
                                          <Icon
                                              name="check"
                                              type="font-awesome"
                                              size={15}
                                              color="white"
                                          />
                                      }
                                      style={styles.btnmas1}
                                      title='Finalizar'
                                      buttonStyle={{ backgroundColor: '#5AAC44' }}
                                  />
                                  <Button
                                      icon={
                                          <Icon
                                              name="cross"
                                              type="entypo"
                                              size={15}
                                              color="white"
                                          />
                                      }
                                      style={styles.btnmas1}
                                      title='Cancelar'
                                      buttonStyle={{ backgroundColor: '#E75146' }}
                                  />
                              </View> 
                          </View>
                         
                      }
                      </Card>
              </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Herramientas:
        </Text>
        <Text style={styles.tabBarInfoText}>
          Aqui iran algunas herramientas
        </Text>

      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
    //Estos estilos son los que controlan la orden
    row: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        left:10
    },
    box: {        
        height: 30,
        backgroundColor: '#333'        
    },
    btnmas1: {        
        width:20
    },
    titles: {
        backgroundColor: 'transparent',
        fontSize: 16,
        top: -5,
        left: -100
    },
    //hasta aqui 


    containerList: {
        flex: 3,
        paddingTop: 0
    },
    itemobj: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
  container: {
    flex: 3,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
