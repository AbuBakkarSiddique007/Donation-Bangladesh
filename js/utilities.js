// console.log('utility js file connected');

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


//Btn color change:
const BtnForDonation = document.getElementById("btn-for-donation");
const BtnForHistory = document.getElementById("btn-for-history");

//default:
BtnForDonation.classList.add("bg-red-600");


BtnForDonation.addEventListener("click", function () {
  
    BtnForDonation.classList.add("bg-red-600");
    BtnForHistory.classList.remove("bg-red-600");
});


BtnForHistory.addEventListener("click", function () {
    BtnForHistory.classList.add("bg-red-600");
    BtnForDonation.classList.remove("bg-red-600");
});



function showSectionById(id) {
    document.getElementById('donation-card-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

