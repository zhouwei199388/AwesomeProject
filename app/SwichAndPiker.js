/**
 * Created by Admin on 2016/11/24.
 */
'use strict';
import React,{ Component } from 'react'
import{
    Text,
    View,
    Switch,
    ToastAndroid,
    Picker,
} from 'react-native';
import Header from "./View/Header";

export default class SwitchAndPiker extends Component{
          constructor(props){
              super(props);
              this.state = {
                 trueSwitchIsOn:true,
                  falseSwitchIsOn:false,
                  language:"java",
              }
          };
    _onBack(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }
          render(){
              return(
                  <View style={{flex:1}}>
                      <Header title="SwitchAndPiker" message="true" onPress={()=>this._onBack()}></Header>
                      <Text style={{marginTop:10,textAlign:"center"}}>Switch实例</Text>

                      <Switch
                      onValueChange={(value)=>this.setState({falseSwitchIsOn:value})}
                      style={{marginBottom:10,marginTop:20,alignSelf:"center"}}
                      value={this.state.falseSwitchIsOn}/>

                      <Switch
                      onValueChange={(value)=>this.setState({trueSwitchIsOn:value})}
                      style={{marginTop:10,marginBottom:10,alignSelf:"center"}}
                      value={this.state.trueSwitchIsOn}/>

                      <Text style={{marginTop:10,textAlign:"center"}}>Piker实例</Text>
                      <Picker
                          style={{width:200,alignSelf:"center"}}
                          selectedValue={this.state.language}
                          onValueChange={(value) => this.setState({language: value})}>
                          <Picker.Item label="Java" value="java" />
                          <Picker.Item label="JavaScript" value="javaScript" />
                      </Picker>
                      <Text style={{marginTop:10,textAlign:"center"}}>当前选择的是:{this.state.language}</Text>
                  </View>
              )
          }
}
