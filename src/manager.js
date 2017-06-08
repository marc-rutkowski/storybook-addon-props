const store = new Map();
const getStoryId = (kind, storyName) => `${kind}.${storyName}`;

export const getData = (kind, storyName) => {
  const id = getStoryId(kind, storyName);
  return store.has(id) ? store.get(id) : null;
};

export const setData = (kind, storyName, data) => {
  const id = getStoryId(kind, storyName);
  store.set(id, data);
};
