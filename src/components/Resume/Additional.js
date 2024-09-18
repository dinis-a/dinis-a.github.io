import React from 'react';
import PropTypes from 'prop-types';

import Add from './Additional/Add';

const Adds = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="extras" />
    <div className="title">
      <h3>Additional information</h3>
    </div>
    {data.map((additional) => (
      <Add data={additional} key={additional.info} />
    ))}
  </div>
);

Adds.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.string,
      lang: PropTypes.string,
    }),
  ),
};

Adds.defaultProps = {
  data: [],
};

export default Adds;
