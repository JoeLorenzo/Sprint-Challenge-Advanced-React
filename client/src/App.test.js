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

const player = {
  id:123456,
  name:"foo",
  country:"bar",
  searches:1000
}

test('renders App component without crashing', () => {
  const wrapper = rtl.render(<App/>)
  wrapper.debug()
});



test('renders visible output from App component', () => {
  const wrapper = rtl.render(<App/>)
  const element = wrapper.getByTestId("app_test_id")
  expect(element).toBeVisible()
});


test('renders Player component player name', () => {
const wrapper = rtl.render(<App/>)
   const element = wrapper.queryByText(/Wendie Renard/);
});


test('renders ApiCall component without crashing', () => {
  const wrapper = rtl.render(<ApiCall/>)
    wrapper.debug()
});

  test('Should have the class of false', () => {
    const wrapper = rtl.render(<Online/>)
    const element = wrapper.getByTestId("toggle_class")
    expect(element).toHaveClass('false')
  })


  it('Should have the class of the player id', () => {
    const wrapper = rtl.render(<Player info={player} />)
    const element = wrapper.getByTestId("card_id")
    expect(element).toHaveClass('Player_card_123456')
  })


test('It should render the Player component', () => {
  const wrapper = rtl.render(<Player info={player} />)
  const element = wrapper.getByTestId("toggle_class")
  expect(element).toBeInTheDocument()
  wrapper.debug()
})

  test('It should find the player name', () => {
    const wrapper = rtl.render(<Player info={player} />)
    const element = wrapper.getByText(/foo/i)
    expect(element).toBeVisible()
    wrapper.debug()
  })
