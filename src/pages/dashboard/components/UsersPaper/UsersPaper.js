import React from 'react';
import { useQuery } from 'react-query';
import { DataGrid } from '@material-ui/data-grid';

import X from 'src/services';
import { columns } from 'src/utils';

const UsersPaper = () => {
  const { data, isLoading, isSuccess } = useQuery('users', X.getUsers);

  return (
    <DataGrid
      checkboxSelection
      columns={columns.user}
      loading={isLoading}
      onSelectionChange={() => {}}
      pageSize={10}
      rows={isSuccess ? data : []}
    />
  );
};

export default UsersPaper;