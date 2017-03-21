import { callApi } from '../helpers'
import env from '../../../../env'

export default {
    getData: params => {
        return callApi(`/url`, {
                headers: {
                    'Authorization': 'Basic ' + btoa('username:password')
                },
                method: 'get',
        }).then((res) => {
            return res.response
        })
    },

}
