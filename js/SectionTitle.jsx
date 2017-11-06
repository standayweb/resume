// @flow
import React from 'react';

type Props = {
  children: any,
};

const SectionTitle = (props: Props) => (
  <h2
    css={{
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: '20px',
      margin: '0 0 24px 0',
    }}
    {...props}
  >
    {props.children}
  </h2>
);

export default SectionTitle;
