/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import logoML from 'assets/images/Logo_ML.png';
import SearchBox from 'components/SearchBox/SearchBox';
import './index.scss';

const WithHeader =
  (Component: any) =>
  (props: never): React.ReactElement =>
    (
      <>
        <div className="header">
          <div className="container header__navBar">
            <img className="header__logo" src={logoML} alt="pagina principal" tabIndex={0} />
            <div className="header__searchBox">
              <SearchBox />
            </div>
          </div>
        </div>
        <Component {...props} />
      </>
    );

export default WithHeader;
