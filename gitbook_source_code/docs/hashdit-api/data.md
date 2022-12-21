---
sidebar_position: 5
---

# Data

Name | Nullable | Description | Type | Example 
--- | --- | --- | --- |--- 
risk_result | No | Risk result type | string | NO_RISK: Trusted, no risk. RISK: Has risk. UNKNOWN: Cannot determine risk level / Unknown
risk_level | Not null when risk_result is RISK | Likelihood and impact of the risk | int | 1: Low 2: Medium 3: High
scanned_ts | Yes | Last scanned timestamp | long | 1346548588