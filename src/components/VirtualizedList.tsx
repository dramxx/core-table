import React, { useRef } from "react";
import {
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

export interface ListProps {
  data: any[];
}

const VirtualizedList: React.FC<any> = (props: ListProps) => {
  const { data } = props;

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
    <div style={{ width: "100%", height: "98vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            deferredMeasurementCache={cache.current}
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            rowCount={data.length}
            rowRenderer={({ key, index, style, parent }) => {
              const dataRow = data[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <div style={style}>
                    <p>{dataRow.name}</p>
                    <p>{dataRow.value}</p>
                  </div>
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedList;
