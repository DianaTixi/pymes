export const getLocationUser = async (lat, log) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert('No se pudo obtener las coordenadas');
        console.log(err);
        reject();
      }
    );
  });
  await promise;
};

export const coordenadadLocalizacion = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Longitud: ', position.coords.longitude);
      console.log('Latitud: ', position.coords.latitude);
    });
  } else {
    alert('Tu navegador no cuenta con la geolocalizacion');
  }
};
