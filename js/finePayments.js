"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


function validateFields() {
let fineExists = false;
for (let i = 0; i < DB.length; i++) {
    if (DB[i].номер === fineNumber.value) {
        fineExists = true;
        if (parseFloat(amount.value) !== DB[i].сума) {
            alert("Сума не співпадає");
            return false;
        }
        break;
    }   
}
if (!fineExists) {
    alert("Номер не співпадає");
    return false;
}
let validatePassport = /^[А-ЩЬЮ-ЯҐЄІЇ]{2}\d{6}$/;
if (!validatePassport.test(passport.value)) {
    alert("Не вірний паспортний номер");
        return false;
}
let validateCreditCard = /^\d{16}$/;
if (!validateCreditCard.test(creditCardNumber.value)) {
    alert("Не вірна кредитна картка");
        return false;
}
let validateCVV = /^\d{3}$/;
if (!validateCVV.test(cvv.value)) {
    alert("Не вірний cvv");
    return false;
}
return true;
}
function payFine() {
    for (let i = 0; i < DB.length; i++) {
        if (DB[i].номер === fineNumber.value) {
            DB.splice(i, 1);
            break;
        }
    }

}

buttonSubmit.addEventListener('click',function() {
if (validateFields()) {
    payFine();
    alert("Штраф оплачено!")
}
});

