---
sidebar_position: 2
---

# Address Analysis API

## Endpoint
```
https://api.hashdit.io/security-api/public/chain/v1/detect/address
```

## Header
|Header|	Description|
| ----------- | 	----------- |
|Content-Type|	application/json;charset=UTF-8|
|X-Signature-appid|	Appid, unique code|
|X-Signature-timestamp|	Timestamp, millisecond|
|X-Signature-nonce|	Random uuid, replace “-” with “”，32 byte length|
|X-Signature-signature|	Signature,lowercase,check below for sign details|

## Body
|Name|	Required|	Type|	Description|	Example|
| ----------- | 	----------- |	----------- |	----------- |	----------- |
|chain_id|	Yes|	String|	The chain id of the blockchain|	1 - Ethereum <br /> 56 - BSC <br /> 137 - Polygon|
|address|	Yes|	String|	Address that needs to be analyzed	|	0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c|



## Response
|Name|	Nullable|	Type|	Example|
| ----------- | 	----------- |	----------- |	----------- |
|status|	No|	String|	OK/ERROR|
|code|	No|	String|	00001:verify signature error <br /> > appid, timestamp, nonce, signature headers can not be null or empty <br /> > nonce is illegal <br /> > timestamp has illegal <br /> > timestamp is expired <br /> > invalid appid <br /> > appid has expired <br /> > invalid signature <br /> > replay request <br /> > app is out of count limit <br /> 00002:unknown server error occurred during verifying signature <br /> 00003:unknown server error occurred during detection| 
| data|	Yes| String	|	|
|data.*request_id*|	No|	String|	Unique request id|
|data.*has_result*|	No|	Boolean|	Whether there is already a definite result, if False, it needs to be requested in [polling_interval] million seconds|
|data.*polling_interval*|	Yes|	Long|	Recommended waiting time(million seconds) to the next repeat request. seconds|
|data.*risk_level*|	Yes|	Integer| -1: Invalid <br /> 0: Very Low Risk <br /> 1: Some Risk <br /> 2: Low Risk <br /> 3: Medium Risk <br /> 4: High Risk <br /> 5: Significant Risk|
|data.*risk_detail*|	Yes|	String|	See Risk Detail <br /> [{ <br /> "name": "scam", <br /> "value": "The contract has some scam features such as Ponzi, Honeypot or fake token, please be careful of scam risk." <br /> }, <br /> { <br /> "name": "blacklist", <br /> "value": "The address is blacklisted based on threat intelligence or manual analysis." <br /> }]  |

## Risk Detail
The risk_detail will comprise of an array of objects, the object contain the following fields
name : name of the check.
value: check result

|Name|	Value|
| ----------- | 	----------- |
|whitelist|	The address is whitelisted based on threat intelligence or manual analysis.|
|blacklist|	The address is blacklisted based on threat intelligence or manual analysis.|
|unverified|	The contract is unverified which always indicates some potential risks, please be careful of scam or hack risk.|
|mixcoin-related|	The address is related to a coin mixer platform such as Tornado.Cash, which could mean some potential risks, please be careful of scam risk|
|centralization|	The contract contains some privileged role function which could mean some centralization risk, please be careful of rugpull risk.|
|backdoor-function|	The contract contains some backdoor function which could mean the owner has some potentially malicious intent, please be careful of rugpull risk.|
|business-issue|	The contract contains some business logic bug which always mean it would be a potential attack target, please be careful of hack risk.|
|behavior-issue|	The address is found to be associated with some already known malicious addresses.|
|red_alarm|	The address was marked as red alarm on: {redalarm url}|
|scam|	The contract has some scam features such as Ponzi, Honeypot or fake token, please be careful of scam risk.|
|spoofed_address|	The address is potentially a spoofing related address. Please check again if this is your intended receiver address.|
