import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Michael D&apos;Angelo</h2>
        <p>
          <a href="mailto:akulov.dinis@gmal.com">akulov.dinis@gmal.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Dinis. I am a Data Scientist with over 5 years of experience, 
        specializing in BI analytics, data analysis, and machine learning. 
        I have a strong background in data collection, analysis, and model development. 
        My expertise spans various industries, including healthcare, where I led telemedicine initiatives 
        and developed machine learning models to detect skin cancer. 
        I&apos;m actively involved in Kaggle competitions and continuously enhance my skills through professional courses.
        In addition to data science, I have a solid foundation in medicine and telemedicine,
        which adds unique value to my work in analyzing and improving healthcare data.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
