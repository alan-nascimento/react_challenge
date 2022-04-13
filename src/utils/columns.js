const columns = {
  user: [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'catchPhrase', headerName: 'Catchphrase', width: 130 },
    { field: 'website', headerName: 'Website', width: 130 },
  ],
  todo: [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'completed', headerName: 'Completed', width: 130 },
  ],
};

export default columns;
