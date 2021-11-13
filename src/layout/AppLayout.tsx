import React, { Fragment } from 'react';
import { AppFooter, AppHeader } from '../components';

interface IProps {
  children: any;
}

const AppLayout = (props: IProps) => {
  const { children } = props;
  return (
    <Fragment>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </Fragment>
  );
};

export default AppLayout;
