---
sidebar_position: 1
---

# 🛠️ Installing / Uninstalling / Reinstalling

## Installing MetaMask
As a pre-requisite, MetaMask must be installed on your browser before installing HashDit Snaps. 
- [MetaMask Installation Link](https://metamask.io/download/)

:::info Browser Support Only

MetaMask Snaps is only supported on the browser version, and not the mobile version.

:::

***

## Installing HashDit Snap
On the [HashDit Snap website](https://www.hashdit.io/en/snap), start the installation process by clicking the **Add to MetaMask** button.

<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
      }}>
    <img
    src={require('./images/7.png').default}
    alt="Add To MetaMask"
    width="340" height="100"
    style={{
      borderRadius: "7px",
      border: "1px solid grey",
    }}
    />
</div>

### Permissions
Continue through the install and accept the requested permissions. The requested permissions are required to allow HashDit Snap to work properly.
- **Access the internet:** Allow HashDit Snap to access the internet. This is used to both send and receive data with the HashDit API.
- **Access the Ethereum provider:** Allow HashDit Snap to communicate with MetaMask directly, in order for it to read data from the blockchain and suggest messages and transactions.
- **Fetch and display transaction insights:** Allow HashDit Snap to decode transactions and show insights within the MetaMask UI. This is used for all the security features.
- **See the origins of websites that suggest transactions:** Allow HashDit Snap to see the origin (URL) of websites that suggest transactions. This is used by the URL screening feature.
- **Store and manage its data on your device:** Allow HashDit Snap to store, update, and retrieve data securely with encryption. Other Snaps cannot access this information. The only data stored is the signed hash of the security message (see below). 
- **Use lifestyle hooks:** Allow HashDit Snap to run code during the installation process, specifically to initiate the [signature request](#signature-request).
- **Display dialog windows in MetaMask:** Allow HashDit Snap to create alerts and confirmations.
- **Display a custom screen:** Allow HashDit Snap to show custom screens such as the Home Page.


:::danger Private Keys

HashDit Snap **does not** have access to the user's private keys. Furthermore, the only transaction initiated by the Snap is a signature request dispatched during the installation process.

:::

### Installation Guide Page

<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
      }}>
    <img
    src={require('./images/8.png').default}
    alt="Installation Guide"
    width="375" height="500"
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
      }}>
   Click 'OK' through the installation guide page
</div>

### Connecting Addresses
Connect the addresses you want to use HashDit Snap with. HashDit Snap must be connected to an address in order to receive insights. 

:::tip
Please **connect all your addresses** to the HashDit Snap during installation. This step is crucial because HashDit Snap can only perform address poisoning on the addresses you connect at this time. By connecting all your addresses, you can enjoy the safest experience possible.
:::
<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
      }}>
    <img
    src={require('./images/9.png').default}
    alt="Addresses"
    width="375" height="500"
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
      }}>
    Select the addresses and click 'Next'
</div>
<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
      }}>
    <img
    src={require('./images/10.png').default}
    alt="Confirm Addresses"
    width="375" height="500"
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
      }}>
    Confirm the selection by clicking 'Confirm'
</div>

### Signature Request
Lastly, the user will be prompted to sign a security message. Note that this is only used to authenticate the HashDit API. Rejecting the signature request will prevent HashDit's features from working. 

:::tip
If the signature request is rejected, it can be re-prompted by just reinstalling the Snap.
:::

<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:"20px",
      }}>
    <img
    src={require('./images/11.png').default}
    alt="Sig request"
    width="375" height="500"
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
    Signature request screen
</div>

If you attempt to use HashDit Snap without signing the security message, an error screen will be displayed. Reinstalling the snap will resolve this issue

<div      
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <img
    src={require('./images/12.avif').default}
    alt="Error Page"
    width="375" height="500"
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
      }}>
    Error screen
</div>

***
## Uninstalling HashDit Snap
Follow this guide on uninstalling Snaps from your MetaMask wallet: [Uninstalling A Snap](https://support.metamask.io/metamask-snaps/how-to-uninstall-a-snap)

This will remove HashDit Snap from your MetaMask wallet.

*** 
### Reinstalling HashDit Snap
To reinstall the Snap, the user must delete HashDit Snap manually and install HashDit Snap again.

Follow the [uninstall guide](#uninstalling-hashdit-snap) and then the [install guide](#installing-hashdit-snap).
