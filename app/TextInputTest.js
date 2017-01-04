/**
 * Created by Admin on 2016/11/24.
 */
'use strict';
import React,{ Component } from 'react'
import{
    Text,
    View,
    Image,
    ToastAndroid,
    TextInput,
} from 'react-native';
import Header from "./View/Header";


export default class TextInputTest extends Component{
           constructor(props){
               super(props);
               this.state ={
                   accountNumber:"",
                    passWord:"",
               }
           }

    _onBack(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }

    _isLogin(){
        if(this.state.accountNumber===""){
            ToastAndroid.show("账号不能为空",ToastAndroid.SHORT);
            return;
        }
        if(this.state.passWord === ""){
            ToastAndroid.show("密码不能为空",ToastAndroid.SHORT);
            return;
        }

        if(this.state.accountNumber.length>12||this.state.accountNumber.length<5){
            ToastAndroid.show("请输入6-11位的英文数字账号",ToastAndroid.SHORT);
            return;
        }
        if(this.state.passWord.length>12||this.state.passWord.length<5){
            ToastAndroid.show("请输入6-11位的英文数字密码",ToastAndroid.SHORT);
            return;
        }

        if(this.state.accountNumber !== "775987042"){
            ToastAndroid.show("账号不正确",ToastAndroid.SHORT);
            return;
        }

        if(this.state.passWord !=="123456789"){
            ToastAndroid.show("密码不正确",ToastAndroid.SHORT);
            return;
        }

        ToastAndroid.show("登录成功",ToastAndroid.SHORT);
    }
    render(){
        return(
            <View>
                <Header title="TextInputTest" message="true" onPress={()=>this._onBack()}/>

                <Image source={require("../img/icon_qq.jpg")} style={{alignSelf: "center",marginTop:20,width:80,height:80}}></Image>

                <TextInput  style={{backgroundColor:"#fff",height:40,marginTop:30,marginHorizontal:40,borderColor:"#555",borderWidth:1,borderRadius:5}}
                            placeholder='QQ号/手机号/邮箱'
                            numberOfLines={1}
                            autoFocus={true}
                            onChangeText={(phone)=>this.setState({accountNumber:phone})}
                            underlineColorAndroid={'transparent'}
                            textAlign='center'/>

                <TextInput  style={{backgroundColor:"#fff",height:40,marginTop:30,marginHorizontal:40,borderColor:"#555",borderWidth:1,borderRadius:5}}
                            placeholder="输入密码"
                            numberOfLines={1}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                            textAlign='center'
                             onChangeText={(pwd)=>this.setState({passWord:pwd})}/>
                <Text style={{marginHorizontal:20,borderRadius:5,backgroundColor:"#63B8FF",textAlign:"center",paddingVertical:10,fontSize:18,marginTop:20}}
                onPress={()=>this._isLogin()}>登录</Text>
            </View>
        )
    }
}