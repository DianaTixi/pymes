import Swal from 'sweetalert2';
import { logout } from '../store/auth/authSlice';

export function errorConexionDenied(error, dispatch) {
  if (
    error?.code == 'ERR_BAD_REQUEST' ||
    error?.code == 'ERR_CONNECTION_REFUSED' ||
    error?.code == 'ERR_NETWORK'
  ) {
    Swal.fire({
      title: 'Error conexión',
      text: 'Revisa tu conexión a internet y vuelve a intentarlo',
      icon: 'error'
    }).then((resp) => {
      if (resp.isConfirmed || resp.isDismissed) {
        localStorage.clear();
        dispatch(logout({ errorMessage: null }));
      }
    });
  }
}
