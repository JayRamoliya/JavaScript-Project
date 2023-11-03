const agecalculatorform = document.getElementById('agecalculator')

function calculateAge(){

    const today = new Date()
    const birthdayinput = document.getElementById('birthdate').value
    const birthdateparts = birthdayinput.split('-')

    const birthday=birthdateparts[0]
    const birthmonth=birthdateparts[1]-1
    const birthyear=birthdateparts[2]

    const birthDate = new Date(birthyear,birthmonth,birthday)


    // console.log(birthdateparts);
    // console.log(birthdayinput);
    // console.log(birthday);
    // console.log(birthmonth);
    // console.log(birthyear);


    // aa code tayre karvo jayre tame input ma as text leta hoy jo taya date leta hoy to nathi jarur
    const isValidDate = (date)=>{
        return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    };
    if(!isValidDate(birthDate)){
        alert('Invalid date format: please enter a valid date in DD-MM-YYYY format.')
        return
    }

    const ageInMiliSec= today - birthDate
    const ageInsec=Math.floor(ageInMiliSec/1000)

    const ageInmin=Math.floor(ageInsec/60)
    
    const ageInhour=Math.floor(ageInmin/60)
    
    const ageIndyas=Math.floor(ageInhour/24)
    
    const ageInweeks=Math.floor(ageIndyas/7)
    
    const ageInmonths=Math.floor(ageIndyas/30.436875)
    
    const ageInyears=Math.floor(ageIndyas/365.25)

    const resultcontainer=document.getElementById('resultContainer')
    const result=document.getElementById('result')

    result.innerHTML=`
    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInyears} years ${ageInmonths % 12} months ${ageIndyas % 30} days</p>
    </div>
    <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInmonths}</p>
    </div>
    <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInweeks} </p>
    </div>
    <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageIndyas}</p>
    </div>
    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInhour}</p>
    </div>
    <div class="result-item">
        <h3>Minutes Passed:</h3>
        <p>${ageInmin}</p>
    </div>
    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${ageInsec}</p>
    </div>
    `

    resultcontainer.style.display='block'
}





agecalculatorform.addEventListener('submit',(event)=>{

    event.preventDefault();
    calculateAge()
})