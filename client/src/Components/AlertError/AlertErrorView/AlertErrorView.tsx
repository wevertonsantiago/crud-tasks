import React from 'react';
import {AlertErrorViewModel} from '../AlertErrorViewModel/AlertErrorViewModel';

export const AlertErrorView: React.FC = () => {
  const alertError = () => AlertErrorViewModel();
  return <>{alertError}</>;
};
