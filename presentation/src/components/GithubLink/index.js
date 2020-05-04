import React from 'react';
import PropTypes from 'prop-types';
import githubMarkImage from '../../images/GitHub-Mark-120px-plus.png';

const GithubLink = ({ href, children }) => (
  <a
    style={{ display: 'flex', alignItems: 'center' }}
    className="link"
    href={href}
  >
    <img
      src={githubMarkImage}
      alt=""
      width="30px"
      height="30px"
      style={{ flexShrink: 0, marginRight: '24px' }}
    />
    {children}
  </a>
);

GithubLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GithubLink;
