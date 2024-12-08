// For Donation now section 
// console.log('connect index js file');

// For Noakhali section:
document.getElementById('btn-donation-noakhali')
    .addEventListener('click', function () {
        let donationAmount = getInputFieldValueById('input-donation-amount-noakhali');
        let currentBalanceOfNoakhali = getTextFieldValueById('current-donation-amount-1');

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        let userCurrentBalance = getTextFieldValueById('userCurrentAccountBalance');

        if (userCurrentBalance < donationAmount) {
            alert('You do not have sufficient balance!');
            return;
        }

        let updatedBalanceNoakhali = donationAmount + currentBalanceOfNoakhali;
        document.getElementById('current-donation-amount-1').innerText = updatedBalanceNoakhali;

        let updateUserCurrentBalance = userCurrentBalance - donationAmount;
        document.getElementById('userCurrentAccountBalance').innerText = updateUserCurrentBalance;

        let div = document.createElement('div');
        div.innerHTML = `
            <div class="rounded-lg border-2 border-borderColor p-4 space-y-4">
                <p class="text-xl font-semibold">
                    ${donationAmount} Taka is donated to ${document.getElementById('noakhali-donation-title').innerText}.
                </p>
                <p>
                    Date : ${new Date().toString()}
                </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);

        // alert for successful payment:
        // setTimeout(function () {
        //     alert("Payment Successful.");
        // }, 10);

        //modal for confirmation: 
        const modal = document.getElementById("confirmation-modal");
        function openModal() {
            modal.showModal();
        }
        openModal();

        function closeModal() {
            modal.close();
        }
        closeModal;
    });

// For Feni section
document.getElementById('btn-donation-feni')
    .addEventListener('click', function () {
        let donationAmount = getInputFieldValueById('input-donation-amount-feni');
        let currentBalanceOfFeni = getTextFieldValueById('current-donation-amount-2');

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        let userCurrentBalance = getTextFieldValueById('userCurrentAccountBalance');

        if (userCurrentBalance < donationAmount) {
            alert('You do not have sufficient balance!');
            return;
        }

        let updatedBalanceFeni = donationAmount + currentBalanceOfFeni;
        document.getElementById('current-donation-amount-2').innerText = updatedBalanceFeni;

        let updateUserCurrentBalance = userCurrentBalance - donationAmount;
        document.getElementById('userCurrentAccountBalance').innerText = updateUserCurrentBalance;

        let div = document.createElement('div');
        div.innerHTML = `
            <div class="rounded-lg border-2 border-borderColor p-4 space-y-4">
                <p class="text-xl font-semibold">
                    ${donationAmount} Taka is donated to ${document.getElementById('feni-donation-title').innerText}.
                </p>
                <p>
                    Date : ${new Date().toString()}
                </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);

        // alert for successful payment:
        // setTimeout(function () {
        //     alert("Payment Successful.");
        // }, 10);

        //modal for confirmation: 
        const modal = document.getElementById("confirmation-modal");
        function openModal() {
            modal.showModal();
        }
        openModal();

        function closeModal() {
            modal.close();
        }
        closeModal;
    });

// For Quota section
document.getElementById('btn-donation-quota')
    .addEventListener('click', function () {
        let donationAmount = getInputFieldValueById('input-donation-amount-quota');
        let currentBalanceOfQuota = getTextFieldValueById('current-donation-amount-3');

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        let userCurrentBalance = getTextFieldValueById('userCurrentAccountBalance');

        if (userCurrentBalance < donationAmount) {
            alert('You do not have sufficient balance!');
            return;
        }

        let updatedBalanceQuota = donationAmount + currentBalanceOfQuota;
        document.getElementById('current-donation-amount-3').innerText = updatedBalanceQuota;

        let updateUserCurrentBalance = userCurrentBalance - donationAmount;
        document.getElementById('userCurrentAccountBalance').innerText = updateUserCurrentBalance;

        let div = document.createElement('div');
        div.innerHTML = `
            <div class="rounded-lg border-2 border-borderColor p-4 space-y-4">
                <p class="text-xl font-semibold">
                    ${donationAmount} Taka is donated to ${document.getElementById('quota-donation-title').innerText}.
                </p>
                <p>
                    Date : ${new Date().toString()}
                </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);

        // alert for successful payment:
        // setTimeout(function () {
        //     alert("Payment Successful.");
        // }, 10);

        //modal for confirmation: 
        const modal = document.getElementById("confirmation-modal");
        function openModal() {
            modal.showModal();
        }
        openModal();

        function closeModal() {
            modal.close();
        }
        closeModal;
    });

// btn blog:
document.getElementById('btn-show-blog')
    .addEventListener('click', function () {
        window.location.href = 'blog.html';
    });
