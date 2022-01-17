import * as OrdersActionCreators from './orders'
import * as ClientsActionCreators from './clients'

export default {
    ...OrdersActionCreators,
    ...ClientsActionCreators
}