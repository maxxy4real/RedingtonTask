export interface ImageData {
  id: string;
  title: string;
  image: string;
  keywords: string[];
  updateDate: Date;
}

let images: ImageData[] = [
  {
    id: "data_id_1",
    title: "Book",
    image:
      "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
    keywords: ["book", "study", "pages"],
    updateDate: new Date("2021-01-01"),
  },
  {
    id: "data_id_2",
    title: "Mountains",
    image:
      "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
    keywords: ["mountains", "snow", "cold"],
    updateDate: new Date("2022-02-22"),
  },
  {
    id: "data_id_3",
    title: "Coffee",
    image:
      "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
    keywords: ["coffee", "cup", "mug"],
    updateDate: new Date("2023-12-31"),
  },
];

export function getImages(): ImageData[] {
  return images;
}

export function addImage(image: ImageData): ImageData[] {
  images.push(image);
  return images;
}

export function removeImage(id: string) {
  const imageToRemove = images.find((image) => image.id === id);
  if (!imageToRemove) return false;

  images = images.filter((image) => image.id !== id);
  return true;
}

export function filterImages(keyword: string): ImageData[] {
  const loweredKeyword = keyword.toLocaleLowerCase();
  const filteredImages = images.filter(
    (image) =>
      image.keywords
        .map((keyword) => keyword.toLocaleLowerCase())
        .includes(loweredKeyword) ||
      image.title.toLocaleLowerCase().includes(loweredKeyword)
  );
  return filteredImages;
}
