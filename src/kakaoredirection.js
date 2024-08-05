import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://43.202.94.241:8080/auth/kakao/callback?code=${code}`)
      .then((res) => {
        console.log(res);
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN); // 응답 데이터에서 토큰을 저장합니다.
        navigate("/Main");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [code, navigate]);
};

export default Redirection;
