import {DevicePermitModifyAction,
  DeviceGrantAction,
  DeviceRevokeByTopicAction,
  DeviceRevokeByIdAction,
  ListDevicePermitAction,
  PubAction,
  RevertRpcAction,
  RegistDeviceAction,
  ServerOnlineAction,
  SubAction,
  UnSubAction,
  AcsClient,
} from './src/index';

var main = async function() {
  let acsClient = new AcsClient('your access key ID', 'your access key secret');
  try{
    let action = null;
    //action = new ListDevicePermitAction().setProductKey('productkey').setDeviceName('box_test');
    //action = new PubAction().setProductKey('productkey').setQos(0).setTopicFullName('/productkey/topic1').setMessageContent('asdf');
    //action = new SubAction().setProductKey('productkey').setSubCallback('http://asdf.com/recvmsg').setTopics('/productkey/topic1', '/productkey/topic2');
    //action = new UnSubAction().setProductKey('productkey').setTopics('/productkey/topic1', '/productkey/topic2');
    //action = new DeviceGrantAction().setProductKey('productkey').setDeviceName('box_test').setGrantType('ALL').setTopicFullName('/productkey/topic1');
    //action = new DevicePermitModifyAction().setProductKey('productkey').setDeviceName('box_test').setRuleId(17).setGrantType('PUB').setTopicFullName('/productkey/topic1');
    //action = new DeviceRevokeByIdAction().setProductKey('productkey').setDeviceName('box_test').setRuleId(17);
    //action = new DeviceRevokeByTopicAction().setProductKey('productkey').setDeviceName('box_test').setGrantType('ALL').setTopicFullName('/productkey/topic1');
    //action = new RegistDeviceAction().setProductKey('productkey').setDeviceName('box_test');
    //action = new RevertRpcAction().setProductKey('productkey').setDeviceName('box_test').setRpcContent('asdf').setTimeOut(5000);
    //action = new ServerOnlineAction().setProductKey('productkey');
    let data = await acsClient.doAction(action);
    console.log(data);
  }catch(e){
    console.error(e);
  }

};

main();
