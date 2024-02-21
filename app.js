const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function out(){
  document.getElementById('emem').style.backgroundColor = '#FFD200'
  document.getElementById('ememem').style.color = '#5A1F06'
}


  function brown(){
    document.getElementById('emem').style.backgroundColor = '#5A1F06'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }

  function orange(){
    document.getElementById('emem').style.backgroundColor = 'rgb(255, 115, 0)'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }

  function purple(){
    document.getElementById('emem').style.backgroundColor = 'purple'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }

  function red(){
    document.getElementById('emem').style.backgroundColor = 'red'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }

  function green(){
    document.getElementById('emem').style.backgroundColor = 'green'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }

  function blue(){
    document.getElementById('emem').style.backgroundColor = 'blue'
    document.getElementById('emem').style.transition = 'all ease 0.7s'
    document.getElementById('ememem').style.color = 'white'
  }