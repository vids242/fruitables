import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../../../redux/action/products.action';
import { decrementQty, deletedata, incrementQty } from '../../../redux/slice/cart.slice';
import { object, string, number, date, InferType } from 'yup';
import { Code, flag } from '@mui/icons-material';
import { useFormik } from 'formik';
import { getCoupon } from '../../../redux/slice/coupen.slise';




function Cart(props) {
  const cart = useSelector((state) => state.Carts);
  const products = useSelector((state) => state.products);
  const [discount, setDiscount] = useState('')



  // console.log(cart, products);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct())
    dispatch(getCoupon())
  }, [])



  const coupen = useSelector((state) => state.coupen);
  console.log(coupen);

  let coupenSchema = object({
    coupon: string().required()
  });


  const formik = useFormik({
    initialValues: {
      coupon: ""

    },
    validationSchema: coupenSchema,
    onSubmit: values => {
      handleCoupon(values)

    },

  });

  const handleCoupon = (data) => {
    let flag = 0;
    let discount = 0;
   let Shipping = 0;
    coupen.coupon.map((v) => {
      if (v.coupons === data.coupon) {
        const correntDate = new Date();

        const expiryDate = new Date(v.expiry);

        if (correntDate <= expiryDate) {
          flag = 1;
          // setDiscount(v.discount)
        } else {
          flag = 2;
        }
      }
    });

    if (flag === 0) {
      formik.setFieldError('coupon', "Invalid Coupon.")
    } else if (flag === 1) {
      formik.setFieldError('coupon', 'Coupon applied successfully' ` You got ${discount}% discount`);
    } else if (flag === 2) {
      formik.setFieldError('coupon', "Coupon is expired.")
    }

    if (total >= 500) {
      Shipping = 100
  }

    
  }
  const cartdata = cart.cart.map((v) => {
    // console.log(cart.cart);
    // console.log(v.pid);

    const productdata = products.product.find((v1) => v1.id === v.pid)
    console.log(productdata);
    return { ...productdata, qty: v.qty }


  })

  const total = cartdata.reduce((acc, v) => v.qty * v.price + acc,   0)
console.log(total);
  const discountVal = ((discount / 100).toFixed(2))
  const Total = (total - discountVal);


  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = formik;
 
  console.log(cartdata);

  //     const cartQuantity = cartData.reduce((acc, v) => v.quantity * v.price + acc, 0);

  const hendleInc = (id) => {
    dispatch(incrementQty(id))
  }
  const hendledec = (id) => {
    dispatch(decrementQty(id))
  }
  const hendledelete = (id) => {
    dispatch(deletedata(id))
  }
  // const cartfind =  cartdata.find((v)=>v.pid ===cart.id);
  // console.log(cartfind);
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                cartdata.map((v) => (


                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src={v.image} className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{v.name}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{v.price}$</p>
                    </td>
                    <td>
                      <div className="input-group quantity mt-4" style={{ width: 100 }}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                            onClick={() => hendledec(v.id)

                            }
                          >
                            <i className="fa fa-minus" />
                            {/* - */}
                          </button>
                        </div>
                        <span className="form-control form-control-sm text-center border-0">
                          {v.qty}

                        </span>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border"

                            onClick={() => hendleInc(v.id)

                            }
                          >
                            <i className="fa fa-plus" />
                            {/* + */}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{(v.price * v.qty).toFixed(2)} $</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => hendledelete(v.id)}>
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
        <div className="mt-5">


          <form onSubmit={handleSubmit}>
            <input
              name='coupon'
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
              value={values.coupon}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              errors.coupon && touched.coupon ? <span> {errors.coupon}</span> : null

            }

            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="submit"
            >Apply Coupon</button>
          </form>
        </div>
        <div className="row g-4 justify-content-end">
          <div className="col-8" />
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded">

              <div className="p-4">
                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">${total}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <div className>
                    <p className="mb-0">Flat rate: $3.00</p>
                  </div>
                </div>
                {/* <p className="mb-0 text-end">Shipping to Ukraine.</p> */}
              </div> 
              
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Discount:</h5>
                                        <p className="mb-0">${discountVal}</p>
                                    </div>
                                

              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>



                <p className="mb-0 pe-4">{Total}</p>
              </div>

              <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Cart;