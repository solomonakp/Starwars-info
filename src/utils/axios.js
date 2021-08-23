import AxiosPackage from 'axios'

import { BASE_URL } from 'utils/constants'

const Axios = AxiosPackage.create({
  baseURL: BASE_URL,
})

export default Axios
