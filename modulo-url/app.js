const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log('hostname: ', miURL.hostname) // www.ejemplo.org
console.log('pathname: ', miURL.pathname) // /cursos/programacion
console.log('search: ', miURL.search) // ?ordenar=vistas&nivel=1
console.log('searchParams: ', miURL.searchParams) // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar')) // vistas