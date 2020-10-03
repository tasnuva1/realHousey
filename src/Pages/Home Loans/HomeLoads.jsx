import React from "react";
import { useMediaQuery } from "react-responsive";
import "./HomeLoads.style.scss";

import Content from "../../Components/Content-Container/Content";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";

import houseSVG from "../../External/img/documents-search.svg";
import LastSVG from "../../External/img/calculator.svg";
import FooterSmall from "../../Components/FooterSmall/FooterSmall";

let HeadingStyle = {
  textAlign: "left",
};

let sell2Heading1 = {
  display: "flex",
  justifyContent: "center",
  marginTop: "15rem",
};

let sell2Heading1Res = {
  display: "flex",
  justifyContent: "center",
  marginTop: "44rem",
};
let sell2Heading1Res2 = {
  display: "flex",
  justifyContent: "center",
  marginTop: "80rem",
};

let HeadingStyle2 = {
  fontSize: "4.5rem",
  textAlign: "left",
  marginTop: "10rem",
  marginBottom: "3rem",
};

let ListHeading1 = {
  fontSize: "10rem",
  marginBottom: "2.5rem",
};
let ListHeading2 = {
  fontSize: "4.5rem",
  marginBottom: "5.4rem",
};

const HomeLoads = () => {
  const isTabletOrMobileDevice = useMediaQuery({ query: "(max-width: 514px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width: 333px)" });
  return (
    <div id="sell-heading-height">
      <div className="sell-heading-containerr">
        <div className="sell-backgroud"></div>
        <div className="sell-heading-container">
          <div className="sell-heading-container-inner">
            <Content
              heading1="Sell"
              heading2="Guide To The Mortgage Loan Process"
            ></Content>
          </div>
        </div>
      </div>
      <div className="sell-1-container">
        <div className="sell-1">
          <img src={houseSVG} alt="sell-house-svg" className="sell-house-svg" />
          <div className="sell-content-first sell-content">
            <Heading heading="heading2" style={HeadingStyle}>
              Documents You Need For Mortgage Loan
            </Heading>
            <p className="about-dis">
              Unfortunately, many borrowers couldn’t afford their mortgages and
              ended up defaulting, which is often cited as a catalyst for the
              Great Recession. As a result, Congress began requiring creditors
              to better assess borrowers’ ability to repay their loans. To judge
              a mortgage applicant’s ability to repay, lenders must account for
              the homebuyer’s assets, debt-to-income ratio and credit history.
              <span className="line-height"></span>
              The exact forms you need for a home loan depend on your situation.
              For example, someone who is self-employed will likely have to
              provide different forms than someone who is employed by a company.
              <span className="line-height"></span>
              Although the exact forms might vary, Todd Huettner, owner of
              Huettner Capital, a residential and commercial real estate lender,
              says a lender can get a good sense of your approval odds by
              checking out your recent pay stubs, bank statements, W-2 forms and
              tax returns
            </p>
          </div>
        </div>
      </div>

      <div className="sell-2-homeloads">
        <div className="sell-2-in">
          <div className="sell-content sell-content-2">
            {isMobileDevice ? (
              <Heading style={sell2Heading1Res2}>Summary</Heading>
            ) : (
              <Heading
                style={
                  isTabletOrMobileDevice ? sell2Heading1Res : sell2Heading1
                }
              >
                Summary
              </Heading>
            )}

            <div className="sell-2-summary-container">
              <div className="sell2-content1 sell2-iner">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Documents You Need to Gather Before Listing Your Home
                </Heading>
                <ul>
                  <li>Tax returns</li>
                  <li>Pay stubs, W-2s or other proof of income</li>
                  <li>Bank statements and other assets</li>
                  <li>Credit history</li>
                  <li>Gift letters</li>
                  <li>Photo ID</li>
                  <li>Renting history</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sell-3">
        <div className="sell-content sell-content-3">
          <Heading heading="heading2" style={HeadingStyle2}>
            Tax returns
          </Heading>
          <p className="about-dis">
            Mortgage lenders want to get the full story of your financial
            situation. You’ll probably need to sign a Form 4506-T, which allows
            the lender to request a copy of your tax returns from the IRS.
            <span className="line-height"></span>
            Lenders generally want to see one to two years’ worth of tax
            returns. This is to make sure your annual income is consistent with
            your reported earnings through pay stubs and there aren’t huge
            fluctuations from year to year.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Pay stubs, W-2s or other proof of income
          </Heading>
          <p className="about-dis">
            Lenders may ask to see your pay stubs from the past month or so.
            Your tax returns help give them a clear idea of your overall
            financial health, while pay stubs help them gauge your current
            earnings. If you’re self-employed or have other sources of income
            (such as child support), you may need to show your lender proof
            through 1099 forms, direct deposits or other means.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Bank statements and other assets
          </Heading>
          <p className="about-dis">
            When assessing your risk profile, lenders may want to look at your
            bank statements and other assets. This can include your investment
            assets as well as your insurance, such as life insurance.
            <span className="line-height"></span>
            Lenders typically request these documents to make sure you have
            several months’ worth of reserve mortgage payments in your account
            in case of an emergency. They also check to see that your down
            payment has been in your account for at least a few months and did
            not just show up overnight.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Credit history
          </Heading>
          <p className="about-dis">
            In order to assess you as a borrower, lenders often pull your credit
            report — with your verbal or written permission.
            <span className="line-height"></span>
            According to Bruce Ailion, a real estate agent in Atlanta, you may
            need to explain any blemishes on your credit report. Blemishes might
            include a previous short sale or a foreclosure.
            <span className="line-height"></span>
            “You should be prepared to write a statement that explains negative
            items on your credit report,” Ailion says. “This helps a lender
            evaluate what kind of risk you are. Lenders may look at one-time
            unavoidable circumstances differently from habitual delinquency.”
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Gift letters
          </Heading>
          <p className="about-dis">
            Your friends and family might help you buy a house by giving you
            money. If that’s the case, you’ll need to provide a written
            confirmation the money is indeed a gift and not a loan. The
            documentation should list their relationship to you as well as the
            amount of the gift.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Photo ID
          </Heading>
          <p className="about-dis">
            You’ll likely need to provide a photo ID, such as a driver’s
            license. This is simply to prove you are who you’re claiming to be.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Renting history
          </Heading>
          <p className="about-dis">
            For buyers who don’t already own a home, many lenders will request
            proof that you can pay on time. They may ask for a year’s worth of
            canceled rent checks (check that your landlord has cashed). Or, they
            might ask your landlord to provide documentation showing that you
            paid your rent on time. Your renting history is especially important
            if you don’t have an extensive credit history.
          </p>
          <Heading heading="heading2" style={HeadingStyle2}>
            Bottom line
          </Heading>
          <p className="about-dis">
            Your lender’s goal is to assess you as a borrower and ensure you can
            make your payments on time. As such, you’ll need to provide them
            with documents that paint an accurate picture of your
            creditworthiness.
            <span className="line-height"></span>
            The typical homebuyer will have to provide information about their
            assets, debts, income and credit history. However, the exact
            documents lenders need could vary from person to person.
          </p>
        </div>
      </div>
      <div className="sell-4-background-conteainer">
        <img src={LastSVG} className="sell-4-background" alt="Taking-Note" />
      </div>
      <div className="sell-4">
        <Heading style={ListHeading1}>Want To Calculate Your Mortgage?</Heading>
        <Heading heading="heading2" style={ListHeading2}>
          For More About Mortgage Rates In USA
        </Heading>
        <a
          href="https://www.mortgagecalculator.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Calculate</Button>
        </a>
      </div>
      <FooterSmall />
    </div>
  );
};

export default HomeLoads;
