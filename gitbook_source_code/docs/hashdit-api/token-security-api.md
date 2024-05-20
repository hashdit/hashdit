---
sidebar_position: 6
---

# Token Security API

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
|address|	Yes|	String|	Address that needs to be analyzed|	0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c|

## Response
|Name|	Nullable|	Type|	Example|
| ----------- | 	----------- |	----------- |	----------- |
|status|	No|	String|	OK/ERROR|
|code|	No|	String|	00001:verify signature error <br /> > appid, timestamp, nonce, signature headers can not be null or empty <br /> > nonce is illegal <br /> > timestamp has illegal <br /> > timestamp is expired <br /> > invalid appid <br /> > appid has expired <br /> > invalid signature <br /> > replay request <br /> > app is out of count limit <br /> 00002:unknown server error occurred during verifying signature <br /> 00003:unknown server error occurred during detection| 
| data|	Yes| 	|	|
|data.*request_id*|	No|	String|	Unique request id|
|data.*has_result*|	No|	Boolean|	Whether there is already a definite result, if False, it needs to be requested in [polling_interval] million seconds|
|data.*polling_interval*|	Yes|	Long|	Recommended waiting time(million seconds) to the next repeat request. seconds|
|data.*result*|	Yes|	JSONObject| { <br /> “anti_whale”: { <br />  “is_anti_whale”: “1”, <br /> “anti_whale_modifiable”: “1”, <br /> }, <br /> “balance_external_call”: “0”, <br /> ... ... <br /> }|


## Result
The result will comprise of a **dict** of object, the object contain the following fields
**Name**: Name of the check.
**Type**: The representation of the check’s details. Can be one of the followings: **dict**, **string**, **list**.

|Name|	Type| Description|
| ----------- | 	----------- | 	----------- |
|anti_whale|	dict|	If the contract has an anti-whale mechanism, the amount of tokens that can be transferred in a single transaction will be limited|
|balance-external-call|	string|	"balanceOf(address)" function depends on external calls, potentially vulnerable to flashloan attacks|
|blacklist|	string|	Has blacklist mechanism that can block users from transferring|
|dev-address|	string|	Contract's deployer address|
|dev-token-balance|	string|	Deployer's token balance for the target token|
|dev-token-percent|	string|	Deployer's token balance percent for the target token|
|dex-info|	list|	Information on decentralized exchange listings|
|hidden-owner|	string|	When a hidden owner exists, it is risky since the contract’s ownership has not been abandoned|
|holders|	list| token holders information|
|holders-count|	string| token holders count|
|lp-holders|	list|	Dex LP token holders information|
|lp-holders-count|	string|	Dex LP token holders count|
|lp-total-supply|	string|	LP token's total supply|
|obfuscation|	string|	Contract contains obfuscated code or name|
|owner-address|	string|	Contract's owner address|
|owner-token-balance|	string|	Owner's token balance for the target token|
|owner-token-percent|	string|	Owner's token balance percent for the target token|
|owner-type|	string|	Contract's owner type|
|proxy|	dict|	Contract is an upgradable proxy|
|self-destruct|	string|	Contract can be self-destructed|
|token-decimals|	string|	Token decimals information|
|token-name|	string|	Token name|
|token-symbol|	string|	Token symbol|
|token-supply|	string|	Token total supply|
|verified|	string|	Contract's verification status on blockchain explorer|
|whitelist|	string|	Has whitelist mechanism that only allows certain users to do transfer|
