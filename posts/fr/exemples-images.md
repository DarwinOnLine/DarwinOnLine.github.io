# Utiliser des images dans les articles

Ce guide montre comment ajouter des images dans vos articles Markdown.

## Structure des dossiers

Les images sont stockées dans `/assets/images/` :

```
/assets/
  /images/
    banner-example.jpg
    screenshot.png
    diagram.svg
```

## Syntaxe Markdown

### Image simple

```markdown
![Texte alternatif](/assets/images/banner-example.jpg)
```

Résultat :

![Exemple de bannière](/assets/images/banner-example.jpg)

### Image avec lien

```markdown
[![Texte alternatif](/assets/images/banner-example.jpg)](https://example.com)
```

### Image avec HTML (plus de contrôle)

```html
<img src="/assets/images/banner-example.jpg"
     alt="Description"
     style="max-width: 500px; border-radius: 8px;" />
```

## Bonnes pratiques

1. **Noms de fichiers** : Utilisez des noms descriptifs en minuscules avec tirets
   - ✅ `mon-article-banniere.jpg`
   - ❌ `Image1.JPG`

2. **Formats** :
   - Photos : JPEG (`.jpg`)
   - Graphiques/logos : PNG (`.png`) ou SVG (`.svg`)
   - Animations : GIF (`.gif`) ou WebP

3. **Optimisation** : Compressez vos images avant de les uploader
   - Outils : TinyPNG, ImageOptim, Squoosh

4. **Accessibilité** : Toujours ajouter un texte alternatif descriptif

## Exemples

### Image en ligne

Vous pouvez aussi mettre du texte avec une petite icône ![🎨](/assets/images/icon-example.png) en ligne.

### Galerie d'images

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/assets/images/banner-example.jpg" alt="Image 1" style="width: 100%; border-radius: 8px;" />
  <img src="/assets/images/banner-example.jpg" alt="Image 2" style="width: 100%; border-radius: 8px;" />
  <img src="/assets/images/banner-example.jpg" alt="Image 3" style="width: 100%; border-radius: 8px;" />
</div>

---

C'est tout ! Les images rendent vos articles plus vivants 📸
