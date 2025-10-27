# 🧩 ExtJS Classic Type Definitions (Unofficial)

**Target:** ExtJS Classic 7.9.0.35
**Created by:** Schematic Dreamers, 2025

A lightweight TypeScript layer for ExtJS Classic that adds **type safety**, **autocomplete**, and **inline visual docs**—making ExtJS development predictable again.

---

## 🚨 The Problem

ExtJS swallows invalid configs silently. A single typo can cost hours.

```js
Ext.create('Ext.panel.Panel', {
    title: 'My Panel',
    autoload: true // ❌ silently ignored; correct is `autoLoad`
});
```

No error, just broken behavior.

---

## 💡 The Goal

* Catch config typos at compile time.
* Provide autocomplete for common Ext properties.
* Show each component’s **HTML structure** on hover.
* Work in both `.ts` and `.js` (`"checkJs": true`).
* Stay minimal, readable, and easy to extend.

---

## ✅ The Solution

```js
Ext.create('Ext.panel.Panel', {
    title: 'My Panel',
    autoload: true // ❌ "Property 'autoload' does not exist. Did you mean 'autoLoad'?"
});
```

Hovering `PanelConfig` shows a visual DOM outline, e.g.:

```html
<div class="{cls} {overCls}">
    <div class="{baseCls}-bodyWrap">
        <header class="{baseCls}-header">{title}</header>
        <div class="{baseCls}-body {bodyCls}" style="{bodyStyle}">
            {items}
        </div>
        <footer class="{baseCls}-bbar">{bbar}</footer>
    </div>
</div>
```

Which might be overkill for what you are doing, perhaps you realize that when you hover over `ContainerConfig` instead:

```html
<div class="{cls} {overCls}">
    <div class="{containerCls} {layoutCls}">
        {items}
    </div>
</div>
```
Result: you can choose the lightest component (maybe a `Container`) instead of adding an unnecessary `Panel`. Also, you can easily see which class goes where in the html structure.


---

## 🧠 How It Works

A global map ties Ext class names to their config types:

```ts
interface ExtTypeMap {
  "Ext.Component": ComponentConfig;
  "Ext.Container": ContainerConfig;
  "Ext.panel.Panel": PanelConfig;
  // add more…
}
```

A single, strong `Ext.define` signature uses the map to validate configs:

```ts
function define<P extends string, E extends string>(
    path: P,
    config: E extends keyof ExtTypeMap
        ? { extend: E } & ExtTypeMap[E]
        : Record<string, any>
): void;
```

`extend` must be a known key. If the extended type does not exist in the map, `config` falls back to `Record<string, any>`.
This means that if you extend a sencha class your component will have typechecking, but if you extend a custom component then you will not (unless you add that one to the map yourself).


---

## 🧱 How to Add New Configs

1. **Create the config interface**

```ts
/**
 * <div class="{cls}">
 *   <table class="{gridCls}">
 *     <thead>{columns}</thead>
 *     <tbody>{rows}</tbody>
 *   </table>
 * </div>
 */
interface GridConfig extends PanelConfig {
  store?: any;
  columns?: any[];
  selModel?: object;
  sortableColumns?: boolean;
}
```

2. **Register it in the map**

```ts
declare namespace Ext {
  interface ExtTypeMap {
    "Ext.grid.Panel": GridConfig;
  }
}
```

3. **Use it**

```js
Ext.define('MyGrid', {
  extend: 'Ext.grid.Panel',
  columns: [{ text: 'Name' }],
  store: {},
  colums: [] // ❌ typo is flagged
});
```

---

## 🧩 Extending Your Own Bases

Augment the map (no edits to core files):

```ts
declare namespace Ext {
  interface ExtTypeMap {
    "MyApp.view.BasePanel": MyBasePanelConfig;
  }
}
```

---

## ⚙️ Guidelines for Adding Types

* Prioritize **common configs** (Component, Container, Panel, Grid, Form).
* Add a **JSDoc HTML outline** to each interface.
* Feel free to use any/unknown types for stubbing complex parts out, we still get plenty of value from typing the easy stuff.
* If you see someone has used any/unknown feel free to fill in more accurate types.
* Disallow confusing/fragile configs (e.g., `defaults`, `baseCls`, `componentCls`).

---

## 🧰 Project Setup

```
/types/ext/         # .d.ts files (no exports)
app/tsconfig.json   # local, JS-friendly TS config
```

`app/tsconfig.json`:

```json
{
  "allowJs": true,
  "checkJs": true,
  "include": ["**/*/.ts", "**/*.js", "../../types/**/*.d.ts"]
}
```

* If there are js code you don't want to typecheck, just put the tsconfig further down the folder tree so it doesn't include those files.
* Check that the include paths are correct relative to your tsconfig file.

---

## 📈 Why This Helps

* ExtJS stops being a black box.
* You can **hover and see** what each component renders.
* You choose the smallest correct component (e.g., `Container` vs `Panel`).
* Typos and wrong configs fail fast—before runtime.

---

## 🏁 TL;DR

| Without Types          | With This Project                     |
| ---------------------- | ------------------------------------- |
| Silent config failures | Compile-time errors with hints        |
| No autocomplete        | Context-aware suggestions             |
| Guessing DOM output    | Hover to see HTML structure           |
| Over-nesting Panels    | Choose lighter components confidently |

> ExtJS won’t tell you when you’re wrong.
> Now it finally does.
