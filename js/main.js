import { CreateData } from "./data.js";

import { Elements } from './elements.js'


new CreateData()



const htmlElements = Elements()

htmlElements.button1.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/haaland.webp'
    htmlElements.namePlayer.innerHTML = 'Haaland'
})
htmlElements.button2.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/mbappe.webp'
    htmlElements.namePlayer.innerHTML = 'Mbappé'
})
htmlElements.button3.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/cr7.jpg'
    htmlElements.namePlayer.innerHTML = 'Cristiano Ronaldo'
})
htmlElements.button4.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/dybala.webp'
    htmlElements.namePlayer.innerHTML = 'dybala'
})
htmlElements.button5.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/messi.jpg'
    htmlElements.namePlayer.innerHTML = 'Messi'
})
htmlElements.button6.addEventListener('click' , function(){
    console.log('clickou')
    document.getElementById('change-img').src = 'images/neymar.webp'
    htmlElements.namePlayer.innerHTML = 'Neymar'
})
