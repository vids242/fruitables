import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';





function Category(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [update, setUpdate] = React.useState(null)


    let categorySchema = object({
        category_name: string().required("please enter name"),
        category_description: string().required("please enter discription").min(5, "please enter minimum 5 charactore")

    });

    const formik = useFormik({
        initialValues: {
            category_name: "",
            category_description: ""
        },

        validationSchema: categorySchema,

        onSubmit: (values, { resetForm }) => {
            if (update) {
                hendalUpdateData(values)
            } else {
                handleAdd(values)
            }
            resetForm()
            handleClose()

        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm()
        setUpdate(null)
    };

    const getData = () => {
        const localData = JSON.parse(localStorage.getItem("category"));

        if (localData) {
            setData(localData)
        }
    }

    React.useEffect(() => {
        getData();
    }, [])

    const handleAdd = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("category"));
        let rNo = Math.floor(Math.random() * 1000);

        if (localData) {
            localData.push({ ...data, id: rNo });
            localStorage.setItem("category", JSON.stringify(localData));
        } else {
            localStorage.setItem("category", JSON.stringify([{ ...data, id: rNo }]));
        }
        getData();
    }

    const { handleSubmit, handleChange, handleBlur, setValues, errors, touched, values } = formik

    const hendaldelet = (data) => {
        let localData = JSON.parse(localStorage.getItem("category"));

        let fdata = localData.filter((v) => v.id !== data.id)

        localStorage.setItem("category", JSON.stringify(fdata));

        getData()

    }

    const hendalEdit = (data) => {
        setOpen(true);
        setValues(data)
        setUpdate(data.id)
    }

    const hendalUpdateData = (data) => {
        let localData = JSON.parse(localStorage.getItem("category"));

        let index = localData.findIndex((v) => v.id === data.id)

        localData[index] = data

        localStorage.setItem("category", JSON.stringify(localData));

        getData()
    }
    
    const columns = [
        { field: 'category_name', headerName: 'Name', width: 130 },
        { field: 'category_description', headerName: 'Description', width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => hendalEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => hendaldelet(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )


        },

    ];

    return (
        <div>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Category
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Category</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                id="category_name"
                                name="category_name"
                                label="Category Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.category_name}
                                error={errors.category_name && touched.category_name ? true : false}
                                helperText={errors.category_name && touched.category_name ? errors.category_name : ""}

                            />
                            <TextField
                                margin="dense"
                                id="category_description"
                                name="category_description"
                                label="Category Description"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.category_description}
                                error={errors.category_description && touched.category_description ? true : false}
                                helperText={errors.category_description && touched.category_description ? errors.category_description : ""}
                            />
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">{update ? "Update" : "Add"}</Button>
                            </DialogActions>
                        </DialogContent>
                    </form>
                </Dialog>
            </React.Fragment>

            <div style={{ width: '100%' }}>
                <DataGrid
                    rows={data}
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
    );
}

export default Category;






// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { object, string, number, date } from "yup";
// import { useFormik } from "formik";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCoupon,
//   deleteCoupon,
//   editCoupon,
//   getCoupon,
// } from "../../../Redux/slice/counpon.slice";

// function Coupon(props) {
//   const [open, setOpen] = React.useState(false);
//   const [edit, setEdit] = useState(false);
//   const dispatch = useDispatch();

//   const coupon = useSelector((state) => state.coupon);
//   console.log(coupon);

//   useEffect(() => {
//     dispatch(getCoupon());
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     formik.resetForm();
//     setEdit(false);
//   };

//   const handleEdit = (data) => {
//     formik.setValues(data);
//     setEdit(true);
//     setOpen(true);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteCoupon(id));
//   };

//   const columns = [
//     { field: "coupon", headerName: "Coupon", width: 70 },
//     { field: "per", headerName: "Per", width: 130 },
//     { field: "expiry", headerName: "Expiry", width: 130 },
//     {
//       field: "Action",
//       headerName: "Action",
//       width: 150,
//       renderCell: ({ row }) => (
//         <>
//           <IconButton onClick={() => handleEdit(row)} variant="contained">
//             <EditIcon />
//           </IconButton>

//           <IconButton onClick={() => handleDelete(row.id)} variant="contained">
//             <DeleteIcon />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   let couponSchema = object({
//     coupon: string().required(),
//     per: number().required(),
//     expiry: date().required(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       coupon: "",
//       per: "",
//       expiry: "",
//     },
//     validationSchema: couponSchema,
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       if (edit) {
//         dispatch(editCoupon(values));
//       } else {
//         dispatch(addCoupon(values));
//       }
//       resetForm();
//       handleClose();
//     },
//   });

//   const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
//     formik;
//   return (
//     <>
//       <React.Fragment>
//         <Button variant="outlined" onClick={handleClickOpen}>
//           Coupon
//         </Button>
//         <Dialog open={open} onClose={handleClose}>
//           <form onSubmit={handleSubmit}>
//             <DialogTitle>Coupon</DialogTitle>
//             <DialogContent>
//               <TextField
//                 margin="dense"
//                 id="name"
//                 name="coupon"
//                 label="Coupon Code"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.coupon}
//                 error={touched.coupon && errors.coupon ? true : false}
//                 helperText={
//                   touched.coupon && errors.coupon ? errors.coupon : ""
//                 }
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 name="per"
//                 label="Per"
//                 type="number"
//                 fullWidth
//                 variant="standard"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.per}
//                 error={touched.per && errors.per ? true : false}
//                 helperText={touched.per && errors.per ? errors.per : ""}
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 name="expiry"
//                 label="expiry"
//                 type="date"
//                 fullWidth
//                 variant="standard"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.expiry}
//                 error={touched.expiry && errors.expiry ? true : false}
//                 helperText={
//                   touched.expiry && errors.expiry ? errors.expiry : ""
//                 }
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//               <Button type="submit">{edit ? "update" : "Add"}</Button>
//             </DialogActions>
//           </form>
//         </Dialog>
//       </React.Fragment>

//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={coupon.coupon}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </div>
//     </>
//   );
// }

// export default Coupon;