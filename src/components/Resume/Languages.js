import React from 'react';
import PropTypes from 'prop-types';

import Language from './Languages/Language';

const Languages = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    {data.map((lang) => (
      <Language data={lang} key={lang.level} />
    ))}
  </div>
);

Languages.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.string,
      lang: PropTypes.string,
    }),
  ),
};

Languages.defaultProps = {
  data: [],
};

export default Languages;
