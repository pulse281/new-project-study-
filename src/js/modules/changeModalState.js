import numValidate from "./numValidate";

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowCustom = document.querySelectorAll('.checkbox');

    numValidate('#width');
    numValidate('#height');

    function changeState(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {state[prop] = item.value;}
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });
        
    }

    changeState(windowForm, 'click', 'form');
    changeState(windowWidth, 'input', 'width');
    changeState(windowHeight, 'input', 'height');
    changeState(windowType, 'change', 'type');
    changeState(windowCustom, 'change', 'custom');



};

export default changeModalState;