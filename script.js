const datos = [
    {fecha: '2024-01-01', valor: 100, concepto: 'Venta productos', tipo: 'Ingreso'},
    {fecha: '2024-01-02', valor: 150, concepto: 'Compra insumos', tipo: 'Gasto'},
    {fecha: '2024-01-03', valor: 200, concepto: 'Venta servicios', tipo: 'Ingreso'},
    {fecha: '2024-01-04', valor: 250, concepto: 'Gasto operativo', tipo: 'Gasto'},
    {fecha: '2024-01-05', valor: 300, concepto: 'Venta productos', tipo: 'Ingreso'}
];

const tbody = document.querySelector('tbody');
const ctx = document.getElementById('grafico').getContext('2d');

function mostrarTabla(lista) {
    tbody.innerHTML = '';
    lista.forEach(d => {
        const fila = `<tr>
            <td>${d.fecha}</td>
            <td>${d.concepto}</td>
            <td>${d.valor}</td>
            <td>${d.tipo}</td>
        </tr>
        `;
        tbody.innerHTML += fila;
    });
    dibujarGrafico(lista);
}
function filtrar(tipo) {
    const filtrados = datos.filter(d => d.tipo === tipo);
    mostrarTabla(filtrados);
}
function mostrarTodos() {
    mostrarTabla(datos);
}
function ordenarporMonto() {
    const ordenados = [...datos].sort((a, b) => a.valor - b.valor);
    mostrarTabla(ordenados);
}
function ordenarporFecha() {
    const ordenados = [...datos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    mostrarTabla(ordenados);
}
function dibujarGrafico(lista) {
    const ingresos = lista.filter(d => d.tipo === 'Ingreso').reduce((acc, d) => acc + d.valor, 0);
    const gastos = lista.filter(d => d.tipo === 'Gasto').reduce((acc, d) => acc + d.valor, 0);
    // Limpiar el canvas usando sus dimensiones reales
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Escalar las barras según el mayor valor para que quepan en el canvas
    const paddingBottom = 30;
    const paddingTop = 10;
    const availableHeight = ch - paddingTop - paddingBottom;
    const maxVal = Math.max(ingresos, gastos, 1);
    const scale = availableHeight / maxVal;

    const ingresosH = ingresos * scale;
    const gastosH = gastos * scale;

    // Dibujar barras
    ctx.fillStyle = 'green';
    ctx.fillRect(50, ch - paddingBottom - ingresosH, 50, ingresosH);
    ctx.fillStyle = 'red';
    ctx.fillRect(150, ch - paddingBottom - gastosH, 50, gastosH);

    // Etiquetas
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Ingresos', 75, ch - 5);
    ctx.fillText('Gastos', 175, ch - 5);
}
mostrarTodos();





