# Dapplet

This adapter for Google Search is created with **create-dapplet-app**


## Getting Started

1.  Go to module folder and `npm i` for loading dependences.  
2.  `npm start` to run module in localhost.


### Option "adapter"


If you have selected the additional option **adapter**, open an additional terminal. 

1.   Go to adapter folder and `npm i` for loading dependences.
2.   `npm start` to run adapter in localhost.

Open the file './dapplet/src/intex.ts. Uncomment the lines.

   ```js
    ...
    @Injectable
    export default class GoogleFeature {

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    @Inject('example-google-adapter.dapplet-base.eth') public adapter: any;
    }
    ...
```

 To use google adapter comment out or remove default adapter usage.

```js
    ...
   @Injectable
    export default class TwitterFeature {

    ...

    }
    ...
```


### Option "overlay"

If you have selected the additional option **overlay**, open the file './dapplet/src/intex.ts. Uncomment the lines.

  ```js
...
// ! overlay
...
//  ! overlay
...
 ```

 ### Option "server"

If you have selected the additional option **server**, open the file './dapplet/src/intex.ts. Uncomment the lines.

  ```js
...
// ! server
...
//  ! server
...
 ```

## Authors

* **Dapplets Project** - [dapplets site](https://dapplets.org/)
* **Documentation** - [documentation](https://docs.dapplets.org/docs/)
* **GitHub Project Dapplets** - [github](https://github.com/dapplets)