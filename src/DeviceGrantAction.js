import {AliIotBasicAction, schema} from './utils';

class DeviceGrantAction extends AliIotBasicAction {
  constructor(productKey = null, deviceName = null, grantType = null, topicFullName = null) {
    super({});
    this.paramMap.Action = 'DeviceGrant';
    this.setProductKey(productKey).setDeviceName(deviceName).setGrantType(grantType).setTopicFullName(topicFullName);
    this.resSchema = schema({
      Success: Boolean,
      ErrorMessage: String,
      RequestId: String,
      id: Number,
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

export default DeviceGrantAction;