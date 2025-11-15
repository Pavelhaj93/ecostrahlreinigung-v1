# Gallery Carousel Component

## Overview
A beautiful, responsive image gallery carousel with autoplay functionality, positioned under the pricing section on the homepage.

## Features

### ✨ Key Features
- **Autoplay**: Automatically transitions between slides every 4 seconds
- **Responsive Design**: Adapts to different screen sizes
  - Mobile: 1 card visible
  - Tablet: 2 cards visible
  - Desktop: 3 cards visible
- **Interactive Controls**: 
  - Previous/Next buttons (hidden on mobile)
  - Touch/swipe gestures for mobile devices
  - Keyboard navigation (Arrow keys)
- **Hover Effects**: 
  - Image zoom on hover
  - Border color change
  - Smooth transitions
- **Pause on Interaction**: Autoplay pauses when user interacts with the carousel

### 🎨 Design Elements
- Dark theme matching your website (gray-900 background)
- Yellow accent colors on hover (matching brand colors)
- Gradient overlay on images for better text readability
- Rounded corners with smooth borders
- Professional card layout with title and description

### 📝 Content Structure
Each gallery item includes:
- **Title**: Main heading for the project
- **Image**: Project photo (currently placeholder)
- **Description**: Short description of the service/project

## Current Gallery Items
1. Laserreinigung von Metalloberflächen
2. Trockeneisreinigung im Industriebereich
3. Sandstrahlen von Fassaden
4. Restaurierung historischer Gebäude
5. Industrielle Maschinenreinigung

## How to Customize

### Adding/Removing Items
Edit the `galleryItems` array in `/app/components/GalleryCarousel.tsx`:

```typescript
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Your Project Title',
    image: '/images/placeholders/gallery-1.jpg',
    description: 'Your description',
  },
  // Add more items...
]
```

### Changing Autoplay Speed
In the `Carousel` component, adjust the `delay` value (in milliseconds):

```typescript
Autoplay({
  delay: 4000, // Change this value
  stopOnInteraction: true,
})
```

### Adjusting Card Display
Modify the `CarouselItem` className to change how many cards show:
- `md:basis-1/2` = 2 cards on tablet
- `lg:basis-1/3` = 3 cards on desktop
- Change to `lg:basis-1/4` for 4 cards, etc.

### Adding Real Images
1. Place your images in `/public/images/placeholders/`
2. Name them `gallery-1.jpg`, `gallery-2.jpg`, etc.
3. Recommended size: 800x600px (4:3 aspect ratio)
4. Keep file size under 500KB for optimal performance

## Technical Details

### Dependencies
- `embla-carousel-react`: Core carousel functionality
- `embla-carousel-autoplay`: Autoplay plugin
- `next/image`: Optimized image loading

### Performance
- Images are lazy-loaded using Next.js Image component
- Automatic image optimization
- Responsive image sizing

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management

## Integration
The gallery is integrated on the homepage (`/app/page.tsx`) and appears:
1. Hero Carousel
2. Services Section
3. Pricing Section
4. **→ Gallery Carousel** (NEW)
5. Contact Section
6. Footer Section

## Browser Support
Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)
