import {AliIotBasicAction, schema} from './utils';

class DeviceRevokeByIdAction extends AliIotBasicAction {
  constructor(productKey, deviceName, ruleId) {
    super({});
    this.paramMap.Action = 'DeviceRevokeById';
    this.setProductKey(productKey).setDeviceName(deviceName).setRuleId(ruleId);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }
  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
    return this;
  }
  setRuleId(ruleId) {
    this.paramMap.RuleId = ruleId;
    return this;
  }
}

export default DeviceRevokeByIdAction;