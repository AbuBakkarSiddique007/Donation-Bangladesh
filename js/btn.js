document.getElementById('btn-for-donation')
    .addEventListener('click', function () {
        console.log('btn for donation click');
        showSectionById('donation-card-section');
    });

document.getElementById('btn-for-history')
    .addEventListener('click', function () {
        console.log('History button click');

        showSectionById('history-container');
    });
