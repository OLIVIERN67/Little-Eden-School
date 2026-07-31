# Task: Match Gallery Images to Captions & Add Facility Images

## Steps

- [x] 1. Update `GallerySection.tsx` to use descriptive-named images that match captions:
  - [x] "Academic Excellence" → `academic excellence.jpg` (replacing `GRADU_3.jpg`)
  - [x] "Student Success" → `student success.jpg` (replacing `GRAD(41).jpg`)
  - [x] "Classroom Moments" → `Classroom moments.jpeg` (replacing `GRADU_9.jpg`)
  - [x] "Team Building" → `team building.jpg` (replacing `GRAD(65).jpg`)
- [x] 2. Update `FacilitiesSection.tsx` to add real photos / placeholders to facility cards:
  - [x] Add `image` field to facility data
  - [x] Playground → `/Highlights/Playground.jpeg` (real photo)
  - [x] Library, Science Lab, Computer Lab, Transport, Smart Classrooms → placeholder images (to be replaced later)
  - [x] Render the image in each facility Card

## UI Improvements (Round 2)

- [x] Staff photos centered in square frames (`rounded-lg` instead of `rounded-full`), `object-cover object-top` so faces stay visible
- [x] Facility images use `aspect-video` container with `object-cover object-center` to prevent distortion/stretching
- [x] Regenerated all 5 SVG placeholders at 1280x720 (16:9) aspect ratio for consistent display

## Verification

- [x] Verify image paths are correct (files exist in `client/public/Highlights/`)
- [x] Confirm build succeeds (`npx tsc --noEmit` passed, `npm run build` succeeded)

