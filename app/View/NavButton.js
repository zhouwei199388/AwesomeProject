/**
 * Created by Admin on 2016/11/22.
 */


'use strict';
import React,{ Component } from 'react'
import{
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

class NavButton extends Component{
    render(){
        return(
            <TouchableHighlight
                style={btn_style.button}
                underlayColor={"#B5B5B5"}
                onPress={this.props.onPress}>
                <Text style={btn_style.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
};

 const btn_style = StyleSheet.create({
     button:{
         backgroundColor:'white',
         padding:15,
         borderBottomWidth:StyleSheet.hairlineWidth,
         borderBottomColor:'#CDCDCD',
     },
     buttonText:{
         textAlign:'center',
         color:'#232323',
         margin:5
     },
     });

  module.exports = NavButton;