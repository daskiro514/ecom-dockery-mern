import React from 'react'
import { connect } from 'react-redux'
import { getClientOrders } from '../../actions/admin'
import { getNotifications } from '../../actions/client'
import earning from '../../img/common/earning.png'
import { formatDateAndTimeInPDT, formatDate } from '../../utils/formatDate1'

const ClientStoreReport = ({ getClientOrders, clientID, clientOrders, getNotifications, notifications }) => {
  React.useEffect(() => {
    getClientOrders(clientID)
    getNotifications(clientID)
  }, [getClientOrders, getNotifications, clientID])

  return (
    <div className='admin-dashboard client-store-report'>
      <div className='h4 pt-2 pl-1'>
        Store Report
      </div>

      <div className='row pt-2'>
        <div className='col-lg-8'>
          <div className='bg-white m-1 mb-4 rounded-lg p-3'>
            <img src={earning} alt='EARNING' className='img-fluid' />
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='bg-white m-1 mb-4 rounded-lg p-3' style={{ minHeight: '90%' }}>
            <div className='h5'>
              Notifications
            </div>
            <ul>
              {notifications.map((item, index) =>
                <li key={index}>
                  {item.content} {formatDate(item.date)}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-white m-1 mb-4 rounded-lg'>
          <div className='p-3 h5'>
            Customer Store Statistics
          </div>
          <div className='p-2'>
            <div className='table-responsive table-customer-store-statistics'>
              <table className='table table-borderless'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Amazon Sale Price</th>
                    <th>Product Cost</th>
                    <th>Shipping Cost</th>
                    <th>Supplier Tax</th>
                    <th>Gross Profit</th>
                    <th>Amazon Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {clientOrders.map((item, index) =>
                    <tr key={index} className='table-row-customer-store-statistics-round'>
                      <td>{index + 1}</td>
                      <td>{formatDateAndTimeInPDT(item.date)}</td>
                      <td>{item.product}</td>
                      <td>{item.amazonSalePrice}</td>
                      <td>{item.productCost}</td>
                      <td>{item.shippingCost}</td>
                      <td>{item.supplierTax}</td>
                      <td>{item.grossProfit}</td>
                      <td>{item.amazonFees}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  clientID: state.auth.user._id,
  clientOrders: state.admin.adminClientOrders,
  notifications: state.client.notifications
})

export default connect(mapStateToProps, { getClientOrders, getNotifications })(ClientStoreReport)