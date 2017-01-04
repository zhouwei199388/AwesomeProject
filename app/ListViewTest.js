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
    TouchableOpacity,
    ListView,
    Image

} from 'react-native';
import Header from "./View/Header";


var THUMB_URLS =[
    require("../img/ic_category_1.png"),
    require("../img/ic_category_2.png"),
    require("../img/ic_category_3.png"),
    require("../img/ic_category_4.png"),
    require("../img/ic_category_5.png"),
    require("../img/ic_category_6.png"),
    require("../img/ic_category_7.png"),
    require("../img/ic_category_8.png"),
    require("../img/ic_category_9.png"),
    require("../img/ic_category_10.png"),
    require("../img/ic_category_11.png"),
    require("../img/ic_category_12.png"),
    require("../img/ic_category_13.png"),
    require("../img/ic_category_14.png"),

]

export default class ListViewTest extends Component{
         constructor(props) {
             super(props);
             var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
             this.state = {
                 dataSource: ds.cloneWithRows(["row 1", "row 1", "row 1", "row 1", "row 1", "row 1", "row 1", "row 1", "row 1", "row 1"])
             };
         }

    _onItemClick(position){
           ToastAndroid.show("第"+position+"列",ToastAndroid.SHORT);
         }

    _backClick(){
        const{navigator} = this.props;
        if(navigator){
            navigator.pop();
        }else{
            ToastAndroid.show("navigator is null",ToastAndroid.SHORT);
        }
    }
         _renderRow(rowData,sectionId,rowId){
             var imgSource = THUMB_URLS[rowId];
             return(
                 <TouchableOpacity onPress={()=>this._onItemClick(rowId)}>
                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#f6f6f6",padding:10}}>
                           <Image style={{width:50,height:50}} source={imgSource}></Image>
                         <Text style={{flex:1,fontSize:16,color:"blue",marginLeft:20}}>{rowData + "我是测试行号"}</Text>
                     </View>
                 </TouchableOpacity>
             )
         }


         render(){
             return(
             <View>
                 <Header title="ListView测试" message="true" onPress ={()=>this._backClick()}> </Header>
                 <ListView
                     dataSource={this.state.dataSource}
                     renderRow={this._renderRow.bind(this)}></ListView>
             </View>
             )
         }




}