import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { object, string, number, date } from "yup";
import { useFormik } from "formik";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { coupenadd, deleteCoupon, editCoupon, getCoupon,  } from "../../../redux/slice/coupen.slise";
// import { addCoupon, coupenadd, deleteCoupon, editCoupon } from "../../../redux/slice/coupen.slise";



function Contect(props) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const coupen = useSelector((state) => state.coupen);
  console.log(coupen);

    useEffect(() => {
    dispatch(getCoupon());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (data) => {
    formik.setValues(data);
    setEdit(true);
    setOpen(true);
  };

//   const handleDelete = (id) => {
//     dispatch(deleteCoupon(id));
//   };

  const columns = [
    { field: "contect", headerName: "contect", width: 70 },
    { field: "name", headerName: "Per", width: 130 },
    { field: "phone", headerName: "Expiry", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: ({ row }) => (
        <>
          <IconButton onClick={() => handleEdit(row)} variant="contained">
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => handleDelete(row.id)} variant="contained">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  let contectSchema = object({
    contect: string().required(),
    name: number().required().positive().integer(),
    phone: date().required(),
    createdOn: date().default(() => new Date()),
  });

  const formik = useFormik({
    initialValues: {
      contect: "",
      name: "",
      phone: "",
    },
    validationSchema: contectSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (edit) {
        dispatch(editCoupon(values));

      } else {
      
      }
   
      resetForm();
      handleClose();
    },
  });

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    formik;
  return (
    <>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Coupon
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Coupon</DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                id="name"
                name="contect"
                label="contect "
                type="nuber"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contect}
                error={touched.contect && errors.contect ? true : false}
                helnameText={
                  touched.contect && errors.contect ? errors.contect : ""
                }
              />
              <TextField
                margin="dense"
                id="name"
                name="name"
                label="name"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name ? true : false}
                helnameText={touched.name && errors.name ? errors.name : ""}
              />
              <TextField
                margin="dense"
                id="name"
                name="phone"
                label="phone"
                type="nuber"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                error={touched.phone && errors.phone ? true : false}
                helnameText={
                  touched.phone && errors.phone ? errors.phone : ""
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>

   
    </>
  );
}

export default Contect;


{/* <div style={{ height: 400, width: "100%" }}>
<DataGrid

  rows={coupen.contect}
  columns={columns}
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
/>
</div> */}