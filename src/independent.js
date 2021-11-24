/*
 * @Author: xuwei
 * @Date: 2021-02-01 18:17:39
 * @LastEditTime: 2021-02-05 16:23:12
 * @LastEditors: xuwei
 * @Description:
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {SingleSlide} from './single';
export class IndependentPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex:this.props.defaultValueIndexes ? this.props.defaultValueIndexes[0] : 0//记录当前选中数据index
    }
    this._initData();
  }

  _initData = () => {
    const {dataSource} = this.props;
    dataSource.forEach((element, index) => {
      // 第一列数据如果当前选中项有联动数据则第二项列表使用第一项的联动数据，否则使用默认的数据
      if(index == 1 && element[0].list){
        this.props.setResult(index, element[0].list[0]);
      }else{
        this.props.setResult(index, element[0]);
      }
    });
  };

  _done = (dataindex, parindex) => {
    const {dataSource, onceChange} = this.props;
    let list = dataSource[parindex];
    // 设置当前选中选项的index
    let selectedIndex = this.state.selectedIndex;
    if(parindex == 0){
      // 滚动第一列并且选中数据是上一次或者本次是有联动数据的项，则需要把当前记录的选中第二项index重置
      if(dataSource[0][this.state.selectedIndex].list || dataSource[0][dataindex].list){
        this.props.setResult(1, dataSource[0][dataindex].list ? dataSource[0][dataindex].list[0] : dataSource[1][0]);
      }
      selectedIndex = dataindex;
      this.setState({
        selectedIndex
      })
    }
    // 第一列数据如果当前选中项有联动数据则第二项列表使用第一项的联动数据，否则使用默认的数据
    if(parindex == 1 && dataSource[0][selectedIndex].list){
      list = dataSource[0][selectedIndex].list;
    }
    this.props.setResult(parindex, list[dataindex]);
    onceChange && onceChange();
  };

  render() {
    const {dataSource, pickerStyle, defaultValueIndexes} = this.props;
    return (
      <View style={sts.all}>
        {dataSource.map((list, index) => {
          // 第一列数据如果当前选中项有联动数据则第二项列表使用第一项的联动数据，否则使用默认的数据
          if(index == 1 && dataSource[0][this.state.selectedIndex].list){
            return (
              <SingleSlide
                list={dataSource[0][this.state.selectedIndex].list}
                key={index}
                inparindex={index}
                done={this._done}
                defaultIndex={defaultValueIndexes ? defaultValueIndexes[index] : 0}
                {...pickerStyle}
              />
            )
          }
          return (
            <SingleSlide
              list={list}
              key={index}
              inparindex={index}
              done={this._done}
              defaultIndex={defaultValueIndexes ? defaultValueIndexes[index] : 0}
              {...pickerStyle}
            />
          )
        })}
      </View>
    );
  }
}
const sts = StyleSheet.create({
  all: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
