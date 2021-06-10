import React, { memo } from 'react';
import { Tabs } from './Tabs';
import './style.css';

const Tab1 = memo(() => <h2>Content One renders here!</h2>);
const Tab2 = memo(() => <h2>Content Two renders here!</h2>);
const Tab3 = memo(() => <h2>Content Three renders here!</h2>);

const tabs = [
  { title: 'Tab One', content: <Tab1 /> },
  { title: 'Tab Two', content: <Tab2 /> },
  { title: 'Tab Three', content: <Tab3 /> }
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Tabs tabs={tabs} />
    </div>
  );
}
