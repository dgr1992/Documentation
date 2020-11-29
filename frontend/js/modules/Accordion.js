const Accordion = (el) => {

    const accordion = document.querySelectorAll(el);
    const triggers = document.querySelectorAll(`${el} .trigger`);

    if(accordion.length > 0){
        triggers.forEach((trigger) => {
            const subMenu = trigger.nextElementSibling;

            if(subMenu && subMenu.nodeName == 'UL'){
                trigger.classList.add('has-submenu'); //setup submenu class
                subMenu.style.display = 'none';
                
                // bind event listeners for expand/collapse
                trigger.addEventListener("click", (e) => {

                    // toggle active class of 'trigger' and 'ul' menu
                    if(trigger.classList.contains('has-submenu')){
                        if(!trigger.classList.contains('active')){
                            trigger.classList.add('active');
                            console.log("Add Active");
                            // setTimeout required to toggle display prop before class prop
                            // display required to remove elements from DOM when hidden
                            subMenu.style.display = 'block';
                            setTimeout(()=>{
                                subMenu.classList.add('active');
                            }, 1);
                            
                        } else {
                            trigger.classList.remove('active');
                            subMenu.classList.remove('active');
                            
                            setTimeout(()=>{
                                subMenu.style.display = 'none';
                            }, 1);
                        }
                    }
                });
            }
        });
    }

}

const toggleClass = (el, add, remove) =>{
    el.classList.remove(remove);
    el.classList.add(add);
}

export default Accordion