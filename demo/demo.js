var $ = require('jquery');
var TP = require('./tp');

var logDom = $('#log');
logDom.append('abc');


function getDeviceId() {
    logDom.append('get device');
    TP.getDeviceId().then(data => {
        logDom.append('device back');
        console.log(data);
        logDom.append(JSON.stringify(data));
    });
}

function getWalletList(type) {
    logDom.append('get wallet');
    TP.getWalletList(type).then(data => {
        logDom.append('wallet back');
        console.log(data);
        logDom.append(JSON.stringify(data));
    });
}

function makeTransaction() {
    TP.makeTransaction({
        // from: '',
        // to: '',
        // value: '',

    }).then(data => {
        console.log(data);
    })
}

$('#device-id').click(getDeviceId);

$('#eth-wallet').click(function (){
    getWalletList('eth');
});

$('#moac-wallet').click(function () {
    getWalletList('moac');
});





