import {AliIotBasicAction, schema} from './utils';

class UnSubAction extends AliIotBasicAction {
  constructor(productKey = null) {
    super({});
    this.paramMap.Action = 'UnSub';
    this.setProductKey(productKey);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }
  setTopics(...topics) {
    //TODO:remove the topic params in the paramMap before.
    topics.map((key, idx) => this.paramMap[`Topic.${idx + 1}`] = key);
    return this;
  }
}

export default UnSubAction;