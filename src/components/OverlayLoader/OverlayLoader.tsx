import React, { useContext } from 'react';
import './overlayLoader.css';
import { LoadingContext } from '../../contexts/LoadingContext';

export const OverlayLoader: React.FC = () => {
  const { loading } = useContext<any>(LoadingContext);

  return (
    <>
      {loading > 0 && (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <img className="spinner" src="/images/tobeto-logo.png" alt="Loading spinner" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
