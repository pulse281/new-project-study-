import numValidate from "./numValidate";

const forms = (formSelector,  modalData) => {


    const form = document.querySelectorAll(formSelector),
          inputs = document.querySelectorAll('input');

    function clearInputs() {
        inputs.forEach(item => {
            if (item.getAttribute('type') == 'checkbox') {
                item.checked = false;
            } else {
                item.value = '';
            }
        });
    }

    numValidate('input[name="user_phone"]');

    const formMessage = {
        succes: `Данные отправлены </br> скоро мы с вами свяжемся.`,
        send: 'Идет отправка данных...',
        error: 'Произошла ошибка.'
    };

    form.forEach(item => {
        bindData(item);
    });

    const postData = async (url, data) => {

        let res = await fetch(url, {
            method: 'POST',
            /* headers: {'Content-Type': 'application/json'}, */
            body: data
        });

        return await res.text(); //text() - for FormData, json - for JSON
    };

    function bindData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.innerHTML = formMessage.send;
            form.append(statusMessage);

            

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') == 'end') {
                for (let key in modalData) {
                    formData.append(key, modalData[key]);
                }
            }

            //const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', formData)
            .then(() => {
               thanksMessage(form, formMessage.succes);
            })
            .catch(() => {thanksMessage(form, formMessage.error);})
            .finally(() => {
                statusMessage.remove();
                clearInputs();
            });
           
        });
    }

    function thanksMessage(form, msg) {

        const div = document.createElement('div');

        if (form.classList.contains('main_form')) {
            div.innerHTML = msg;
            form.append(div);

        } else {
            form.style.display = 'none';
            form.insertAdjacentElement('afterend', div);
            div.innerHTML = `<h2 style='margin-bottom: 3rem; font-size: 2rem; font-family: "Open Sans", sansSerif; font-weight: 700; font-style: normal; color: #333333; line-height: 1.5;'>${msg}</h2>`;
    }

    setTimeout(() => {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.popup_engineer').style.display = 'none';
        document.querySelector('.popup_calc_end').style.display = 'none';
        form.style.display = 'block';
        document.body.style.overflow = '';
        div.remove();
    }, 2000);}

};

export default forms;