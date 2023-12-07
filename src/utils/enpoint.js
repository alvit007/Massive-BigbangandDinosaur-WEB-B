const BASE_URL = "http://195.35.14.176:5000/api"

const ENDPOINT = {
  getMahasiswa: `${BASE_URL}/v1/mahasiswa`,
  getMahasiswaById(id) {
    return `${BASE_URL}/v1/mahasiswabyid/${id}`
  },
  getDosen: `${BASE_URL}/v1/dosen`,
  getDosenById(id) {
    return `${BASE_URL}/v1/dosenbyid/${id}`
  },
  getJadwalPresensiById(id) {
    return `${BASE_URL}/v1/jadwalbyid/${id}`
  }
}

export default ENDPOINT