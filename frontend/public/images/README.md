# Hero Carousel Images

This folder should contain the hero carousel images for the homepage.

## Required Images:

### 1. **hero-1.jpg** - Dry Ice Blasting / Industrial Equipment
- Recommended size: 1920x600px or larger
- Subject: Industrial cleaning equipment, dry ice blasting machine, or related equipment
- Mood: Professional, modern, technological
- Example: Close-up of dry ice cleaning gun with smoke/vapor effect

### 2. **hero-2.jpg** - Person Cleaning in Industrial Setting
- Recommended size: 1920x600px or larger
- Subject: Worker in protective gear (like in your reference screenshot) cleaning industrial machinery in a factory/warehouse setting
- Mood: Professional, safe, industrial atmosphere
- Example: Person in white protective suit with respirator using cleaning equipment, atmospheric lighting with mist/vapor

### 3. **hero-3.jpg** - Sandblasting or Laser Cleaning Action
- Recommended size: 1920x600px or larger
- Subject: Active cleaning process (sandblasting, laser cleaning, or surface treatment)
- Mood: Dynamic, powerful, efficient
- Example: Action shot of surface being cleaned, before/after effect, or cleaning process in progress

## Image Guidelines:
- **Format**: JPG (recommended) or PNG
- **Dimensions**: Minimum 1920x600px (wider is better for large screens)
- **Aspect Ratio**: 16:9 or wider recommended
- **File Size**: Optimize to 200-500KB each for best performance
- **Orientation**: Landscape
- **Quality**: High resolution, professional photography

## Suggested Sources:
1. **Your own photos** - Best option for authenticity
2. **Stock photos from:**
   - Unsplash (free, high-quality)
   - Pexels (free)
   - iStock/Shutterstock (paid, professional)
3. **AI-generated** - Using tools like Midjourney or DALL-E with prompts like your reference images

## Current Placeholder:
The carousel will show a gradient background until you add the actual images. Simply place your images in this folder with the exact filenames above, and they'll automatically appear on the website.

---

## Gallery Carousel Images

To add real images to your gallery carousel section:

1. Replace the placeholder files in `/placeholders/` with your actual project photos:
   - `gallery-1.jpg` - Laserreinigung von Metalloberflächen
   - `gallery-2.jpg` - Trockeneisreinigung im Industriebereich
   - `gallery-3.jpg` - Sandstrahlen von Fassaden
   - `gallery-4.jpg` - Restaurierung historischer Gebäude
   - `gallery-5.jpg` - Industrielle Maschinenreinigung

2. Recommended image specifications:
   - **Format**: JPG or WebP for best performance
   - **Dimensions**: 800x600px or similar 4:3 aspect ratio
   - **File Size**: Keep under 500KB for optimal loading
   - **Quality**: Professional project photos showing your work

3. You can add more images by:
   - Adding new image files (e.g., `gallery-6.jpg`)
   - Updating the `galleryItems` array in `/app/components/GalleryCarousel.tsx`

---

## Extended Image Set (Optional)
To support future sections and variations, you can also prepare these additional files:

| Purpose | Suggested Filename | Notes |
|---------|--------------------|-------|
| Dry Ice wide action (hero alt) | `hero-dry-ice-action.jpg` | Pellets sublimating, vapor effect, dynamic angle |
| Laser cleaning close-up | `hero-laser-detail.jpg` | Laser beam removing oxide/rust with sparks (controlled) |
| Sandblasting before/after | `hero-sandblasting-before-after.jpg` | Split composition or masked overlay |
| Equipment still life | `equipment-dry-ice-unit.jpg` | Machine + hose neatly arranged |
| Technician with PPE (neutral) | `technician-ppe-cleaning.jpg` | Anonymized (no recognizable face) |

Keep the three original hero images as primary; the others can rotate later or be used in content blocks.

## File Naming Conventions
Use lowercase, hyphen-separated descriptive names. Avoid spaces. Prefer semantic clarity over brevity. Examples:
```
hero-1.jpg
hero-dry-ice-action.jpg
hero-laser-detail.jpg
equipment-dry-ice-unit.jpg
```

## Recommended Dimensions
- Hero / full-bleed: 2400×900 (served responsive; Tailwind can crop via `h-[600px]`)
- Supporting / detail shots: 1600×1000 or 4:3 1600×1200
- Before/After composites: at least 2000px wide for clarity

## AI Prompt Library (German + English Variants)
You can use these with Midjourney, DALL·E, Stable Diffusion, Leonardo, etc.

### 1. Dry Ice Cleaning (Trockeneisreinigung)
Hero Wide (German):
```
Industrielle Trockeneisreinigung, dynamische Szene, feiner CO2 Nebel, moderne Maschine, dunkler Hintergrund, gelbe Akzentlichter, ultra-realistisch, fotografischer Stil, 24mm Weitwinkel, hohe Detailtiefe
```
Hero Wide (English):
```
Industrial dry ice blasting, dynamic action, fine CO2 vapor cloud, modern cleaning machine, dark industrial background, subtle yellow accent lighting, ultra-realistic photo, 24mm wide angle, high detail
```
Close-Up Detail:
```
Macro shot of dry ice pellets impacting a greasy metal surface, sublimation vapor, sharp focus foreground, soft bokeh background, cinematic lighting, high realism
```
Equipment Still:
```
Dry ice blasting unit on clean workshop floor, coiled hose, minimal composition, moody contrast, product photography style
```

### 2. Laserreinigung (Laser Cleaning)
Action Beam (German):
```
Laserreinigung eines metallischen Bauteils, feine Funken, kein übertriebener Rauch, präziser grüner Laserstrahl, industrielle Umgebung, dunkler Hintergrund, professionelle Fotografie
```
Action Beam (English):
```
Laser cleaning on oxidized metal surface, subtle micro sparks, controlled beam (green), dark industrial environment, realistic lighting, photorealistic
```
Detail / Surface Transformation:
```
Before and after laser cleaning on corroded metal plate, left side rusty, right side clean brushed texture, studio lighting, high definition composite
```
Minimal Tech Still:
```
Laser cleaning head close-up, chrome and anodized parts, shallow depth of field, crisp macro detail, black background
```

### 3. Sandstrahlen (Sandblasting)
Surface Impact (German):
```
Sandstrahlen von rostigem Metallteil, kinetische Bewegung, feine abrasive Partikel sichtbar, kontrollierte Szene, professionelles Licht, keine übermäßige Staubwolke
```
Surface Impact (English):
```
Sandblasting rusty steel component, dynamic abrasive particle stream, controlled dust, high-speed photography feel, dramatic side lighting
```
Before/After Panel:
```
Split image: left corroded steel, right freshly sandblasted matte surface, clean divider, studio composition
```
Tool Still:
```
Handheld sandblasting nozzle on dark textured background, product shot, soft rim light, sharp detail
```

### Negative Prompts (Stable Diffusion / SDXL)
```
text, watermark, logo, extra limbs, distorted hands, low quality, blurry, oversaturated, artifacts, unrealistic reflections, duplicate objects
```

## Licensing & Compliance Notes (Germany / EU)
- Prefer original photographs when possible for authenticity.
- For AI images featuring people: avoid identifiable faces (GDPR). Use PPE with mask/visor or angle obscuring identity.
- Document provenance: keep a small text file noting which model + prompt generated each image (audit trail).
- Avoid including third-party logos, brand names, or patented equipment unless you have rights.

## Accessibility: Alt Text Suggestions
Match each image with concise, descriptive alt text (≤125 characters ideal):
```
hero-1.jpg → Industrielle Trockeneisreinigung mit Sublimationsnebel an Metalloberfläche
hero-2.jpg → Techniker in Schutzanzug reinigt Maschine in dunkler Industriehalle
hero-3.jpg → Sandstrahlen entfernt Rost von Metallteil, Partikelstrahl sichtbar
hero-dry-ice-action.jpg → Dynamische Trockeneisstrahlszene mit feinem CO2 Nebel
hero-laser-detail.jpg → Laserstrahl säubert korrodierte Metalloberfläche präzise
equipment-dry-ice-unit.jpg → Mobiles Trockeneisreinigungsgerät mit Schlauch auf Werkstattboden
hero-sandblasting-before-after.jpg → Vergleich rostige vs. saubere Metallfläche nach Sandstrahlen
technician-ppe-cleaning.jpg → Unkenntliche Person in vollständiger PSA bedient Reinigungsgerät
```

## Optimization Workflow
1. Generate at high resolution (e.g. 4096px width).
2. Crop to target aspect ratio (e.g. 2400×900 for hero) using focal point.
3. Export to JPG quality ~80 or AVIF/WebP for smaller footprint.
4. Use `squoosh` or `sharp` for batch compression.
5. Serve responsive using Next.js `Image` with sizes attribute if later integrated.

Example compression (local):
```
npx sharp input.jpg -resize 2400x900 -quality 80 output-hero.jpg
```

## Performance Tips
- Keep hero images <450KB each.
- Preload only the first hero image; lazy-load others.
- Consider using subtle CSS gradient overlay to unify different lighting.

## Integration Notes
After adding new files, update the `slides` array in `HeroCarousel.tsx` to point to new filenames. Provide consistent alt text (via an added `alt` property if you extend the data structure).

---
If you need an automated script to optimize and rename images, let me know and one can be added.
