import React from 'react';
import ReactDOM from 'react-dom';
import RouterSet from '@/router/route'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

import '@/assets/css/reset.less'
import '@/assets/css/common.less'

import { addLocaleData, IntlProvider } from 'react-intl'
import zhCN from './lang/zh.js';    //导入 intl 配置文件
import enUS from './lang/en.js';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en, ...zh]);  // 引入多语言环境的数据  

ReactDOM.render(
	<IntlProvider locale='zh' messages={zhCN}>
    	<RouterSet />
    </IntlProvider>,
    document.getElementById('root')
);
