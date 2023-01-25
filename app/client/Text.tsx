import React from 'react';
import { PropsWithChildren } from 'react';

const Text = ({ children }: PropsWithChildren<{}>) => {
  return <div style={{ fontSize: '3rem' }}>{children}</div>;
};

export default Text;
