import db from './firebase/config';
import { retornaDocumentos } from './helpers/Mostrar-documentos';

const usuariosRef= db.collection('usuarios');


// select * from usuarios oder By nombre asc, salacio asc
usuariosRef
.orderBy('nombre')
.orderBy('salario')
.get().then( retornaDocumentos )