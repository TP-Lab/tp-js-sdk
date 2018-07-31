# tp-js-sdk

Javascript SDK for TokenPocket Dapp.

* [Github](https://github.com/TP-Lab/tp-js-sdk)

* [TokenPocket Website](https://www.mytokenpocket.vip/)

![TokenPocket](http://tokenpocket.gz.bcebos.com/TokenPocket-logo-h-300.png)




## tp-eosjs

如果你的DApp只运行在EOS底层，请用EOS版本的SDK，体积更小 [tp-eosjs](https://github.com/TP-Lab/tp-eosjs)

If your Dapp is only build for EOS, please use this: [tp-eosjs](https://github.com/TP-Lab/tp-eosjs)


## Installation

```bash
npm install tp-js-sdk
```

## Usage

请在TokenPocket中使用该SDK。
通过 APP中 关于我们->点击logo 8次开启 开发者模式，开启后可以在 发现-> Dapp Store 添加自定义URL

Open your site in TokenPocket as a Dapp.
In About Page, click the logo 8 times to open the develop mode. Then you can add your url in Dapp Store.


```javascript
var tp = require('tp-js-sdk')
console.log(tp.isConnected());
```

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
- `memo`: `String`- (optional)

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `String`- txhash

##### Example

```javascript
tp.eosTokenTransfer({
    from: 'abcabcabcabc',
    to: 'itokenpocket',
    amount: '0.0100',
    tokenName: 'EOS',
    precision: 4,
    contract: 'eosio.token',
    memo: 'test'
}).then(console.log)

> {
    result: true,
    data: '7a505551a56fb1bbd2619d9e323772ee9d9ed12c54a8e19c381c559c949fed23'
}
```



#### 1.2 tp.pushEosAction

```javascript
tp.pushEosAction(params)
```

##### Parameters

`params`- `Object`:
- `actions`: `Array`- Standard eos actions

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- txhash
- `msg`: `String`

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
    ]
}).then(console.log)

> {
    result: true,
    data: '7a505551a56fb1bbd2619d9e323772ee9d9ed12c54a8e19c381c559c949fed23'
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

#### 1.4 tp.getTableRows

获取合约内table数据

```javascript
tp.getTableRows(params)
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
- `data`: `String`- txhash

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
    data: '0xe1063e225d4365b79c30132077e82777c0966844f545ddecc017965c0b551f7e',
    msg: 'success'
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

`params`- `String|Number` - `eth|1` for ETH, `jingtum|2` for Jingtum, `moac|3` for MOAC, `eos|4` for EOS

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

#### 3.4 shareNewsToSNS
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


#### 3.4 invokeQRScanner
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


