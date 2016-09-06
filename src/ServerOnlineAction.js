import {AliIotBasicAction, schema} from './utils';

class ServerOnlineAction extends AliIotBasicAction {
  constructor(productKey = null) {
    super({});
    this.paramMap.Action = 'ServerOnline';
    this.setProductKey(productKey);
    this.resSchema = schema({
      Success: Boolean,
      RequestId: String,
    });
  }
}

export default ServerOnlineAction;
