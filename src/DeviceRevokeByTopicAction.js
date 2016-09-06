import {AliIotBasicAction, schema} from './utils';

class DeviceRevokeByTopicAction extends AliIotBasicAction {
  constructor(productKey, deviceName, grantType, topicFullName) {
    super({});
    this.paramMap.Action = 'DeviceRevokeByTopic';
    this.setProductKey(productKey).setDeviceName(deviceName).setGrantType(grantType).setTopicFullName(topicFullName);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }
  setDeviceName(deviceName) {
    this.paramMap.DeviceName = deviceName;
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

export default DeviceRevokeByTopicAction;