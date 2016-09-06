import {AliIotBasicAction, schema} from './utils';

class ListDevicePermitAction extends AliIotBasicAction {
  constructor(productKey = null, deviceName = null) {
    super({});
    this.paramMap.Action = 'ListDevicePermits';
    this.setProductKey(productKey).setDeviceName(deviceName);
    this.paramMap.DeviceName = deviceName;
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
      DevicePermissions: Object,
    });
  };

  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  };
}

export default ListDevicePermitAction;