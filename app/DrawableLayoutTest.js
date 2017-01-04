/**
 * Created by Admin on 2016/11/24.
 */
import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ToastAndroid,
    DrawerLayoutAndroid
} from "react-native"
import Header from "./View/Header";

export default class DrawableLayoutTest extends Component{
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
    render(){
        var navigationView = (
            <View style={{flex:1,backgroundColor:"#FFCED7"}}>
                <Text
                    style={{margin:10,color:"#fff",fontSize:20,textAlign:"center"}}
                >导航功能标题</Text>
                 <Text
                     style={{marginTop:10,marginLeft:20,color:"#fff",fontSize:15
                     ,textAlign:"left"}}>1.功能1</Text>
                <Text style={{marginTop:10,marginLeft:20,color:"#fff",fontSize:15,
                textAlign:"left"}}>2.功能2</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={()=>navigationView}>
                <View style={styles.container_test}>

                    <Header title="DrawableLayoutTest" message="true" onPress={()=>this._onBack()}/>

                    <Text style={{textAlign:'center', color:'red',marginTop:20,marginBottom:20}}>
                        Welcome to React Native!
                    </Text>
                    <TextInput
                        style={{height:40,borderWidth:1,borderColor:'red'}}
                        multiline={true}
                        defaultValue={'默认信息'}/>
                    <TextInput
                        style={{marginLeft:10,marginRight:10}}
                        autoFocus={true}
                        defaultValue={'默认信息2'}/>
                    <TextInput
                        editable={false}
                        defaultValue={'默认信息3'}/>
                    <View style={{width:100,height:100}}>
                        <Image style={{width:50,height:50}} source={require("../img/ic_launcher.png")}/>
                    </View>


                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container_test: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        flex: 1,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});