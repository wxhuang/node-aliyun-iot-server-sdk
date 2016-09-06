# node-ali-iot-server-sdk
Aliyun IOT server SDK for Node.Js
# SDK version
20160530
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
