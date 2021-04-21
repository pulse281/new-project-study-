const imgScale = () => {

    const overlay = document.createElement('div'),
          bigImg = document.createElement('img'),
          workArea = document.querySelector('.works');

    overlay.classList.add('popup');
    overlay.style.cssText = 'justify-content: center; align-items: center;'
    bigImg.style.cssText = 'max-height: 70%; max-width: 70%;';
    overlay.appendChild(bigImg);
    workArea.appendChild(overlay);

    workArea.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target && target.classList.contains('preview')) {
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';

        }

    });

          

}

export default imgScale;