import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequestQuery } from '../actions';
import MessageOps from '../components/MessageOps';

const loadData = dispatch => (
  fetchRequestQuery(dispatch)
);

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadData(dispatch);
  }, []);

  const { request } = useSelector(state => state);
  return (
    <MessageOps titre={request.titre}/>
  );
};

export default {
  component: Content,
  loadData,
};
