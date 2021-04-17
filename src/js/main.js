import "./slider";

import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';
import changeModalState from './modules/changeModalState';


document.addEventListener('DOMContentLoaded', () => {

    const modalState = {};

    modals();
    forms('.form', modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.decoration_link', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);

});