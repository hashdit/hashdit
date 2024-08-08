---
sidebar_position: 4
---

# Wallet Integration Guide

This guide will walk you through the potential solutions to integrate HashDit capabilities into your wallet application.

1. **Address Analysis**: Wallet can use our address analysis api to analyze transaction addresses for potential risks,  each address within the transaction is assigned a risk level, and alerts users proactively via warning messages. It will help users to make informed decisions about your transactions.

<div align="center" >
<img
  src={require('./images/wallet_integration/1.png').default}
  alt="Example banner"
  width="300" height="580"
/>
<img
  src={require('./images/wallet_integration/2.png').default}
  alt="Example banner"
  width="300" height="580"
/>
</div>

<p align="center">
<i> Here is an example from Trust Wallet of how wallet can take the risk level and implement it </i> 
</p>

<div align="center" >
<img
  src={require('./images/wallet_integration/3.png').default}
  alt="Example banner"
  width="300" height="580"
/>
<img
  src={require('./images/wallet_integration/4.png').default}
  alt="Example banner"
  width="295" height="575"
/>
</div>

<p align="center">
<i> Here is an example from PancakeSwap of how wallet can take the risk level and implement it </i> 
</p>

<div align="center" >
<img
  src={require('./images/wallet_integration/5.png').default}
  alt="Example banner"
  width="400" height="480"
/>
</div>

<p align="center">
<i> Here is an example from HashDit Extension of how wallet can take the risk level and implement it </i> 
</p>

2. **dApp URL Analysis**: Wallet can use our dApp URL analysis api to analyze the dApp url that users are connecting their wallet. So before users trigger any transactions or signatures, they get a validation from HashDit if the dApp url is flagged as malicious or not. 

<div align="center" >
<img
  src={require('./images/wallet_integration/6.png').default}
  alt="Example banner"
  width="300" height="600"
/></div>

<p align="center">
<i> Here is an example from Trust Wallet of how wallet can take the risk level and implement it </i> 
</p>

<div align="center" >
<img
  src={require('./images/wallet_integration/7.png').default}
  alt="Example banner"
  width="450" height="280"
/>
</div>

<p align="center">
<i> Here is an example from HashDit Extension of how wallet can take the risk level and implement it </i> 
</p>

3. **Transaction Analysis + Signature Analysis**: Of course, checking the domain and address is not enough and we encourage wallet to integrate our transaction+signature analysis api to run security scanner in layers for web3 dApp context. It combines the URL, transaction, and address information to deliver well-rounded detection, which will protect user from malicious approveals, fake mints and risky signatures.

<div align="center" >
<img
  src={require('./images/wallet_integration/8.png').default}
  alt="Example banner"
  width="300" height="580"
/>
<img
  src={require('./images/wallet_integration/9.png').default}
  alt="Example banner"
  width="320" height="575"
/>
</div>

<p align="center">
<i> Here is an example from HashDit Extension of how wallet can take the risk level and implement it </i> 
</p>