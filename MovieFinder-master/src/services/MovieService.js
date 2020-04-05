import Api from '@/services/Api'

const movieServiceApikey = 'b40c4352'

export default {
  getUser (params) {
    return Api().get(
      '/?apikey=' + movieServiceApikey + '&t=' + params.movieTitle
    )
  }
}
