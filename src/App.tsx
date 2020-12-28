import React, { FC, useState, useEffect } from "react";
import faker from "faker";
import VirtualizedList from "./components/VirtualizedList";
import VirtualizedTable from "./components/VirtualizedTable";

export interface FakeData {
  id: number;
  name: string;
  value: string;
}

const App: FC = () => {
  const [fakeData, setFakeData] = useState<FakeData[]>([]);

  useEffect((): void => {
    setFakeData(
      [...Array(10000)].map(
        (placeholder, index): FakeData => {
          return {
            id: index,
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            value: `${faker.lorem.lines(Math.random() * 100)}`,
          };
        }
      )
    );
  }, []);

  return (
    <div>
      <VirtualizedList data={fakeData} />
      {/* <VirtualizedTable data={fakeData} /> */}
    </div>
  );
};

export default App;
