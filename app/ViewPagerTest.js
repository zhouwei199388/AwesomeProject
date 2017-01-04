/**
 * Created by Admin on 2016/11/25.
 */
'use strict';
import React,{ Component } from 'react'
import{
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    ViewPagerAndroid,
    TouchableHighlight
} from 'react-native';
import Header from "./View/Header";


export default class ViewPagerTest extends Component{
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

    render(){
        return(
            <View>
                <Header title="ViewPagerTest" message="true" onPress={()=>this._onBack()}/>

                <ViewPagerAndroid style={{height:200}} initialPage={0}>
                    <View style={{backgroundColor:"red",justifyContent:"center"}}>
                       <Text style={{textAlign:"center",fontSize:20}}> 第一页</Text>
                    </View>
                    <View style={{backgroundColor:"green",justifyContent:"center"}}>
                    <Text style={{textAlign:"center",fontSize:20}}> 第二页</Text>
                </View>
                    <View style={{backgroundColor:"blue",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",fontSize:20}}> 第三页</Text>
                    </View>
                    <View style={{backgroundColor:"#115599",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",fontSize:20}}> 第四页</Text>
                    </View>
                </ViewPagerAndroid>

            </View>
        )
    }
}


