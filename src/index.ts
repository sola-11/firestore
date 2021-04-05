import db from './firebase/config';

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

usuariosRef
.onSnapshot( snap => {
    
      const usuarios: any[]= [];

    snap.forEach( snapHijo => {
     usuarios.push ({
      id: snapHijo.id,
      ...snapHijo.data()
    
    });
});

    console.log(usuarios)
})
