---
sidebar_position: 4
---

# Outputs

Name | Nullable | Description | Type | Example 
--- | --- | --- | --- |--- 
status | No | Result of operation | string | OK：The scanning process terminated as expected ERROR：Exception thrown or unexpected situation met
code | No | Result code of operation | int | 000000000: Normal exit 000002: Missing required input 0030001: Incorrect token 0029002: Unexpected error / Server error
data | No | Query result | json | See the Data table below