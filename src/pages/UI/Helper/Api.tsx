import { ImageType } from "./ImageConsts";

export const GetAllImages = async () => {
  const res = await fetch(
    `'http://localhost:' + ${process.env.PORT}/api/images`
  );
  const data = await res.json();
  return data;
};

export const AddImage = async (image: ImageType) => {
  const res = await fetch(
    `'http://localhost:' + ${process.env.PORT}/api/images`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(image),
    }
  );
  const data = await res.json();
  return data;
};
