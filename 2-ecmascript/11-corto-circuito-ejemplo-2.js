const video = {
  id: 1,
  name: 'Pokemon Johto',
  metadata: { date: '14/03/2022', hour: '10:22', country: 'MX' },
  author: 'montoyitag',
  mediaInfo: { format: 'mp4', quality: 'media' },
  ranking: { 
    likes: 0, 
    comments: [], 
    isPlatinum: {
      exists: true,
      date: '',
      suscriptores: 200,
      address: {
        street: '',
        no: '',
        countryData: {
          country: '',
          state: ''
        },
        receiver: {
          name: {
            name: 'fedelobo',
            app: '',
            apm: '',
          }
        }
      }
  }, 
   isGolden: false, 
   views: 0 
  },
  category: {
    name: 'Publico en general',
    type: {
       genre: 'anime',
    }
  }
};

// if (video !== null && video !== undefined && video !== 0 && video !== ''  && video !== false && video.ranking !== null && video.ranking !== undefined && video.ranking !== 0 && video.ranking !== ''  && video.ranking !== false && video.ranking.isPlatinum !== null && video.ranking.isPlatinum !== undefined && video.ranking.isPlatinum !== 0 && video.ranking.isPlatinum !== ''  && video.ranking.isPlatinum !== false) {

if (video && video.ranking && video.ranking.isPlatinum) { // false Y 0 se considera que "no existen"
  console.log('¿Envio la placa a platino?', video.ranking.isPlatinum);  
} else {
  console.log('excepcion contralada')
}


// if (video && video.ranking && video.ranking.isPlatinum && video.ranking.isPlatinum.address && video.ranking.isPlatinum.address.receiver
   // && video.ranking.isPlatinum.address.receiver.name && video.ranking.isPlatinum.address.receiver.name.name) { // false Y 0 se considera que "no existen"
if (video?.ranking?.isPlatinum?.address?.receiver?.name?.name) {
  console.log('Receptor de la placa', video.ranking.isPlatinum.address.receiver.name.name);  
} else {
  console.log('no hay a quien enviar')
}