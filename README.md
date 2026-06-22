# Reporte de Ingresos y Gastos

Pequeña aplicación web para visualizar un listado de ingresos y gastos, filtrar y ordenar entradas, y ver un gráfico sencillo comparando totales.

## Características

- Mostrar tabla de registros (fecha, concepto, valor, tipo).
- Filtrar por `Ingreso` o `Gasto`.
- Ordenar por fecha o monto.
- Gráfico simple en `canvas` con barras de ingresos (verde) y gastos (rojo).

## Requisitos

- Node.js y npm (opcional, solo para servir la carpeta con `live-server`).

## Instalar y ejecutar

1. Instalar dependencias (opcional, solo si quieres usar `npm start`):

```bash
npm install
```

2. Iniciar el servidor de desarrollo (abre la URL que indique la consola):

```bash
npm start
```

Alternativamente, puedes abrir `index.html` directamente en tu navegador.

## Estructura de archivos

- `index.html`: Interfaz principal y botones de control.
- `style.css`: Estilos básicos de la interfaz.
- `script.js`: Lógica para renderizar la tabla, filtros, orden y dibujo del gráfico.

## Uso rápido

- Haz clic en `Ver Ingresos` o `Ver Gastos` para filtrar.
- Usa los botones de ordenar para cambiar el orden por fecha o monto.
- El gráfico se actualiza según los registros visibles.

## Modificar datos

Los datos están en `script.js` en la variable `datos`. Puedes agregar, quitar o editar objetos con la forma:

```js
{ fecha: 'YYYY-MM-DD', valor: 123, concepto: 'Descripción', tipo: 'Ingreso' }
```

## Contribuciones

Pull requests bienvenidas. Abre un issue para discutir cambios grandes.

## Licencia

Proyecto con licencia MIT.

---
Autora: Sandra Córdoba
# income-expense-report
income expense reoprt
