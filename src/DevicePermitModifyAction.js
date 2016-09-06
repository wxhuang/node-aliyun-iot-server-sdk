import {AliIotBasicAction, schema} from './utils';

class DevicePermitModifyAction extends AliIotBasicAction {
  constructor(productKey, deviceName, ruleId, grantType, topicFullName) {
    super({});
    this.paramMap.Action = 'DevicePermitModify';
    this.setProductKey(productKey).setDeviceName(deviceName).setRuleId(ruleId).setGrantType(grantType).setTopicFullName(topicFullName);
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
  setGrantType(grantType) {
    this.paramMap.GrantType = grantType;
    return this;
  }
  setTopicFullName(topicFullName) {
    this.paramMap.TopicFullName = topicFullName;
    return this;
  }
}

export default DevicePermitModifyAction;