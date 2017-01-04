/**
 * Created by Admin on 2016/11/22.
 */
'use strict';
import React,{ Component } from 'react'
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ToolbarAndroid,
    ToastAndroid

} from 'react-native';


 class Header extends Component{
     render(){
         if(this.props.message==="true"){
             return(
                 <View style={head_style.toolbar_back} >
                     <TouchableOpacity style={{justifyContent:"center",backgroundColor:"#555555",paddingHorizontal:10}}
                                       onPress={this.props.onPress}>
                         <Image source={require("../../img/back.png") }></Image>
                     </TouchableOpacity>
                     <Text style={{color:"white",fontSize:18,paddingLeft:10}}>{this.props.title}</Text>
                 </View>
             );
         }else{
             return(
                 <View style={head_style.toolbar} >
                     <Text style={{color:"white",fontSize:18,textAlign:"center"}}>{this.props.title}</Text>
                 </View>
             );
         }
     }
 }

 const head_style = StyleSheet.create({
     toolbar:{
         backgroundColor:"#555555",
         height:48,
         justifyContent:"center"
     },
     toolbar_back:{
         backgroundColor:"#555555",
         height:48,
         flexDirection:"row",
         alignItems:"center"
     },
 })


 module.exports = Header;

