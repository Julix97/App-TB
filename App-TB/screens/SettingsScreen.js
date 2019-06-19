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
    PricingCard,
    Icon
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; 

export default function SettingsScreen() {

    return (  
        <ScrollView
            horizontal={false}
            alwaysBounceVertical={true}
            >
            <View>
                <PricingCard                    
                    color="#4f9deb"
                    title="Ventas en el dia"
                    price="$1234"
                    info={['58 Ordenes', '20 Pedidos', '2 Cancelaciones', '10 Bebidas']}
                    button={{ title: '  Detalles', icon: 'add' }}                    
                />
            </View>
            <View>
                <PricingCard
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} //
                    activeScale={0.95} //
                    color="#5AAC44"
                    title="Ventas en el mes"
                    price="$163561"
                    info={['758 Ordenes', '1020 Pedidos', '50 Cancelaciones', '450 Bebidas']}
                    button={{ title: '  Detalles', icon: 'add' }}
                />
            </View>
        </ScrollView>
        
        );
}

SettingsScreen.navigationOptions = {
  title: 'Estadistica',
};
