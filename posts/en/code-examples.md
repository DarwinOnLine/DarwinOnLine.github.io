# Code Examples & Interactive Demos

This article shows how to use code blocks and add interactive demos.

## Syntax Highlighting

Code blocks are automatically highlighted with Highlight.js:

```javascript
// JavaScript with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## With Line Numbers

Add `{.line-numbers}` after the language to enable line numbers:

<pre data-line-numbers><code class="language-javascript">// JavaScript with line numbers
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}
</code></pre>

```python
# Python code
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

```css
/* CSS code */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

## Interactive JavaScript

You can add executable JavaScript directly in articles:

<div id="demo-container" style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 8px; margin: 1rem 0;">
  <button id="demo-btn" style="padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Click me!
  </button>
  <p id="demo-output" style="margin-top: 1rem;"></p>
</div>

<script>
document.getElementById('demo-btn').addEventListener('click', function() {
  const output = document.getElementById('demo-output');
  const clicks = parseInt(output.dataset.clicks || 0) + 1;
  output.dataset.clicks = clicks;
  output.textContent = `Button clicked ${clicks} time(s)!`;
  output.style.color = '#4CAF50';
});
</script>

## Custom Styling

Add inline CSS for custom styling:

<style>
.custom-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  margin: 1rem 0;
}
</style>

<div class="custom-box">
  <h3 style="margin: 0;">Styled Box</h3>
  <p>This box uses custom CSS!</p>
</div>

## Canvas Demo

You can even add Canvas animations:

<canvas id="demo-canvas" width="400" height="200" style="border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; max-width: 100%; display: block; margin: 1rem auto;"></canvas>

<script>
const canvas = document.getElementById('demo-canvas');
const ctx = canvas.getContext('2d');
let x = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw moving circle
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

Pretty cool, right? 🚀
