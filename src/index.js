import React from 'react';
import ReactDOM from 'react-dom';
import RouterSet from '@/router/route'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

ReactDOM.render(
    <RouterSet />,
    document.getElementById('root')
);
