const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                modal.style.display = 'block';
                document.body.style.overflow = 'hide';
            });
        });

        close.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';           
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
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

    showModalFromTime('.popup', 3000);


}

export default modals;