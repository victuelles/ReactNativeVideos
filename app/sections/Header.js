import React, { Component } from 'react'
import {StyleSheet,Text,View,Platform,Image} from 'react-native'
import {logo} from './img/Globo_logo_REV.png'

class Header extends Component {
    state = {isLoggedIn:false  }

    //ES6 arrow function syntax no need to bind to this

    toggleUser=()=>{
        this.setState(previousState=>{
            return {isLoggedIn:!previousState.isLoggedIn}
        })
    }

    render() { 
        let display=this.state.isLoggedIn?'Sample User':this.props.message
        return (  
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/Globo_logo_REV.png')}
                />
                <Text 
                onPress={this.toggleUser}
                style={styles.headText}>{display}
                </Text>
            </View>
        )
    }
}
 
export default Header;

const styles=StyleSheet.create({
    headText:{
        textAlign:'right',
        color:'#fff',
        fontSize:20,
       
    },
    headStyle:{
        paddingTop:30,
        paddingRight:10,
        paddingBottom:10,
        backgroundColor: Platform.OS==='ios'?'#35605a':'#31e981',
        flex:1,
        flexDirection:'row'
    },
    logoStyle:{
        flex:1,
        width:undefined,
        height:undefined
    }
})