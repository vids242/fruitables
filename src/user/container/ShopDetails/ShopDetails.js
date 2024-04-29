import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getreview } from '../../../redux/action/shopdetails.action';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { addToCart, decrementQty, incrementQty } from '../../../redux/slice/cart.slice';
import { Preview } from '@mui/icons-material';
// import { addToCart, decrementQty, incrementQty } from '../../../redux/slice/cart.slice';


function ShopDetails(props) {
    const { id } = useParams()
    const cart=useSelector((state)=>state.Carts)
    console.log(cart);
    // console.log(id);
    const dispatch = useDispatch()

    const  [count,setCount]= useState(1)

    const hendleInc = (id) => {
        setCount(Preview=>Preview +1)
      }
      const hendledec = (id) => {
       if(count>1){
        setCount(Preview=>Preview -1)

       }
      }
    const [fruits, setFruits] = useState([]);
    // console.log(fruits)

    const hendleaddtocart=()=>{
        dispatch(addToCart({id,count}))
    }
    const review = useSelector(state => state.review)
    // console.log(review.reviews);



    const getData = async () => {

        try {

            const response = await fetch("http://localhost:8000/fruites");
            const data = await response.json()


            const ans = data.find((v) => v.id === id)
            console.log(ans);
            setFruits(ans)
        } catch (error) {
            console.log(error.message);
        }
    }



    useEffect(() => {
        getData()
        dispatch(getreview())
    }, [])


    let reviewSchema = object({
        name: string().required(),
        email: string().required(),
        review: string().required()
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            review: ""
        },
        validationSchema: reviewSchema,

        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = formik


   
    return (
        <div>
            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Shop Detail</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Shop Detail</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Single Product Start */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            <img src={`../${fruits.image}`} className="img-fluid rounded" alt="Image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{fruits.fruite}</h4>
                                    <p className="mb-3">Category: Vegetables</p>
                                    <h5 className="fw-bold mb-3">${fruits.price}</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                    <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                    <div className="input-group quantity mb-5" style={{ width: 100 }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" 
                                              onClick={()=>hendledec()}
                                              >
                                                <i className="fa fa-minus" />
                                            </button>
                                        </div>
                                        <span className="form-control form-control-sm text-center border-0"   >
                                        
                                        {count}
                                            </span>
                                        <div className="input-group-btn">
                                            <button   className="btn btn-sm btn-plus rounded-circle bg-light border"
                                            onClick={()=>hendleInc()}
                                            >
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#"  onClick={hendleaddtocart} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                                Susp endisse ultricies nisi vel quam suscipit </p>
                                            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                                                icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                            <div className="px-2">
                                                <div className="row g-4">
                                                    <div className="col-6">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">1 kg</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Country of Origin</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Agro Farm</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Quality</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Organic</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Сheck</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Healthy</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Min Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">250 Kg</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                                amet diam et eos labore. 3</p>
                                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                                Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="text" name='name' id='name' className="form-control border-0 me-4" placeholder="Yur Name *"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                   
                                                    helperText={errors.name && touched.name ? errors.name : ""}
                                                />
                                                 {errors.name && touched.name ? <span>{errors.name}</span> : false}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="email" name='email' id='email' className="form-control border-0" placeholder="Your Email *"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    error={errors.email && touched.email ? true : false}
                                                    helperText={errors.email && touched.email ? errors.email : ""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                                                <textarea name="review" id='review' className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.review}
                                                    error={errors.review && touched.review ? true : false}
                                                    helperText={errors.review && touched.review ? errors.review : ""}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit">post review</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <div className="row g-4 fruite">
                                <div className="col-lg-12">
                                    <div className="input-group w-100 mx-auto d-flex mb-4">
                                        <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                                    </div>
                                    <div className="mb-4">
                                        <h4>Categories</h4>
                                        <ul className="list-unstyled fruite-categorie">
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
                                                    <span>(3)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
                                                    <span>(8)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <h4 className="mb-4">Featured products</h4>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded" style={{ width: 100, height: 100 }}>
                                            <img src="../img/featur-1.jpg" className="img-fluid rounded" alt="Image" />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded" style={{ width: 100, height: 100 }}>
                                            <img src="../img/featur-2.jpg" className="img-fluid rounded" alt />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded" style={{ width: 100, height: 100 }}>
                                            <img src="../img/featur-3.jpg" className="img-fluid rounded" alt />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                            <img src="../img/vegetable-item-4.jpg" className="img-fluid rounded" alt />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                            <img src="../img/vegetable-item-5.jpg" className="img-fluid rounded" alt />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start">
                                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                            <img src="../img/vegetable-item-6.jpg" className="img-fluid rounded" alt />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Big Banana</h6>
                                            <div className="d-flex mb-2">
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star text-secondary" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="d-flex mb-2">
                                                <h5 className="fw-bold me-2">2.99 $</h5>
                                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center my-4">
                                        <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="position-relative">
                                        <img src="../img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt />
                                        <div className="position-absolute" style={{ top: '50%', right: 10, transform: 'translateY(-50%)' }}>
                                            <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <>
                        <h4>Reviewe</h4>
                        {
                            review.reviews.map((v) => (
                                <div >
                                    <div >
                                        <h4>{v.name}</h4>
                                        <h5>{v.email}</h5>
                                        <p>{v.review}</p>
                                        <h2>{v.rating}</h2>
                                    </div>

                                </div>

                            ))
                        }
                    </>
                    <h1 className="fw-bold mb-0">Related products</h1>
                    <div className="vesitable">
                        <div className="owl-carousel vegetable-carousel justify-content-center">
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Parsely</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                                        <a
                                         href="#"
                                         onClick={hendleaddtocart}
                                         className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary">
                                            <i className="fa fa-shopping-bag me-2 text-primary"/>  
                                            
                                            Add to cart
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Parsely</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Banana</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Bell Papper</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Potatoes</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Parsely</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Potatoes</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>Vegetable</div>
                                <div className="p-4 pb-0 rounded-bottom">
                                    <h4>Parsely</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Product End */}
        </div>
    );
}

export default ShopDetails;