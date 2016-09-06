import {AliIotBasicAction, schema} from './utils';

class RevertRpcAction extends AliIotBasicAction {
  constructor(productKey = null, deviceName = null, timeout = null) {
    super({});
    this.paramMap.Action = 'RevertRpc';
    this.setProductKey(productKey).setDeviceName(deviceName).setTimeOut(timeout);
    this.resSchema = schema({
      Rpccode: String,
      Success: Boolean,
      ResponseContent: String,
    });
  }

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };

  setRpcContent(rpcContent) {
    if (!(rpcContent instanceof Buffer)) {
      rpcContent = String(rpcContent);
    }
    this.paramMap.RpcContent = new Buffer(rpcContent).toString('base64');
    return this;
  }

  setTimeOut(timeout) {
    this.paramMap.TimeOut = timeout;
    return this;
  }
}

export default RevertRpcAction;
