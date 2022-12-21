### HashDit Smart Contract Security API 

1. Introduction

Hashdit’s core mission is to provide the essential threat intelligence for the everyday Defi investors to make informed decisions.  Defi investing can be highly profitable and full of pitfalls at the same time.  Navigating this landscape is difficult for an experienced investor, let alone a newbie.  At Hashdit we want to bridge this divide by providing timely and comprehensive threat intel about Defi projects.  We use a variety of automated and manual techniques to evaluate a Defi project.  We give you our findings without bias, letting you make a decision based on facts.

2. API Access

Please apply for access to our API through support@hashdit.io.  In your application, please state your usage scenario and estimated number of calls per day.

3. API Inputs

Name | Required | Description | Type | Example 
--- | --- | --- | --- |--- 
businessName | Yes | Business required identifier | string | smart_contract_detection_realtime
token | Yes | Business API token | string | 07CD8AAA40ECAD3AF812FF046BA0B91E (On-line environment needed to be applied individually)  
params | Yes | Parameters | json | See the Parameters table below 

4. Parameters

Name | Required | Description | Type | Example 
--- | --- | --- | --- |--- 
chain_id | Yes | Chain ID | string | 56 (BSC mainnet)
address | Yes | Address needed to be scanned | string | 0x312bc7eaaf93f1c60dc5afc115fccde161055fb0
token_name | No | Name of the token to be scanned (if the address is a token contract) | string | OptimizedTransparentUpgradeableProxy
token_symbol | Yes | Token symbol of the address to be scanned (if the address is a token contract) | string | CAKE

5. Outputs

Name | Nullable | Description | Type | Example 
--- | --- | --- | --- |--- 
status | No | Result of operation | string | OK：The scanning process terminated as expected ERROR：Exception thrown or unexpected situation met
code | No | Result code of operation | int | 000000000: Normal exit 000002: Missing required input 0030001: Incorrect token 0029002: Unexpected error / Server error
data | No | Query result | json | See the Data table below

6. Data

Name | Nullable | Description | Type | Example 
--- | --- | --- | --- |--- 
risk_result | No | Risk result type | string | NO_RISK: Trusted, no risk. RISK: Has risk. UNKNOWN: Cannot determine risk level / Unknown
risk_level | Not null when risk_result is RISK | Likelihood and impact of the risk | int | 1: Low 2: Medium 3: High
scanned_ts | Yes | Last scanned timestamp | long | 1346548588
<!--
**hashdit/hashdit** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
