import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'

class Hero extends Component {
    state = {  }
    render() { 
        return ( <Image
                style={styles.heroImage}
                source={require('./img/laptop2.jpg')}
            /> );
    }
}
 
export default Hero;

const styles=StyleSheet.create({
    heroImage:{
        flex:8,
        width:undefined,
        height:undefined
    }
})