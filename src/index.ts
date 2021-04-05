import db from './firebase/config';
import { retornaDocumentos } from './helpers/Mostrar-documentos';

const usuario={
    nombre: 'Josua',
    activo: true,
    fechaNaci: 0
    
}
const usuariosRef= db.collection('usuarios');

 //db.collection('usuarios')
 // .add(usuario )
 // .then( docRef => {
 //     console.log( docRef )
 // })
//  .catch( e => console.log( 'error' , e ))




//usuariosRef
// .doc('8VtQbf8xeakjjk3YRePL')
// .update({
//     activo: true
// });


//destructivo
//usuariosRef
// .doc('8VtQbf8xeakjjk3YRePL')
// .set({
//     activo: true,
//     edad:44
// });


//delete from usuarios where id='xx'

//usuariosRef
//.doc('8VtQbf8xeakjjk3YRePL')
//.delete()
//.then( resp => console.log('Borrado') )
//.catch( e => console.log('error' , e ));

//select * from usuario;

//usuariosRef
//.onSnapshot( retornaDocumentos )

//usuariosRef
//.get().then(  retornaDocumentos );

/*
select * from usuario
 where activo= true
*/

//usuariosRef.where('activo' , '==' , true).get().then(  retornaDocumentos );


/*
select * from usuario
 where salario > 1800
*/

//usuariosRef.where('salario' , '>' , 1800)
//.get().then(  retornaDocumentos );



/*
select * from usuario
 where salario > 1300 and salario < 2500
*/

//usuariosRef.where('salario' , '>=' , 1800)
//.where('salario', '<=', 2500)
//.get().then(  retornaDocumentos );


/*
select * from usuario
 where salario > 1800 
 And activo == true
 */

usuariosRef.where('salario' , '>=' , 1800)
.where('activo', '==', true)
.get().then(  retornaDocumentos );
