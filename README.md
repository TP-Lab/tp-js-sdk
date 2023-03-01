# tp-js-sdk

![TokenPocket](https://tp-statics.tokenpocket.pro/logo/tokenpocket-w-black.png)

## <a name='javascript-sdk-for-tokenpocket-dapp.'></a>Javascript SDK for TokenPocket Dapp.

* TokenPocket 已经兼容 Scatter(EOS)、Metamask(ETH)、TronLink(TRON)、IWallet(IOST)、Phantom(Solana) 协议。已经支持了Scatter, MetaMask, TronLink, iWallet, Phantom 插件的Dapp可以直接在钱包内使用Dapp浏览器体验，无需再使用我们这个SDK（有钱包相关的接口如全屏，旋转等需求可另外引用该sdk不冲突）。
* 这个sdk 只针对移动端 TokenPocket


* TokenPocket is already compatible with Scatter, Metamask,TronLink, Phantom and IWallet. You can input your URL in the Dapp browser inside the TP Wallet without any additional development. 
* This sdk is only for mobile TokenPocket


* [Github](https://github.com/TP-Lab/tp-js-sdk)

* [TokenPocket Website](https://www.tokenpocket.pro/)

* [提交你的DApp](https://www.tokenpocket.pro/zh/submit/dapp)

* [Submit your DApp](https://www.tokenpocket.pro/en/submit/dapp)


* 我们还提供了 [Android & iOS SDK](https://github.com/TP-Lab/Mobile-SDK) 可以提供授权登录转账，执行action的操作

* We also have an [Android&iOS SDK](https://github.com/TP-Lab/Mobile-SDK) for interact with TokenPocket 

* You can add vConsole https://www.npmjs.com/package/vconsole to debug in TokenPocket wallet.


## <a name='installation'></a>Installation

```bash
npm install tp-js-sdk
```

## <a name='usage'></a>Usage

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


## <a name='contents'></a>Contents

<!-- vscode-markdown-toc -->
* [Javascript SDK for TokenPocket Dapp.](#javascript-sdk-for-tokenpocket-dapp.)
* [Installation](#installation)
* [Usage](#usage)
* [Contents](#contents)
    * [1. COMMON](#1.-common)
        * [1.0 Enum Blockchains](#1.0-enum-blockchains)
        * [1.1 tp.getAppInfo](#1.1-tp.getappinfo)
        * [1.2 tp.getWalletList (Deprecated)](#1.2-tp.getwalletlist-(deprecated))
        * [1.3 tp.getDeviceId](#1.3-tp.getdeviceid)
        * [1.4 tp.shareNewsToSNS](#1.4-tp.sharenewstosns)
        * [1.5 tp.invokeQRScanner](#1.5-tp.invokeqrscanner)
        * [1.6 tp.getCurrentWallet](#1.6-tp.getcurrentwallet)
        * [1.7 tp.getWallet](#1.7-tp.getwallet)
        * [1.9 tp.back](#1.9-tp.back)
        * [1.10 tp.close](#1.10-tp.close)
        * [1.11 tp.fullScreen](#1.11-tp.fullscreen)
        * [1.12 tp.importWallet](#1.12-tp.importwallet)
        * [1.13 tp.setMenubar](#1.13-tp.setmenubar)
        * [1.14 tp.startChat (Removed）](#1.14-tp.startchat-(removed）)
        * [1.15 tp.saveImage](#1.15-tp.saveimage)
        * [1.16 tp.rollHorizontal](#1.16-tp.rollhorizontal)
        * [1.17 tp.popGestureRecognizerEnable](#1.17-tp.popgesturerecognizerenable)
        * [1.18 tp.forwardNavigationGesturesEnable](#1.18-tp.forwardnavigationgesturesenable)
        * [1.19 tp.getNodeUrl](#1.19-tp.getnodeurl)
        * [1.20 tp.isDarkMode](#1.20-tp.isdarkmode)
    * [2.EOS](#2.eos)
        * [2.0 兼容Scatter (Compatible with Scatter)](#2.0-兼容scatter-(compatible-with-scatter))
        * [2.1 tp.eosTokenTransfer](#2.1-tp.eostokentransfer)
        * [2.2 tp.pushEosAction](#2.2-tp.pusheosaction)
        * [2.3 tp.getEosBalance](#2.3-tp.geteosbalance)
        * [2.4 tp.getTableRows (Deprecated)](#2.4-tp.gettablerows-(deprecated))
        * [2.5 tp.getEosTableRows](#2.5-tp.geteostablerows)
        * [2.6 tp.getEosAccountInfo](#2.6-tp.geteosaccountinfo)
        * [2.7 tp.getEosTransactionRecord](#2.7-tp.geteostransactionrecord)
    * [3. ETH](#3.-eth)
        * [3.0 兼容Metamask (Compatible with Metamask)](#3.0-兼容metamask-(compatible-with-metamask))
    * [4.ENU](#4.enu)
        * [4.0 兼容Ironman (Compatible with Ironman)](#4.0-兼容ironman-(compatible-with-ironman))
        * [4.1 tp.enuTokenTransfer](#4.1-tp.enutokentransfer)
        * [4.2 tp.pushEnuAction](#4.2-tp.pushenuaction)
        * [4.3 tp.getEnuBalance](#4.3-tp.getenubalance)
        * [4.4 tp.getEnuTableRows](#4.4-tp.getenutablerows)
        * [4.5 tp.getEnuAccountInfo](#4.5-tp.getenuaccountinfo)
        * [4.6 tp.getEnuTransactionRecord](#4.6-tp.getenutransactionrecord)
    * [5.COSMOS](#5.cosmos)
        * [5.1 tp.signCosmosTransaction](#5.1-tp.signcosmostransaction)
        * [5.2 tp.cosmosArbitrarySignature](#5.2-tp.cosmosarbitrarysignature)
    * [6.IOST](#6.iost)
        * [6.0 兼容IWalletJS (Compatible with IWalletJS)](#6.0-兼容iwalletjs-(compatible-with-iwalletjs))
    * [7.TRON](#7.tron)
        * [7.0 兼容TRONLINK (Compatible with TRONLINK)](#7.0-兼容tronlink-(compatible-with-tronlink))
    * [8.MOAC](#8.moac)
        * [8.1 tp.sendMoacTransaction](#8.1-tp.sendmoactransaction)
        * [8.2 tp.signMoacTransaction](#8.2-tp.signmoactransaction)
        * [8.3 tp.moacTokenTransfer](#8.3-tp.moactokentransfer)
    * [9.Jingtum](#9.jingtum)
        * [9.1 tp.signJingtumTransaction](#9.1-tp.signjingtumtransaction)
    * [10.OKExChanin](#10.okexchanin)
        * [10.1 tp.signOkexchainTransaction](#10.1-tp.signokexchaintransaction)
    * [11.Polkadot Kusama etc.](#11.polkadot-kusama-etc.)
    * [12.HECO BSC OKT](#12.heco-bsc-okt)
    * [13.solana](#13.solana)
        * [13.1 connect](#13.1-connect)
        * [13.2 signTransaction](#13.2-signtransaction)
        * [13.3 signMessage](#13.3-signmessage)
    * [14. btc](#14.-btc)
        * [14.1 getCurrentBalance](#14.1-getcurrentbalance)
        * [14.2 btcTokenTransfer](#14.2-btctokentransfer)
        * [14.3 usdtTokenTransfer](#14.3-usdttokentransfer)
    * [15. Aptos](#15.-aptos)
        * [15.1 aptos.connect](#15.1-aptos.connect)
        * [15.2 aptos.account](#15.2-aptos.account)
        * [15.3 aptos.getChainId](#15.3-aptos.getchainid)
        * [15.4 aptos.getNodeUrl](#15.4-aptos.getnodeurl)
        * [15.5 aptos.network](#15.5-aptos.network)
        * [15.6 aptos.signAndSubmitTransaction](#15.6-aptos.signandsubmittransaction)
        * [15.7 aptos.signTransaction](#15.7-aptos.signtransaction)
        * [15.8 aptos.signMessage](#15.8-aptos.signmessage)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->





### <a name='1.-common'></a>1. COMMON


#### <a name='1.0-enum-blockchains'></a>1.0 Enum Blockchains 

```
eth,jingtum,moac,eos,enu,bos,iost,cosmos,binance,tron,btc,bsc,dot,
kusama,heco,okexchain,oktest,matic,hsc,oec,subgame,klaytn,avax,arb,
ftm,op,solana,gnosis,wax,moonbeam,aurora,harmony,kcc,cfxevm,planton,
bttc,gt,halo,etc,arbnova

```


#### <a name='1.1-tp.getappinfo'></a>1.1 tp.getAppInfo


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

#### <a name='1.2-tp.getwalletlist-(deprecated)'></a>1.2 tp.getWalletList (Deprecated)


#### <a name='1.3-tp.getdeviceid'></a>1.3 tp.getDeviceId

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

#### <a name='1.4-tp.sharenewstosns'></a>1.4 tp.shareNewsToSNS

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

##### Example

```javascript
tp.shareNewsToSNS({
    title: 'TokenPocket',
    desc: 'Your Universal Wallet',
    url: 'https://www.mytokenpocket.vip/'
})

```


#### <a name='1.5-tp.invokeqrscanner'></a>1.5 tp.invokeQRScanner

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

#### <a name='1.6-tp.getcurrentwallet'></a>1.6 tp.getCurrentWallet

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


#### <a name='1.7-tp.getwallet'></a>1.7 tp.getWallet

获取/切换 用户钱包地址

Get / Switch User's Wallet

```javascript
tp.getWallet(params)
```

##### Parameters

`params`- `Object`:
- `walletTypes`: `Array`  ['eth', 'btc'] // Enum  blockchains
- `switch`: `Boolean` switch current wallet or not


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
tp.getWallet({walletTypes: ['eth', 'bsc', 'dot'], switch: false}).then(console.log)

> {
    result: true,
    data: [
        {
            name: 'ethwallet11',
            address: '0x40e5A542087FA4b966209707177b103d158Fd3A4',
            blockchain: 'eth'
        }
    ],
    msg: 'success'
}
```


#### <a name='1.9-tp.back'></a>1.9 tp.back

```javascript
tp.back()
```

##### Example

```javascript
tp.back()

```

#### <a name='1.10-tp.close'></a>1.10 tp.close

关闭页面

Close the page

```javascript
tp.close()
```

##### Example

```javascript
tp.close()

```


#### <a name='1.11-tp.fullscreen'></a>1.11 tp.fullScreen

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


#### <a name='1.12-tp.importwallet'></a>1.12 tp.importWallet

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


#### <a name='1.13-tp.setmenubar'></a>1.13 tp.setMenubar

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


#### <a name='1.14-tp.startchat-(removed）'></a>1.14 tp.startChat (Removed）

跳到TP聊天 (已移除)

Open TP IM (Removed)

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


#### <a name='1.15-tp.saveimage'></a>1.15 tp.saveImage

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
#### <a name='1.16-tp.rollhorizontal'></a>1.16 tp.rollHorizontal

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



#### <a name='1.17-tp.popgesturerecognizerenable'></a>1.17 tp.popGestureRecognizerEnable

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

#### <a name='1.18-tp.forwardnavigationgesturesenable'></a>1.18 tp.forwardNavigationGesturesEnable

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


#### <a name='1.19-tp.getnodeurl'></a>1.19 tp.getNodeUrl

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

#### <a name='1.20-tp.isdarkmode'></a>1.20 tp.isDarkMode

获取用户是否是暗黑模式

Get whether the user is in dark mode

```javascript
tp.isDarkMode()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Boolean`
- `msg`: `String`

##### Example

```javascript
tp.isDarkMode().then(console.log)

> {
    result: true,
    data: true,
    msg: 'success'
}
```


### <a name='2.eos'></a>2.EOS

#### <a name='2.0-兼容scatter-(compatible-with-scatter)'></a>2.0 兼容Scatter (Compatible with Scatter)

- TokenPocket is Compatible with Scatter-js both 1.0 and 2.0.
- TokenPocket 兼容基于 Scatter-js 1.0 和 2.0 的应用
- Scatter API: [Scatter-JS](https://github.com/GetScatter/scatter-js)

- Check Our Scatter-demo: 
- 可以查看我们的 Scatter demo:

- [scatter-js-demo](https://github.com/TP-Lab/scatter-demo)
- [scatter-js2-demo](https://github.com/TP-Lab/scatter-demo-eosjs2)


#### <a name='2.1-tp.eostokentransfer'></a>2.1 tp.eosTokenTransfer

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



#### <a name='2.2-tp.pusheosaction'></a>2.2 tp.pushEosAction

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


#### <a name='2.3-tp.geteosbalance'></a>2.3 tp.getEosBalance

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

#### <a name='2.4-tp.gettablerows-(deprecated)'></a>2.4 tp.getTableRows (Deprecated)

#### <a name='2.5-tp.geteostablerows'></a>2.5 tp.getEosTableRows

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

#### <a name='2.6-tp.geteosaccountinfo'></a>2.6 tp.getEosAccountInfo

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

#### <a name='2.7-tp.geteostransactionrecord'></a>2.7 tp.getEosTransactionRecord

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



### <a name='3.-eth'></a>3. ETH


#### <a name='3.0-兼容metamask-(compatible-with-metamask)'></a>3.0 兼容Metamask (Compatible with Metamask) 

- TokenPocket is Compatible with Metamask.
- TokenPocket 兼容基于 Metamask 的应用.
- About [Metamask](https://metamask.io/)

- Demo: https://github.com/metamask/test-dapp 

- Webview 内有注入 `ethereum` 对象.
- Webview injected an `ethereum` object.
- 


### <a name='4.enu'></a>4.ENU

#### <a name='4.0-兼容ironman-(compatible-with-ironman)'></a>4.0 兼容Ironman (Compatible with Ironman)

- About [Ironman](http://enuironman.com/)

#### <a name='4.1-tp.enutokentransfer'></a>4.1 tp.enuTokenTransfer

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



#### <a name='4.2-tp.pushenuaction'></a>4.2 tp.pushEnuAction

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


#### <a name='4.3-tp.getenubalance'></a>4.3 tp.getEnuBalance

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


#### <a name='4.4-tp.getenutablerows'></a>4.4 tp.getEnuTableRows

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

#### <a name='4.5-tp.getenuaccountinfo'></a>4.5 tp.getEnuAccountInfo
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

#### <a name='4.6-tp.getenutransactionrecord'></a>4.6 tp.getEnuTransactionRecord

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


### <a name='5.cosmos'></a>5.COSMOS

#### <a name='5.1-tp.signcosmostransaction'></a>5.1 tp.signCosmosTransaction

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



#### <a name='5.2-tp.cosmosarbitrarysignature'></a>5.2 tp.cosmosArbitrarySignature

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


### <a name='6.iost'></a>6.IOST

#### <a name='6.0-兼容iwalletjs-(compatible-with-iwalletjs)'></a>6.0 兼容IWalletJS (Compatible with IWalletJS)

- TokenPocket is Compatible with IWalletJS.
- TokenPocket 兼容基于 IWalletJS 的应用.
- IWalletJS API: [IWalletJS](https://github.com/TP-Lab/IOST-JS-API)


### <a name='7.tron'></a>7.TRON

#### <a name='7.0-兼容tronlink-(compatible-with-tronlink)'></a>7.0 兼容TRONLINK (Compatible with TRONLINK)

- TokenPocket is Compatible with TronLink.
- TokenPocket 兼容基于 TronLink 的应用.

- Webview 内有注入 `tronWeb` 对象.
- Webview injected a `tronWeb` object.

- `tronweb` https://developers.tron.network/docs/tron-web-intro



### <a name='8.moac'></a>8.MOAC

#### <a name='8.1-tp.sendmoactransaction'></a>8.1 tp.sendMoacTransaction
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

#### <a name='8.2-tp.signmoactransaction'></a>8.2 tp.signMoacTransaction

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


#### <a name='8.3-tp.moactokentransfer'></a>8.3 tp.moacTokenTransfer

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



### <a name='9.jingtum'></a>9.Jingtum

#### <a name='9.1-tp.signjingtumtransaction'></a>9.1 tp.signJingtumTransaction
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


### <a name='10.okexchanin'></a>10.OKExChanin

#### <a name='10.1-tp.signokexchaintransaction'></a>10.1 tp.signOkexchainTransaction

```javascript
tp.signOkexchainTransaction(tx, address)
```

##### Parameters

`tx`- `Object`:
- `chain_id`: `String`
- `account_number`: `String | Number`
- `sequence`: `String | Number`
- `fees`: `Object`
- `memo`: `String`
- `msgs`: `Array`

`address`- `String` : from address

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`

- `msg`: `String`

##### Example

```javascript
tp.signOkexchainTransaction({
    "account_number":"222",
    "chain_id":"okexchain-65",
    "fee": {"amount": [{"amount":"0.020000000000000000","denom":"okt"}],"gas":"200000"},
    "memo":"ahah",
    "msgs":[
        {
            "type": "okexchain/token/MsgTransfer",
            "value": {
                "amount": [{"amount":"1.000000000000000000","denom":"okt"}],
                "from_address":  "okexchainxxxxxxxxfrom",
                "to_address": "okexchainxxxxxxxxto"
            }
        }
    ],
    "sequence":"15"
}, 'okexchainxxxxxxxxfrom').then(console.log)

> {
	"result": true,
	"data": {
        "signatures": [{
            "pub_key": {
                "type": "tendermint/PubKeySecp256k1",
                "value": [buffer]
            },
            "signature": [buffer]
        }],
	},
	"msg": "success"
}
```




### <a name='11.polkadot-kusama-etc.'></a>11.Polkadot Kusama etc.

TokenPocket is compatible with Polkadot{.js} extension please check the offical doc: 
- https://polkadot.js.org/docs/extension/ 
- https://github.com/polkadot-js/apps 


### <a name='12.heco-bsc-okt'></a>12.HECO BSC OKT 

TokenPocket is compatible with metamask, please check the offiacl doc: 

- https://docs.metamask.io/guide/ 
- https://github.com/metamask/test-dapp 


### <a name='13.solana'></a>13.solana

Check https://github.com/solana-labs/wallet-adapter for using solana wallets including TokenPocket.

Or you can using the `window.solana` Object directly in the webview.


#### <a name='13.1-connect'></a>13.1 connect
```javascript

await window.solana.connect();
const publicKey = window.solana.publicKey.toBase58();

```


#### <a name='13.2-signtransaction'></a>13.2 signTransaction

```javascript

const network = "<NETWORK_URL>";
const connection = new Connection(network);
const transaction = new Transaction();
const signedTransaction = await window.solana.signTransaction(transaction);
const signature = await connection.sendRawTransaction(signedTransaction.serialize());

```

#### <a name='13.3-signmessage'></a>13.3 signMessage

```javascript
const encodedMessage = new TextEncoder().encode('Your message');
const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");

```

### <a name='14.-btc'></a>14. btc


#### <a name='14.1-getcurrentbalance'></a>14.1 getCurrentBalance
```javascript
tp.getCurrentBalance()
```

##### <a name='returns'></a>Returns
`Object`:
- `result`: `Boolean`
- `data`: `Object`
    -`balance`: `String`
- `msg`: `String` 

##### Example

```javascript
tp.getCurrentBalance().then(res => console.log)

> {
    result: true,
    data: {
        balance: '0.013'
    }, 
    msg: 'success', 
}
```



#### <a name='14.2-btctokentransfer'></a>14.2 btcTokenTransfer

```javascript
tp.btcTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String` 


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`
- `msg`: `String` 

##### Example

```javascript
tp.btcTokenTransfer({
    from: '3FYbry1GTFmxxxxxxxxxxx',
    to: '1NVY7Gdng4Ti3bWm1tiPxxxxxxxxx',
    amount: '0.0001',
}).then(res => console.log)

> {
    result: true,
    data: '5420a8f77594e9114c2d97dxxxxxxxxxxxxxxxxxxx', // android
    msg: '5420a8f77594e9114c2d97dxxxxxxxxxxxxxxxxxxx', // ios
}
```



#### <a name='14.3-usdttokentransfer'></a>14.3 usdtTokenTransfer

OMNI USDT

```javascript
tp.usdtTokenTransfer(params)
```

##### Parameters

`params`- `Object`:
- `from`: `String`
- `to`: `String`
- `amount`: `String` 


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`
- `msg`: `String` 

##### Example

```javascript
tp.usdtTokenTransfer({
    from: '3FYbry1GTFmxxxxxxxxxxx',
    to: '1NVY7Gdng4Ti3bWm1tiPxxxxxxxxx',
    amount: '10.02',
}).then(res => console.log)

> {
    result: true,
    data: '5420a8f77594e9114c2d97dxxxxxxxxxxxxxxxxxxx', // android
    msg: '5420a8f77594e9114c2d97dxxxxxxxxxxxxxxxxxxx', // ios
}
```


### <a name='15.-aptos'></a>15. Aptos

`const isTokenPocket = window.aptos && aptos.isTokenPocket`

#### <a name='15.1-aptos.connect'></a>15.1 aptos.connect

```javascript
aptos.connect().then(console.log)
// {address: '0x1111...', publicKey: '0x22222...'}
```

#### <a name='15.2-aptos.account'></a>15.2 aptos.account

```javascript
aptos.account().then(console.log)
// {address: '0x1111...', publicKey: '0x22222...'}
```

#### <a name='15.3-aptos.getchainid'></a>15.3 aptos.getChainId
```javascript
aptos.getChainId().then(console.log)
// 31
```

#### <a name='15.4-aptos.getnodeurl'></a>15.4 aptos.getNodeUrl
```javascript
aptos.getNodeUrl().then(console.log)
// 'https://testnet.aptoslabs.com'
```

#### <a name='15.5-aptos.network'></a>15.5 aptos.network
```javascript
aptos.network().then(console.log)
// 'Testnet'
```


#### <a name='15.6-aptos.signandsubmittransaction'></a>15.6 aptos.signAndSubmitTransaction

```javascript
const transaction = {
    arguments: ['0x111111...', '112'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::TestCoin'],
};
const options = { // optional parameter
  max_gas_amount: '1000',
  gas_unit_price: '100',
  expiration_timestamp_secs: '1646793600',
  sequence_number: '10'
}
aptos.signAndSubmitTransaction(transaction, options).then(console.log)
// { hash: "0x1111...", sender: "0x1111", sequence_number: "10", signature: {public_key: '0x222',signature: '0x333', type: 'ed25519_signature'}, payload: {}, max_gas_amount: '1009', gas_unit_price: '100', expiration_timestamp_secs: '1665721856' }
```

#### <a name='15.7-aptos.signtransaction'></a>15.7 aptos.signTransaction

```javascript
const transaction = {
    arguments: ['0x111111...', '112'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::TestCoin'],
};
const options = { // optional parameter
  max_gas_amount: '1000',
  gas_unit_price: '100',
  expiration_timestamp_secs: '1646793600',
  sequence_number: '10'
}
aptos.signTransaction(transaction, options).then(console.log)
// { "0": 156, "1": 177, "2": 187, "3": 244, "4": 44, ...}
```

#### <a name='15.8-aptos.signmessage'></a>15.8 aptos.signMessage

```javascript 

aptos.signMessage({
    address?: boolean, // Should we include the address of the account in the message
    application?: boolean, // Should we include the domain of the dapp
    chainId?: boolean, // Should we include the current chain id the wallet is connected to  
    message: 'hello world', // The message to be signed and displayed to the user
    nonce: '1113' // A nonce the dapp should generate
}).then(console.log)

// return
// {
//     address: string,
//     application: string,
//     chainId: number,
//     fullMessage: string, // The message that was generated to sign
//     message: string, // The message passed in by the user
//     nonce: string,
//     prefix: string, // Should always be APTOS
//     signature: string // The signed full message
// }
```
