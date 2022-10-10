
require('./bootstrap');
import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import Header_top from './components/home_page/menu_one/header';
import Menu from './components/home_page/menu_two/menu';
import Slide_header from './components/home_page/slide_header/slide_header';
import Section_1 from './components/home_page/section_1/section_1';
import Section_2 from './components/home_page/section_2/section_2';
import Section_3 from './components/home_page/section_3/section_3';
import Section_4 from './components/home_page/section_4/section_4';
import Section_5 from './components/home_page/section_5/section_5';
import Section_6 from './components/home_page/section_6/section_6';
import Section_7 from './components/home_page/section_7/section_7';
import Section_8 from './components/home_page/section_8/section_8';
import Section_9 from './components/home_page/section_9/section_9';
import Section_10 from './components/home_page/section_10/section_10';
import Footer from './components/home_page/footer/footer';

createApp(Header_top).mount("#header_top")
createApp(Menu).mount("#menu")
createApp(Slide_header).mount("#slide_header")
createApp(Section_1).mount("#section_1")
createApp(Section_2).mount("#section_2")
createApp(Section_3).mount("#section_3")
createApp(Section_4).mount("#section_4")
createApp(Section_5).mount("#section_5")
createApp(Section_6).mount("#section_6")
createApp(Section_7).mount("#section_7")
createApp(Section_8).mount("#section_8")
createApp(Section_9).mount("#section_9")
createApp(Section_10).mount("#section_10")
createApp(Footer).mount("#footer")