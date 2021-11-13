import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routesArray } from '../../utils';

const AppHeader = () => {
  const Router = useRouter();

  return (
    <div className="elastic-studios-header-bg">
      <div className="container">
        <div className="elastic-studios-header-flex" id="app-top">
          <div className="img-con">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="links">
            {routesArray.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={Router.route === item.path ? 'active' : 'not-active'}
                  href={item.path}
                >
                  {item.route}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
