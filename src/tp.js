var Promise = require('promise');
var Buffer = require('buffer');

var TYPE_MAP = {
    eth: '1',
    jingtum: '2',
    moac: '3',
    eos: '4',
    enu: '5',
    bos: '6',
    iost: '7',
    cosmos: '8',
    binance: '9',
    tron: '10',
    trx: '10',
    btc: '11',
    bsc: '12',
    dot: '13',
    kusama: '14',
    heco: '15',
    okexchain: '16',
    oktest: '17',
    matic: '18',
    polygon: '18',
    hsc: '19',
    oec: '20',
    subgame: '21',
    klaytn: '22',
    avax: '23',
    arb: '24',
    ftm: '25',
    op: '26',
    solana: '27',
    gnosis: '28',
    wax: '29',
    moonbeam: '31',
    aurora: '32',
    harmony: '33',
    kcc: '35',
    cfxevm: '36',
    planton: '37',
    bttc: '38',
    gt: '39',
    halo: '40',
    etc: '41',
    arbnova: '42'


};

var BLOCKCHAIN_ID_MAP = {
    '1': 'eth',
    '2': 'jingtum',
    '3': 'moac',
    '4': 'eos',
    '5': 'enu',
    '6': 'bos',
    '7': 'iost',
    '8': 'cosmos',
    '9': 'binance',
    '10': 'tron',
    '11': 'btc',
    '12': 'bsc',
    '13': 'dot',
    '14': 'kusama',
    '15': 'heco',
    '16': 'okexchain',
    '17': 'oktest',
    '18': 'matic',
    '19': 'hsc',
    '20': 'oec',
    '21': 'subgame',
    '22': 'klaytn',
    '23': 'avax',
    '24': 'arb',
    '25': 'ftm',
    '26': 'op',
    '27': 'solana',
    '28': 'gnosis',
    '29': 'wax',
    '31': 'moonbeam',
    '32': 'aurora',
    '33': 'harmony',
    '35': 'kcc',
    '36': 'cfxevm',
    '37': 'planton',
    '38': 'bttc',
    '39': 'gt',
    '40': 'halo',
    '41': 'etc',
    '42': 'arbnova'
}

var _getTypeByStr = function (typeStr) {
    var reTrim = /^\s+|\s+$/g;
    typeStr += '';
    typeStr = typeStr.replace(reTrim, '').toLowerCase();
    return TYPE_MAP[typeStr] || typeStr;
}

var _getCallbackName = function () {
    var ramdom = parseInt(Math.random() * 100000);
    return 'tp_callback_' + new Date().getTime() + ramdom;
}


var _sendTpRequest = function (methodName, params, callback) {
    if (window.TPJSBrigeClient) {
        window.TPJSBrigeClient.callMessage(methodName, params, callback);
    }
    // ios
    if (window.webkit) {
        window.webkit.messageHandlers[methodName].postMessage({
            body: {
                'params': params,
                'callback': callback
            }
        });
    }
}

var tp = {
    version: '3.7.5',
    isConnected: function () {
        return !!(window.TPJSBrigeClient || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getDeviceId));
    },
    invokeQRScanner: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    var data = res.qrResult || '';
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('invokeQRScanner', '', tpCallbackFun);

        });
    },
    shareNewsToSNS: function (params) {
        var title = params.title || 'TokenPocket 你的通用数字钱包';
        var description = params.desc || '';
        var url = params.url || 'https://www.mytokenpocket.vip/';
        var previewImage = params.previewImage || '';


        var data = {
            title: title,
            description: description,
            url: url,
            previewImage: previewImage
        };

        _sendTpRequest('shareNewsToSNS', JSON.stringify(data), '');

    },
    getAppInfo: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getAppInfo', '', tpCallbackFun);

        });
    },
    getDeviceId: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.device_id) {
                        res.data = res.device_id;
                    }
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getDeviceId', '', tpCallbackFun);

        });

    },
    // Deprecated
    getWalletList: function (type) {
        type = _getTypeByStr(type);

        if (!type) {
            throw new Error('type invalid');
        }

        var params = {
            type: type
        };

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {

                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getWalletList', JSON.stringify(params), tpCallbackFun);

        });
    },
    getWallets: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    if (res.data && res.data.length) {
                        for (var i = 0; i < res.data.length; i++) {
                            res.data[i].blockchain = BLOCKCHAIN_ID_MAP[res.data[i].blockchain_id + ''] || res.data[i].blockchain_id;
                        }
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getWallets', '', tpCallbackFun);

        });
    },
    getCurrentWallet: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            // callback
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.rawTransaction) {
                        res.data = res.rawTransaction;
                    }

                    if (res.data && res.data.blockchain_id) {
                        res.data.blockchain = BLOCKCHAIN_ID_MAP[res.data.blockchain_id + ''] || res.data.blockchain_id;
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getCurrentWallet', '', tpCallbackFun);
        });
    },
    sign: function (params) {

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('sign', JSON.stringify(params), tpCallbackFun);
        });
    },
    back: function () {
        _sendTpRequest('back', '', '');
    },
    fullScreen: function (params) {
        _sendTpRequest('fullScreen', JSON.stringify(params), '');
    },
    setMenubar: function (params) {
        _sendTpRequest('setMenubar', JSON.stringify(params), '');
    },
    close: function () {
        _sendTpRequest('close', '', '');
    },
    importWallet: function (type) {
        type = _getTypeByStr(type);

        if (!type) {
            throw new Error('type invalid');
        }

        var params = {
            blockChainId: type
        };

        _sendTpRequest('importWallet', JSON.stringify(params), '');
    },
    startChat: function (params) {
        if (params.blockchain) {
            params.blockChainId = _getTypeByStr(params.blockchain);
            delete params.blockchain;
        }
        _sendTpRequest('startChat', JSON.stringify(params), '');
    },
    getNodeUrl: function (params) {

        if (params.blockchain) {
            params.blockChainId = _getTypeByStr(params.blockchain);
            delete params.blockchain;
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {

                    var res = JSON.parse(result);

                    if (res.data && res.data.blockChainId) {
                        res.blockchain = BLOCKCHAIN_ID_MAP[res.data.blockChainId + ''] || res.data.blockChainId;
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getNodeUrl', JSON.stringify(params), tpCallbackFun);

        });
    },
    saveImage: function (params) {
        _sendTpRequest('saveImage', JSON.stringify(params), '');
    },
    rollHorizontal: function (params) {
        _sendTpRequest('rollHorizontal', JSON.stringify(params), '');
    },
    popGestureRecognizerEnable: function (params) {
        _sendTpRequest('popGestureRecognizerEnable', JSON.stringify(params), '');
    },
    forwardNavigationGesturesEnable: function (params) {
        _sendTpRequest('forwardNavigationGesturesEnable', JSON.stringify(params), '');
    },
    isDarkMode: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('isDarkMode', '', tpCallbackFun);
        });
    },
    // eos
    eosTokenTransfer: function (params) {
        // 必填项
        if (!params.from || !params.to || !params.amount || !params.contract || !params.precision) {
            throw new Error('missing params; "from", "to", "amount", "contract", "precision" is required ');
        }

        params.amount = '' + params.amount;

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    if (res.result && !res.data.transactionId) {
                        res.data = {
                            transactionId: res.data
                        };
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('eosTokenTransfer', JSON.stringify(params), tpCallbackFun);
        })
    },
    pushEosAction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.result && !res.data.transactionId) {
                        res.data = {
                            transactionId: res.data
                        };
                    }
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('pushEosAction', JSON.stringify(params), tpCallbackFun);

        });
    },
    getEosBalance: function (params) {

        if (!params.account || !params.contract || !params.symbol) {
            throw new Error('missing params; "account", "contract", "symbol" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEosBalance', JSON.stringify(params), tpCallbackFun);

        });
    },
    getTableRows: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getTableRows', JSON.stringify(params), tpCallbackFun);
        });
    },
    getEosTableRows: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEosTableRows', JSON.stringify(params), tpCallbackFun);
        });
    },
    getEosAccountInfo: function (params) {
        if (!params.account) {
            throw new Error('missing params; "account" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEosAccountInfo', JSON.stringify(params), tpCallbackFun);

        });
    },
    getEosTransactionRecord: function (params) {
        // 必填项
        if (!params.account) {
            throw new Error('missing params; "account" is required ');
        }

        params.count = params.count ? +params.count : 10;
        params.start = params.start ? +params.start : 0;

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEosTransactionRecord', JSON.stringify(params), tpCallbackFun);

        })
    },
    eosAuthSign: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('eosAuthSign', JSON.stringify(params), tpCallbackFun);
        });
    },

    // enu
    enuTokenTransfer: function (params) {
        // 必填项
        if (!params.from || !params.to || !params.amount || !params.tokenName || !params.contract || !params.precision) {
            throw new Error('missing params; "from", "to", "amount", "tokenName","contract", "precision" is required ');
        }

        params.amount = '' + params.amount;

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    if (res.result && !res.data.transactionId) {
                        res.data = {
                            transactionId: res.data
                        };
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('enuTokenTransfer', JSON.stringify(params), tpCallbackFun);


        })
    },
    pushEnuAction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    if (res.result && !res.data.transactionId) {
                        res.data = {
                            transactionId: res.data
                        };
                    }
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('pushEnuAction', JSON.stringify(params), tpCallbackFun);

        });
    },
    getEnuBalance: function (params) {

        if (!params.account || !params.contract || !params.symbol) {
            throw new Error('missing params; "account", "contract", "symbol" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getEnuBalance', JSON.stringify(params), tpCallbackFun);
        });


    },
    getEnuTableRows: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEnuTableRows', JSON.stringify(params), tpCallbackFun);
        });
    },
    getEnuAccountInfo: function (params) {
        if (!params.account) {
            throw new Error('missing params; "account" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getEnuAccountInfo', JSON.stringify(params), tpCallbackFun);
        });
    },
    getEnuTransactionRecord: function (params) {
        // 必填项
        if (!params.account) {
            throw new Error('missing params; "account" is required ');
        }

        params.count = params.count ? +params.count : 10;
        params.start = params.start ? +params.start : 0;

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getEnuTransactionRecord', JSON.stringify(params), tpCallbackFun);

        })
    },
    // eth moac
    pushMoacTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('pushMoacTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    moacTokenTransfer: function (params) {

        if (!params.from || !params.to || !params.amount || !params.gasLimit || !params.tokenName) {
            throw new Error('missing params; "from", "to", "amount", "gasLimit", "tokenName" is required ');
        }

        if (params.contract && !params.decimal) {
            throw new Error('missing params; "decimal" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('moacTokenTransfer', JSON.stringify(params), tpCallbackFun);


        });

    },
    sendMoacTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('sendMoacTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    sendEthTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('sendEthTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    signMoacTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('signMoacTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    signEthTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('signEthTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    signCosmosTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('signCosmosTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    cosmosArbitrarySignature: function (pb, data) {
        var params = {
            address: pb,
            data: data
        }
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('cosmosArbitrarySignature', JSON.stringify(params), tpCallbackFun);
        });
    },
    signJingtumTransaction: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('signJingtumTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    signOkexchainTransaction: function (tx, address) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    // turn array into buffer 
                    if (res.result && res.data && res.data.signatures) {
                        es.data.signatures.forEach(function (item) {
                            item.signature = item.signature && Buffer.from(item.signature);
                            item.pub_key.value = item.pub_key.value && Buffer.from(item.pub_key.value);
                        });
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            var params = {
                tx: tx,
                from: address
            }

            _sendTpRequest('signOkexchainTransaction', JSON.stringify(params), tpCallbackFun);
        });
    },
    getCurrentBalance: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }

            _sendTpRequest('getCurrentBalance', '', tpCallbackFun);
        });
    },
    btcTokenTransfer: function (params) {
        if (!params.from || !params.to || !params.amount) {
            throw new Error('missing params; "from", "to", "amount" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('btcTokenTransfer', JSON.stringify(params), tpCallbackFun);


        });
    },
    usdtTokenTransfer: function (params) {
        if (!params.from || !params.to || !params.amount) {
            throw new Error('missing params; "from", "to", "amount" is required ');
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('usdtTokenTransfer', JSON.stringify(params), tpCallbackFun);


        });
    },
    getUsdtAddress: function () {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getUsdtAddress', '', tpCallbackFun);


        });
    },
    getWallet: function (params) {
        if (params.walletTypes && params.walletTypes.length) {
            params.walletTypes = params.walletTypes.map(function (item) {
                return TYPE_MAP[item.toLowerCase()] || item;
            })
        }
        else {
            params.walletTypes = [];
        }

        // default
        if (undefined === params.switch) {
            params.switch = true
        }

        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    if (res.data && res.data.blockchain_id) {
                        res.data.blockchain = BLOCKCHAIN_ID_MAP[res.data.blockchain_id + ''] || res.data.blockchain_id;
                    }

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getWallet', JSON.stringify(params), tpCallbackFun);
        });
    },
    addDAppToDiscover: function (params) {
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();

            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    var res = JSON.parse(result);

                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('addDAppToDiscover', JSON.stringify(params), tpCallbackFun);
        });
    }
};


module.exports = tp;