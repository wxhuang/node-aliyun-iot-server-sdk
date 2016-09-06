import {AliIotBasicAction, schema} from './utils';

class RegistDeviceAction extends AliIotBasicAction {
  constructor(productKey, deviceName) {
    super({});
    this.paramMap.Action = 'RegistDevice';
    this.setProductKey(productKey).setDeviceName(deviceName);
    this.resSchema = schema({
      RequestId : String,
      Success : Boolean,
      DeviceId : String,
      DeviceName : String,
      DeviceSecret : String,
      DeviceStatus : String,
      ErrorMessage : String,
    });
  }
  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  }
}

export default RegistDeviceAction;
