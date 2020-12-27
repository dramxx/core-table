import React from "react";
import { AutoSizer, Table, Column } from "react-virtualized";

interface TableProps {
  data: any;
}

// TODO: map columns to dataKey
// TODO: typing
const VirtualizedTable: React.FC<any> = (props: TableProps) => {
  const { data } = props;

  const columns: any[] = [
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
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={20}
            rowHeight={50}
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
          >
            {columns.map((column) => (
              <Column
                label={column.label}
                dataKey={column.dataKey}
                width={column.width}
              />
            ))}
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedTable;
