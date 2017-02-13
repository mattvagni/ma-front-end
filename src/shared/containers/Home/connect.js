import React from 'react';
import { connect } from 'react-redux';
import { ensureData } from '../../components';
import { actions } from '../../state/counter';
import component from './component';

export const dataCalls = ({ dispatch, params }) => [
  dispatch(actions.getNewCount(100))
];

export const mapStateToProps = (state, ownProps) => ({
  count: state.counter.count
});

export default connect(mapStateToProps)(ensureData({ dataCalls })(component));
