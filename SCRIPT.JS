let title = document.querySelector('.main_heading');
let name="software developer, web developer, cloud architect"


let index=1;

const typeWriter=() =>{
    let new_title = name.slice(0,index);

    title.innerHTML=new_title;
    index >name.length ? index=1:index++;
    setTimeout(() => typeWriter(), 50);
}

typeWriter();


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });



  
// const wrapper = document.querySelector('#wrapper')
// const carousel = document.querySelector('#image-carousel')
// const images = document.querySelectorAll('img')
// const btn = document.querySelectorAll('button')
// const previous = document.querySelector('#prev')
// const nxt = document.querySelector('#next')



