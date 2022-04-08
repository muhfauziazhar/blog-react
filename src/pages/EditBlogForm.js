import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react/cjs/react.development";

const options = [
  "Travel",
  "Fashion",
  "Fitness",
  "Sports",
  "Food",
  "Tech",
];

const EditBlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ourmoments-api.herokuapp.com/blogs/${id}`,
    }).then((results) => {
      const title = results.data.payload.title;
      const description = results.data.payload.description;

      setTitle(title);
      setDescription(description);
    });
  }, []);

  const inputHandlerTitle = (title) => {
    return setTitle(title);
  };

  const inputHandlerDescription = (desc) => {
    return setDescription(desc);
  };

  const inputHandlerCategory = (category) => {
    return setCategory(category);
  };

  const updateBlog = () => {
    axios({
      method: "PUT",
      url: `https://ourmoments-api.herokuapp.com/blogs/${id}`,
      data: {
        title,
        description,
        category,
      },
    }).then((result) => {
      if (result.data) {
        toast.success("Blog Updated Successfully");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <MDBValidation className="row g-3" style={{ marginTop: "100px" }}>
      <p className="fs-2 fw-bold">Update Blog</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title}
          name="title"
          type="text"
          onChange={(e) => inputHandlerTitle(e.target.value)}
          required
          label="Title"
        />
        <br />
        <MDBInput
          value={description}
          name="description"
          type="text"
          onChange={(e) => inputHandlerDescription(e.target.value)}
          required
          label="Description"
          textarea
          rows={4}
        />
        <br />
        <select
          className="categoryDropdown"
          onChange={(e) => inputHandlerCategory(e.target.value)}
          value={category}
        >
          <option>Please select category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <MDBBtn
          type="submit"
          style={{ marginRight: "10px" }}
          onClick={() => updateBlog()}
        >
          Update Blog
        </MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default EditBlogForm;
