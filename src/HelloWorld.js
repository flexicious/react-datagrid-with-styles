import React from 'react';
import { ReactDataGrid, ReactDataGridColumn } from 'flexicious-react-datagrid'
import { CssStyles, ApiStyles } from './base-adapter'

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ReactDataGrid styles={ApiStyles.getThemeStyles('officeblue')} width={"100%"} editable dataProvider={[{ label: "Company A", state: "NJ", rank: "1.11" },
      { label: "Company B", state: "PA", rank: "11.1" },
      { label: "Company C", state: "CT", rank: "-111" },
      { label: "Company D", state: "NY", rank: "2.34" },
      { label: "Company E", state: "NJ", rank: "22.2" }]}>
        <ReactDataGridColumn dataField="label" />
        <ReactDataGridColumn dataField="state" />
        <ReactDataGridColumn dataField="rank" sortNumeric />
      </ReactDataGrid>
    </div>
  );
}

export default HelloWorld;