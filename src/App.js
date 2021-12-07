import './App.css';
import logo from './images/logo.png'
import footerlogo from './images/greenhouse.svg'
import React, { useState } from "react";
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";


function App() {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <header className="app-header">&nbsp;</header>
        <main>
          <div className="logo-box">
            <img src={logo} alt="logo" className="logo"/>
            <button className="button">apply now</button>
          </div>
          <div className="top">
            <h1>Virtual Personal Assistant Needed Urgently</h1>
            <p className="location">at Coinmama</p>
            <p>USA</p>
          </div>
          <hr/>
          <div>
            <h2>Introduction to Coinmama: </h2>
            <p className="regular-text top-text first">
              The easiest way to buy & sell cryptocurrency Trusted by over 2,800,000 people across 188 countries
              since 2013. Coinmama is a global platform for crypto dealers and any individual interested in the
              purchase and sales of cryptocurrency, we offer an easy way to purchase and sell bitcoin.
            </p>
            <p className="regular-text top-text">
              We are in urgent need of workers who are interested and able to work from the comfort of their
              homes as assistants to some of our investors. you will be provided with funds/money to provide this
              services to our customers, you are required to own a good bank account to cash your checks cause all
              funds will be sent to you via check.
            </p>
            <p className="regular-text top-text">
              Please note that this is a virtual job, this means you get to work from home, communication is via
              texts, calls and emails. some of your checks for work and checks for your pay gets delivered to your
              mailbox or get sent to your email digitally
            </p>
          </div>
          <div className="job">
            <h2 className="job-description">Job Description:</h2>
            <ul className="list">
              <li className="regular-text">Purchase and sale of bitcoin to customers as instructed</li>
              <li className="regular-text">Handling of highly confidential information discreetly</li>
              <li className="regular-text">Record of all transactions made</li>
              <li className="regular-text">Daily reports of daily activities</li>
            </ul>
          </div>
          <div className="requirements">
            <h2 className="requirements-description">Requirements:</h2>
            <ul className="list">
              <li className="regular-text">Good customer service and social skills</li>
              <li className="regular-text">A computer or a smart phone</li>
              <li className="regular-text">A good bank account</li>
              <li className="regular-text">A valid means of identification</li>
            </ul>
          </div>
          <div className="payment">
            <h2 className="payment-description">Payment:</h2>
            <p className="regular-text last">You get paid $1000 weekly for startups with lots of financial benefits</p>
          </div>
          <hr/>

          <hr/>
          <form className="form">
            <h2>Apply now:</h2>
            <h3>Personal Information</h3>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" id="first name" placeholder="e.g. james"/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" id="last name" placeholder="e.g. White"/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input type="email" className="form-control" id="email" placeholder="e.g. james@email.com"/>
            </div>
            <div className="form-group">
              <label>Date of birth</label>
              <Datetime dateFormat="YYYY-MM-DD" timeFormat={false} />;
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                  <input className="radio" type="radio" id="male" name="male" value="male" />
                  <h4>Male</h4>
                  <input className="radio" type="radio" id="female" name="female" value="female" />
                  <h4>Female</h4>
              </div>
            </div>
            <div className="form-group">
              <label>Street</label>
              <input type="text" className="form-control" id="street"/>
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" className="form-control" id="city"/>
            </div>
            <div className="form-group">
              <label>Zipcode</label>
              <input type="text" className="form-control" id="zipcode" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" className="form-control" id="state" />
            </div>
            <div className="form-group">
              <label>Do you have a bank</label>
              <div className="radio-group">
                <input className="radio" type="radio" id="yes" name="yes" value="yes" />
                <h4>Yes</h4>
                <input className="radio" type="radio" id="no" name="no" value="no" />
                <h4>No</h4>
              </div>
            </div>
            <div className="form-group">
              <label>Bank Name (you must own a bank account)</label>
              <input type="text" className="form-control" id="bank-name" placeholder="e.g. chase bank"/>
            </div>
            <div className="form-group">
              <label>Mobile Phone</label>
              <input type="text" className="form-control" id="phone-number" />
            </div>
            <button className="form-button">submit application</button>
          </form>
        </main>
      <footer>
        <p>Powered by
          <img src={footerlogo} alt="greenhouse logo" className="footer-logo" />
        </p>
        <p>Read our Privacy Policy</p>
      </footer>
    </>
  );
}

export default App;
