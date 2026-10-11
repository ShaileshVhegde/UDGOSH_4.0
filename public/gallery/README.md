# Gallery Images Folder

Add your gallery images here.

## Instructions:

1. Place your image files (jpg, png, webp, etc.) in this folder
2. Update `src/pages/Gallery.tsx` to import and use your images

## Example:

After adding `image1.jpg` and `image2.jpg` to this folder, update Gallery.tsx:

```typescript
import img1 from "/gallery/image1.jpg";
import img2 from "/gallery/image2.jpg";

const galleryImages = [
  { src: img1, title: "Event 1" },
  { src: img2, title: "Event 2" },
  // Add more images...
];
```

The images will automatically be available from the `/gallery/` path when the app runs.


