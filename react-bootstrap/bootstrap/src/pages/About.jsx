import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const params = useParams();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div>ID: {params.id}</div>
      <div>QueryScring: {search}</div>
      <div>Url Path: {pathname}</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </button>
    </>
  );
};

export default AboutPage;
