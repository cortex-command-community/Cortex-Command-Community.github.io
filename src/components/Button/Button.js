import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './Button.css';

function Button(props) {
  const Tag = props.link ? 'a' : 'button';

  return (
    <Tag className='button-element'
      href={props.to}
      target='_blank'
    >
      <span className='button-content'>{props.children}</span>
      { props.link && <FontAwesomeIcon icon={faExternalLinkAlt} /> }
    </Tag>
  );
}

export default Button;
