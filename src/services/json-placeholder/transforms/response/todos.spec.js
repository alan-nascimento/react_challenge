import faker from 'faker';
import transformTodos from './todos';

const mockTodos = () => ({
  completed: true,
  description: faker.name.jobDescriptor(),
  id: faker.datatype.number(),
  title: faker.name.title(),
});

const mockTodosPartialResponse = () => [mockTodos(), mockTodos()];

describe('Transform TODO', () => {
  it('should return an empty array if there is not data', () => {
    const result = transformTodos();
    expect(result).toEqual([]);
  });

  it('should the transformed TODO data when its receive a valid response', () => {
    const data = mockTodosPartialResponse();

    const result = transformTodos(data);
    const transformedData = data.map((item) => ({
      completed: item.completed,
      id: item.id,
      title: item.title,
    }));

    expect(result).toEqual(transformedData);
  });
});
