import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>

          );
    }
}
 
export default Home;