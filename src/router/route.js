import React from 'react'
import Component from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Index from '@/view/index/index'
import Collection from '@/view/collection/collection'
import Get from '@/view/get/get'
import Share from '@/view/share/share'
import Upload from '@/view/upload/upload'

export default () => (
	<Router history={hashHistory}>
        <Route path="/" component={Index}>{/*首页打开是index组件*/}
        	<IndexRoute component={Get} />{/*默认连接到get子路由*/}
        	<Route path="/collection" component={Collection}/>
        	<Route path="/share" component={Share}/>
        	<Route path="/get" component={Get}/>
        	<Route path="/upload" component={Upload}/>
        </Route>
	</Router>
)