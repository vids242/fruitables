import React from 'react';

function Review(props) {
    return (
        <div>
            <h2>review page</h2>
        </div>
    );
}

export default Review;



// import { Box, IconButton } from "@mui/material";
// import React, { useContext } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { ThemeContext } from "../../../context/ThemeContext";

// function Header(props) {
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);

//   const totalCartQty = cart.cart.reduce((acc, v) => acc + v.qty, 0);

//   const themeContext = useContext(ThemeContext);
//   console.log(themeContext);

//   const handleTheme = () => {
//     themeContext.toggleTheme(themeContext.theme);
//   };

//   return (
//     <div>
//       {/* Navbar start */}
//       <div className={`container-fluid fixed-top ${themeContext.theme}`}>
//         <div className="container topbar  d-none d-lg-block bg-primary">
//           <div className="d-flex justify-content-between">
//             <div className="top-info ps-2">
//               <small className="me-3">
//                 <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
//                 <a href="#" className="text-white">
//                   123 Street, New York
//                 </a>
//               </small>
//               <small className="me-3">
//                 <i className="fas fa-envelope me-2 text-secondary" />
//                 <a href="#" className="text-white">
//                   Email@Example.com
//                 </a>
//               </small>
//             </div>
//             <div className="top-link pe-2">
//               <a href="#" className="text-white">
//                 <small className="text-white mx-2">Privacy Policy</small>/
//               </a>
//               <a href="#" className="text-white">
//                 <small className="text-white mx-2">Terms of Use</small>/
//               </a>
//               <a href="#" className="text-white">
//                 <small className="text-white ms-2">Sales and Refunds</small>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="container px-0">
//           <nav className="navbar navbar-light navbar-expand-xl">
//             <a href="index.html" className="navbar-brand">
//               <h1 className="text-primary display-6">Fruitables</h1>
//             </a>
//             <button
//               className="navbar-toggler py-2 px-3"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             >
//               <span className="fa fa-bars text-primary" />
//             </button>
//             <div className={`collapse navbar-collapse`} id="navbarCollapse">
//               <div className={`navbar-nav mx-auto `}>
//                 <NavLink to="/" className="nav-item nav-link active">
//                   Home
//                 </NavLink>
//                 <NavLink to="/shop" className="nav-item nav-link active">
//                   Shop
//                 </NavLink>
//                 <NavLink
//                   to="/shop_details"
//                   className="nav-item nav-link active"
//                 >
//                   Shop Detail
//                 </NavLink>
//                 <div className="nav-item dropdown">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle"
//                     data-bs-toggle="dropdown"
//                   >
//                     Pages
//                   </a>
//                   <div className="dropdown-menu m-0 bg-secondary rounded-0">
//                     <NavLink to="/cart" className="dropdown-item">
//                       Cart
//                     </NavLink>
//                     <NavLink to="/checkout" className="dropdown-item">
//                       Chackout
//                     </NavLink>
//                     <NavLink to="/testimonial" className="dropdown-item">
//                       Testimonial
//                     </NavLink>
//                     <NavLink to="/pages404" className="dropdown-item">
//                       404 Page
//                     </NavLink>
//                   </div>
//                 </div>
//                 <NavLink to="/contact" className="nav-item nav-link">
//                   Contact
//                 </NavLink>
//               </div>
//               <div className="d-flex m-3 me-0">
//                 {/* <button onClick={handleTheme}>Theme</button> */}

//                 <button
//                   className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-3"
//                   data-bs-toggle="modal"
//                   data-bs-target="#searchModal"
//                 >
//                   <i className="fas fa-search text-primary" />
//                 </button>

//                 <NavLink to="/cart" className="position-relative me-3 my-auto">
//                   <i className="fa fa-shopping-bag fa-2x" />

//                   <span
//                     className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
//                     style={{
//                       top: "-5px",
//                       left: 15,
//                       height: 20,
//                       minWidth: 20,
//                     }}
//                   >
//                     {totalCartQty}
//                   </span>
//                 </NavLink>
//                 <a href="#" className="my-auto">
//                   <i className="fas fa-user fa-2x" />
//                 </a>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     bgcolor: "background.default",
//                     color: "text.primary",
//                     borderRadius: 50,
//                   }}
//                 >
//                   <IconButton onClick={handleTheme} color="inherit">
//                     {themeContext.theme === "dark" ? (
//                       <Brightness7Icon />
//                     ) : (
//                       <Brightness4Icon />
//                     )}
//                   </IconButton>
//                 </Box>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//       {/* Navbar End */}
//       {/* Modal Search Start */}
//       <div
//         className="modal fade"
//         id="searchModal"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-fullscreen">
//           <div className="modal-content rounded-0">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Search by keyword
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body d-flex align-items-center">
//               <div className="input-group w-75 mx-auto d-flex">
//                 <input
//                   type="search"
//                   className="form-control p-3"
//                   placeholder="keywords"
//                   aria-describedby="search-icon-1"
//                 />
//                 <span id="search-icon-1" className="input-group-text p-3">
//                   <i className="fa fa-search" />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal Search End */}
//     </div>
//   );
// }

// export default Header;