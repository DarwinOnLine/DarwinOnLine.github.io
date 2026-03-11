# Exemples de code et démos interactives

Cet article montre comment utiliser les blocs de code et ajouter des démos interactives.

## Coloration syntaxique

Les blocs de code sont automatiquement colorés avec Highlight.js :

```javascript
// JavaScript avec coloration syntaxique
function greet(name) {
  return `Bonjour, ${name} !`;
}

console.log(greet('le monde'));
```

```python
# Code Python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

```css
/* Code CSS */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

## Avec numéros de ligne

Ajoutez `data-line-numbers` pour afficher les numéros de ligne :

<pre data-line-numbers><code class="language-javascript">// JavaScript avec numéros de ligne
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculer les 10 premiers nombres de Fibonacci
for (let i = 0; i < 10; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}
</code></pre>

## JavaScript interactif

Vous pouvez ajouter du JavaScript exécutable directement dans les articles :

<div id="demo-container-fr" style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 8px; margin: 1rem 0;">
  <button id="demo-btn-fr" style="padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Cliquez-moi !
  </button>
  <p id="demo-output-fr" style="margin-top: 1rem;"></p>
</div>

<script>
document.getElementById('demo-btn-fr').addEventListener('click', function() {
  const output = document.getElementById('demo-output-fr');
  const clicks = parseInt(output.dataset.clicks || 0) + 1;
  output.dataset.clicks = clicks;
  output.textContent = `Bouton cliqué ${clicks} fois !`;
  output.style.color = '#4CAF50';
});
</script>

## Style CSS personnalisé

Ajoutez du CSS inline pour du style personnalisé :

<style>
.custom-box-fr {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  margin: 1rem 0;
}
</style>

<div class="custom-box-fr">
  <h3 style="margin: 0;">Boîte stylisée</h3>
  <p>Cette boîte utilise du CSS personnalisé !</p>
</div>

## Démo Canvas

Vous pouvez même ajouter des animations Canvas :

<canvas id="demo-canvas-fr" width="400" height="200" style="border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; max-width: 100%; display: block; margin: 1rem auto;"></canvas>

<script>
const canvas = document.getElementById('demo-canvas-fr');
const ctx = canvas.getContext('2d');
let x = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner un cercle qui bouge
  ctx.beginPath();
  ctx.arc(x, 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = '#4CAF50';
  ctx.fill();

  x = (x + 2) % canvas.width;
  requestAnimationFrame(animate);
}

animate();
</script>

---

Plutôt cool, non ? 🚀
