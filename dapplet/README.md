# Dapplet

This project was bootstrapped with [Create React App](https://github.com/dapplets/create-dapplet-app)


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
    export default class Adapter {

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    @Inject('template-adapter') public adapter: any;
    }
    ...
```

 To use adapter comment out or remove default adapter usage.

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

## Learn more

* **Dapplets Project** - [dapplets site](https://dapplets.org/)
* **Documentation** - [documentation](https://docs.dapplets.org/docs/)
* **GitHub Project Dapplets** - [github](https://github.com/dapplets)