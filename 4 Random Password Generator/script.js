const inputslider=document.getElementById('inputSlider')
const slidervalue=document.getElementById('sliderValue')
const passbox=document.getElementById('password')

const lowercaseEL=document.getElementById('lowercase')
const uppercaseEL=document.getElementById('uppercase')
const numversEL=document.getElementById('numbers')
const symbolsEL=document.getElementById('symbols')

const generatebtn=document.getElementById('getbtn')
const copyicon=document.getElementById('copy')



const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_-+={}[]|\:;"<>,.?/~`'

slidervalue.textContent=inputslider.value
inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value

})

generatebtn.addEventListener('click',()=>{
    passbox.value=generatePassword()
})

function generatePassword(){
    const length = inputslider.value
    let password=''
    let characters = ''

    characters += lowercaseEL.checked ? lowercaseLetter : ""
    characters += uppercaseEL.checked ? uppercaseLetter : ""
    characters += numversEL.checked ? numbers : ""
    characters += symbolsEL.checked ? symbols : ""


    for(let i=0;i<length;i++){
        password+=characters.charAt(Math.floor(Math.random() * characters.length))
        // console.log(password);
    }

    return password
}

copyicon.addEventListener('click',()=>{
    if (passbox.value != '' || passbox.value.length>=10) {
        navigator.clipboard.writeText(passbox.value)
        copyicon.innerText='check'

        setTimeout(()=>{
            copyicon.innerHTML='content_copy'
        },3000)
    }

})