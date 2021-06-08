import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Issues.css";
import BlogsImg from "./BlogsImg";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import Button from "../../components/button/Button";

import prm from "../../images/prm.png";
import cloud from "../../images/cloud.png";
import react from "../../images/react.png";
import tech from "../../images/tech.png";
import datascience from "../../images/datascience.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import spring from "../../images/spring.png";
import java from "../../images/java.png";
import ai from "../../images/ai.jpg";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

const toggle = (props) => {
  const theme = props.theme;
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <Fade bottom duration={2000} distance="20px">
        <div className="blog-heading-div">
          <div className="blog-heading-img-div">
            <BlogsImg theme={theme} />
          </div>
          <div className="blog-heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {blogSection["title"]}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {blogSection["subtitle"]}
            </p>
            <div className="address-btn-div">
              <Button
                text="Show some 💖 to my Blog"
                newTab={true}
                href="https://hashnode.com/@alanbinu"
                theme={theme}
              />
            </div>
          </div>
        </div>
        </Fade>
        <center>
            <h2 style={{ color: theme.text }}>My Latest Blogs</h2>
          </center>
        <br />
        <br />

        <Fade bottom duration={2000} distance="20px">
        <div class="content-container">
          
          <br />
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/how-to-get-started-with-artificial-intelligence-ckp754vv90fv6mds1fgxtg4dl" target="_blank">
                {" "}
                <img src={ai} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">How to get started with Artificial Intelligence</h3>
                <center><Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/how-to-get-started-with-artificial-intelligence-ckp754vv90fv6mds1fgxtg4dl"
              theme=""
            /></center>
                
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/getting-started-with-competitive-programming-ckp7xf2qf0jldmds16f0e92qh" target="_blank">
                {" "}
                <img src={prm} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">Getting started with Competitive Programming</h3>

               <center> <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/getting-started-with-competitive-programming-ckp7xf2qf0jldmds16f0e92qh"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/what-should-i-learn-aws-or-gcp-or-azure-in-2021" target="_blank">
                {" "}
                <img src={cloud} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">What Should I learn AWS or GCP or AZURE🤔</h3>

               <center> <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/what-should-i-learn-aws-or-gcp-or-azure-in-2021"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/how-to-get-start-with-react-create-your-first-project" target="_blank">
                {" "}
                <img src={react} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">Get Start With Your First React Project</h3>

              <center>  <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/how-to-get-start-with-react-create-your-first-project"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/what-next-in-tech-industries" target="_blank">
                {" "}
                <img src={tech} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">What next in tech industries🤔?</h3>

               <center> <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/what-next-in-tech-industries"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/data-science-should-i-need-to-learn-for-coming-years" target="_blank">
                {" "}
                <img src={datascience} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">Data Science🔥 Should i need to learn it?🤔</h3>

                <center><Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/data-science-should-i-need-to-learn-for-coming-years"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/how-to-use-linkedin-to-get-a-job-1?guid=cbd4b2da-a1a2-4e4f-8c12-b68a19e1dd4c&deviceId=14e285ba-03f0-43bc-82c2-2f2bcf40fa67" target="_blank">
                {" "}
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class=" ">How to Use LinkedIn to Get a Job</h3>

               <center> <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/how-to-use-linkedin-to-get-a-job-1?guid=cbd4b2da-a1a2-4e4f-8c12-b68a19e1dd4c&deviceId=14e285ba-03f0-43bc-82c2-2f2bcf40fa67"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/spring-boot-do-i-need-to-study-in-2022-to-get-a-job" target="_blank">
                {" "}
                <img src={spring} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
                <h3 class="">Spring Boot🔥 Do i need to study in 2022?🤔</h3>
               <center> <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/spring-boot-do-i-need-to-study-in-2022-to-get-a-job"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/how-to-use-github-developers-collaboration-using-github" target="_blank">
                {" "}
                <img src={github} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
               <h3 class="">Use GitHub–Collaboration Using GitHub</h3>
               <center>  <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/how-to-use-github-developers-collaboration-using-github"
              theme=""
            /></center>
              </div>
            </div>
          </div>
          <div class="post-masonry col-md-6 col-sm-6">
            <div class="blog-thumb">
              <a href="https://alanbinu.hashnode.dev/i-love-my-java" target="_blank">
                {" "}
                <img src={java} alt="" />
              </a>
            </div>
            <div class="blog-body">
              <div class="box-content">
               
<center> <h3 class="">I Love My Java💓</h3>
                <Button
              text="Read More"
              newTab={true}
              href="https://alanbinu.hashnode.dev/i-love-my-java"
              theme=""
            /></center>
              </div>
            </div>
          </div>
        </div></Fade>
        <br />
        <br />
        <center>
          <div className="address-btn-div">
            <Button
              text="View More Blogs"
              newTab={true}
              href="https://hashnode.com/@alanbinu"
              theme={theme}
            />
          </div>
        </center>
        <br />
      
    </>
  );
};

export default toggle;
