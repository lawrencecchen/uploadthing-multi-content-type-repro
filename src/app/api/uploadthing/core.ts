import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // publicUploader: f(["image", "blob"])
  publicUploader: f(["blob"])
    // publicUploader: f(["image", "video", "audio", "blob"])
    // publicUploader: f(["image", "video", "audio", "blob"])
    // publicUploader: f(["image", "video", "audio", "blob", "pdf", "text"])
    .middleware(() => {
      return {};
    })
    .onUploadComplete(() => {
      return {};
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
