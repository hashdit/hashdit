---
sidebar_position: 3
---

# dApp URL Anlaysis API

## Endpoint
```
https://api.hashdit.io/security-api/public/chain/v1/detect/url
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
|url|	Yes|	String|	Url or Domain|	http://pancakak.com/ <br /> Pancakak.com <br /> PANCAKAK.COM <br /> http://a.b.pancakak.com/abc|

## Response
|Name|	Nullable|	Type|	Example|
| ----------- | 	----------- |	----------- |	----------- |
|status|	No|	String|	OK/ERROR|
|code|	No|	String|	00001:verify signature error <br /> > appid, timestamp, nonce, signature headers can not be null or empty <br /> > nonce is illegal <br /> > timestamp has illegal <br /> > timestamp is expired <br /> > invalid appid <br /> > appid has expired <br /> > invalid signature <br /> > replay request <br /> > app is out of count limit <br /> 00002:unknown server error occurred during verifying signature <br /> 00003:unknown server error occurred during detection| 
| data|	Yes| String	|	|
|data.*request_id*|	No|	String|	Unique request id|
|data.*has_result*|	No|	Boolean|	Whether there is already a definite result, if False it needs to be requested in [polling_interval] million seconds|
|data.*polling_interval*|	Yes|	Long|	Recommended waiting time(million seconds) to the next repeat request. seconds|
|data.*risk_level*|	Yes|	Integer| -1: Invalid <br /> 0: Very Low Risk <br /> 1: Some Risk <br /> 2: Low Risk <br /> 3: Medium Risk <br /> 4: High Risk <br /> 5: Significant Risk|
|data.*risk_detail*|	Yes|	String|	See Risk Detail <br /> [{ <br /> "name": "scam_report", <br /> "value": "The website has been reported to convince victims to send assets for items that look legitimate." <br /> }, <br /> { <br /> "name": "threat_researcher", <br /> "value": "The website is referenced in reports by threat researchers." <br /> }]  |

## Risk Detail
The risk_detail will comprise of an array of objects, the object contain the following fields
name : name of the check.
value: check result

|Name|	Value|
| ----------- | 	----------- |
|scam_report|	The website has been reported to convince victims to send assets for items that look legitimate.|
|risk_report|	The website has been reported as risky.|
|phishing_report|	The website has been reported to be phishing lures.|
|threat_researcher|	The website is referenced in reports by threat researchers.|
|spam_researcher|	The website is linked with Adware, Spam, and/or other unwanted content.|
|similarity_detection|	The website name or content matches a potential typosquatting target domain with an existing similarity pattern.|
|malware_detection|	The website was distributed or was connected to malware.|
|phishing_detection|	The website is convicted as malicious by technical analysis.|
|creation_time_verification|	The website creation time is very recent (X days).|
|owner_verification|	The owner of the website name is hidden. <br /> The owner of the website name is risky.|
|expiration_time_verification|	"Short life expectancy website(X days left). <br /> The website is expired.|
