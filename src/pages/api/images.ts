// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ImageData } from "../../lib/data";
import { getImages, addImage, filterImages } from "../../lib/data";

/**
 * @swagger
 * /api/images:
 *   get:
 *     description: Returns a list of images
 *     responses:
 *       200:
 *         description: hello world
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { keyword } = req.query;
    const images = getImages();
    if (keyword) {
      if (typeof keyword !== "string") {
        res.status(400).json({ error: "Invalid keyword" });
        return;
      }
      const filteredImages = filterImages(keyword);
      res.status(200).json(filteredImages);
    }
    res.status(200).json(images);
  } else if (req.method === "POST") {
    const { title, image, keywords } = req.body as {
      title?: string;
      image?: string;
      keywords?: string[];
    };

    if (!title || !image || !keywords) {
      res.status(400).json({ error: "Missing title, image, or keywords" });
      return;
    }

    const images = getImages();
    const id = "data_id_" + (images.length + 1);
    const newImage: ImageData = {
      id,
      title,
      image,
      keywords,
      updateDate: new Date(),
    };
    addImage(newImage);
    res.status(201).json(images);
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
