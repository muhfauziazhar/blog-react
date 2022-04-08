import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

const Category = ({ handleCategory, options }) => {
  return (
    <MDBDropdown group className="mb-3 mt-1">
      <MDBDropdownToggle outline color="primary">
        Filter By Category
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {options.map((item, index) => (
          <MDBDropdownItem key={index}>
            <MDBDropdownLink
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleCategory(item)}
            >
              {item}
            </MDBDropdownLink>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Category;
