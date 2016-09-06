import {AliIotBasicAction, schema} from './utils';

class SubAction extends AliIotBasicAction {
  constructor(productKey = null, subCallback = null) {
    super({});
    this.paramMap.Action = 'Sub';
    this.setProductKey(productKey).setSubCallback(subCallback);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }
  setSubCallback(subCallback) {
    this.paramMap.SubCallback = subCallback;
    return this;
  }
  setTopics(...topics) {
    //TODO:remove the topic params in the paramMap before.
    topics.map((key, idx) => this.paramMap[`Topic.${idx + 1}`] = key);
    return this;
  }
}

export default SubAction;