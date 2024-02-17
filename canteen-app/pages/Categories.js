import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div
        className="container mt-2 wow animate__animated animate__backInLeft"
        data-wow-delay="0.3s"
      >
        <div className="row">
          {categories.map((c, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={c._id}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#FC958E" }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <i className="fa fa-hamburger text-warning"></i>
                    {c.name}
                  </h5>
                  <Link to={`/category/${c.slug}`} className="btn btn-danger">
                    View Category
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

/*import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5" key={c._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <Link to={`/category/${c.slug}`} className="btn btn-primary">
                    View Category
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;*/

/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <i className="fa fa-utensil-spoon fa-2x text-warning"></i>
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;*/
