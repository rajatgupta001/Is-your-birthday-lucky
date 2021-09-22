const dob = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const btnCheck = document.querySelector(".btn-chk");
const result = document.querySelector(".result");

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
    if(sum % luckyNumber.value === 0)
        return "Congrats! your birthdate is LUCKY";
    else
        return "Your birthday is not lucky, so sad";
}

function clickHandler(){
    const sum = sumOfDigits(dob.value);
    result.innerText = luckyOrNot(sum);
};

btnCheck.addEventListener("click", clickHandler);

