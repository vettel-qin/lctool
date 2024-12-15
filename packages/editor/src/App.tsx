import { useState } from 'react';
import { Button, ConfigProvider, theme } from 'antd';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider
      theme={{
        cssVar: true, // 开启 CSS 变量
        hashed: false, // 关闭 hash
        token: {
          // 自定义主题
          colorPrimary: '#52c41a',
          colorLink: '#52c41a',
          colorInfo: '#52c41a',
        },
      }}
    >
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs Click on the Vite and React logos to learn more Click on the Vite and React logos to learn more Click on the Vite and React logos to learn more Click on the Vite and React logos to learn more text-4xl">
          Click on the Vite and React logos to learn more Click on the Vite and React logos to learn more Click on the Vite and React logos to learn
          more Click on the Vite and React logos to learn more
        </p>
        <Button className="text-lg">Button</Button>
      </>
    </ConfigProvider>
  );
}

export default App;
