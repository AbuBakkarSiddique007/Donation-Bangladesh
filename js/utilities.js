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
BtnForDonation.classList.add("bg-btn_bg");

BtnForDonation.addEventListener("click", function () {
    BtnForDonation.classList.add("bg-btn_bg");
    BtnForHistory.classList.remove("bg-btn_bg");
});


BtnForHistory.addEventListener("click", function () {
    BtnForHistory.classList.add("bg-btn_bg");
    BtnForDonation.classList.remove("bg-btn_bg");
});


function showSectionById(id) {
    document.getElementById('donation-card-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

