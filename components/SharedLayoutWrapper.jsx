import { Auth0Provider } from '@auth0/nextjs-auth0';
import React from 'react';

const SharedLayoutWrapper = ({ children }) => {
  return (
    <div className="border border-[#00F0FF] rounded-xl w-full mx-auto h-auto min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)]">
      <Auth0Provider>
        <div className="p-4 md:p-12 rounded-xl bg-dark-background/90 h-full">{children}</div>
      </Auth0Provider>
    </div>
  );
};

export default SharedLayoutWrapper;
