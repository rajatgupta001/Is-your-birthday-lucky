const dob = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const btnCheck = document.querySelector(".btn-chk");
const resultPositive = document.querySelector(".result-positive");
const resultNegative = document.querySelector(".result-negative");

function sumOfDigits(dob)
{
    dob = dob.replaceAll("-", "");
    for(var i = 0; i < dob.length; i++)
    {
        var sum = 0;
        sum = sum + Number(dob.charAt(i));
        return sum;
    }
}

function luckyOrNot(sum){
    if(sum % luckyNumber.value === 0){
        resultNegative.style.display = "none";
        resultPositive.innerText = "Congrats! your birthday is LUCKY";
    }
    else{
        resultPositive.style.display = "none";
        resultNegative.innerText = "Your birthday is not lucky, so sad";
    }
}

function clickEventHandler(){
    var sum = sumOfDigits(dob.value);
    luckyOrNot(sum);
}

btnCheck.addEventListener("click", clickEventHandler);