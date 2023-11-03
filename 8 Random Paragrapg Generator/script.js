const items=document.getElementById('items')
const datacon=document.getElementById('data')

const para=[
    "jay is good boy",
    "sneh is master the study",
    "shekhar is best in sports",
    "jay is good boy",
    "sneh is master the study",
    "shekhar is best in sports",
    "jay is good boy",
    "sneh is master the study",
    "shekhar is best in sports",
]

function shuffle(array){
    let currentIndex = array.length
    let randomIndex

    while (currentIndex!=0) {
        randomIndex=Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
    }
    return array
}


function generate(){
    if(items.value==0){
        alert('The value can not not zero')
    }
    else if(items.value>para.length){
        const randomIndex=Math.floor(Math.random() * para.length)
        datacon.innerHTML=`${para[randomIndex]}`
    }
    else{
        const shufflepara=para
        shuffle(para)

        const selectedpara=shufflepara.slice(0,items.value)
        const paragraphsHTML=selectedpara.map(para => `<p>${para}</p>`).join('')
        datacon.innerHTML=paragraphsHTML
    }
}