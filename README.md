# tp-js-sdk

![TokenPocket](http://tokenpocket.gz.bcebos.com/TokenPocket-logo-h-300.png)

## <a name='JavascriptSDKforTokenPocketDapp.'></a>Javascript SDK for TokenPocket Dapp.

* TokenPocket 已经兼容 Scatter(EOS)、Metamask(ETH)、TronLink(TRON)和 IWallet(IOST) 协议。已经支持了Scatter, MetaMask, TronLink, iWallet插件的Dapp可以直接在钱包内使用Dapp浏览器体验，无需再使用我们这个SDK（有钱包相关的接口如全屏，旋转等需求可另外引用该sdk不冲突）。
* 这个sdk 只针对移动端 TokenPocket


* TokenPocket is already compatible with Scatter, Metamask,TronLink and IWallet. You can input your URL in the Dapp browser inside the TP Wallet without any additional development. 
* This sdk is only for mobile TokenPocket


* [Github](https://github.com/TP-Lab/tp-js-sdk)

* [TokenPocket Website](https://www.tokenpocket.pro/)

* [提交你的DApp](https://www.tokenpocket.pro/zh/submit/dapp)

* [Submit your DApp](https://www.tokenpocket.pro/en/submit/dapp)


* 我们还提供了 [Android & iOS SDK](https://github.com/TP-Lab/Mobile-SDK) 可以提供授权登录转账，执行action的操作

* We also have an [Android&iOS SDK](https://github.com/TP-Lab/Mobile-SDK) for interact with TokenPocket 


## <a name='Installation'></a>Installation

```bash
npm install tp-js-sdk
```

## <a name='Usage'></a>Usage

请在TokenPocket中使用该SDK。 请在发现 -> DApp浏览器中 开发调试

Open your site in TokenPocket as a Dapp. Develope and test in Discover -> DappBrowser.


Npm
```javascript
var tp = require('tp-js-sdk')
console.log(tp.isConnected());
```

Browser
```html
<script src="./dist/tp.js"></script>
<script>
    console.log(tp.isConnected());
</script>
```


## <a name='Contents'></a>Contents

<!-- vscode-markdown-toc -->
* [Javascript SDK for TokenPocket Dapp.](#JavascriptSDKforTokenPocketDapp.)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contents](#Contents)
	* [1. COMMON](#COMMON)
		* [1.1 tp.getAppInfo](#tp.getAppInfo)
		* [1.2 tp.getWalletList (Deprecated)](#tp.getWalletListDeprecated)
		* [1.3 tp.getDeviceId](#tp.getDeviceId)
		* [1.4 tp.shareNewsToSNS](#tp.shareNewsToSNS)
		* [1.5 tp.invokeQRScanner](#tp.invokeQRScanner)
		* [1.6 tp.getCurrentWallet](#tp.getCurrentWallet)
		* [1.7 tp.getWallets (Deprecated)](#tp.getWalletsDeprecated)
		* [1.8 tp.sign](#tp.sign)
		* [1.9 tp.back](#tp.back)
		* [1.10 tp.close](#tp.close)
		* [1.11 tp.fullScreen](#tp.fullScreen)
		* [1.12 tp.importWallet](#tp.importWallet)
		* [1.13 tp.setMenubar](#tp.setMenubar)
		* [1.14 tp.startChat](#tp.startChat)
		* [1.15 tp.saveImage](#tp.saveImage)
		* [1.16 tp.rollHorizontal](#tp.rollHorizontal)
		* [1.17 tp.popGestureRecognizerEnable](#tp.popGestureRecognizerEnable)
		* [1.18 tp.forwardNavigationGesturesEnable](#tp.forwardNavigationGesturesEnable)
		* [1.19 tp.getNodeUrl](#tp.getNodeUrl)
	* [2.EOS](#EOS)
		* [2.0 兼容Scatter (Compatible with Scatter)](#ScatterCompatiblewithScatter)
		* [2.1 tp.eosTokenTransfer](#tp.eosTokenTransfer)
		* [2.2 tp.pushEosAction](#tp.pushEosAction)
		* [2.3 tp.getEosBalance](#tp.getEosBalance)
		* [2.4 tp.getTableRows (Deprecated)](#tp.getTableRowsDeprecated)
		* [2.5 tp.getEosTableRows](#tp.getEosTableRows)
		* [2.6 tp.getEosAccountInfo](#tp.getEosAccountInfo)
		* [2.7 tp.getEosTransactionRecord](#tp.getEosTransactionRecord)
	* [3. ETH](#ETH)
		* [3.0 兼容Metamask (Compatible with Metamask)](#MetamaskCompatiblewithMetamask)
		* [3.1 tp.sendEthTransaction](#tp.sendEthTransaction)
		* [3.2 tp.signEthTransaction](#tp.signEthTransaction)
	* [4.ENU](#ENU)
		* [4.0 兼容Ironman (Compatible with Ironman)](#IronmanCompatiblewithIronman)
		* [4.1 tp.enuTokenTransfer](#tp.enuTokenTransfer)
		* [4.2 tp.pushEnuAction](#tp.pushEnuAction)
		* [4.3 tp.getEnuBalance](#tp.getEnuBalance)
		* [4.4 tp.getEnuTableRows](#tp.getEnuTableRows)
		* [4.5 tp.getEnuAccountInfo](#tp.getEnuAccountInfo)
		* [4.6 tp.getEnuTransactionRecord](#tp.getEnuTransactionRecord)
	* [5.COSMOS](#COSMOS)
		* [5.1 tp.signCosmosTransaction](#tp.signCosmosTransaction)
		* [5.2 tp.cosmosArbitrarySignature](#tp.cosmosArbitrarySignature)
	* [6.IOST](#IOST)
		* [6.0 兼容IWalletJS (Compatible with IWalletJS)](#IWalletJSCompatiblewithIWalletJS)
	* [7.TRON](#TRON)
		* [7.0 兼容TRONLINK (Compatible with TRONLINK)](#TRONLINKCompatiblewithTRONLINK)
	* [8.MOAC](#MOAC)
		* [8.1 tp.sendMoacTransaction](#tp.sendMoacTransaction)
		* [8.2 tp.signMoacTransaction](#tp.signMoacTransaction)
		* [8.3 tp.moacTokenTransfer](#tp.moacTokenTransfer)
	* [9.Jingtum](#Jingtum)
		* [9.1 tp.signJingtumTransaction](#tp.signJingtumTransaction)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->




### <a name='COMMON'></a>1. COMMON

#### <a name='tp.getAppInfo'></a>1.1 tp.getAppInfo


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

#### <a name='tp.getWalletListDeprecated'></a>1.2 tp.getWalletList (Deprecated)


#### <a name='tp.getDeviceId'></a>1.3 tp.getDeviceId

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

#### <a name='tp.shareNewsToSNS'></a>1.4 tp.shareNewsToSNS

分享到各个社交媒体

Share to SNS

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


#### <a name='tp.invokeQRScanner'></a>1.5 tp.invokeQRScanner

扫码

Scan QRcode

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

#### <a name='tp.getCurrentWallet'></a>1.6 tp.getCurrentWallet

获取用户当前钱包信息

Get user's current wallet info

```javascript
tp.getCurrentWallet()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `address`: `String`
    - `blockchain`: `String` 
- `msg`: `String`

##### Example

```javascript
tp.getCurrentWallet().then(console.log)

> {
    result: true,
    data: {
        name: 'itokenpocket',
        address: 'EOSaaaaaaaaabbbbbbbb',
        blockchain: 'eos'
    },
    msg: 'success'
}
```


#### <a name='tp.getWalletsDeprecated'></a>1.7 tp.getWallets (Deprecated)

获取用户钱包列表

Get User's Wallet List

```javascript
tp.getWallets()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Array`
    - `address`: `String`
    - `name`: `String`
    - `blockchain`: `String`
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
            blockchain: 'eos'
        },
        {
            name: 'ethwallet11',
            address: '0x40e5A542087FA4b966209707177b103d158Fd3A4',
            blockchain: 'eth'
        }
    ],
    msg: 'success'
}
```

#### <a name='tp.sign'></a>1.8 tp.sign

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


#### <a name='tp.back'></a>1.9 tp.back

```javascript
tp.back()
```

##### Example

```javascript
tp.back()

```

#### <a name='tp.close'></a>1.10 tp.close

关闭页面

Close the page

```javascript
tp.close()
```

##### Example

```javascript
tp.close()

```


#### <a name='tp.fullScreen'></a>1.11 tp.fullScreen

全屏页面

Fullscreen the page.

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


#### <a name='tp.importWallet'></a>1.12 tp.importWallet

钱包导入界面 

Invoke the wallet importing window

```javascript
tp.importWallet(blockchain)
```

##### Parameters

`blockchain`- `String`: 'eos' | 'eth' | 'enu' | 'moac'


##### Example

```javascript
tp.importWallet('eos');
```


#### <a name='tp.setMenubar'></a>1.13 tp.setMenubar

全屏时 设置dapp浏览器导航条可见性

When the `fullscreen` is on, set the dapp browser's navbar visiblity

```javascript
tp.setMenubar(params)
```

##### Parameters

`params`- `Object`:
- `flag`: `Number` 1 - open,  0 - close(default)



##### Example

```javascript
tp.setMenubar({
    flag: 1
});
```


#### <a name='tp.startChat'></a>1.14 tp.startChat

跳到TP聊天

Open TP IM

```javascript
tp.startChat(params)
```

##### Parameters

`params`- `Object`:

- `sessionType`: `Number` 私聊是0  群聊是1
- `account`: `String` 私聊是目标用户的账号(eos,iost等)或地址(eth,moac等)， 群聊是群的id
- `blockchain`: `Number` 只有私聊需要填， 私聊时目标用户的底层 eth|jingtum|moac|eos|enu|bos|iost

##### Example

```javascript
tp.startChat({
    account: 'itokenpocket',
    sessionType: 0,
    blockchain: 'eos'
});
```


#### <a name='tp.saveImage'></a>1.15 tp.saveImage

保存图片

Save image

```javascript
tp.saveImage(params)
```

##### Parameters

`params`- `Object`:
- `url`: `String` image's url


##### Example

```javascript
tp.saveImage({
    url: 'https://dapp.mytokenpocket.vip/tokenpocket_logo.png'
});


```
#### <a name='tp.rollHorizontal'></a>1.16 tp.rollHorizontal

横屏

rotate the screen horizontal

```javascript
tp.rollHorizontal(params)
```

##### Parameters

`params`- `Object`:
- `horizontal`: `Boolean`



##### Example

```javascript
tp.rollHorizontal({
    horizontal: true
});
```



#### <a name='tp.popGestureRecognizerEnable'></a>1.17 tp.popGestureRecognizerEnable

禁止iOS自带的左滑手势返回，对安卓无影响

Disable iOS's left-sliding gesture to return. There is no effect on Android


```javascript
tp.popGestureRecognizerEnable(params)
```

##### Parameters

`params`- `Object`:
- `enable`: `Boolean` - default: `true`



##### Example

```javascript
tp.popGestureRecognizerEnable({
    enable: false
});
```

#### <a name='tp.forwardNavigationGesturesEnable'></a>1.18 tp.forwardNavigationGesturesEnable

禁止webview自带的左滑手势触发goback

Disable the left sliding gesture by WebView to trigger goback

```javascript
tp.forwardNavigationGesturesEnable(params)
```

##### Parameters

`params`- `Object`:
- `enable`: `Boolean` - default: `true`



##### Example

```javascript
tp.forwardNavigationGesturesEnable({
    enable: false
});
```


#### <a name='tp.getNodeUrl'></a>1.19 tp.getNodeUrl

获取用户某个底层选择的节点信息

Get information about the node selected by the user

```javascript
tp.getNodeUrl(params)
```

##### Parameters

`params`- `Object`:
- `blockchain`: `String` - `eos` | `eth` | `iost` | ...

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`
    - `nodeUrl` : `Stirng`
    - `blockchain` : `String` - `eos` | `eth` | `iost` | ...

- `msg`: `String`

##### Example

```javascript
tp.getNodeUrl({
    blockchain: 'eos'
}).then(console.log)

> {
    result: true,
    data: {
        nodeUrl: 'https://api.eosbeijing.one/',
        blockchain: 'eos'
    },
    msg: 'success'
}
```


### <a name='EOS'></a>2.EOS

#### <a name='ScatterCompatiblewithScatter'></a>2.0 兼容Scatter (Compatible with Scatter)

- TokenPocket is Compatible with Scatter-js both 1.0 and 2.0.
- TokenPocket 兼容基于 Scatter-js 1.0 和 2.0 的应用
- Scatter API: [Scatter-JS](https://github.com/GetScatter/scatter-js)

- Check Our Scatter-demo: 
- 可以查看我们的 Scatter demo:

- [scatter-js-demo](https://github.com/TP-Lab/scatter-demo)
- [scatter-js2-demo](https://github.com/TP-Lab/scatter-demo-eosjs2)


#### <a name='tp.eosTokenTransfer'></a>2.1 tp.eosTokenTransfer

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



#### <a name='tp.pushEosAction'></a>2.2 tp.pushEosAction

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


#### <a name='tp.getEosBalance'></a>2.3 tp.getEosBalance

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
    symbol: 'EOS'
}).then(console.log)

> {
    result: true,
    data:{"symbol":"EOS","balance":"["142.2648 EOS"]","contract":"eosio.token","account":"itokenpocket"},
    msg: 'success'
}
```

#### <a name='tp.getTableRowsDeprecated'></a>2.4 tp.getTableRows (Deprecated)

#### <a name='tp.getEosTableRows'></a>2.5 tp.getEosTableRows

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

#### <a name='tp.getEosAccountInfo'></a>2.6 tp.getEosAccountInfo

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
    data:{"account_name":"itokenpocket",..., "is_proxy":0},
    msg: 'success'
}
```

#### <a name='tp.getEosTransactionRecord'></a>2.7 tp.getEosTransactionRecord

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



### <a name='ETH'></a>3. ETH


#### <a name='MetamaskCompatiblewithMetamask'></a>3.0 兼容Metamask (Compatible with Metamask) 

- TokenPocket is Compatible with Metamask.
- TokenPocket 兼容基于 Metamask 的应用.
- About [Metamask](https://metamask.io/)

- Webview 内有注入 `web3` 对象.
- Webview injected a `web3` object.

#### <a name='tp.sendEthTransaction'></a>3.1 tp.sendEthTransaction
```javascript
tp.sendEthTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `gasPrice`: `String|Number`
- `gasLimit`: `String|Number`
- `data`: `String`
- `value`: `String|Number`- (optional)

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- txhash

##### Example

```javascript
tp.sendEthTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    gasPrice: 100000000,
    gasLimit: 60000,
    data: '0xaawefwefwefwefwefef',
    value: 1000000000
}).then(console.log)

> {
    result: true,
    data: '0xe1063e225d4365b79c30132077e82777c0966844f545ddecc017965c0b551f7e'
}
```

#### <a name='tp.signEthTransaction'></a>3.2 tp.signEthTransaction

```javascript
tp.signEthTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `gasPrice`: `String|Number`
- `gasLimit`: `String|Number`
- `data`: `String`
- `value`: `String|Number`- (optional)

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- signed data

##### Example

```javascript
tp.signEthTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    gasPrice: 100000000,
    gasLimit: 60000,
    data: '0xaawefwefwefwefwefef',
    value: 1000000000
}).then(console.log)

> {
    result: true,
    data: '0xf8ef8201598504a817c800830298109490cb7b42a9cb3accbe665e7d6cdde4ab346eca1483030d40b88402ef9b6b0000000000000000'
}
```



### <a name='ENU'></a>4.ENU

#### <a name='IronmanCompatiblewithIronman'></a>4.0 兼容Ironman (Compatible with Ironman)

- About [Ironman](http://enuironman.com/)

#### <a name='tp.enuTokenTransfer'></a>4.1 tp.enuTokenTransfer

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



#### <a name='tp.pushEnuAction'></a>4.2 tp.pushEnuAction

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


#### <a name='tp.getEnuBalance'></a>4.3 tp.getEnuBalance

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


#### <a name='tp.getEnuTableRows'></a>4.4 tp.getEnuTableRows

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

#### <a name='tp.getEnuAccountInfo'></a>4.5 tp.getEnuAccountInfo
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

#### <a name='tp.getEnuTransactionRecord'></a>4.6 tp.getEnuTransactionRecord

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


### <a name='COSMOS'></a>5.COSMOS

#### <a name='tp.signCosmosTransaction'></a>5.1 tp.signCosmosTransaction

```javascript
tp.signCosmosTransaction(stdTx)
```

##### Parameters

`stdTx`- `Object`:
- `from`: `String`
- `chain_id`: `String`
- `account_number`: `String | Number`
- `sequence`: `String | Number`
- `fees`: `Object`
- `gas`: `String`
- `memo`: `String`
- `type`: `String`
- `msg`: `Object`

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`

- `msg`: `String`

##### Example

```javascript
tp.signCosmosTransaction({
	"from": "cosmos1njg8uq4ek9y9yourfromaddress",
	"chain_id": "cosmoshub-2",
	"account_number": 1756,
	"sequence": 3,
	"fees": {
		"denom": "uatom",
		"amount": 500
	},
	"gas": 20000,
	"memo": "",
	"type": "transfer",
	"msg": {
		"to": "cosmos1njg8uq4ek9y9yourfromaddress",
		"coins": [{
			"denom": "uatom",
			"amount": 100000
		}]
	}
}).then(console.log)

> {
	"result": true,
	"data": {
		"tx": {
			"signatures": [{
				"pub_key": {
					"type": "tendermint/PubKeySecp256k1",
					"value": "AkG3bCO5p9MO8a1ABGYtyS8ed4aZuBKEY+"
				},
				"signature": "K7XCuz/ucESBZnQS94uOHZnJCUbFuWH2x659/3O04ihZaZT99cx+aaaaaaaaaaa=="
			}],
			"memo": "",
			"msg": [{
				"type": "cosmos-sdk/MsgSend",
				"value": {
					"amount": [{
						"amount": "100000",
						"denom": "uatom"
					}],
					"from_address": "cosmos1njg8uq4ek9y9yourfromaddress",
					"to_address": "cosmos1njg8uq4ek9y9yourtoaddress"
				}
			}],
			"fee": {
				"amount": [{
					"denom": "uatom",
					"amount": "500"
				}],
				"gas": "20000"
			}
		},
		"mode": "sync"
	},
	"msg": "success"
}
```



#### <a name='tp.cosmosArbitrarySignature'></a>5.2 tp.cosmosArbitrarySignature

```javascript
tp.cosmosArbitrarySignature(from, stdTx)
```

##### Parameters

`from`- `String`:  your address
`stdTx`- `String`: stdTx string


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
- `msg`: `String`

##### Example

```javascript

var stdTx = {
	"account_number": "0",
	"chain_id": "testing",
	"fee": {
		"amount": [{
			"amount": "0",
			"denom": "stake"
		}],
		"gas": "500000"
	},
	"memo": "",
	"msgs": [{
		"amount": {
			"amount": "50000000",
			"denom": "stake"
		},
		"from_address": "cosmos1gw8w...l48gl5",
		"type": "normal"
	}],
	"sequence": "0"
}

tp.cosmosArbitrarySignature('cosmos1gw8w...l48gl5', JSON.stringify(stdTx)).then(console.log)

> {
	"result": true,
	"data": {
		"pub_key": [235, 90, 233, 135, 33, 2, 65, 183, 108, 35, 185, 167, 211, 14, 241, 173, 64, 4, 102, 45, 201, 47, 30, 119, 134, 153, 184, 26, 4, 32, 123, 216, 219, 95, 19, 140, 84, 254],
		"signature": [19, 225, 27, 122, 188, 73, 69, 101, 136, 152, 100, 35, 2, 205, 66, 220, 20, 237, 160, 171, 36, 178, 195, 45, 161, 14, 86, 41, 21, 143, 222, 27, 40, 139, 233, 48, 48, 117, 251, 105, 144, 119, 187, 181, 124, 113, 167, 138, 15, 201, 98, 71, 116, 184, 114, 98, 240, 140, 224, 4, 251, 93, 60, 15]
	},
	"msg": "success"
}
```


### <a name='IOST'></a>6.IOST

#### <a name='IWalletJSCompatiblewithIWalletJS'></a>6.0 兼容IWalletJS (Compatible with IWalletJS)

- TokenPocket is Compatible with IWalletJS.
- TokenPocket 兼容基于 IWalletJS 的应用.
- IWalletJS API: [IWalletJS](https://github.com/TP-Lab/IOST-JS-API)


### <a name='TRON'></a>7.TRON

#### <a name='TRONLINKCompatiblewithTRONLINK'></a>7.0 兼容TRONLINK (Compatible with TRONLINK)

- TokenPocket is Compatible with TronLink.
- TokenPocket 兼容基于 TronLink 的应用.

- Webview 内有注入 `tronweb` 对象.
- Webview injected a `tronweb` object.



### <a name='MOAC'></a>8.MOAC

#### <a name='tp.sendMoacTransaction'></a>8.1 tp.sendMoacTransaction
```javascript
tp.sendMoacTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `gasPrice`: `String|Number`
- `gasLimit`: `String|Number`
- `data`: `String`
- `value`: `String|Number`- (optional)
- `chainId`: `Number` - (optional)
- `via`: `String` - (optional)
- `shardingFlag`: `Number` - (optional)

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- txhash

##### Example

```javascript
tp.sendMoacTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    gasPrice: 100000000,
    gasLimit: 60000,
    data: '0xaawefwefwefwefwefef',
    value: 1000000000,
    chainId: 99,
    via: '',
    shardingFlag: 0,
}).then(console.log)

> {
    result: true,
    data: '0xe1063e225d4365b79c30132077e82777c0966844f545ddecc017965c0b551f7e'
}
```

#### <a name='tp.signMoacTransaction'></a>8.2 tp.signMoacTransaction

```javascript
tp.signMoacTransaction(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `gasPrice`: `String|Number`
- `gasLimit`: `String|Number`
- `data`: `String`
- `value`: `String|Number`- (optional)
- `chainId`: `Number` - (optional)
- `via`: `String` - (optional)
- `shardingFlag`: `Number` - (optional)

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- signed data

##### Example

```javascript
tp.signMoacTransaction({
    from: '0xaaaaaaa',
    to: '0xaaaaaab',
    gasPrice: 100000000,
    gasLimit: 60000,
    data: '0xaawefwefwefwefwefef',
    value: 1000000000,
    chainId: 99,
    via: '',
    shardingFlag: 0,
}).then(console.log)

> {
    result: true,
    data: '0xf8ef8201598504a817c800830298109490cb7b42a9cb3accbe665e7d6cdde4ab346eca1483030d40b88402ef9b6b0000000000000000'
}
```


#### <a name='tp.moacTokenTransfer'></a>8.3 tp.moacTokenTransfer

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



### <a name='Jingtum'></a>9.Jingtum

#### <a name='tp.signJingtumTransaction'></a>9.1 tp.signJingtumTransaction
```javascript
tp.signJingtumTransaction(params)
```

##### Parameters

`params`- `Object`: tx object
- `Account`: `String`
- `Fee`: `Float` 
- `TakerGets`: `String|Object`
- `TakerPays`: `String|Object`
- `TransactionType`: `String`
- `Sequence`: `Number`
- `OfferSequence`: `Number`
- `Amount`: `String`
- `Destination`: `String`

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`- signedData
- `msg`: `String`

##### Example

```javascript
tp.signJingtumTransaction({
    "Account":"j47J1UriYXXXXXXXXXXXX",
    "Fee": 0.00001,
    "Flags": 524288,
    "TakerGets":"111",
    "TakerPays":{
        "currency":"CNY",
        "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
        "value":"1.2321"
        },
    "TransactionType":"OfferCreate",
    "Sequence":4368
}).then(console.log)

> {
    result: true,
    data: 'e1063e225d43650000000111...',
    msg: ''

}
```
