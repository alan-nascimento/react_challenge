import faker from 'faker';
import transformUsers from './users';

const mockUser = () => ({
  company: {
    catchPhrase: faker.company.catchPhrase(),
  },
  description: faker.name.jobDescriptor(),
  id: faker.datatype.number(),
  username: faker.name.findName(),
  website: faker.internet.url(),
});

const mockUsersPartialResponse = () => [mockUser(), mockUser()];

describe('Transform Users', () => {
  it('should return an empty array if there is not data', () => {
    const result = transformUsers();
    expect(result).toEqual([]);
  });

  it('should the transformed Users data when its receive a valid response', () => {
    const data = mockUsersPartialResponse();

    const result = transformUsers(data);
    const transformedData = data.map((item) => ({
      id: item.id,
      username: item.username,
      catchPhrase: item.company.catchPhrase,
      website: item.website,
    }));

    expect(result).toEqual(transformedData);
  });
});
