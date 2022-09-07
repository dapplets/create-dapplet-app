import React, {} from 'react';
import {} from '@dapplets/dapplet-extension';
import Bridge, { IDappStateProps } from '@dapplets/dapplet-overlay-bridge';


interface IStorage {
  userAccount: string;
}

interface IBridge {
  login: () => Promise<void>;
  logout: () => Promise<void>;
 
}



const App = (props: IDappStateProps<IStorage>) => {
  const { sharedState } = props;
  const bridge = new Bridge<IBridge>();

const handleLogIn = async (e: any) => {
    e.preventDefault();
    const res = await bridge.login();

  };

  const handleLogOut = async (e: any) => {
    e.preventDefault();
    const res = await bridge.logout();

  };
 
  


  return (
    sharedState && (
      <div className='wrapper' >
        <div className="title">
          <h1>example-dapplet-template</h1>
          <h2>example-dapplet-template</h2>
        </div>
         {sharedState.global?.userAccount==="" ? (
          <button
            className="login"
            onClick={handleLogIn}
        
          >
            Log in to my account
          </button>
        ) : (
          <>
            <h3>Account name:</h3>
            <p >{sharedState.global?.userAccount}</p>
            <button
              className="logout"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </>
        )}
      </div>
    )
  );
};

export default App;
