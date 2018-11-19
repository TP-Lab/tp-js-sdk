# tp-js-sdk

* TokenPocket 已经兼容 Scatter，直接在钱包内 Dapp浏览器 内输入URL即可使用。
* TokenPocket is already compatible with Scatter. You can input your URL in the Dapp browser inside the TP Wallet. 

Javascript SDK for TokenPocket Dapp.

* [Github](https://github.com/TP-Lab/tp-js-sdk)

* [TokenPocket Website](https://www.mytokenpocket.vip/)

* [提交你的DApp (Submit your DApp)](http://tokenpocket.mikecrm.com/v5QSKjj)

![TokenPocket](http://tokenpocket.gz.bcebos.com/TokenPocket-logo-h-300.png)


## EOS or ENU

基于 EOS 或 ENU 底层的 DApp 请使用:
If your Dapp is build for EOS or ENU, please use this:

### EOS:
 [tp-eosjs](https://github.com/TP-Lab/tp-eosjs) 

### ENU:
 [tp-enujs](https://github.com/TP-Lab/tp-enujs)

体积更小，支持browser 直接引入
With smaller size and browser supported.


## Installation

```bash
npm install tp-js-sdk
```

## Usage

请在TokenPocket中使用该SDK。 请在发现 -> DApp浏览器中 开发调试

Open your site in TokenPocket as a Dapp. Develope and test in Discover -> DappBrowser.



```javascript
var tp = require('tp-js-sdk')
console.log(tp.isConnected());
```

<!-- TOC -->

- [1.EOS](#1eos)
    - [1.1 tp.eosTokenTransfer](#11-tpeostokentransfer)
    - [1.2 tp.pushEosAction](#12-tppusheosaction)
    - [1.3 tp.getEosBalance](#13-tpgeteosbalance)
    - [1.4 tp.getTableRows (Deprecated)](#14-tpgettablerows-deprecated)
    - [1.5 tp.getEosTableRows](#15-tpgeteostablerows)
    - [1.6 tp.getEosAccountInfo](#16-tpgeteosaccountinfo)
    - [1.7 tp.getEosTransactionRecord](#17-tpgeteostransactionrecord)
- [2. ETH & MOAC](#2-eth--moac)
    - [2.1 tp.moacTokenTransfer](#21-tpmoactokentransfer)
    - [2.2 tp.makeTransaction (Deprecated)](#22-tpmaketransaction-deprecated)
    - [2.3 tp.signTransaction(Deprecated)](#23-tpsigntransactiondeprecated)
- [3. COMMON](#3-common)
    - [3.1 tp.getAppInfo](#31-tpgetappinfo)
    - [3.2 tp.getWalletList](#32-tpgetwalletlist)
    - [3.3 tp.getDeviceId](#33-tpgetdeviceid)
    - [3.4 tp.shareNewsToSNS](#34-tpsharenewstosns)
    - [3.5 tp.invokeQRScanner](#35-tpinvokeqrscanner)
    - [3.6 tp.getCurrentWallet](#36-tpgetcurrentwallet)
    - [3.7 tp.getWallets](#37-tpgetwallets)
    - [3.8 tp.sign](#38-tpsign)
    - [3.9 tp.back](#39-tpback)
    - [3.11 tp.close](#311-tpclose)
    - [3.10 tp.fullScreen](#310-tpfullscreen)
- [4.ENU](#4enu)
    - [4.1 tp.enuTokenTransfer](#41-tpenutokentransfer)
    - [4.2 tp.pushEnuAction](#42-tppushenuaction)
    - [4.3 tp.getEnuBalance](#43-tpgetenubalance)
    - [4.4 tp.getEnuTableRows](#44-tpgetenutablerows)
    - [4.5 tp.getEnuAccountInfo](#45-tpgetenuaccountinfo)
    - [4.6 tp.getEnuTransactionRecord](#46-tpgetenutransactionrecord)

<!-- /TOC -->

### 1.EOS

#### 1.1 tp.eosTokenTransfer

```javascript
tp.eosTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String|Number`
- `tokenName`: `String`
- `precision`: `Number|String`
- `contract`: `String`
- `memo`: `String`- (optional),
- `address`: `String` - public key for current account

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`
    - `transactionId` : `Stirng`

##### Example

```javascript
tp.eosTokenTransfer({
    from: 'abcabcabcabc',
    to: 'itokenpocket',
    amount: '0.0100',
    tokenName: 'EOS',
    precision: 4,
    contract: 'eosio.token',
    memo: 'test',
    address: 'EOS7ds9A9FGDsKrdymQ4ynKbMgbCVaaaaaaaaaaa'
}).then(console.log)

> {
    result: true,
    data: {transactionId: 'b428357c7xxxxxxxxxxxxxx'}
}
```



#### 1.2 tp.pushEosAction

```javascript
tp.pushEosAction(params)
```

##### Parameters

`params`- `Object`:
- `actions`: `Array`- Standard eos actions
- `account`: `String` - current account
- `address`: `String` - public key for current account

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `transactionId` : `Stirng`

##### Example

```javascript
tp.pushEosAction({
    actions: [
        {
            account: 'eosio.token',
            name: 'transfer',
            authorization: [{
                actor: 'aaaabbbbcccc',
                permission: 'active'
            }],
            data: {
                from: 'aaaabbbbcccc',
                to: 'itokenpocket',
                quantity: '1.3000 EOS',
                memo: 'something to say'
            }
         },
         {
            account: "eosio",
            name: "delegatebw",
            authorization: [
                {
                actor: 'aaaabbbbcccc',
                permission: "active"
                }
            ],
            data: {
                from: 'aaaabbbbcccc',
                receiver: 'itokenpocket',
                stake_net_quantity: "0.0100 EOS",
                stake_cpu_quantity: "0.0100 EOS",
                transfer: 0
            }
        }
    ],
    address: 'EOS7ds9A9FGDsKrdymQ4ynKbMgbCVaaaaaaaaaaa',
    account: 'aaaabbbbcccc'
}).then(console.log)

> {
    result: true,
    data: {transactionId: 'b428357c7xxxxxxxxxxxxxx'}
}
```


#### 1.3 tp.getEosBalance

```javascript
tp.getEosBalance(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`
- `contract`: `String`
- `symbol`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `symbol`: `String`
    - `balance`: `String`
    - `contract`: `String`
    - `account`: `String`
- `msg`: `String`

##### Example

```javascript
tp.getEosBalance({
    account: 'itokenpocket',
    contract: 'eosio.token',
    tokenName: 'EOS'
}).then(console.log)

> {
    result: true,
    data:{"symbol":"EOS","balance":"["142.2648 EOS"]","contract":"eosio.token","account":"itokenpocket"},
    msg: 'success'
}
```

#### 1.4 tp.getTableRows (Deprecated)

#### 1.5 tp.getEosTableRows

获取合约内table数据

```javascript
tp.getEosTableRows(params)
```

##### Parameters

`params`- `Object`:

- `json`: `Boolean`
- `code`: `String`
- `scope`: `String`
- `table`: `String`
- `table_key`: `Stirng`
- `lower_bound`: `String`
- `upper_bound`: `String`
- `limit`: `Number`


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `rows`: `Array`
- `msg`: `String`

##### Example

```javascript
tp.getTableRows({
    json: true,
    code: 'abcabcabcabc',
    scope: 'abcabcabcabc',
    table: 'table1',
    lower_bound: '10',
    limit: 20
}).then(console.log)

> {
    result: true,
    data:{rows: [{a: 1, b: 'name' }, ...]},
    msg: 'success'
}
```

#### 1.6 tp.getEosAccountInfo
```javascript
tp.getEosAccountInfo(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`- Standard account object
- `msg`: `String`

##### Example

```javascript
tp.getEosAccountInfo({
    account: 'itokenpocket'
}).then(console.log)

> {
    result: true,
    data:{"account_name":"itokenpocket",..., "is_proxy":0}},
    msg: 'success'
}
```

#### 1.7 tp.getEosTransactionRecord

```javascript
tp.getEosTransactionRecord(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`
- `start`: `Number` - default: 0
- `count`: `Number` - default: 10
- `sort`: `String` - 'desc | asc'  default: desc
- `token`: `String` - optional
- `contract`: `String` - optional

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`- Standard account object
- `msg`: `String`

##### Example

```javascript
tp.getEosTransactionRecord({
    start: 10,
    count: 20,
    account: 'itokenpocket',
    token: 'EOS',
    sort: 'desc',
    contract: 'eosio.token'
}).then(console.log)

> {
    result: true,
    data: [{
        "title": "",
        "comment": "",
        "hid": "4bd63a191a1e3e00f13fe6df55d0c08803800a5e7cd0d0b15c92d52b3c42285e",
        "producer": "bp4",
        "timestamp": 1531578890,
        "action_index": 2,
        "account": "eosio",
        "name": "delegatebw",
        "from": "tokenpocket1",
        "to": "clementtes43",
        "blockNum": 4390980,
        "quantity": "0.2000000000 EOS",
        "count": "0.2000000000",
        "symbol": "EOS",
        "memo": "",
        "maximum_upply": "",
        "ram_price": "",
        "bytes": "",
        "status": 1,
        "data": ""，
        real_value:"0.2000000000"
        }, ...],
    msg: 'success'
}
```



### 2. ETH & MOAC

#### 2.1 tp.moacTokenTransfer

```javascript
tp.moacTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String|Number`
- `gasLimit`: `String|Number`
- `tokenName`: `String`
- `decimal`: `String|Number`
- `contract`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `transactionId` : `Stirng`

##### Example

```javascript
tp.moacTokenTransfer({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    amount: '100',
    gasLimit: 60000,
    tokenName: 'MOAC',
    decimal: 18,
    contract: ''
}).then(console.log)

> {
    result: true,
    data: {transactionId: 'b428357c7xxxxxxxxxxxxxx'}
}
```


#### 2.2 tp.makeTransaction (Deprecated)

```javascript
tp.makeTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `value`: `String|Number`
- `gasPrice`: `String|Number`
- `type`: `String|Number` - `1|'eth'` for ETH, `3|'moac'` for MOAC
- `contractAddress`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- txhash

##### Example

```javascript
tp.makeTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    value: '1000000000000000',
    gasPrice: 1234000,
    type: 'eth',
    contractAddress: '0xssssssssss'
}).then(console.log)

> {
    result: true,
    data: '0xe1063e225d4365b79c30132077e82777c0966844f545ddecc017965c0b551f7e'
}
```


#### 2.3 tp.signTransaction(Deprecated)

```javascript
tp.signTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `gasPrice`: `String|Number`
- `gasLimit`: `Stirng|Number`
- `type`: `String|Number` - `1|'eth'` for ETH, `3|'moac'` for MOAC
- `data`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- rawTransaction

##### Example

```javascript
tp.signTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    gasPrice: 100000000,
    gasLimit: 60000,
    type: 'eth',
    data: '0xaawefwefwefwefwefef'
}).then(console.log)

> {
    result: true,
    data: '0xe1063e225d4365b79c30132077e82777c0966844f545ddecc017965c0b551f7e'
}
```


### 3. COMMON

#### 3.1 tp.getAppInfo

```javascript
tp.getAppInfo()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `system`: `String`
    - `version`: `String`
    - `sys_version`: `String`
- `msg`: `String`

##### Example

```javascript
tp.getAppInfo().then(console.log)

> {
    result: true,
    data: {
        name: 'TokenPocket',
        system: 'android',
        version: '0.3.4',
        sys_version: '26'
    },
    msg: 'success'
}
```

#### 3.2 tp.getWalletList

```javascript
tp.getWalletList(params)
```

##### Parameters

`params`- `String|Number` - `eth|1` for ETH, `jingtum|2` for Jingtum, `moac|3` for MOAC, `eos|4` for EOS , `enu|5` for ENU

##### Returns

`Object`:
- `wallets`: `Object`
    - `eos|eth|moac|jingtum`: `Array` - Wallet info

##### Example

```javascript
tp.getWalletList('eth').then(console.log)

> {
    wallets: {
        'eth': [{
            name: 'pk-1',
            address: '0xaaaaaaa',
            tokens: {'eth': 1000},
            ...
        },
        ...
        ]
    }
}
```

#### 3.3 tp.getDeviceId

```javascript
tp.getDeviceId()
```

##### Returns

`Object`:
- `device_id`: `String`

##### Example

```javascript
tp.getDeviceId().then(console.log)

> {
    device_id: 'dexa23333'
}
```

#### 3.4 tp.shareNewsToSNS
```javascript
tp.shareNewsToSNS(params)
```

##### Parameters

`params`- `Object`:
- `title`: `String`
- `desc`: `String`
- `url`: `String`
- `previewImage`: `String`

##### Example

```javascript
tp.shareNewsToSNS({
    title: 'TokenPocket',
    desc: 'Your Universal Wallet',
    url: 'https://www.mytokenpocket.vip/',
    previewImage: 'https://www.mytokenpocket.vip/images/index/logo.png'
})

```


#### 3.5 tp.invokeQRScanner
```javascript
tp.invokeQRScanner()
```

##### Returns

`String`

##### Example

```javascript
tp.invokeQRScanner().then(console.log)

> "abcdefg"
```

#### 3.6 tp.getCurrentWallet

获取用户当前钱包

`1` for ETH, `2` for Jingtum, `3` for MOAC, `4` for EOS , `5` for ENU

```javascript
tp.getCurrentWallet()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `address`: `String`
    - `blockchain_id`: `Number`
- `msg`: `String`

##### Example

```javascript
tp.getCurrentWallet().then(console.log)

> {
    result: true,
    data: {
        name: 'itokenpocket',
        address: 'EOSaaaaaaaaabbbbbbbb',
        blockchain_id: 4
    },
    msg: 'success'
}
```


#### 3.7 tp.getWallets

获取用户钱包列表

`1` for ETH, `2` for Jingtum, `3` for MOAC, `4` for EOS , `5` for ENU

```javascript
tp.getWallets()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Array`
    - `address`: `String`
    - `name`: `String`
    - `blockchain_id`: `Number`
- `msg`: `String`

##### Example

```javascript
tp.getWallets().then(console.log)

> {
    result: true,
    data: [
        {
            name: 'itokenpocket',
            address: 'EOSaaaaaaaaabbbbbbbb',
            blockchain_id: 4
        },
        {
            name: 'ethwallet11',
            address: '0x40e5A542087FA4b966209707177b103d158Fd3A4',
            blockchain_id: 1
        }
    ],
    msg: 'success'
}
```

#### 3.8 tp.sign

```javascript
tp.sign(params)
```

##### Parameters

`params`- `Object`:
- `appid`: `String`


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `deviceId` : `Stirng`
    - `appid` : `String`
    - `timestamp` : `Number`
    - `sign` : `String`
- `msg`: `String`

##### Example

```javascript
tp.sign({
    appid: 'swEmwEQ666'
}).then(console.log)

> {
    result: true,
    data: {
        deviceId: 'EBEFWA-AFEBEf-eeee-aaaaa-eeeeea23d',
        appid: 'swEmwEQ666',
        timestamp: 1534735280,
        sign: '713efewwfegwohvnqooyge38h4n421ll3fwzib9e3q00'
    },
    msg: 'success'
}
```


#### 3.9 tp.back

```javascript
tp.back()
```

##### Example

```javascript
tp.back()

```

#### 3.11 tp.close

```javascript
tp.close()
```

##### Example

```javascript
tp.close()

```


#### 3.10 tp.fullScreen

```javascript
tp.fullScreen(params)
```

##### Parameters

`params`- `Object`:
- `fullScreen`: `Number` 1 - fullScreen,  0 - cancel


##### Example

```javascript
tp.fullScreen({
    fullScreen: 0
})
```


### 4.ENU

#### 4.1 tp.enuTokenTransfer

```javascript
tp.enuTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String|Number`
- `tokenName`: `String`
- `precision`: `Number|String`
- `contract`: `String`
- `memo`: `String`- (optional),
- `address`: `String` - public key for current account

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`
    - `transactionId` : `Stirng`

##### Example

```javascript
tp.enuTokenTransfer({
    from: 'abcabcabcabc',
    to: 'itokenpocket',
    amount: '0.0100',
    tokenName: 'ENU',
    precision: 4,
    contract: 'enu.token',
    memo: 'test',
    address: 'E7ds9A9FGDsKrdymQ4ynKbMgbCVaaaaaaaaaaa'
}).then(console.log)

> {
    result: true,
    data: {transactionId: 'b428357c7xxxxxxxxxxxxxx'}
}
```



#### 4.2 tp.pushEnuAction

```javascript
tp.pushEnuAction(params)
```

##### Parameters

`params`- `Object`:
- `actions`: `Array`- Standard enu actions
- `account`: `String` - current account
- `address`: `String` - public key for current account

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `transactionId` : `Stirng`

##### Example

```javascript
tp.pushEnuAction({
    actions: [
        {
            account: 'enu.token',
            name: 'transfer',
            authorization: [{
                actor: 'aaaabbbbcccc',
                permission: 'active'
            }],
            data: {
                from: 'aaaabbbbcccc',
                to: 'itokenpocket',
                quantity: '1.3000 ENU',
                memo: 'something to say'
            }
         },
         {
            account: "enumivo",
            name: "delegatebw",
            authorization: [
                {
                actor: 'aaaabbbbcccc',
                permission: "active"
                }
            ],
            data: {
                from: 'aaaabbbbcccc',
                receiver: 'itokenpocket',
                stake_net_quantity: "0.0100 ENU",
                stake_cpu_quantity: "0.0100 ENU",
                transfer: 0
            }
        }
    ],
    address: 'E7ds9A9FGDsKrdymQ4ynKbMgbCVaaaaaaaaaaa',
    account: 'aaaabbbbcccc'
}).then(console.log)

> {
    result: true,
    data: {transactionId: 'b428357c7xxxxxxxxxxxxxx'}
}
```


#### 4.3 tp.getEnuBalance

```javascript
tp.getEnuBalance(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`
- `contract`: `String`
- `symbol`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `symbol`: `String`
    - `balance`: `String`
    - `contract`: `String`
    - `account`: `String`
- `msg`: `String`

##### Example

```javascript
tp.getEnuBalance({
    account: 'itokenpocket',
    contract: 'enu.token',
    tokenName: 'ENU'
}).then(console.log)

> {
    result: true,
    data:{"symbol":"ENU","balance":"["142.2648 ENU"]","contract":"enu.token","account":"itokenpocket"},
    msg: 'success'
}
```


#### 4.4 tp.getEnuTableRows

获取合约内table数据

```javascript
tp.getEnuTableRows(params)
```

##### Parameters

`params`- `Object`:

- `json`: `Boolean`
- `code`: `String`
- `scope`: `String`
- `table`: `String`
- `table_key`: `Stirng`
- `lower_bound`: `String`
- `upper_bound`: `String`
- `limit`: `Number`


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `rows`: `Array`
- `msg`: `String`

##### Example

```javascript
tp.getTableRows({
    json: true,
    code: 'abcabcabcabc',
    scope: 'abcabcabcabc',
    table: 'table1',
    lower_bound: '10',
    limit: 20
}).then(console.log)

> {
    result: true,
    data:{rows: [{a: 1, b: 'name' }, ...]},
    msg: 'success'
}
```

#### 4.5 tp.getEnuAccountInfo
```javascript
tp.getEnuAccountInfo(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`- Standard account object
- `msg`: `String`

##### Example

```javascript
tp.getEnuAccountInfo({
    account: 'itokenpocket'
}).then(console.log)

> {
    result: true,
    data:{"account_name":"itokenpocket",..., "is_proxy":0}},
    msg: 'success'
}
```

#### 4.6 tp.getEnuTransactionRecord

```javascript
tp.getEnuTransactionRecord(params)
```

##### Parameters

`params`- `Object`:
- `account`: `String`
- `start`: `Number` - default: 0
- `count`: `Number` - default: 10
- `sort`: `String` - 'desc | asc'  default: desc
- `token`: `String` - optional
- `contract`: `String` - optional

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`- Standard account object
- `msg`: `String`

##### Example

```javascript
tp.getEnuTransactionRecord({
    start: 10,
    count: 20,
    account: 'itokenpocket',
    token: 'ENU',
    sort: 'desc',
    contract: 'enu.token'
}).then(console.log)

> {
    result: true,
    data: [{
        "title": "",
        "comment": "",
        "hid": "4bd63a191a1e3e00f13fe6df55d0c08803800a5e7cd0d0b15c92d52b3c42285e",
        "producer": "bp4",
        "timestamp": 1531578890,
        "action_index": 2,
        "account": "enumivo",
        "name": "delegatebw",
        "from": "tokenpocket1",
        "to": "clementtes43",
        "blockNum": 4390980,
        "quantity": "0.2000000000 ENU",
        "count": "0.2000000000",
        "symbol": "ENU",
        "memo": "",
        "maximum_upply": "",
        "ram_price": "",
        "bytes": "",
        "status": 1,
        "data": ""，
        real_value:"0.2000000000"
        }, ...],
    msg: 'success'
}
```

