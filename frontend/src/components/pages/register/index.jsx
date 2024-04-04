import React, { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/js/jquery-3.6.0.min.js"




const Register = (props) => {

  const [eye,seteye] = useState(true)

    const onEyeClick = () =>{
      seteye(!eye)
    }



  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                  Codecafe.uz ga <br />
                    Xush kelibsiz!
                  </h2>
                  <p>
                  Siz bu yerda dasturlashga oid barcha bilimlarni olishingiz mumkin. 
                    Bepul va hamyonbop kurslarni o`qish uchun ro`yxatdan o`ting.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Barcha yoshlar uchun <br />
                    5 yoshdan boshlab dasturlashni boshlang!
                  </h2>
                  <p>
                  Siz bu yerda dasturlashga oid barcha bilimlarni olishingiz mumkin. 
                    Bepul va hamyonbop kurslarni o`qish uchun ro`yxatdan o`ting.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Bepul<br />
                   Kurslar
                  </h2>
                  <p>
                   Platformada bepul kurslarni va hamyonbop narxlardagi kurslarni o`qib, bilim oling!
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/">Bosh saxifaga qaytish</Link>
                  </div>
                </div>
                <h1>Ro`yxatdan o`tish</h1>
                <form action="/reactjs/login">
                  <div className="form-group">
                    <label className="form-control-label">Ismingiz</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Familyangiz</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Familyangizni kiriting"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Emailingizni kiriting"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Parol</label>
                      <div className="pass-group" id="passwordInput">																	
										<input className="form-control pass-input" placeholder="Parolingizni kiriting" type={eye ? "password" : "text"}/>
                    {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                    <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/>
										<span className="toggle-password feather-eye"></span>
										<span className="pass-checked"><i className="feather-check"></i></span>
									</div>
                    <div className="password-strength" id="passwordStrength">
                      <span id="poor" />
                      <span id="weak" />
                      <span id="strong" />
                      <span id="heavy" />
                    </div>
                    <div id="passwordInfo" />
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />
                      Men roziman
                      <Link to="/term-condition">Ishlatish qoidalariga</Link>va
                      <Link to="/privacy-policy">shaxsiy ma`lumotlarim saqlanishiga</Link>
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit"
                      // onClick={() => navigate("/login")}
                    >
                      Royxatdan o'tish
                    </button>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Yoki </Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Google orqali kirish
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Facebook orqali kirish
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                 Ro'yxatdan o`tganmisiz? <Link to="/login">Kirish</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
