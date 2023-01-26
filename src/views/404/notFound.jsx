import React from 'react';
import style from './notFound.module.css';

const notFound = () => {
  return (
    <>
      <div className={style.error}>
        <div className={style.containerfloud}>
          <div className={`col-xs-12 ${style.groundcolor} text-center`}>
            <div className={style.containererror404}>
              <div className={style.clip}>
                <div className={style.shadow}>
                  <span className={`${style.digit} ${style.thirdDigit}`}></span>
                </div>
              </div>
              <div className={style.clip}>
                <div className={style.shadow}>
                  <span className={`${style.digit} ${style.secondDigit}`}></span>
                </div>
              </div>
              <div className={style.clip}>
                <div className={style.shadow}>
                  <span className={`${style.digit} ${style.firstDigit} `}></span>
                </div>
              </div>
              <div className={style.msg}>
                OH!<span className={style.triangle}></span>
              </div>
            </div>
            <h2 className={style.h1}>Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default notFound;
