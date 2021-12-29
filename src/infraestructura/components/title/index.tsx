import React, { useState } from 'react';
import Translate from '../translate/index';

interface IProps {
  text: string;
  style: object;
}

const Title = ({ text, style }: IProps) => {
  return (
    <h1 className="main-title" style={style}>
      {Translate('main-title', false)}
    </h1>
  );
};

const SubTitle = ({ text, style }: IProps) => {
  return (
    <small className="sub-title" style={style}>
      {text}
    </small>
  );
};

export { Title, SubTitle };

Title.defaultProps = {
  name: 'Sed ut perspiciatis unde omnis',
};
