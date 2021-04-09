// @flow
import React from 'react';

type Props = {};

const List = (props: Props) => (
  <ul
    css={{
      padding: '0 0 0 20px',
      fontSize: '14px',
      margin: '0 12px 48px 0',
    }}
    {...props}
  />
);

export default List;
