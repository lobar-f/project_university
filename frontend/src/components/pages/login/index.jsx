import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  
  const handlePasswordChange =(evnt)=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
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
            className="owl-carousel login-slide owl-theme">
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
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
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
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
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
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
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                    />
                    <div className="back-home">
                      <Link to="/">Asosiy saxifaga qaytish</Link>
                    </div>
                  </div>
                  <h1>Tizimga kirish</h1>
                  <form action="/reactjs/instructor-dashboard">
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
                      <div className="pass-group">
                      <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password" />
                     <span className="toggle-password feather-eye" onClick={togglePassword}>
                     { passwordType==="password"? <FeatherIcon icon="eye"/>:<FeatherIcon icon="eye-off"/> }
                     </span>
                      </div>
                    </div>
                    <div className="forgot">
                      <span>
                        <Link className="forgot-link" to="/forgot-password">
                          Parol esingizdan chiqdimi?
                        </Link>
                      </span>
                    </div>
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        {" "}
                        Meni eslab qolinsin
                        <input type="checkbox" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-start"
                        type="submit"
                      >
                        Kirish
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Yoki </Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon1}
                          className="img-fluid"
                          alt="Logo"
                        />{" "}
                         Google bilan kirish
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon2}
                          className="img-fluid"
                          alt="Logo"
                        />
                        Facebook bilan kirish
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Yangi foydalanuvchimisiz ? <Link to="/register">Ro'yxatdan o`tish</Link>
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

export default Login;
