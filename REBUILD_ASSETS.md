# Portfolio Asset Rebuild Guide

## Problem: Changes Not Showing Up

When you make changes to your React components but don't see them reflected in the browser, it's likely because you're viewing cached/old compiled assets.

## Understanding the Build Process

Your portfolio uses **Vite** to compile React components into optimized JavaScript bundles:

- **Source files**: `components/*.tsx`, `src/*.tsx` - your actual React code
- **Compiled assets**: `assets/*.js`, `assets/*.css` - what browsers actually run
- **Entry point**: `index.html` - references the compiled assets

## When Changes Don't Show Up

This happens when:
1. You edit source files (`.tsx`)
2. But the old compiled assets in `/assets` are still being served
3. Browser cache or dev server cache is serving stale content

## Quick Fix: Force Asset Rebuild

### Step 1: Clear Old Assets
```bash
rm -rf assets/*
```

### Step 2: Clear Vite Cache
```bash
rm -rf node_modules/.vite
```

### Step 3: Reset index.html
The `index.html` file gets modified during builds and can reference old asset files. Reset it to:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 4: Fresh Build
```bash
npm run build:skip-checks
```

This creates new asset files with fresh timestamps (e.g., `index-40af5b77.js`).

## Development vs Production

- **Development**: `npm run dev` - hot reloads changes automatically
- **Production**: `npm run build:skip-checks` - creates static assets for deployment

## Why This Works

1. **Clearing assets** removes old compiled code
2. **Clearing cache** ensures Vite doesn't reuse cached modules
3. **Resetting index.html** removes references to old asset files
4. **Fresh build** compiles all source code into new assets with unique filenames

## Alternative: Hard Refresh

Sometimes a simple browser hard refresh works:
- **Chrome/Firefox**: `Ctrl+F5` or `Cmd+Shift+R`
- **Or**: Clear browser cache

## When to Use This Process

- Changes to components not showing up
- Old data still appearing after edits
- CV/resume links not updating
- Removed projects still visible
- Any time you suspect caching issues

## Normal Workflow

For regular development, just use `npm run dev` - it handles hot reloading automatically. Only use this process when things get "stuck" and changes aren't appearing.