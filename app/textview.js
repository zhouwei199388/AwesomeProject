/**
 * Created by Admin on 2016/11/23.
 */

'use strict';
import React,{ Component } from 'react'
import{
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight
} from 'react-native';
import Header from "./View/Header";

export default class TextView extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _backClick(){
        const{navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }
    render(){
       return(
           <View>
               <Header title="Text测试" message="true" onPress ={()=>this._backClick()}> </Header>
                <Text style={{color:"red"}}>
                    第一个Text 红色
                </Text>

               <Text style={{color:"green",fontSize:20}}>
                   第二个Text 绿色 字体大小设置
               </Text>

               <Text style={{color:"green",fontFamily:"Cochin"}}>
                   第三个Text 绿色和字体名称
               </Text>

               <Text style={{color:"pink",fontWeight:"bold"}}>
                   第四个Text 粉色和加粗
               </Text>
               <Text style={{color:"gray",fontStyle:"italic"}}>
                   第五个Text 灰色加斜体
               </Text>

               <Text style={{textAlign:"center",fontStyle:"italic"}}>
                   第六个Text 居中加斜体
               </Text>

               <Text numberOfLines={1} style={{textAlign:"center",fontStyle:"italic"}}>
                     测试行数  测试行数 测试行数 测试行数 测试行数  测试行数  测试行数  测试行数
                   测试行数   测试行数  测试行数  测试行数 测试行数 测试行数 测试行数  测试行数  测试行数  测试行数
                   测试行数   测试行数
               </Text>

               <Text style={{marginLeft:50,marginTop:50,textAlign:"center",}}>
                     设置文本的间距，居左，上边距50
               </Text>

               <Text numberOfLines={2} style={{lineHeight:50,textAlign:"center",fontStyle:"italic"}}>
                   测试行高   测试行高  测试行高  测试行高  测试行高  测试行高  测试行高  测试行高
                   测试行高  测试行高  测试行高  测试行高  测试行高  测试行高  测试行高  测试行高
                   测试行高  测试行高  测试行高  测试行高  测试行高  测试行高  测试行高  测试行高
               </Text>
           </View>
       )
    }

}