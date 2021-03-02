/*
 * @Author: xuwei
 * @Date: 2020-11-11 12:25:58
 * @LastEditTime: 2021-03-02 10:08:54
 * @LastEditors: xuwei
 * @Description:
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import PickerDemo from './demo/index';
import PickerDemo from './demo/routers/index';

AppRegistry.registerComponent(appName, () => PickerDemo);
