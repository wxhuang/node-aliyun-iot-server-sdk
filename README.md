# node-aliyun-iot-server-sdk
Aliyun IOT server SDK for Node.Js
# SDK version
20160530
# Installation
This package is witten with ES6 and async/await syntax, it has to be compiled by babel at present and it is included in the installation scripts(see ```package.json```).
```
git clone https://github.com/wxhuang/node-aliyun-iot-server-sdk.git
cd node-aliyun-iot-server-sdk
npm install --dev
```
# Usage
```js
import {AcsClient, ServerOnlineAction} from './index'

let client = new AcsClient('your access key ID', 'your access key secret');
try {
  let action = new ServerOnlineAction().setProductKey('productkey');
  let data = await client.doAction(action);
  console.log(data);
}catch(e) {
  console.error(e);
}
```
See more details in ```test.js```
# API documents
[documents in Aliyun](https://help.aliyun.com/document_detail/30557.html?spm=5176.doc30565.3.2.LTR40A)
