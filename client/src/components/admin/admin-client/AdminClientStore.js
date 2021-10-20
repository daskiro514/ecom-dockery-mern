import React from 'react'
import { connect } from 'react-redux'
import soccerBall from '../../../img/common/soccerBall.png'
import DeniReactTreeView from 'deni-react-treeview'
import { formatCategories } from '../../../utils/formatCategories'
import readXlsxFile from 'read-excel-file'

const AdminClientStore = () => {
  const fileInputW9Ref = React.useRef()

  const [excelFile, setExcelFile] = React.useState([])
  const [orders, setOrders] = React.useState([])

  const excelToJson = file => {
    setExcelFile(excelFile)
    readXlsxFile(file).then((rows) => {
      var outRows = []
      rows.forEach((row, index) => {
        if (index < 3) return
        if (row[0] === null && row[0] === null) return
        var outRow = {
          date: new Date(row[0]),
          product: row[1],
          amazonSalePrice: row[2],
          productCost: row[3],
          shippingCost: row[4],
          supplierTax: row[5],
          grossProfit: row[6],
          amazonFees: row[7],
          adminFees: row[8],
          netProfit: row[9],
          shipStatus: row[10],
          refunded: row[11],
          shipperName: row[12],
          walmartOrder: row[13],
          amazonOrderID: row[14],
          notes: row[15],
          amazonTax: row[16],
          returnLabelFees: row[17],
          amazonRefundAudit: row[18],
          amazonOrderIdTotalAudit: row[19],
          refundLabelAudit: row[20],
          adminFeeFormula: row[21],
        }
        outRows.push(outRow)
      })
      setOrders(outRows)
    })
  }


  return (
    <div className='admin-client-store'>
      <div className='p-3 bg-white rounded-lg'>
        <div className='h5'>
          Excel File Content
        </div>
        <div className='table-responsive table-client-store'>
          <table className='table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Product</th>
                <th>Amazon Sale Price</th>
                <th>Product Cost</th>
                <th>Shipping Cost</th>
                <th>Supplier Tax</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => 
                <tr key={index}>
                  <td>{index}</td>
                  <td>{String(item.date)}</td>
                  <td>{item.product}</td>
                  <td>{item.amazonSalePrice}</td>
                  <td>{item.productCost}</td>
                  <td>{item.shippingCost}</td>
                  <td>{item.supplierTax}</td>
                  <td>...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-3 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='h5'>
              Item Management
            </div>
            <div>
              <DeniReactTreeView items={formatCategories()} />
            </div>
          </div>
        </div>
        <div className='col-lg-9 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='h5'>
              Shop Management
            </div>
            <div className='text-right'>
              <button
                className='btn btn-light shadow mb-3'
                onClick={() => fileInputW9Ref.current.click()}
              >
                <i className='fa fa-cloud-upload mr-2'></i>
                Upload Spreadsheet
              </button>
              <input
                type='file'
                className='file excel-importer'
                id="excelImporter"
                onChange={e => excelToJson(e.target.files[0])}
                value={excelFile}
                ref={fileInputW9Ref}
                required
              />
            </div>
            <div className='table-responsive table-client-store'>
              <table className='table table-borderless'>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Sales</th>
                    <th>Record Point</th>
                    <th>Stock</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((item, index) =>
                    <tr key={index} className='table-row-customer-store-statistics-round'>
                      <td>Joe Frank</td>
                      <td><img src={soccerBall} alt='PRODUCT' height='50px' width='70px' /></td>
                      <td>854</td>
                      <td>08</td>
                      <td>447</td>
                      <td>$252.01</td>
                      <td>
                        <button className='btn btn-sm border'>edit order</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border border-4 border-light-green rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-shopping-cart' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div className='h6'>Trending Item</div>
                <div className='h5'>Really Good</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-shopping-cart' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div>Trending Item</div>
                <div className='h6'>Soccer Ball</div>
                <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-shopping-cart' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div>Most Sold Item</div>
                <div className='h6'>Fishing Rod</div>
                <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-shopping-cart' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div>Total Sales</div>
                <div className='h6'>$984K</div>
                <small className='text-success'><i className='fa fa-arrow-up text-success'></i> 9% Since last month</small>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-bullhorn' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div>Total Sales</div>
                <div className='h6'>$15K</div>
                <small className='text-danger'><i className='fa fa-arrow-down text-danger'></i> 9% Since last month</small>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <div className='p-3 bg-white rounded-lg'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='border rounded-circle text-center mr-4 p-2'>
                <i className='fa fa-bullhorn' style={{ fontSize: '45px' }}></i>
              </div>
              <div className='ml-3'>
                <div>Total Sales</div>
                <div className='h6'>$15K</div>
                <small className='text-danger'><i className='fa fa-arrow-down text-danger'></i> 9% Since last month</small>
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

export default connect(mapStateToProps, {})(AdminClientStore)