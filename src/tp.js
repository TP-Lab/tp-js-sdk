let _ = require('lodash'); 
let Promise = require('promise');
let Web3 = require('web3');
let Chian3 = require('chain3');

const TYPE_MAP = {
    eth: '1',
    jingtum: '2',
    moac: '3'
};

let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
let chain3 = new Chain3(new Chain3.providers.HttpProvider('https://chain3.mytokenpocket.vip'));


let _getTypeByStr = typeStr => {
    typeStr = _.trim(typeStr).toLowerCase();
    return TYPE_MAP[typeStr] || typeStr;
}

let _getCallbackName = () => {
    return 'tp_callback_' + (new Date).getTime();
}

let tp = {
    version: '2.0.0',
    isConnected: () => {
        return window.TPJSBrigeClient || window.webkit;
    },
    eosTokenTransfer: params => {
        // 必填项
        if (!params.from || !params.to || !params.amount || !params.tokenName) {
            throw new Error('missing params; "from", "to", "amount", "tokenName" is required ');
        }

        if (params.tokenName !== 'EOS' && (!params.contract || !params.precision)) {
            throw new Error('missing params; "contract", "precision" is required ');
        }

        if (params.contract && params.contract !== 'eosio.token' && !params.precision) {
            throw new Error('missing params; "precision" is required ');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = result => {
                delete window[tpCallbackFun];

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }

                catch (e) {
                    reject(e);
                }
            }
            // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('eosTokenTransfer', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.eosTokenTransfer.postMessage({body:{'params': JSON.stringify(params), 'callback':tpCallbackFun}});
            }
            
        })
    },
    pushEosAction: params => {
        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = result => {
                delete window[tpCallbackFun];

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }

                catch (e) {
                    reject(e);
                }
            }
            // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('pushEosAction', JSON.stringify(params), tpCallbackFun);
            }
            // iOS
            else if (window.webkit) {
                window.webkit.messageHandlers.pushEosAction.postMessage({body:{'params': JSON.stringify(params), 'callback': tpCallbackFun}});
            }
        });
    },
    getAppInfo: () => {
        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = result => {
                delete window[tpCallbackFun];

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }

                catch (e) {
                    reject(e);
                }
            }
            // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('getAppInfo', '', tpCallbackFun);
            }
            // iOS
            else if (window.webkit) {
                window.webkit.messageHandlers.getAppInfo.postMessage({body:{'params': '', 'callback': tpCallbackFun}});
            }
        });
    },
    getEosBalance: params => {

        if (!params.account || !params.contract || !params.symbol) {
            throw new Error('missing params; "account", "contract", "symbol" is required ');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }
             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('getEosBalance', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.getEosBalance.postMessage({body:{'params': JSON.stringify(params), 'callback':tpCallbackFun}});
            }
        });


    },
    getEosAccountInfo: params => {

        if (!params.account) {
            throw new Error('missing params; "account" is required ');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }
             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('getEosAccountInfo', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.getEosAccountInfo.postMessage({body:{'params': JSON.stringify(params), 'callback':tpCallbackFun}});
            }
        });
    },
    moacTokenTransfer: params => {

        if (!params.from || !params.to || !params.amount || !params.gasLimit || !params.tokenName) {
            throw new Error('missing params; "from", "to", "amount", "gasLimit", "tokenName" is required ');
        }

        if (params.contract && !params.decimal) {
            throw new Error('missing params; "decimal" is required ');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }

            // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('moacTokenTransfer', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.moacTokenTransfer.postMessage({body:{'params':JSON.stringify(params),'callback': tpCallbackFun}});
            }
        });
        
    },
    getDeviceId: () => {
        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);

                    let data = res.device_id || '';

                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }
             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('getDeviceId', '', tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.getDeviceId.postMessage({body:{'params': '', 'callback':tpCallbackFun}});
            }
        });
        
    },
    getWalletList: type => {
        type = _getTypeByStr(type);

        if (!type) {
            throw new Error('type invalid');
        }

        let params = {type};
        
        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] = result => {
                // 删掉临时 func
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    if (res.wallets && res.wallets[type]) {
                        resolve(res.wallets[type]);
                    }
                    else {
                        resolve([]);
                    }
                }
                catch(e) {
                    reject(e);
                }
            }

            alert(JSON.stringify(params));
            alert(tpCallbackFun);
             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('getWalletList', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.getWalletList.postMessage({body:{'params': JSON.stringify(params), 'callback':tpCallbackFun}})
            }
        });

       
    },
    signTransaction: params => {
        if (!params.from || !params.to || !params.gasPrice || !params.gasLimit || !params.type || params.data === undefined) {
            throw new Error('missing params');
        }

        let type = _getTypeByStr(params.type);

        // 暂不支持井通
        if (!type || type === '2') {
            throw new Error('type invalid');
        }

        if (web3.utils.isAddress(params.from)) {
            throw new Error('from address is invalid');
        }

        if (web3.utils.isAddress(params.to)) {
            throw new Error('to address is invalid');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
            // callback
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    let data = res.rawTransaction || '';

                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }

             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('signedTransaction', JSON.stringify(params), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.signedTransaction.postMessage({body:{'params': JSON.stringify(params), 'callback':tpCallbackFun}});
            }
        });
    },
    makeTransaction(params) {
        if (!params.from || !params.to || !params.contractAddress || !params.gasPrice || !params.value || !params.type) {
            throw new Error('missing params')
        }

        let type = _getTypeByStr(params.type);
        if (!type) {
            throw new Error('type invalid');
        }

        if (web3.utils.isAddress(params.from)) {
            throw new Error('from address is invalid');
        }

        if (web3.utils.isAddress(params.to)) {
            throw new Error('to address is invalid');
        }

        if (web3.utils.isAddress(params.contractAddress)) {
            throw new Error('contractAddress address is invalid');
        }

        let inputData = '';
        // let gas = params.gasPrice || '';
        const abi = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
        

        // 以太坊
        if (params.type === '1') {
            
            let contractInstance = new web3.eth.Contract(abi, this.contractAddress);
            inputData = contractInstance.methods.transfer(params.to, params.value).encodeABI();
        }
        // 墨客
        else if (params.type === '3') {
            let contract = new chain3.mc.contract(abi);
            let contractInstance = contract.at(this.contractAddress);
            inputData = contractInstance.transfer.getData(params.to, params.value);
        }
        else {
            throw new Error('the type is not supported yet');
        }

        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
            // callback
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);

                    if (res.result) {
                        resolve(res.data);
                    }
                    else {
                        // TODO
                        reject(res.msg);
                    }
                }
                catch(e) {
                    reject(e);
                }
            }

            let transactionObject = {
                from: params.from,
                to: params.to,
                gasPrice: params.gasPrice,
                gasLimit: 60000,
                contractAddress: params.contractAddress,
                data: inputData,
                chainId: type
            }

             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('makeTransactions', JSON.stringify(transactionObject), tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.makeTransactions.postMessage({body:{'params': JSON.stringify(transactionObject), 'callback':tpCallbackFun}});
            }
        });
    },
    invokeQRScanner: () => {
        return new Promise((resolve, reject) => {
            let tpCallbackFun = _getCallbackName();
       
            window[tpCallbackFun] =  result => {
                delete window[tpCallbackFun]; 

                try {
                    let res = JSON.parse(result);
                    let data = res.qrResult || '';
                    resolve(data);
                }
                catch(e) {
                    reject(e);
                }
            }
             // android
            if (window.TPJSBrigeClient) {
                window.TPJSBrigeClient.callMessage('invokeQRScanner', '', tpCallbackFun);
            }
            // ios
            if (window.webkit) {
                window.webkit.messageHandlers.invokeQRScanner.postMessage({body:{'params': '', 'callback': tpCallbackFun}});
            }
        });
    },
    shareNewsToSNS: params => {
        
        let title = params.title || 'TokenPocket 你的通用数字钱包';
        let description = params.desc || ''; 
        let url = params.url || 'https://www.mytokenpocket.vip/';
        let previewImage = params.previewImage || '';


        let data = {title, description, url, previewImage};

        if (window.webkit) {
            window.webkit.messageHandlers.shareNewsToSNS.postMessage({body:{'params': JSON.stringify(data), 'callback':''}});
        }
        if (window.TPJSBrigeClient) {
            window.TPJSBrigeClient.callMessage('shareNewsToSNS', JSON.stringify(data), '');
        }
    }
};


module.exports = tp;