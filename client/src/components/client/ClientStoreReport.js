import React from 'react'
import { connect } from 'react-redux'
import earning from '../../img/common/earning.png'
import userAvatar from '../../img/common/userAvatar.png'

const ClientStoreReport = () => {

  return (
    <div className='admin-dashboard client-store-report'>
      <div className='h4 pt-2 pl-1'>
        Store Report
      </div>

      <div className='row pt-2'>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='bg-white m-1 mb-4 rounded-lg p-3'>
                <div className='d-flex justify-content-center align-items-center pb-2'>
                  <div className='border rounded-circle text-center mr-3 p-2'>
                    <i className='fa fa-shopping-cart' style={{ fontSize: '40px' }}></i>
                  </div>
                  <div>
                    <div>Total Sales</div>
                    <div className='h6'>$314K</div>
                    <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='bg-white m-1 mb-4 rounded-lg p-3'>
                <div className='d-flex justify-content-center align-items-center pb-2'>
                  <div className='border rounded-circle text-center mr-3 p-2'>
                    <i className='fa fa-shopping-cart' style={{ fontSize: '40px' }}></i>
                  </div>
                  <div>
                    <div>Total Sales</div>
                    <div className='h6'>$314K</div>
                    <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='bg-white m-1 mb-4 rounded-lg p-3'>
                <div className='d-flex justify-content-center align-items-center pb-2'>
                  <div className='border rounded-circle text-center mr-3 p-2'>
                    <i className='fa fa-bullhorn' style={{ fontSize: '40px' }}></i>
                  </div>
                  <div>
                    <div>Total Sales</div>
                    <div className='h6'>$15K</div>
                    <small className='text-danger'><i className='fa fa-arrow-down text-danger'></i> 9% Since last month</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='bg-white m-1 mb-4 rounded-lg p-3'>
                <div className='d-flex justify-content-center align-items-center pb-2'>
                  <div className='border rounded-circle text-center mr-3 p-2'>
                    <i className='fa fa-bullhorn' style={{ fontSize: '40px' }}></i>
                  </div>
                  <div>
                    <div>Total Sales</div>
                    <div className='h6'>$15K</div>
                    <small className='text-danger'><i className='fa fa-arrow-down text-danger'></i> 9% Since last month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='bg-white m-1 mb-4 rounded-lg p-3'>
            <img src={earning} alt='EARNING' className='img-fluid' />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-3'>
          <div className='bg-white m-1 mb-4 rounded-lg'>
            <div className='p-2'>
              <div className='h-auto border rounded-lg'>
                <span>
                  <i className='fa fa-search mx-2'></i>
                  <input placeholder='Search' className='border border-0' style={{ outline: 'none', width: '70%' }} />
                </span>
              </div>
            </div>
            <div className='px-2 h5'>
              Customer List
            </div>
            <div className='p-2'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) =>
                <div key={index} className='d-flex align-items-center pb-2'>
                  <img src={userAvatar} alt='userAvatar' className='rounded-circle mr-2' width='40px' />
                  <div style={{ lineHeight: '1' }}>
                    <div>Annette Black</div>
                    <small className='text-muted'>Annette@gmail.com</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='col-lg-9'>
          <div className='bg-white m-1 mb-4 rounded-lg'>
            <div className='p-3 h5'>
              Customer Store Statistics
            </div>
            <div className='p-2'>
              <div className='table-responsive table-customer-store-statistics'>
                <table className='table table-borderless'>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Sales</th>
                      <th>Record Point</th>
                      <th>Stock</th>
                      <th>Amount</th>
                      <th>Store Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((item, index) =>
                      <tr key={index} className='table-row-customer-store-statistics-round'>
                        <td>Joe Frank</td>
                        <td>854</td>
                        <td>08</td>
                        <td>447</td>
                        <td>$252.01</td>
                        <td className='have-length'>
                          <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
                        </td>
                      </tr>
                    )}
                    {[1, 2, 3, 4].map((item, index) =>
                      <tr key={index + 10} className='table-row-customer-store-statistics-round'>
                        <td>Sandy White</td>
                        <td>32</td>
                        <td>02</td>
                        <td>31</td>
                        <td>$36.07</td>
                        <td className='have-length'>
                          <small className='text-danger'><i className='fa fa-arrow-down text-danger'></i> 9% Since last month</small>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(ClientStoreReport)