import AxiosPackage from 'axios'

const BASE_URL = 'https://swapi.py4e.com/api/'

const Axios = AxiosPackage.create({
  baseURL: BASE_URL,
})

export default Axios
