import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
 
const styles = StyleSheet.create({
    container: {
      flex:1,

    },
  });
  
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
            
              <Header message='Press to Login'/>
              <Hero />
              <Text style={{flex:8}}>This will be the HOMEPAGE</Text>
            
          </View>
        )
    }
}
 
export default Home;