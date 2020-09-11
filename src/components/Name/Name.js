/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { UPDATE_NAME, UPDATE_CATEGORY } from './../../store';
import './Name.css';

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      category: reduxState.category,
    };
  }
  saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name,
    });
    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.category,
    });
  }
}

export default Name;
