/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';

import MainView from "./app/main.android"

export default class AwesomeProject extends Component {
    render(){

        var defaultName = "FirstPageComponent";
        var defaultComponent = MainView;

        return(
            <Navigator
            initialRoute={{message:defaultName,component:defaultComponent}}
            configureScene={(route,routeStack)=>{
                return Navigator.SceneConfigs.FadeAndroid;
            }}
            renderScene={(route,navigator)=>{
                let Component = route.component;
                if(route.component){
                    return <Component {...route.params} navigator={navigator}/>
                }
            }}/>
        );
    }

  // render() {
  //     var navigationView = (
  //         <View style={{flex: 1,backgroundColor:'#ffabb5'}}>
  //            <Text style={{margin:10, color:'#fff',fontSize:20,textAlign:'center'}}>
  //                导航栏功能标题
  //            </Text>
  //             <Text style={{marginTop:10,marginLeft:20,color:'#fff',fontSize:15,textAlign:'left'}}>
  //                 功能1
  //             </Text>
  //             <Text style={{marginTop:10,marginLeft:20,color:'#fff',fontSize:15,textAlign:'left'}}>
  //                功能2
  //             </Text>
  //         </View>
  //     );
  //


  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         hello world!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         To get started, edit index.android.js
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Double tap R on your keyboard to reload,{'\n'}
  //         Shake or press menu button for dev menu
  //       </Text>
  //     </View>
  //   );
  // }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
