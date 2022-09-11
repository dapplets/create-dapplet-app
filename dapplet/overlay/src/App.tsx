import React, {} from 'react';
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

  const handleLogIn = (e: any) => {
    e.preventDefault();
    bridge.login();
  };

  const handleLogOut = (e: any) => {
    e.preventDefault();
    bridge.logout();
  };


  return (
    sharedState && (
      <div className='wrapper'>
        <div className="title">
          <h2>Overlay</h2>
          <h1>Overlay</h1>
        </div>
         {sharedState.global?.userAccount === "" ? (
          <button
            className="login"
            onClick={handleLogIn}
          >
            Log in
          </button>
        ) : (
          <>
            <section style={{ marginBottom: '2rem' }}>
              <h4>Account name:</h4>
              <p >{sharedState.global?.userAccount}</p>
            </section>
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
