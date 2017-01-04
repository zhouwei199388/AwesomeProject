
/**
 * Created by Admin on 2016/11/22.
 */


'use strict';
import React,{ Component } from 'react'
import{
    StyleSheet,
    View,
    Navigator,
    ToastAndroid,
    BackAndroid,
    Platform,
} from 'react-native';
import NavButton from "./View/NavButton";
import Header from "./View/Header";
import TextView from "./textview";
import ImageTest from "./ImageTest";
import TextInputTest from "./TextInputTest";
import DrawableLayoutTest from "./DrawableLayoutTest";
import ScrollViewTest from "./ScrollViewTest";
import SwitchAndPiker from "./SwichAndPiker";
import ViewPagerTest from "./ViewPagerTest";
import ListViewTest from "./ListViewTest";
export  default  class MainView extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButton(view){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:"TextView",
                component:view,
                sceneConfig:Navigator.SceneConfigs.HorizontalSwipeJump,
            })
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {

        }else {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }
    onBackAndroid(){
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    };


    render(){
        return(
            <View style={styles.scenes}>
                <Header title="首页" message="false"/>
                <NavButton
                    onPress={()=>this._pressButton(TextView)}text="Text 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(ImageTest)}
                    text="Image 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(TextInputTest)}
                    text="TextInput 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(DrawableLayoutTest)}
                    text="DrawableLayoutTest 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(ScrollViewTest)}
                    text="ScrollViewTest 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(SwitchAndPiker)}
                    text="SwitchAndPiker 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(ViewPagerTest)}
                    text="ViewPagerTest 控件"/>
                <NavButton
                    onPress={()=>this._pressButton(ListViewTest)}
                    text="ListViewTest 控件"/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    messageText:{
        fontSize:17,
        fontWeight:'500',
        padding:15,
        marginTop:50,
        marginLeft:15,
    },
});



