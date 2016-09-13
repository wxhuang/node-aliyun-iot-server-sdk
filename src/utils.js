const schema = require('js-schema');
const crypto = require('crypto');
const moment = require('moment');
const fetch = require('node-fetch');

var ErrRes = schema({
  Message: String,
  HostId: String,
  Code: String,
  RequestId: String,
});

var ErrRes2 = schema({
  ErrorMessage: String,
  RequestId: String,
  Success: Boolean,
});

let getRandom = function(){
  return Math.floor((Math.random() + 1) * 10000000).toString();
};

let _checkSubCallbackSignature = function(productKey, productSecret, message, sign) {
  const md5sum = crypto.createHash('md5');
  md5sum.update(`${productKey}${message}${productSecret}`);
  return md5sum.digest('hex') === sign;
};

class AliIotBasicAction {
  constructor({format = 'json', version = '2016-05-30', signatureMethod = 'HMAC-SHA1', signatureVersion = '1.0', regionId = 'cn-hangzhou'}) {
    this.httpMethod = 'GET';
    this.paramMap = {};
    this.paramMap.Format = format;
    this.paramMap.SignatureNonce = getRandom();
    this.paramMap.Version = version;
    this.paramMap.SignatureMethod = signatureMethod;
    this.paramMap.SignatureVersion = signatureVersion;
    this.paramMap.RegionId = regionId;
    this.paramMap.Timestamp = `${moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss')}Z`;
    this.errResSchema = ErrRes;
    this.reqFailSchema = ErrRes2;
  }

  setProductKey(productKey) {
    this.paramMap.ProductKey = productKey;
    return this;
  }

  getParams(acsClient) {
    this.paramMap.AccessKeyId = acsClient.accessKeyId;
    return Object.keys(this.paramMap).sort().map(key => `${key}=${encodeURIComponent(this.paramMap[key])}`).join('&');
  }

  getSign(acsClient, params) {
    const hmac = crypto.createHmac('sha1', `${acsClient.accessKeySecret}&`);
    hmac.update(`${this.httpMethod}&%2F&${encodeURIComponent(params)}`);
    return encodeURIComponent(hmac.digest('base64'));
  }

  reqUrl(acsClient) {
    let params = this.getParams(acsClient);
    return `http://${acsClient.host}/?${params}&Signature=${this.getSign(acsClient, params)}`;
  }
}

class AcsClient {
  constructor(accessKeyId = null, accessKeySecret = null) {
    this.host = 'iot.aliyuncs.com';
    this.accessKeyId = accessKeyId;
    this.accessKeySecret = accessKeySecret;
  };

  async doAction(action) {
    //console.log(action.paramMap);
    let data;
    let str = action.reqUrl(this);
    try{
      data = await (await fetch(str)).json();
    }catch(e) {
      throw e;
    }
    //console.log(data);
    if(action.resSchema(data)) {
      return data;
    }else if(action.reqFailSchema(data)){
      throw new Error(`request:${data.ErrorMessage}`);
    }else if(action.errResSchema(data)){
      throw new Error(`middleware:${data.Message}`);
    }else {
      throw new Error(JSON.stringify(data));
    }
  }
}

export {AliIotBasicAction, AcsClient, schema};