
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { object, string ,number,date} from 'yup';
import { object, string, number, date } from "yup";

import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Coupencode(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [update, setUpdate] = React.useState(null)


    let categorySchema = object({
        coupen_code: string().required("please enter name"),
        parsege: number().required().positive().integer(),
        expiry: date().required(),
        createdOn: date().default(() => new Date()),
       
    });

    const formik = useFormik({
        initialValues: {
            coupen_code: "",
            parsege: "",
           
             per: "",
         expiry: "",
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
        const localData = JSON.parse(localStorage.getItem("coupen"));

        if (localData) {
            setData(localData)
        }
    }

    React.useEffect(() => {
        getData();
    }, [])

    const handleAdd = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("coupen"));
        let rNo = Math.floor(Math.random() * 1000);

        if (localData) {
            localData.push({ ...data, id: rNo });
            localStorage.setItem("coupen", JSON.stringify(localData));
        } else {
            localStorage.setItem("coupen", JSON.stringify([{ ...data, id: rNo }]));
        }
        getData();
    }

    const { handleSubmit, handleChange, handleBlur, setValues, errors, touched, values } = formik

    const hendaldelet = (data) => {
        let localData = JSON.parse(localStorage.getItem("coupen"));

        let fdata = localData.filter((v) => v.id !== data.id)

        localStorage.setItem("coupen", JSON.stringify(fdata));

        getData()

    }

    const hendalEdit = (data) => {
        setOpen(true);
        setValues(data)
        setUpdate(data.id)
    }

    const hendalUpdateData = (data) => {
        let localData = JSON.parse(localStorage.getItem("coupen"));

        let index = localData.findIndex((v) => v.id === data.id)

        localData[index] = data

        localStorage.setItem("coupen", JSON.stringify(localData));

        getData()
    }
    
    const columns = [
        { field: "coupen_code", headerName: "coupen_code", width: 70 },
       { field: "per", headerName: "Per", width: 130 },
      { field: "expiry", headerName: "Expiry", width: 130 },
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
                  id="name"
                  name="coupen_code"
                  label="coupen_code"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.coupen_code}
                  error={touched.coupen_code && errors.coupen_code ? true : false}
                  helperText={
                    touched.coupen_code && errors.coupen_code ? errors.coupen_code : ""
                  }
                />
                <TextField
                  margin="dense"
                  id="name"
                  name="per"
                  label="Per"
                  type="number"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.per}
                  error={touched.per && errors.per ? true : false}
                  helperText={touched.per && errors.per ? errors.per : ""}
                />
                <TextField
                  margin="dense"
                  id="name"
                  name="expiry"
                  label="expiry"
                  type="date"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expiry}
                  error={touched.expiry && errors.expiry ? true : false}
                  helperText={
                    touched.expiry && errors.expiry ? errors.expiry : ""
                  }
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
                    pageSizeOptions={[5,10]}
                    checkboxSelection
                />
            </div>

        </div>
    );
}

export default Coupencode;