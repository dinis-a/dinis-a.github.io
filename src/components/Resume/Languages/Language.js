import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="school">{data.lang} - {data.level}</h4>
    </header>
  </article>
);

Language.propTypes = {
  data: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default Language;
