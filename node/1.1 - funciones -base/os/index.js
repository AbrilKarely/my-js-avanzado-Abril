const os = require ("os");

console.log("version detallada del sistema:" , os.version());
console.log('Nombre de la versión del sistema: ', os.platform());
console.log('Numero de la versión del sistema:' + os.release());

console.log('arquitectura: ',os.arch()); 
console.log('Número de procesadores lógicos:' + os.cpus().length);
console.log('Información acerca de los cpus: ', os.cpus());
console.log('memoria libre en bytes', os.freemem()); 
console.log('carpeta del usuario actual: ', os.homedir()); 
console.log('mi direccion ip o mi hostname (local): ', os.hostname()); 
