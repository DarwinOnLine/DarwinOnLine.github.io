# Using Images in Articles

This guide shows how to add images to your Markdown articles.

## Folder Structure

Images are stored in `/assets/images/`:

```
/assets/
  /images/
    banner-example.jpg
    screenshot.png
    diagram.svg
```

## Markdown Syntax

### Simple Image

```markdown
![Alt text](/assets/images/banner-example.jpg)
```

Result:

![Example banner](/assets/images/banner-example.jpg)

### Image with Link

```markdown
[![Alt text](/assets/images/banner-example.jpg)](https://example.com)
```

### Image with HTML (more control)

```html
<img src="/assets/images/banner-example.jpg"
     alt="Description"
     style="max-width: 500px; border-radius: 8px;" />
```

## Best Practices

1. **File names**: Use descriptive lowercase names with dashes
   - ✅ `my-article-banner.jpg`
   - ❌ `Image1.JPG`

2. **Formats**:
   - Photos: JPEG (`.jpg`)
   - Graphics/logos: PNG (`.png`) or SVG (`.svg`)
   - Animations: GIF (`.gif`) or WebP

3. **Optimization**: Compress images before uploading
   - Tools: TinyPNG, ImageOptim, Squoosh

4. **Accessibility**: Always add descriptive alt text

## Examples

### Inline Image

You can also put text with a small icon ![🎨](/assets/images/icon-example.png) inline.

### Image Gallery

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/assets/images/banner-example.jpg" alt="Image 1" style="width: 100%; border-radius: 8px;" />
  <img src="/assets/images/banner-example.jpg" alt="Image 2" style="width: 100%; border-radius: 8px;" />
  <img src="/assets/images/banner-example.jpg" alt="Image 3" style="width: 100%; border-radius: 8px;" />
</div>

---

That's it! Images make your articles more engaging 📸
