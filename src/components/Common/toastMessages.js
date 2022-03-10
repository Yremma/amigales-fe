import Swal from 'sweetalert2';


export const ErrorToast = title => {
    Swal.mixin({        
        background: '#F8D7DA',
        position: 'center',
        showConfirmButton: false,        
        timer: 5000,
        toast: true,
    }).fire({
        icon: 'error',
        title
    })   
}


export const SuccessMessage = title => {
    Swal.mixin({        
        background: '#d4edda',
        position: 'center',
        showConfirmButton: false,        
        timer: 5000,
        toast: true,
    }).fire({
        icon: 'success',
        title
    })
}