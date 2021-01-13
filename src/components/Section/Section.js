import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={s.section}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
};
