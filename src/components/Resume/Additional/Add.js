import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="school">{data.info}</h4>
    </header>
  </article>
);

Add.propTypes = {
  data: PropTypes.shape({
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default Add;
