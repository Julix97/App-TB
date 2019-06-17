import React from 'react';
import { Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
    return (

        <Icon
            name={props.name}
            type={props.tipo}
      />
  );
}
