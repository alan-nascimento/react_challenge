import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useQuery } from 'react-query';

import { JsonPlaceholderService } from 'src/services';
import { columns } from 'src/utils';

const TODOPaper = () => {
  const { data, isLoading, isSuccess } = useQuery(
    'todos',
    JsonPlaceholderService.getTodos
  );

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
