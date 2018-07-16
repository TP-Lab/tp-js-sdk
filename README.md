# tp-js-sdk

Javascript SDK for TokenPocket Dapp

* [Github](https://github.com/TP-Lab/tp-js-sdk)

* [TokenPocket Website](https://www.mytokenpocket.vip/)

![TokenPocket](http://tokenpocket.gz.bcebos.com/TokenPocket-logo-h.png)


## Installation

```bash
npm install tp-js-sdk
```

## Usage

Open your site in TokenPocket as a Dapp.

```javascript
var tp = require('tp-js-sdk')
console.log(tp.isConnected());
```

### EOS Transfer

#### tp.eosTokenTransfer

```javascript
tp.eosTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String|Number`
- `tokenName`: `String`
- `precision`: `Number|String`- (optional)
- `contract`: `String`- (optional) Contract account
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


### EOS Push Action

#### tp.pushEosAction

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
    data: '7a505551a56fb1bbd2619d9e323772ee9d9ed12c54a8e19c381c559c949fed23',
    msg: 'success'
}
```


### Get Eos Balance

#### tp.getEosBalance

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


### Get App Info

#### tp.getAppInfo

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

