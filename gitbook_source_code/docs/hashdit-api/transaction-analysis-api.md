---
sidebar_position: 4
---

# Transaction Analysis API

## Endpoint
```
https://api.hashdit.io/security-api/public/chain/v1/detect/transaction
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
|transaction| Yes	|  String| The transaction hash of the transaction in hex string format	|	0x6b2b333c62ae791da49ffb261b16634fb9eb07da407b55a43748d7fbcaab45e0|
|from|	Yes|	String|	The **source** address of the transaction in hex string format| 0x8894E0a0c962CB723c1976a4421c95949bE2D4E3|
|to|	Yes|	String|	The **destination** address of the transaction in hex string format| 0x55d398326f99059fF775485246999027B3197955|
|data|	Yes|	String|	The encoded call data of the transaction in hex string format|0x095ea7b300000000000000000000000019eb37315a0df7155c06600ebd7a1c4019c0bf8effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff|
|value|	No|	String|	The value of the transaction in Wei in hex string format||
|gas|	No|	String|	The gas required for the transaction in hex string format||
|gas_price|	No|	String|	The gas price for the transaction in hex string format||


## Response
|Name|	Nullable|	Type|	Example|
| ----------- | 	----------- |	----------- |	----------- |
|status|	No|	String|	OK/ERROR|
|code|	No|	String|	00001:verify signature error <br /> > appid, timestamp, nonce, signature headers can not be null or empty <br /> > nonce is illegal <br /> > timestamp has illegal <br /> > timestamp is expired <br /> > invalid appid <br /> > appid has expired <br /> > invalid signature <br /> > replay request <br /> > app is out of count limit <br /> 00002:unknown server error occurred during verifying signature <br /> 00003:unknown server error occurred during detection| 
| data|	Yes| 	|	|
|data.*request_id*|	No|	String|	Unique request id|
|data.*type*|	No|	String|	invalid_type <br /> contract_invoke <br /> direct_transfer <br /> contract_creation <br /> not_supported_chain_id|
|data.*value*|	Yes|	String|	|
|data.*function*|	Yes|	String|	approve|
|data.*params* |	Yes|	Array|	[{ <br />  "name": "_spender", <br /> "type": "address", <br /> "value": <br /> "0x67f51179B59D32563A1aD370B717A82CFB081cED" <br /> }, <br /> { "name": "_value", <br /> "type": "uint256", <br /> "value": "7237005577332262213973186563042994240829374041602535252466099000494570602495" <br /> }]|
|data.*risk_level*|	No|	Integer| -1: Invalid <br /> 0: Very Low Risk <br /> 1: Some Risk <br /> 2: Low Risk <br /> 3: Medium Risk <br /> 4: High Risk <br /> 5: Significant Risk|
|data.*risk_detail*|	Yes|	String|	See Risk Detail <br /> [{ <br /> "name": "approve-to-eoa", <br /> "value": "Approving to an EOA address." <br /> }, <br /> { <br /> "name": "approve-huge-amount", <br /> "value": "Approving a huge amount of assets." <br /> }]  |
| data.*risk_item*|	Yes| 	|	|
|data.*risk_item*.*url*|	Yes|	Json|	{ <br /> "risk_level": 3, <br /> "risk_detail": <br /> " [{\"name\":\"threat_researcher\",\"value\":\"The website is referenced in reports by Threat researchers.\"}]" <br /> } |
|data.*risk_item*.*address*|	Yes|	Json| { <br /> "0x67f51179b59d32563a1ad370b717a82cfb081ced": {  <br /> "risk_level": 2, <br /> "risk_detail": <br /> "[{\"name\":\"is_in_blist\",\"value\":\"There are potential risks related to this address based on the threat intelligence.\"}]" <br />  }, <br /> "0x67f51179b59d32563a1ad370b717a82cfb081ced": {  <br /> "risk_level": 2, <br /> "risk_detail": <br /> "[{\"name\":\"modify-fee\",\"value\":\"The contract transaction fee is modifiable, if it is increased dramatically, users may encounter honeypot/rugpull risks.\"}]" <br />  } <br /> } |

## Risk Detail
The risk_detail will comprise of an array of objects, the object contain the following fields
name : name of the check.
value: check result

|Name|	Value|
| ----------- | 	----------- |
|url-high-risk-transaction|	Transaction triggered on a malicious website.|
|transfer-recipient-high-risk|	Recipient is a high risk address.|
|contract-high-risk|	Interacting with a high risk contract.|
|approve-huge-amount|	Approving a huge amount of assets.|
|approve-to-eoa|	Approving to an EOA address.|
|approve-to-high-risk|	Approving to a high risk address.|
|transfer-to-high-risk|	Transfer to a high risk address.|
|fake-receiver|	This recipient is potentially a spoofing related address. Please check again if this is your intended receiver address.|
|function-suspicious|	Highly suspicious function|
|mismatched-chain-id|	This is a meaningless transaction with a mismatched chain id.|
