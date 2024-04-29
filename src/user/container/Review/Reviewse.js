import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
// import { addReview } from '../../../redux/action/review.action';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, getReview } from '../../../redux/action/review.action';
import { Padding } from '@mui/icons-material';
import { useEffect } from 'react';


function Reviewse(props) {
    const dispatch = useDispatch()

    let reviewSchema = object({
        name: string().required(),
        email: string().email().required(),
        text: string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: '',
        },
        validationSchema: reviewSchema,
        onSubmit: values => {


        },
    });

    const { handleSubmit, handleBlur, handleChange, errors, values, touched } = formik

    const review = useSelector(state => state.review)
    console.log(review);

    useEffect(() => {
        dispatch(getReview())
    }, [])

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'email', headerName: 'Email', width: 130 },
        // { field: 'rating', headerName: 'Rating', width: 130 },
        { field: 'review', headerName: 'Review', width: 130 },
        {
            field: 'Action',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="Edit" size="large" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" onClick={() => handleDelet(params.row.id)} >
                        <DeleteIcon />
                    </IconButton>
                </>
            )

        },



    ];

    const handleEdit = () => {

    }
    const handleDelet = (id) => {
        console.log('fdfvgg');
    }


    return (
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5"></div>
                <form onClick={handleSubmit}>
                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                    <div className="row g-4">
                        <div className="col-lg-6" >
                            <div className="border-bottom rounded">
                                <input
                                    name='name'
                                    type="text"
                                    className="form-control border-0 me-4"
                                    placeholder="Yur Name *"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span>{errors.name && touched.name ? errors.name : ""} </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="border-bottom rounded" >
                                <input
                                    name='email'
                                    type="email"
                                    className="form-control border-0"
                                    placeholder="Your Email *"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span>{errors.email && touched.email ? errors.email : ""} </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="border-bottom rounded my-4">
                                <textarea
                                    name="text"
                                    className="form-control border-0"
                                    cols={30}
                                    rows={8}
                                    placeholder="Your Review *"
                                    spellCheck="false"
                                    defaultValue={""}
                                    value={values.text}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span>{errors.text && touched.text ? errors.text : ""} </span>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between py-3 mb-5">
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 me-3">Please rate:</p>
                                    <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                        <i className="fa fa-star text-muted" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                            </div>
                        </div>
                    </div>
                </form>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={review.reviews
                        }
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );``
}

export default Reviewse;