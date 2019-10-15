import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Player from './components/Player'
import ApiCall from './components/ApiCall'
import Online from './components/Online'
import { useOnline } from './hooks/useOnline'
import { useLocalStorage, useInput } from './hooks/useLocalStorage'
afterEach(rtl.cleanup);


test('renders App component without crashing', () => {
const wrapper = rtl.render(<App/>)
  wrapper.debug()
});
  test('renders Player component without crashing', () => {
  const wrapper = rtl.render(<ApiCall/>)
    wrapper.debug()
});

  test('renders Player component without crashing', () => {
  const wrapper = rtl.render(<useLocalStorage/>)
    wrapper.debug()
});
