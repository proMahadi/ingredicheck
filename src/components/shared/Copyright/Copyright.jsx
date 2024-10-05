import React from "react";
import Container from "../../../common/Container";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="bg-color3">
      <Container className="py-16 border-t-[1px] border-[#4F5449] px-4 lg:px-0">
        <div className="w-full flex flex-wrap-reverse justify-center items-center md:justify-between text-center">
          <div>
            <p className="font-inter text-lg text-[#9EA19B]">
              Copyright © 2024 Ingredicheck{" "}
              <span className="block sm:inline">All Rights Reserved</span>
            </p>
          </div>
          <div>
            <ul className="font-inter text-lg text-[#9EA19B] xs:flex items-center gap-x-9 gap-y-6">
              <li className="hover:text-color1 duration-200">
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li className="hover:text-color1 duration-200">
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
