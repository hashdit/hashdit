---
sidebar_position: 5
---

# HashDit API Authorization

When the client calls server’s restful interface, client need to set the following headers to pass the server’s authorization

| Header      | 	Description |
| ----------- | 	----------- |
|Content-Type|	application/json;charset=UTF-8|
|X-Signature-appid|	Appid, unique code|
|X-Signature-timestamp|	Timestamp, millisecond|
|X-Signature-nonce|	Random uuid, replace “-” with “”，32 byte length|
|X-Signature-signature|	Signature,lowercase,check below for sign details|

## Signature​

``` 
signature = encodeHexString(
 HmacSHA256(
   appsecret,
   appid;
   timestamp;
   nonce;
   method;
   uri;
   query;
   body
 )
)
```

Where uri is the path, multiple key-value pair in query and header should be sorted alphabetically by key, comma separated, example:

### Go

```

appid := "000000000000000000000000000000000000000000000000000000000000000001" // the app id

appSecret := "000000000000000000000000000000000000000000000000000000000000000002" // the app secret

timestamp := strconv.FormatInt(time.Now().Unix(), 10) // the timestamp
nonce := strconv.Itoa(rand.Intn(9999999))             // the nonce
method := "POST"                                      // the http method
url := "/security-api/public/app/v1/detect"                     // the url of api
query := ""                                           // the query string, it can be empty
body := string(postBody)                              // the request body

msgForSig := GenerateMsgForSig(appid, timestamp, nonce, method, url, query, body)
sig := ComputeSig(msgForSig, appSecret)

func GenerateMsgForSig(appid, timestamp, nonce, method, url, query, body string) string {
   var msgForSig []byte

   if query != "" {
       msgForSig = []byte(fmt.Sprintf("%s;%s;%s;%s;%s;%s;%s", appid, timestamp, nonce, method, url, query, body))
   } else {
       msgForSig = []byte(fmt.Sprintf("%s;%s;%s;%s;%s;%s", appid, timestamp, nonce, method, url, body))
   }

   return string(msgForSig)
}

func ComputeSig(msgForSig, appSecret string) string {
   message := []byte(msgForSig)

   key := []byte(appSecret)
   h := hmac.New(sha256.New, key)
   h.Write(message)

   return hex.EncodeToString(h.Sum(nil))
}

```

### Java

```
// you should provide appId, appSecret and address
String appId = "000000000000000000000000000000000000000000000000000000000000000001";
String appSecret = "000000000000000000000000000000000000000000000000000000000000000002";
String body = "{\"address\":\"0x0000000000000000000000000000000000000003\"}";

String timeStamp = Long.toString(System.currentTimeMillis());
String path = "/security-api/public/app/v1/detect";
String data = String.join(";", appId, timeStamp, "nonce", "POST", path, body);

Mac mac = Mac.getInstance("HmacSHA256");
SecretKeySpec secretKeySpec = new SecretKeySpec(appSecret.getBytes(), "HmacSHA256");
mac.init(secretKeySpec);
StringBuilder stringBuilder = new StringBuilder();
for (byte aByte : mac.doFinal(data.getBytes())) {
   stringBuilder.append(String.format("%02x", aByte));
}

String hashInHex = stringBuilder.toString();
StringEntity requestEntity = new StringEntity(
   body, 
   ContentType.APPLICATION_JSON
);

```

### Javascript

```
const HmacSHA256 = require('crypto-js/hmac-sha256')
const EncodeHex = require('crypto-js/enc-hex')

// you should provide appId, appSecret and address
const appId = '000000000000000000000000000000000000000000000000000000000000000001'
const appSecret = '000000000000000000000000000000000000000000000000000000000000000002'
const body = JSON.stringify({ 'address': '0x0000000000000000000000000000000000000003' })

const timeStamp = new Date().valueOf().toString()
const method = 'POST'
const url = '/security-api/public/app/v1/detect'

const data = [appId, timeStamp, 'nonce', method, url, body].join(';')
const hash = HmacSHA256(data, appSecret)
const hashInHex = EncodeHex.stringify(hash)

```

### Python

```

import time
import hmac
import hashlib

# you should provide appId, appSecret and address
appId = '000000000000000000000000000000000000000000000000000000000000000001'
appSecret = '000000000000000000000000000000000000000000000000000000000000000002'
timeStamp = str(int(time.time() * 1000))

method = 'POST'
url = '/security-api/public/app/v1/detect'
body = '{"address":"0x0000000000000000000000000000000000000003"}'

data = ';'.join([appId, timeStamp, 'nonce', method, url, body])

hashInHex = hmac.new(bytes(appSecret , 'utf-8'), msg = bytes(data , 'utf-8'), digestmod = hashlib.sha256).hexdigest()

```

## Original request
| Key      | 	Value |
| ----------- | 	----------- |
|appid|	13cc90dc5ffa4032acb3|
|appsecret|	cd0ec4b1ca934b188996034541d7e810|
|url|	/security-api/public/app/v1/detect|
|query|	empty|
|method|	POST|
|body|	{ <br />"chain_id":"56", <br />"address":"0x0000000000000000000000000000000000000003"<br /> }  |
|timestamp|	1657246234465|
|nonce|	791f398e93f14b3e98f916703f777f44|
then：

```
signature = encodeHexString(HmacSHA256(
 cd0ec4b1ca934b188996034541d7e810,
 ‘13cc90dc5ffa4032acb3;
 1657246234465;
 791f398e93f14b3e98f916703f777f44;
 POST;
/security-api/public/app/v1/detect
 {
   "chain_id":"56",
   "address":"0x0000000000000000000000000000000000000003"
 }’
))
```

Note: The query can be empty. When the query is empty, you do not need to fill in the empty query and “;” in the concatenated string, but directly omit the query and “;”

## Final header​
| Header      | 	Description |
| ----------- | 	----------- |
|Content-Type|	application/json;charset=UTF-8|
|X-Signature-appid|	13cc90dc5ffa4032acb3|
|X-Signature-timestamp|	1657246234465|
|X-Signature-nonce|	791f398e93f14b3e98f916703f777f44|
|X-Signature-signature|	bece3956c35911e598635345c0f428122e5423efc9fac68edf9dd377163a9897|
