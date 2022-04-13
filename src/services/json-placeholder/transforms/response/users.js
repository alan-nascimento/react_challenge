const transformUsers = (users = []) => {
  if (!users?.length) return [];

  return users?.map((user) => ({
    id: user.id,
    username: user.username,
    catchPhrase: user.company.catchPhrase,
    website: user.website,
  }));
};

export default transformUsers;
