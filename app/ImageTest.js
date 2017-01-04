/**
 * Created by Admin on 2016/11/23.
 */

import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    TouchableHighlight
} from "react-native"

import Header from "./View/Header";

export default class ImageTest extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _onBack(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }

    _onItemClick(context){
     ToastAndroid.show(context,ToastAndroid.SHORT);
    }


    render(){
          return(
              <View style={{flex: 1}}>

                  <Header title="ImageTest" message="true" onPress={()=>this._onBack()}></Header>

                  <View style={{flexDirection: "row",marginTop:10}}>
                      <TouchableHighlight onPress={()=>this._onItemClick("美食")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_0.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>美食</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("电影")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_1.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>电影</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("酒店")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_2.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>酒店</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("休闲娱乐")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_10.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>休闲</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("外卖")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_7.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>外卖</Text>
                          </View>
                      </TouchableHighlight>
                  </View>


                  <View style={{flexDirection: "row",marginTop:10}}>
                      <TouchableHighlight onPress={()=>this._onItemClick("机票/火车票")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_16.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>机票</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("KTV")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_3.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>KTV</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("周边游")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_6.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>周边游</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("丽人")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_11.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>丽人</Text>
                          </View>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={()=>this._onItemClick("旅游出行")} style={{flexGrow:1}}>
                          <View style={{alignItems:"center"}}>
                              <Image source={require("../img/ic_category_12.png")} style={{width:40,height:40}} ></Image>
                              <Text style={{color:"red",fontSize:14,textAlign:"center"}}>旅游</Text>
                          </View>
                      </TouchableHighlight>
                  </View>
              </View>
          )
    }
}


