---
sidebar_position: 3
---

# Transaction And Destination Screening
Each transaction will generate either a Transaction Screening insight or a Destination Screening insight.
***
## Transaction Screening
The **Transaction Screening** insight offers a risk assessment before interacting with a smart contract. This assessment provides users with three values that shed light on potential risks associated with their transaction:

1. Overall Risk - The overall risk level of the transaction, which can be one of three levels

    * Low Risk

    * ⚠ Medium Risk 

    * ⛔ High Risk

2. Risk Overview - The recommended action

3. Risk Details - Details explaining the output of the overall risk

<div      
style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"20px",
    paddingBottom:"10px",
}}>
    <img
    src={require('./images/2.webp').default}
    alt="Transaction Screening"
    width="513" height="560"
    />
</div>
<div      
style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:"20px",
}}>
    Example of a "High Risk" Transaction Screening insight
</div>



***

## Destination Screening
The **Destination Screening** insight scans a transaction's destination address against HashDit's database of blacklisted and whitelisted addresses. This database encompasses known scamming, phishing, and trusted addresses. This assessment provides users with three values that shed light on potential risks of interaction:

1. Overall Risk - The overall risk level of the transaction can be one of three levels

    * Low Risk

    * ⚠ Medium Risk 

    * ⛔ High Risk

2. Risk Overview - The recommended action

3. Risk Details - Details explaining the output of the overall risk

<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
        paddingBottom:"10px",
      }}>
    <img
    src={require('./images/3.webp').default}
    alt="Destination Screening"
    width="513" height="560"
    />
</div>
<div      
style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:"20px",
}}>
    Example of a "High Risk" Destination Screening insight
</div>
