import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Dinis Akulov's personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About</Link>
          </h2>
          <p>Hi, I&apos;m Dinis, a Data Scientist with 5+ years
            in data analytics and machine learning.
            I have experience in the medical field,
            which enriches my data analysis work.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to ask me to show my{' '}
        <Link to="/contact">private repositories on GitHub</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">some projects</Link> or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
