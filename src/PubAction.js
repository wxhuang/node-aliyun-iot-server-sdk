import {AliIotBasicAction, schema} from './utils';

class PubAction extends AliIotBasicAction {
  constructor(productKey = null, topicFullName = null, qos = null) {
    super({});
    this.paramMap.Action = 'Pub';
    this.setProductKey(productKey).setTopicFullName(topicFullName).setQos(qos);
    this.resSchema = schema({
      RequestId: String,
      Success: Boolean,
    });
  }

  setTopicFullName(topicFullName) {
    this.paramMap.TopicFullName = topicFullName;
    return this;
  };
  setQos(qos) {
    this.paramMap.Qos = qos;
    return this;
  }
  setMessageContent(messageContent) {
    if (!(messageContent instanceof Buffer)) {
      messageContent = String(messageContent);
    }
    this.paramMap.MessageContent = new Buffer(messageContent).toString('base64');
    return this;
  }
}

export default PubAction;