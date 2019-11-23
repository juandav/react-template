import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Private } from '../scenes/Layout/Private/Private'
import { Public } from '../scenes/Layout/Public/Public'
import '../App.css';

export const App = () => {
  
  const { authentication } = useSelector(state => state.auth)

  useEffect(() => {
    moment.locale('es');
  }, []);

  return (
    <div>
      {!authentication && <Public />}
      { authentication && <Private/>}
    </div>
  );
}