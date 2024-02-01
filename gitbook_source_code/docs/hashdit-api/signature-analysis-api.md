---
sidebar_position: 5
---

# Signature Analysis API

## Endpoint
``` 
https://api.hashdit.io/security-api/public/chain/v1/detect/signature
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
|url|	Yes|	String|	Url or Domain|	http://pancakak.com/ <br /> Pancakak.com <br /> PANCAKAK.COM <br /> http://a.b.pancakak.com/abc|
|method|	Yes|	String|	Signing method|	eth_sign <br /> personal_sign <br /> eth_signTypedData_v4|
|message|	Yes|	String|	Original signing message|	0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765|

## Response
|Name|	Nullable|	Type|	Example|
| ----------- | 	----------- |	----------- |	----------- |
|status|	No|	String|	OK/ERROR|
|code|	No|	String|	00001:verify signature error <br /> > appid, timestamp, nonce, signature headers can not be null or empty <br /> > nonce is illegal <br /> > timestamp has illegal <br /> > timestamp is expired <br /> > invalid appid <br /> > appid has expired <br /> > invalid signature <br /> > replay request <br /> > app is out of count limit <br /> 00002:unknown server error occurred during verifying signature <br /> 00003:unknown server error occurred during detection| 
| data|	Yes| 	|	|
|data.*request_id*|	No|	String|	Unique request id|
|data.*type*|	No|	String|	Permit <br /> NFT_Listing |
|data.*risk_level*|	No|	Integer| -1: Invalid <br /> 0: Very Low Risk <br /> 1: Some Risk <br /> 2: Low Risk <br /> 3: Medium Risk <br /> 4: High Risk <br /> 5: Significant Risk|
|data.*risk_detail*|	No|	String|	[{ <br /> "name": "eth-sign-method", <br /> "value": "Signing with a vulnerable method." <br /> }, <br /> { <br /> "name": "sign-transaction" <br /> "value": "Potentially signing a transaction." <br /> }]  |
| data.*risk_item*|	Yes| 	|	|
|data.*risk_item*.*url*|	Yes|	Json|	{ <br /> "risk_level": 3, <br /> "risk_detail": <br /> " [{\"name\":\"threat_researcher\",\"value\":\"The website is referenced in reports by Threat researchers.\"}]" <br /> } |
|data.*risk_item*.*address*|	Yes|	Json| { <br /> "0x67f51179b59d32563a1ad370b717a82cfb081ced": {  <br /> "risk_level": 2, <br /> "risk_detail": <br /> "[{\"name\":\"is_in_blist\",\"value\":\"There are potential risks related to this address based on the threat intelligence.\"}]" <br />  }, <br /> "0x67f51179b59d32563a1ad370b717a82cfb081ced": {  <br /> "risk_level": 2, <br /> "risk_detail": <br /> "[{\"name\":\"modify-fee\",\"value\":\"The contract transaction fee is modifiable, if it is increased dramatically, users may encounter honeypot/rugpull risks.\"}]" <br />  } <br /> } |


## Risk Detail
The risk_detail will comprise of an array of objects, the object contain the following fields
name : name of the check.
value: check result

|Name|	Value|
| ----------- | 	----------- |
|url-high-risk-signature|	Signature triggered on a malicious website.|
|approve-huge-amount|	Approving a huge amount of assets.|
|approve-to-eoa|	Approving to an EOA address.|
|approve-to-high-risk|	Approving to a high risk address.|
|eth-sign-method|	Signing with a vulnerable method.|
|sign-transaction|	Potentially signing a transaction.|
|sign-last-long-period|	This signature could be valid for a long period.|
|mismatched-chain-id|	This is a meaningless transaction with a mismatched chain id.|
