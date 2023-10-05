import React from 'react';
import {ContextProver} from '../ContextsApi/ContextProver';
import {Navigation} from './Navigation';

export const Routes: React.FC = () => {
  return (
    <ContextProver>
      <Navigation />
    </ContextProver>
  );
};
