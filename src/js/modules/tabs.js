const tabs = (headerSelector, tabsSelector, tabsContentSelector, activeClass, display = 'block') => {

    const tab = document.querySelectorAll(tabsSelector),
          header = document.querySelector(headerSelector),
          content = document.querySelectorAll(tabsContentSelector);

    function hiideTabs() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        tab[i].classList.add(activeClass);
        content[i].style.display = display;
    }

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains(tabsSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))){
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item){
                    hiideTabs();
                    showTabs(i);
                }                
            });
        }
    });

    hiideTabs();
    showTabs();

/*     const trigger =  document.querySelectorAll(tabsTrigger),
        tabs = document.querySelectorAll(tabsGroupe),
        active = document.querySelectorAll(activeItem);

        trigger.forEach((item, i) => {
            if (i == 0) {
                tabs[i].style.display = 'block';
                active[i].classList.add(activeClass);
            } else {tabs[i].style.display = 'none';}

            item.addEventListener('click', (e) => {
                trigger.forEach((item, j) => {
                    active[j].classList.remove(activeClass);
                    tabs[j].style.display = 'none';
                });

                active[i].classList.add(activeClass);
                tabs[i].style.display = 'block';
            });
        }); */

};

export default tabs;