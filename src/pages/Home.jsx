import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/home.css';
import About from './About';
import { useState } from 'react';

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="welcome">
            <h1>JOINT WITH US</h1>
            <FontAwesomeIcon icon={faChevronDown} size="4x" />
          </div>
          <div className="instance">
            <h2>
              Universitas Teknokrat <br />
              Indonesia
            </h2>
          </div>
          <img src="/images/uti.png" alt="uti" />
        </div>
      </section>
    </>
  );
}

export default Home;
