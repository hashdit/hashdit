---
sidebar_position: 4
---

# 🌎 URL Screening
The **URL Screening** insight scans the website origin of the transaction and compares it against HashDit's database of whitelisted and blacklisted URLs. Our database includes sites flagged as scams, deemed high-risk, and whitelisted. The insight will provide users with a risk level, ranging from -1 to 4.

<div style={{    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"20px",
    paddingBottom:"30px",
}}>

| Risk Level | Risk Explanation                    |
|------------|--------------------------------------|
| -1         | Unknown Risk                         |
| 0          | No Risk                              |
| 1          | Low Risk                             |
| 2          | Medium Risk - Suspicious Website     |
| 3          | Medium Risk - Dangerous Website      |
| 4          | High Risk - Dangerous Website        |

</div>

<div style={{    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}>
    <img
    src={require('./images/4.avif').default}
    alt="Transaction Screening"
    width="513" height="560"
    style={{
      borderRadius: "7px",
      border: "1px solid grey",
    }}
    />
</div>

<div      
style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:"20px",
}}>
    Example of a "0 Risk Level" URL Screening insight
</div>
