# Addon Strimio — «SweetAlert Provider Bridge»

Proyecto de un addon para [Strimio](https://www.strimio.com/) (provider de catálogo libre + bridge de alertas SweetAlert2).

## Documentación del proyecto

| Fase | Documento | Descripción |
|---|---|---|
| F0 · Análisis | [`docs/reporte-analisis-tecnico.html`](docs/reporte-analisis-tecnico.html) | Stack tecnológico, tipos de addons, definición del addon elegido, requisitos (RF/RNF), criterios de aceptación, lenguaje, riesgos y estimación preliminar. |
| F1+ · Planificación | [`docs/roadmap.md`](docs/roadmap.md) · [`docs/roadmap.html`](docs/roadmap.html) | Roadmap completo: arquitectura, estructura de carpetas, dependencias, módulos con contratos, diagramas, backlog priorizado, WBS por fases con tareas y gates, cronograma, estimación (~58 pts / 14 sem + buffer ⇒ 16–17 sem), plan de pruebas, métricas/KPIs, riesgos y plan de releases. |

## Resumen ejecutivo

- **Addon:** tipo híbrido *Provider* + *Tool/UI*. Registra un proveedor de música de catálogo libre (Jamendo; Internet Archive como feature flag) y aporta alertas/modales accesibles integrados con el tema de Strimio.
- **Stack:** TypeScript estricto (ES2020/CJS), esbuild, SweetAlert2 bundled, Jest+jsdom, Playwright E2E, ESLint/Prettier, GitHub Actions.
- **Plan:** 5 fases (F1 preparación & spikes → F2 MVP alertas → F3 provider → F4 calidad & empaque → F5 release v1.0.0) con gates G1–G4 y política de poda del backlog *Could* ante deslizamientos.
- **Ver detalle completo en el roadmap.**
