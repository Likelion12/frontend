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
        const data = res.data;
        if (data.result.memberStatus === false) {
          // 회원이 아닌 경우 signup 페이지로 이동
          navigate("/signup", { state: { data: data.result } });
        } else {
          // 기존 회원인 경우
          const ACCESS_TOKEN = data.result.accessToken;
          localStorage.setItem("token", ACCESS_TOKEN); // 응답 데이터에서 토큰을 저장합니다.
          navigate("/Main");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 403) {
          alert("권한이 없습니다. 다시 로그인해 주세요.");
        }
      });
  }, [code, navigate]);

  return null;
};

export default Redirection;
