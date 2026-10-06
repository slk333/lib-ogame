# lib-ogame demo

Standalone browser-only React + TypeScript + Vite app with declarative React Router (`BrowserRouter`, `Routes`, `Route`). Native HTML controls styled with [mini-ui-css](https://github.com/slk333/mini-ui-css/tree/master/src).

`mini.css` is a local, unmodified concatenation of the five upstream source stylesheets at commit `9d1328c90a1de6ec30814da67e84b391dd7808bf`, in the upstream build order. It includes its own reset and matches upstream's built `public/global.css` byte for byte. `layout.css` adds form spacing, consistent field placement, and responsive widths; control colors, borders, typography, and interaction styles come from mini-ui-css.

The demo imports `@slk333/lib-ogame` from npm. There are no imports or aliases to the repository's library source. The package lock records the installed release (2.6.0).

```sh
cd demo
npm install
npm run dev
```

Optional production build: `npm run build`. Preview that build with `npm run preview`.

Separate Structures Costs and Shipyard Costs tabs cover structure upgrades and ship/defense costs and build times. Production covers mines, and Flight & Cargo covers speed, flight time, distance, and cargo capacity. Click Calculate after changing inputs. Outputs retain raw library values; errors are displayed. Quantity totals and hourly/daily production are simple multiplications of library results.

The separate Debug tab contains collapsed sections for resource helpers, Planet JSON calculations, formatting, and random temperature.

Mine production supports economy speed, plasma technology, and maximum temperature. The flight-time function assumes nine galaxies internally; the separate distance calculation accepts a galaxy count.

No server components, linter, formatter, or tests are configured. For production hosting, configure a fallback to `index.html` for BrowserRouter routes.
