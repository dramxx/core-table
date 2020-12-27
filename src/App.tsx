import React, { useState, useEffect } from "react";
import faker from "faker";
import VirtualizedList from "./components/VirtualizedList";

export interface FakeData {
  id: number;
  name: string;
  value: string;
}

const App: React.FC = () => {
  const [fakeData, setFakeData] = useState<FakeData[]>([]);

  useEffect(() => {
    setFakeData(
      [...Array(10000)].map((placeholder, index) => {
        return {
          id: index,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          value: `${faker.lorem.lines(Math.random() * 100)}`,
        };
      })
    );
  }, []);

  return (
    <div>
      <VirtualizedList data={fakeData} />
    </div>
  );
};

export default App;
