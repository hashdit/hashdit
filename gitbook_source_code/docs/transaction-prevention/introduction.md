import DocCardList from '@theme/DocCardList';

# Introduction

The significance of security in the Web3 world cannot be overemphasized. Despite the effectiveness of code-centric methods like static code audits and smart contract scanning tools in combating threats, these alone aren't enough to fully secure users' assets. Vulnerabilities can stem from non-code related factors such as market forces, uncontrollable project dependencies, and compromised Web2 components. It's impossible to rest easy after a security audit. For a well-rounded threat defense, a proactive and comprehensive security solution that prioritizes real-time threat detection, prevention, and swift responses to malicious activities is paramount.

HashDit has introduced a Transaction Prevention Solution which is a proactive defense strategy for threat detection and handling. It enables project teams to promptly address attacks, control fund disposal, secure user assets, and establish a robust multi-layer protection system.It currently includes four strategies that can be used in combination, aiming to provide a comprehensive risk recognition and risk disposal transaction prevention system. The expected outcomes of this solution exist on two levels:

1.	Monitoring Level: HashDit's transaction interception solution provides real-time threat detection. For projects without dedicated security resources or threat detection tools, this is an economical and seamless integration option. It allows automatic threat detection through the application of multiple integrated strategies with simple parameter configuration.
2.	Processing level: Transaction prevention solutions provide a timely, effective threat response. It adds an additional layer of processing to block malicious transactions or to dispose of user operations and the funds involved according to a pre-defined scheme when the risk of an attack is detected. This gives the project team a proactive risk management capability.

Overall, HashDit's Transaction Prevention Solution expedites comprehensive threat detection and handling. Further strategies within this system will be discussed in subsequent sections.

## High-level System Architecture

The basic concept behind our Transaction Prevention Solution is to augment the project party's contract code with additional disposition logic. At the same time, the system is able to closely monitor the transaction events of the project party, detect any potentially harmful transactions through preset policies, and activate the disposal transaction to automatically block the attack. As part of the resolution process, vulnerable assets are transferred to the disposal smart contract according to the project team's preset policies, at which point the right to manage these funds is given to the project party.

The following diagram illustrates the architecture.

![](./images/1.png)

System architecture overview:

### SDK Integration

By integrating the modular disposition code into the smart contract of the project party, an additional disposition function is added to the functions involved in the transfer of funds. This lays the foundation for keeping a close eye on transactions.

### Attack Detection

The system integrates HashDit's security data accumulation, which adds an additional layer of data detection to transactions, and once the data in the transaction hits the HashDit blacklist, the transaction is marked as high risk and consequently subjected to the disposal process.

### Disposition of Funds

The project team determines the detection and disposal methods through a pre-selected strategy. The project team can set different thresholds for the trigger amount and enter different disposal processes by anchoring different strategies. Since the triggering logic for the disposition execution flow is implemented in the code beforehand, this step is real-time and automatic, with nothing missing.

## Core Strategies

Currently, HashDit offers four strategies: Oracle, Timelock, Guardian, and Meta Signature. Each possesses its own advantages and drawbacks, and is suitable for different scenarios. Depending on their specific business contexts, projects can utilize any combination of these strategies. The following sections provide a detailed description of each strategy.

<DocCardList />

## Contact us

If you are interested in exploring our HashDit transaction prevention solution, or if you have any questions, we cordially invite you to contact us at support@hashdit.io.