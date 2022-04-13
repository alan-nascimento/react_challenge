import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from 'src/utils';
import { useQuery } from 'react-query';

import X from 'src/services';

const TODOPaper = () => {
  const { data, isLoading, isSuccess } = useQuery('todos', X.getTodos);

  return (
    <DataGrid
      rows={isSuccess ? data : []}
      loading={isLoading}
      columns={columns.todo}
      pageSize={10}
      checkboxSelection
      onSelectionChange={() => {}}
    />
  );
};

export default TODOPaper;
