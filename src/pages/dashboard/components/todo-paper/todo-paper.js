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
      checkboxSelection
      columns={columns.todo}
      loading={isLoading}
      pageSize={10}
      rows={isSuccess ? data : []}
    />
  );
};

export default TODOPaper;
