---
sidebar_position: 2
---

# 🔧 Change Log
All notable changes to HashDit Snap will be documented here.
***
## [0.2.1] - June 24, 2024

### Added
- **Address Poisoning Detection:** Implemented address poisoning screening to check for similarities between all of the user's addresses and the addresses they are interacting with. If any similarity is detected, a warning will be displayed to the user during transaction insights.

- **Installation Instructions:** Included installation instructions during the installation process for user guidance.

- **Introduction of JazzIcons for Addresses:** To mitigate potential risks of address poisoning attacks, we have integrated JazzIcons. This graphical implementation enables users to visually distinguish between different addresses, thus further enhancing security.

- **Home Page:** Added a home page to HashDit Snap, providing important links.

### Changed
- **Transaction Insight UI Refinements:** Revamped the transaction insight UI to present a cleaner and more user-friendly interface utilizing the new row component.

- **Function Insights UI Update:** The function insights UI has been upgraded for more enhanced user interaction utilizing the new row component.

- **HashDit API Signature Request:** Transferred the HashDit API signature request from `onRPC()` to `onInstall()`, allowing the Snap to be properly installed from any location, including the Snap store.

### Fixed
- **Transfer Details:** Fixed incorrect relational operator used when determining if 'Transfer Details' should be displayed.

### Removed
- **Removal of Destination Address Insight:** The Destination Address insight has been deemed redundant and has therefore been eliminated from our UI. Destination addresses can still be viewed through MetaMask's UI. This decision aims to reduce clutter and provide a more targeted insight feature for the users.

