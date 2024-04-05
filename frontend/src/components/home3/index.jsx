import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer3 } from "../footer3";
import { Header3 } from "../header3";
import Companies from "../home3/slider/companies";
import {
  Avatar1,
  Avatar10,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
  Award01,
  AwardSvg,
  Blog20,
  Blog21,
  Blog22,
  Blog23,
  Blog24,
  Building,
  BuildingSvg,
  Career,
  Career01,
  Career02,
  Career03,
  Career04,
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Certification,
  CheckRound1,
  CheckRound2,
  CheckRound3,
  Course01Icon,
  Course02Icon,
  Course03Icon,
  Course04Icon,
  Course20,
  Course21,
  Course22,
  Course23,
  Course24,
  Course25,
  Course26,
  Course27,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  HomeSlider,
  HomeThreeBanner,
  Lead1,
  Lead2,
  Lead3,
  Lead4,
  Lead5,
  Lead6,
  LearnAnything,
  Pattern01,
  Pattern02,
  Pattern03,
  Pattern04,
  PatternSvg5,
  PatternSvg6,
  Quote,
  Shape01,
  Shape02,
  StudentIcon,
  StudentIconThree,
  Testimonial03,
  Time,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
  User8,
  Winning,
} from "../imagepath";
import { TopCategories2 } from "./slider/topCategories";
import { Trending3 } from "./slider/trendingCourse";
import { Testimonial3 } from "./slider/testimonial";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";

const options = [
  { label: "Kategoriyani tanlash", value: "kategoriya" },
  { label: "Scratch", value: "Scratch" },
  { label: "UI/UX", value: "UI/UX" },
  { label: "HTM&CSS", value: "HTML&CSS" },
  { label: "Python", value: "Python" },
];

export const Home3 = () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    document.body.className = "home-three";

    return () => {
      document.body.className = "";
    };
  }, []);
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#f7f7f7f7",
      width: "100%",
      height: "56px",
      minHeight: "56px",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      // borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      outline: "none",
    }),
    menu: (base) => ({
      ...base,
      marginTop: "0px",
      borderRadius: "0",
      hyphens: "auto",
      width: "max-content",
      minWidth: "100%",
    }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#7B1FFE" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#7B1FFE",
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0 6px",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };

  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
    console.log(id);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <>
      <Header3 />
      {/* Home Banner */}
      <section
        className="home-three-slide d-flex align-items-center"
        style={{ backgroundImage: "url(" + HomeThreeBanner + ")" }}
      >
        <div className="container">
          <div className="row ">
            <div
              className="col-xl-6 col-lg-8 col-md-12 col-12"
              data-aos="fade-down"
            >
              <div className="home-three-slide-face">
                <div className="home-three-slide-text">
                  <h5>Eng katta Online Ta`lim platformasi </h5>
                  <h1>
                    Sifatli <span>&</span> Xamyonbop Kurslar
                  </h1>
                  <p>
                    Biz sifat va narx uygunlashishi tarafdorimiz. 
                    Barcha darslar yuqori malakali o`qituvchilar tomonidan  tuzilgan.
                  </p>
                </div>
                <div className="banner-three-content">
                  <form className="form" action="course-list">
                    <div className="form-inner-three">
                      <div
                        className="input-group"
                        // style={{ backgroundImage: `url(${})` }}
                      >
                        {/* <img className="buildingSvg" src={BuildingSvg} alt="" /> */}
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Kurs, ta`lim turini qidiring..."
                        />
                        <span className="drop-detail-three">
                          <Select
                            options={options}
                            value={options.value}
                            defaultValue={options[0]}
                            placeholder="Kategoriya"
                            onChange={setValue}
                            styles={style}
                          ></Select>
                        </span>
                        <button
                          className="btn btn-three-primary sub-btn"
                          type="submit"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
            >
              <div className="girl-slide-img aos">
                <img className="img-fluid" src={HomeSlider} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Banner */}
      {/* Online Courses */}
      <section className="section student-course home-three-course">
        <div className="container">
          <div className="course-widget-three">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course01Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-blue">
                        <span className="d-flex"> 
                            <Number n={10} />
                         </span>
                        </h4>
                        <p>Online Kurslar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course02Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-yellow">
                        <span className="d-flex"> 
                            <Number n={20} />+
                         </span>
                        </h4>
                        <p>Expert O`qituvchilar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course03Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-info">
                        <span className="d-flex"> 
                            <Number n={10} />+
                         </span>
                        </h4>
                        <p>Sertifikatlar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three mb-0">
                  <div className="align-items-center">
                    <div className="course-count-three">
                      <div className="course-img">
                        <img className="img-fluid" src={Course04Icon} alt="" />
                      </div>
                      <div className="course-content-three course-count ms-0">
                        <h4 className="text-green">
                        <span className="d-flex"> 
                            <Number n={1000} /> +
                         </span>
                        </h4>
                        <p>Online Studentlar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Online Courses */}

      {/* Master Skills Career */}
      <section className="master-skill-three">
        <div className="master-three-vector">
          <img className="ellipse-right img-fluid" src={Pattern01} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-right">
              <div className="master-three-images">
                <div className="master-three-left">
                  <img
                    className="img-fluid"
                    src={Career}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-left">
              <div className="home-three-head" data-aos="fade-up">
                <h2>Dasturlashni eng kichik yoshlardan boshlab o`rganamiz</h2>
              </div>
              <div className="home-three-content" data-aos="fade-up">
                <p>
                  Statistikaga ko`ra, dasturchilarning 75% birinchi kodlarini 18yoshdan oldin yozishgan.
                  Farzandingiz vaqtini bekorchi o`yinlar uchun emas, kasbiga yo`naltirishida biz sizga yordam bermaiz.
                </p>
              </div>
              <div className="skils-group">
                <div className="row">
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-down"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career01}
                          alt="certified"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                          10+ kurslarda dasturlash, kompyuter savodxonligi bo`yicha ta`lim ol
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-up"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career02}
                          alt="Build skills"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                         Asosan dasturlar yaratish orqali, amaliyot bilan o`rgan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-right"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career03}
                          alt="Stay Motivated"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                          O`z sohasining yetuk mutaxasislaridan ta`lim ol
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-left"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career04}
                          alt="latest cloud"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">O`z kelajagingni hozirdan o`zgartir, barchasi sening qo`lingda!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Master Skills Career */}

  

      {/* Courses */}
      <section className="home-three-courses">
        <div className="container">
          <div className="favourite-course-sec">
            <div className="row">
              <div
                className="home-three-head section-header-title"
                data-aos="fade-up"
              >
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-lg-6 col-sm-8">
                    <h2>Kurslar</h2>
                  </div>
                  <div className="col-lg-6 col-sm-4">
                    <div className="see-all">
                      <Link to="#">
                        Hammasini ko`rish
                        <span className="see-all-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="all-corses-main">
                <div className="tab-content">
                  <div className="nav tablist-three" role="tablist">
                    <Link
                      className={
                        toggle === 1 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#alltab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(1);
                      }}
                    >
                      Hammasi
                    </Link>

                    <Link
                      className={
                        toggle === 2 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#mostpopulartab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(2);
                      }}
                    >
                      Eng mashxurlari
                    </Link>

                    <Link
                      className={
                        toggle === 3 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#businesstab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(3);
                      }}
                    >
                      5yosh+ kurslar
                    </Link>

                    <Link
                      className={
                        toggle === 4 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#designtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(4);
                      }}
                    >
                      O`yinlar
                    </Link>

                    <Link
                      className={
                        toggle === 5 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#designtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(5);
                      }}
                    >
                     Dizayn
                    </Link>

                    <Link
                      className={
                        toggle === 6 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#programmingtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(6);
                      }}
                    >
                      Dasturlash asoslari
                    </Link>

                    <Link
                      className={
                        toggle === 7 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#databasetab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(7);
                      }}
                    >
                      Database
                    </Link>
                  </div>

                  <div className="tab-content">
                    {/* All */}
                    <div
                      className={
                        toggle === 1
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="alltab"
                      role="tabpanel"
                    >
                      <div className="all-course">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* All */}

                    {/* Most Popular */}
                    <div
                      className={
                        toggle === 2
                          ? "tab-pane fade active show"
                          : "tab-pane fade "
                      }
                      id="mostpopulartab"
                    >
                      <div className="all-course">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Most Popular */}

                    {/* Business-> */}
                    <div
                      className={
                        toggle === 3
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="businesstab"
                    >
                      <div className="businesstab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Business */}

                    {/* Design */}
                    <div
                      className={
                        toggle === 4
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="designtab"
                    >
                      <div className="designtab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Design */}

                    {/* Music */}
                    <div
                      className={
                        toggle === 5
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="musictab"
                    >
                      <div className="music-label">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Music */}

                    {/* Programming */}
                    <div
                      className={
                        toggle === 6
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="programmingtab"
                    >
                      <div className="programmingtab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Programming */}

                    {/* Database */}
                    <div
                      className={
                        toggle === 7
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="databasetab"
                    >
                      <div className="databasetab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Database */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses */}
      {/* CTA */}
      <section className="home-three-transform">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="cta-content">
                <h2> Dasturlashga birinchi qadamingni qo`y</h2>
                <p>
                  Ro`yxatdan o`t va shu zahoti bepul va pullik kurslar yordamida dasturlashni o'rganishni boshla. 
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="transform-button-three">
                <Link to="/register" className="btn btn-action">
                  Hoziroq ro`yxatdan o`t
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
    


      {/* Become and Instructor */}
      <section className="home-three-become">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8" data-aos="fade-up">
              <div className="become-content-three">
                <h2>Malakali dasturchimsiz?</h2>
                <p>
                 O`z bilimingizni barcha bilan baham ko`ring va passiv daromad qilishni boshlang
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="fade-up">
              <div className="become-button-three">
                <Link to="/register" className="btn btn-become">
                  Hoziroq ro`yxatdan o`t
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Become and Instructor */}

      

      {/* Testimonial */}
      <section className="testimonial-three">
        <div className="container">
          <div className="testimonial-pattern">
            <img className="pattern-left img-fluid" alt="" src={PatternSvg5} />
            <img className="pattern-right img-fluid" alt="" src={PatternSvg6} />
          </div>
          <div className="testimonial-three-content">
            <div className="row align-items-center">
              <div
                className="col-xl-4 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                <div className="become-content">
                  <h2 className="aos-init aos-animate">Ular bizga ishonishdi</h2>
                  <h4 className="aos-init aos-animate">
                    Mijozlarimizga sifatli xizmat ko`rsatishdan mamnunmiz
                  </h4>
                </div>

                {/* View all Testimonail */}
                <Link
                  to="/instructor-profile"
                  className="btn btn-action aos-init aos-animate"
                  data-aos="fade-up"
                >
                  Barcha fikrlarni ko`rish
                </Link>
                {/* View all Testimonail */}
              </div>
              <div
                className="col-xl-8 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                {/* Swiper Element */}
                <div
                  className="swiper-testimonial-three"
                  style={{ width: "100%", height: "400px" }}
                >
                  <Testimonial3 />
                </div>
                {/* <Testimonial03 /> */}
                {/* Swiper Element */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}

      {/* Latest Blog */}
      <section className="latest-blog-three">
        <div className="container">
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-md-8">
                <h2>Yangiliklar &  Foydali ma`lumotlar</h2>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="see-all">
                  <Link to="/blog-list">
                    Hammasini ko`rish
                    <span className="see-all-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-blog-main">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-one">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog20} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-green">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-two">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog21} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-three">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog22} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-four">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog23} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-five">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog24} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-yellow">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog */}

      {/* Footer */}
      <Footer3 />
      {/* Footer */}
    </>
  );
};
