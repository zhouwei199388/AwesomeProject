/**
 * Created by Admin on 2016/11/24.
 */
import React,{Component} from "react";
import {
    View,
    ToastAndroid,
    ScrollView,
} from "react-native"
import Header from "./View/Header";
import NavButton from "./View/NavButton";

export default class ScrollViewTest extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    _onBack(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }

    _pressButton(position){
        ToastAndroid.show(position+"",ToastAndroid.SHORT);
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header title="DrawableLayoutTest" message="true" onPress={()=>this._onBack()}/>
                <ScrollView >
                    <NavButton
                        onPress={()=>this._pressButton(0)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(1)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(2)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(3)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(4)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(5)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(6)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(7)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(8)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(9)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(10)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(11)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(12)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(13)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(14)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(15)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(16)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(17)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(18)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(19)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(20)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(21)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(22)}text="Text 控件"/>
                    <NavButton
                        onPress={()=>this._pressButton(23)}text="Text 控件"/>
                </ScrollView>
            </View>
        )
    }

}