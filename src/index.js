import React from 'react'
import { render } from 'react-dom';
import '../assets/css/app.css';
import 'material-design-icons-iconfont';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'typeface-roboto';
import AppTestHot from './components/AppTestHot';
import AppTestHotContainer from './components/AppTestHotContainer';

render(
    <AppTestHotContainer>
        <AppTestHot />
    </AppTestHotContainer>,
    document.getElementById('app'),
);

