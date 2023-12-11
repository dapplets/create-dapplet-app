![create-dapplet-app](https://github.com/dapplets/create-dapplet-app/blob/009c4a174c2eb75bd808baa6e3d92de70b9afde0/docs/dapp-app.png#gh-dark-mode-only)
![create-dapplet-app](https://github.com/dapplets/create-dapplet-app/blob/009c4a174c2eb75bd808baa6e3d92de70b9afde0/docs/dapp-app-light.png#gh-light-mode-only)

# Create Dapplet App

## Getting Started

```bash

npx create-dapplet-app

```

### Building

1.  **type** - select project type
2.  **author** - enter name of the company
3.  **license** - enter type of the license

### Dapplet's parameters

1. **name** - the name of the module. The name is the ID of your module so it must be unique.
2. **title** - a module's name. It's displayed in the extension's dapplets list, in the Dapplets Store, on the NFT, etc.
3. **adapter** - create a site-specific adapter for the dapplet
   3.1. **adapter's name** - the name of the site-specific adapter for the dapplet.
4. **server** - create a server for the dapplet
5. **overlay** - create an overlay for the dapplet
6. **ContextID** - a list of resources where the module is loaded and activated. You should list site domains or a name of the module (adapter, interface), where domains are already listed.

### Adapter's parameters

1. **name** - the name of the module. The name is the ID of your module so it must be unique.
2. **title** - a module's name. It's displayed in the extension's dapplets list, in the Dapplets Store, on the NFT, etc.
3. **ContextID** - a list of resources where the module is loaded and activated. You should list site domains or a name of the module (adapter, interface), where domains are already listed.

### Interface's parameters

1. **name** - the name of the module. The name is the ID of your module so it must be unique.
2. **title** - a module's name. It's displayed in the extension's dapplets list, in the Dapplets Store, on the NFT, etc.

## Authors

- **Dapplets Project** - [dapplets site](https://dapplets.org/)
- **Documentation** - [documentation](https://docs.dapplets.org/docs/)
- **GitHub Project Dapplets** - [github](https://github.com/dapplets)
