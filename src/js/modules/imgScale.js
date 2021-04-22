const imgScale = () => {

    const overlay = document.createElement('div'),
          bigImg = document.createElement('img'),
          workArea = document.querySelector('.works'),
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
            document.body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup')) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

    });

          

}

export default imgScale;