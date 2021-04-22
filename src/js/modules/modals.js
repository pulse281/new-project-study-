const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverlayClick = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        function calcScroll() {
            let div = document.createElement('div');
    
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
    
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
    
            return scrollWidth;
        }

        function closeWindows() {
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            });
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                closeWindows();

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;           
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOverlayClick == true) {
                closeWindows();
                
            }
        });

    }

    function showModalFromTime(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    /* showModalFromTime('.popup', 3000); */


};

export default modals;