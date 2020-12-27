import React, { useState, useEffect } from "react";
import faker from "faker";

interface FakeData {
  id: number;
  name: string;
  bio: string;
}

const App: React.FC = () => {
  const [fakeData, setFakeData] = useState<FakeData[]>([]);

  useEffect(() => {
    setFakeData(
      [...Array(1000)].map((placeholder, index) => {
        return {
          id: index,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: `${faker.lorem.lines(Math.random() * 100)}`,
        };
      })
    );
  }, []);

  return (
    <div>
      <ul>
        {fakeData.map((row: FakeData) => (
          <li key={row.id}>
            <p>{row.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
