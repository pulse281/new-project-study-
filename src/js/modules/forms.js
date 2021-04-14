const forms = (formSelector) => {


    const form = document.querySelectorAll(formSelector);

    const inputsPhone = document.querySelectorAll('input[name="user_phone"]');

    inputsPhone.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });

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

            //const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', formData)
            .then(() => {
               thanksMessage(form, formMessage.succes);
            })
            .catch(() => {thanksMessage(form, formMessage.error);})
            .finally(() => {
                statusMessage.remove();
                form.reset();
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
        form.style.display = 'block';
        document.body.style.overflow = '';
        div.remove();
    }, 2000);}

};

export default forms;