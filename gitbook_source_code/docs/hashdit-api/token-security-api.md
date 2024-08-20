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
|chain_id|	Yes|	String|	The chain id of the blockchain|	56 - BSC <br /> 
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
|data.*result*|	Yes|	String| { <br /> "proxy": { <br />  "proxy_implementation_verified": “”, <br /> "is_proxy": “0” },  <br /> "verified":  “1”  <br />  }|
|data.*risk_category*|	Yes|	String| "[\"CONTRACT_SECURITY\"]"|
|data.*risk_code*|	Yes|	String| "[\"CONTRACT_UNVERIFIED\"]"|
|data.*trust_score*|	Yes|	Integer| 60|

## Result
The result will comprise of a **dict** of object, the object contain the following fields <br /> 
**Name**: Name of the check. <br /> 
**Type**: The representation of the check’s details. Can be one of the followings: **dict**, **string**, **list**.

|Name|	Type| Description|
| ----------- | 	----------- | 	----------- |
|anti_whale|	dict|	Contains information about the anti-whale mechanism in the contract.|
|anti_whale_modifiable|	string|	Indicates if the anti-whale mechanism is modifiable (0 or 1).|
|is_anti_whale|	string|	Indicates if the contract has an anti-whale mechanism (0 or 1).|
|bad_function_encode|	string|	Indicates if the contract contains badly encoded functions (0 or 1).|
|balance-external-call|	string|	Indicates if the "balanceOf(address)" function depends on external calls, potentially making it vulnerable to flashloan attacks (0 or 1).|
|code_obfuscation|	string|	Indicates if the contract contains obfuscated code or names (0 or 1).|
|dev_address|	string|	Contract's deployer address|
|dev_token_balance|	string|	Deployer's token balance for the target token|
|dev_token_percent|	string|	Deployer's token balance percent for the target token|
|dex_info|	list|	Information on decentralized exchange listings. Each item is a dictionary with keys: dex, factory_address, pair, pair_create_dt, target_token.|
|fake_token|	dict| Contains information about whether the token is fake or not.|
|is_fake|	string| Indicates if the token is fake (0 or 1).
|mimic_token_address|	string| Address of the token being mimicked (if any).
|mimic_token_name|	string| Name of the token being mimicked (if any).
|mimic_token_symbol|	string| Symbol of the token being mimicked (if any).|
|hidden_owner|	string|	Indicates if there is a hidden owner, which is risky since the contract’s ownership has not been abandoned (0 or 1).|
|holders|	list| ERC20 token holders information. Each item is a dictionary with keys: accountAddress, tokenBalance.|
|holders_count|	string| ERC20 token holders count.|
|is_in_dex|	string| Indicates if the token is listed on a decentralized exchange (0 or 1).|
|is_mintable|	string| Indicates if the contract allows minting of new tokens (0 or 1).|
|low_level_external_call|	string| Indicates if the contract makes low-level external calls, which can be risky (0 or 1).|
|lp_holders|	list|	Dex LP token holders information. Each item is a dictionary with keys: dex, pair, and holders. holders is a list of dictionaries with keys: accountAddress, tokenBalance.|
|lp_holders_count|	string|	List of dictionaries containing LP holders count information for each pair. Each item has keys: dex, holders_count, pair.|
|owner_address|	string|	Contract's owner address|
|owner_change_balance|	string|	Indicates the balance change of the owner.|
|owner_token_balance|	string|	Owner's token balance for the target token.|
|owner_token_percent|	string|	Owner's token balance percent for the target token.|
|owner_type|	string|	Contract's owner type (e.g., contract or EOA - Externally Owned Account).|
|proxy|	dict|	Contains information about the contract's proxy status.|
|is_proxy|	string|	Indicates if the contract is an upgradable proxy (0 or 1).|
|proxy_admin_address|	string|	The address of the proxy admin.|
|proxy_admin_type|	string|	The type of proxy admin.|
|proxy_implementation_address|	string|	The address of the proxy implementation.|
|proxy_implementation_verified|	string|	Indicates if the proxy implementation is verified (0 or 1).|
|self_destruct|	string|	Indicates if the contract can be self-destructed (0 or 1).|
|token_decimals|	string|	Token decimals information|
|token_name|	string|	Token name|
|token_symbol|	string|	Token symbol|
|token_supply|	string|	Token total supply|
|transfer_blacklist|	string|	Indicates if there is a blacklist mechanism that can block users from transferring (0 or 1).|
|transfer_cooldown|	string|	Indicates if there is a cooldown period for transfers (0 or 1).|
|transfer_pausable|	string|	Indicates if token transfers can be paused (0 or 1).|
|transfer_whitelist|	string|	Indicates if there is a whitelist mechanism that only allows certain users to do transfers (0 or 1).|
|unlimited_mintable|	string|	Indicates if the contract allows unlimited minting of tokens (0 or 1).|
|verified|	string|	Contract's verification status on blockchain explorer|


## Result example:
{ <br />
&nbsp; "status": "OK", <br /> 
&nbsp; "type": "GENERAL", <br /> 
&nbsp; "code": “000000000”, <br /> 
&nbsp; "errorData": “null”,  <br /> 
&nbsp; "data": { <br /> 
&nbsp; &nbsp; "result": { <br /> 
&nbsp; &nbsp; &nbsp; "anti_whale": { <br /> 
&nbsp; &nbsp; &nbsp; &nbsp; "is_anti_whale": "0", <br /> 
&nbsp; &nbsp; &nbsp; &nbsp; "anti_whale_modifiable": "0", <br /> 
&nbsp; &nbsp; &nbsp; }, <br /> 
&nbsp; &nbsp; &nbsp; "owner_token_percent": "0.0", <br /> 
&nbsp; &nbsp; &nbsp; "lp_holders": [], <br />
&nbsp; &nbsp; &nbsp; "lp_total_supply": [], <br />
&nbsp; &nbsp; &nbsp; "transfer_pausable": "0", <br /> 
&nbsp; &nbsp; &nbsp; "hidden_owner": "0", <br /> 
&nbsp; &nbsp; &nbsp; "dev_address": "0xf6912c877ce99715211c63e23515353749045e64", <br /> 
&nbsp; &nbsp; &nbsp; "transfer_blacklist": "0", <br /> 
&nbsp; &nbsp; &nbsp; "transfer_whitelist": "0", <br /> 
&nbsp; &nbsp; &nbsp; "holders": [  <br />
&nbsp; &nbsp; &nbsp; &nbsp; { <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "accountAddress": "0xA9bB6BB9F20D4FeeD6513dA2397e4474895eb524", <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tokenBalance": "32521447491708590405973390" <br />
&nbsp; &nbsp; &nbsp; &nbsp; }, <br />
&nbsp; &nbsp; &nbsp; &nbsp; { <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "accountAddress": "0xEfC4F11E8ca5B36bd62e2Cb936d6AFCCC2261140", <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tokenBalance": "12709776155950624567460705" <br />
&nbsp; &nbsp; &nbsp; &nbsp; } <br />
&nbsp; &nbsp; &nbsp; ], <br />
&nbsp; &nbsp; &nbsp; "fake_token": null, <br />
&nbsp; &nbsp; &nbsp; "dev_token_percent": "0.0", <br />
&nbsp; &nbsp; &nbsp; "token_name": "VLaunch", <br />
&nbsp; &nbsp; &nbsp; "low_level_external_call": "0", <br />
&nbsp; &nbsp; &nbsp; "bad_function_encode": "0", <br />
&nbsp; &nbsp; &nbsp; "unlimited_mintable": "0", <br />
&nbsp; &nbsp; &nbsp; "code-obfuscation": "0", <br />
&nbsp; &nbsp; &nbsp; "self_destruct": "0", <br />
&nbsp; &nbsp; &nbsp; "dev_token_balance": "0", <br />
&nbsp; &nbsp; &nbsp; "is_in_dex": "0", <br />
&nbsp; &nbsp; &nbsp; "balance_external_call": "0", <br />
&nbsp; &nbsp; &nbsp; "total_supply": "52460367000000000000000000", <br />
&nbsp; &nbsp; &nbsp; "verified": "1", <br />
&nbsp; &nbsp; &nbsp; "dex_info": [], <br />
&nbsp; &nbsp; &nbsp; "owner_address": &nbsp; &nbsp; &nbsp; "0xe4EEd73B6cc31111D3dc18D57c6D0126ceE22EB9", <br />
&nbsp; &nbsp; &nbsp; "proxy": { <br />
&nbsp; &nbsp; &nbsp; &nbsp; "proxy_implementation_verified": "", <br />
&nbsp; &nbsp; &nbsp; &nbsp; "proxy_admin_address": "", <br />
&nbsp; &nbsp; &nbsp; &nbsp; "is_proxy": "0", <br />
&nbsp; &nbsp; &nbsp; &nbsp; "proxy_admin_type": "", <br />
&nbsp; &nbsp; &nbsp; &nbsp; "proxy_implementation_address": "" <br />
&nbsp; &nbsp; &nbsp; }, <br />
&nbsp; &nbsp; &nbsp; "holders_count": "7518", <br />
&nbsp; &nbsp; &nbsp; "is_mintable": "1", <br />
&nbsp; &nbsp; &nbsp; "transfer_cooldown": "0", <br />
&nbsp; &nbsp; &nbsp; "owner_token_balance": "0", <br />
&nbsp; &nbsp; &nbsp; "token_decimals": "18", <br />
&nbsp; &nbsp; &nbsp; "token_symbol": "VPAD", <br />
&nbsp; &nbsp; &nbsp; "owner_type": "contract" <br />
&nbsp; &nbsp; }, <br />
    "risk_category": "[\"CONTRACT_SECURITY\"]", <br />
    "has_result": true, <br />
    "risk_code": "[\"MINTABLE\"]", <br />
    "request_id": "3980693728e145dbbf8fa7e42f9c672d", <br />
    "polling_interval": null, <br />
    "trust_score": 90 <br />
  }, <br />
  "subData": null, <br />
  "params": null <br />
}
