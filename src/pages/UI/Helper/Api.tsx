export const GetAllImages = async () => {
  const res = await fetch(
    `'http://localhost:' + ${process.env.PORT}/api/images`
  );
  const data = await res.json();
  return data;
};
