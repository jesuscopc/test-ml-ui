/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import logoML from 'assets/images/Logo_ML.png';
import SearchBox from 'components/SearchBox/SearchBox';
import './index.scss';

const WithHeader =
  (Component: any) =>
  (props: any): React.ReactElement =>
    (
      <>
        <div className="header">
          <div className="container header__navBar">
            <Link to="/" className="header__logo" tabIndex={0}>
              <img src={logoML} alt="pagina principal" />
            </Link>
            <div className="header__searchBox">
              <SearchBox />
            </div>
          </div>
        </div>
        <Component {...props} />
      </>
    );

export default WithHeader;
