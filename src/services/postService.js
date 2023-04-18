export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch('https://dummyjson.com/posts')
        .then((result) => result.json())
        .catch((error) => console.log('failed to fetch' + error.message));
      resolve(result.json());
    } catch {
      reject('failed to query the posts');
    }
  });
};
