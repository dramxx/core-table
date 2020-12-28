import React, { FC, ReactNode } from "react";
import { AutoSizer, Table, Column } from "react-virtualized";
import { FakeData } from "../App";

interface TableProps {
  data: FakeData[];
}

interface ColumnContent {
  label: string;
  dataKey: string;
  width: number;
}

// TODO: map columns to dataKey
const VirtualizedTable: FC<any> = (props: TableProps) => {
  const { data } = props;

  const columns: ColumnContent[] = [
    {
      label: "ID",
      dataKey: "id",
      width: 100,
    },
    {
      label: "NAME",
      dataKey: "name",
      width: 200,
    },
    {
      label: "VALUE",
      dataKey: "value",
      width: 500,
    },
  ];

  return (
    <div style={{ width: "100%", height: "98vh" }}>
      <AutoSizer>
        {({ width, height }): ReactNode => (
          <Table
            width={width}
            height={height}
            headerHeight={20}
            rowHeight={50}
            rowCount={data.length}
            rowGetter={({ index }): FakeData => data[index]}
          >
            {columns.map(
              (column): ReactNode => (
                <Column
                  label={column.label}
                  dataKey={column.dataKey}
                  width={column.width}
                />
              )
            )}
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedTable;
