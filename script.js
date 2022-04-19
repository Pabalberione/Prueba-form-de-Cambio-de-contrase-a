/*function validarPass(){
    
    txtNewPass=document.getElementById('txtNewPass')
    txtRepPass=document.getElementById('txtRepPass')
    if(txtNewPass!=txtRepPass){
    console.log('Las contraseñas no son iguales')
    }
    else{
    console.log('Las contraseñas coinciden')
}
}*/
const form=document.getElementById('formCambio');
form.addEventListener('submit', function(event){
    event.preventDefault();
})
btnCambiarPass=document.getElementById('btnCambiarPass');
btnCambiarPass.onclick=()=>{
        
        txtNewPass=document.getElementById('txtNewPass');
        txtRepPass=document.getElementById('txtRepPass');
        if(txtNewPass.value!=txtRepPass.value){
        const txtError=document.getElementById('error');
        txtError.className='mostrar';
        txtError.id='';
        console.log(txtError);
        console.log('Las contraseñas no son iguales');
        
    }
        else{
        const txtError=document.getElementById('success');
        txtError.className='mostrar';
        txtError.id='';
        console.log(txtError);
        console.log('Las contraseñas coinciden');
    }
    
};


