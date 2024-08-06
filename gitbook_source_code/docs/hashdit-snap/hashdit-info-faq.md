---
sidebar_position: 1
---

# ❓ FAQ & Knowledge Base

Frequently Asked Questions & Knowledge Base
***

### What is HashDit Snap?
HashDit Snap is a MetaMask extension that enhances security during smart contract interactions. Before you approve a transaction, HashDit Snap will protect you with the following security features:
* [Address Poisoning Detection](./hashdit-feature-address-poisoning.md)
* [Transaction Screening](./hashdit-feature-transaction-screening.md#transaction-screening)
* [Destination Screening](./hashdit-feature-transaction-screening.md#destination-screening)
* [URL Screening](./hashdit-feature-url-screening.md)
* [Function Call Information](./hashdit-feature-function-call-info.md)

***
### Has HashDit Snap been audited? Is it open-source?
Our Snap has been approved by the MetaMask team and has also been audited by the SlowMist team.

* [SlowMist Audit](https://github.com/slowmist/Knowledge-Base/blob/master/open-report-V2/blockchain-application/SlowMist%20Audit%20Report%20-%20HashDit-Snaps_en-us.pdf)

HashDit Snap is open-source.

* [GitHub](https://github.com/hashdit/metamask-Snap)

***
### What is the official website?

* [hashdit.io](https://www.hashdit.io/en/Snap)

***
### What permissions does HashDit Snap have?
The list of permissions used by the Snap can be found under the Permissions section here:

* [Permissions](./hashdit-usage-install-uninstall.md#permissions)
***
### How do I install HashDit Snap?
The installation process of adding HashDit Snap to a MetaMask wallet can be found here:

* [🛠️ Installing / Uninstalling / Reinstalling](./hashdit-usage-install-uninstall.md)

***
### How do I use HashDit Snap?
The How To Use section can be found here:

* [💪 How To Use HashDit Snap](./hashdit-usage-how-to-use)

***
### Does HashDit Snap have access to my private keys? 
No, HashDit Snap doesn't have access to your private keys. The only transaction initiated by the Snap is a signature request sent out during installation.

***
### What chains are supported?
The full feature list of HashDit Snap is currently supported on the **Binance Smart Chain Mainnet** and **Ethereum Mainnet**. Other networks will only support Address Poisoning Detection, URL screening, and Function Call Information.

<div style={{    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"20px",
    paddingBottom:"30px",
}}>

| Feature                       | BSC       | ETH       | Other Networks |
|-------------------------------|-----------|-----------|----------------|
| Address Poisoning Detection   | Supported | Supported | Supported      |
| Transaction Screening         | Supported | Supported | Not Supported  |
| Destination Screening         | Supported | Supported | Not Supported  |
| URL Screening                 | Supported | Supported | Supported      |
| Function Call Info            | Supported | Supported | Supported      |

</div>



***
### What does HashDit Snap do?
HashDit Snap aims to protect users by screening transactions before they are executed through Address Poisoning Detection, Transaction, Destination, and URL screening. This include warnings against: 

* Address Poisoning Attacks
* Ponzi Schemes
* Risky Smart Contract Interactions
* Phishing Websites and Addresses
* Scam Websites and Addresses

HashDit Snap also provides clear details about the function and arguments invoked during a smart contract interaction through Function Call insights.

***
### What does HashDit Snap not do?
Currently, HashDit Snap does not support screening during approval calls and signature requests due to the lack of support for these features in MetaMask Snap. However, once MetaMask Snap incorporates these capabilities, we have plans to introduce approval screening against blacklisted addresses and screening for signature requests. Stay tuned for future updates as we enhance the security features of HashDit Snap.

***
### Can false positives happen?
While we aim for accurate risk assessments, false positives can occur. Exercise caution by verifying official URLs on platforms like CoinMarketCap, and confirming legitimacy through social channels. Be cautious of scams; seek multiple confirmations for added security. Your discretion is advised.

***
### Is HashDit Snap mobile compatible?
As of now, Snaps are not compatible with the MetaMask mobile wallet. However, mobile compatibility is on the MetMask roadmap. Once available, we plan on supporting HashDit Snaps on the mobile wallet.

***
### I did not sign the security message request, what do I do?
Simply [uinstall](./hashdit-usage-install-uninstall.md#uninstalling-hashdit-Snap) and [install](./hashdit-usage-install-uninstall.md#installing-hashdit-Snap) the Snap and you will be prompted to sign the security message again.