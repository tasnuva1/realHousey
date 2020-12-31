import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Sell.style.scss";

import Content from "../../Components/Content-Container/Content";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";

import houseSVG from "../../External/img/sell-house.svg";
import LastSVG from "../../External/img/taking-notes.svg";
import { Link } from "react-router-dom";
import FooterSmall from "../../Components/FooterSmall/FooterSmall";

var bg = require("../../External/img/documents.svg");

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
// let FooderStyle = {
//   position: "relative",
//   height: "5rem",
//   marginTop: "5rem",
//   clear: "both",
// };

const Sell = () => {
  const isTabletOrMobileDevice = useMediaQuery({ query: "(max-width: 514px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width: 333px)" });
  return (
    <div id="sell-hight">
      <div id="sell-hight-inner">
        <div className="sell-heading-containerr">
          <div
            className="sell-backgroud"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="sell-heading-container">
            <div className="sell-heading-container-inner">
              <Content
                heading1="Sell"
                heading2="Complete, Checklist of All the Documents Needed to Sell a House"
              ></Content>
            </div>
          </div>
        </div>
        <div className="sell-1-container">
          <div className="sell-1">
            <img
              src={houseSVG}
              alt="sell-house-svg"
              className="sell-house-svg"
            />
            <div className="sell-content-first sell-content">
              <Heading heading="heading2" style={HeadingStyle}>
                Documents You Need to Gather Before Listing Your Home
              </Heading>
              <p className="about-dis">
                Do some mental flossing to make space in your brain for fun
                stuff like “mandatory disclosures.”
                <span className="line-height"></span>
                Because when you take the time to gather all the proper forms to
                sell your home from start to finish, the transaction will go
                smoothly, and you’ll rest easy knowing your sale is airtight and
                100% legally sound.
                <span className="line-height"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="sell-2">
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
                  <li>Original Sales Contract</li>
                  <li>
                    Professional Appraisal From The Original Purchase of Your
                    Home
                  </li>
                  <li>Homeowners Insurance Records</li>
                  <li>Homeowners Association (HOA) Documents</li>
                  <li>Home Repair and Maintenance Records</li>
                  <li>Receipts for Capital Improvements</li>
                  <li>Manuals and Warranties</li>
                  <li>Past Utility Bills</li>
                </ul>
              </div>
              <div className="sell2-content2">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Documents Needed To Launch Your Home Sale Into Action
                </Heading>
                <ul>
                  <li>Comparative Market Analysis</li>
                  <li>Listing Agreement</li>
                  <li>Proposed Marketing Plan</li>
                  <li>Seller’s Net Sheet</li>
                </ul>
              </div>
            </div>
            <div className="sell-2-summary-container">
              <div className="sell2-content1 sell2-iner">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Documents to Have at the Ready While Your Home’s on the Market
                </Heading>
                <ul>
                  <li>Preliminary Title Report or “Prelim”</li>
                  <li>Mandatory Disclosures</li>
                  <li>Pre-Inspection Report</li>
                  <li>Transfer Disclosure Statement (CA)</li>
                  <li>Natural Hazard Report (CA)</li>
                </ul>
              </div>
              <div className="sell2-content2">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Documents That Come Into Play Once a Buyer Makes an Offer
                </Heading>
                <ul>
                  <li>Purchase Offer and Counteroffer Forms</li>
                  <li>Final Purchase and Sale Agreement</li>
                  <li>Contingency Removal Form (CA-specific)</li>
                </ul>
              </div>
            </div>
            <div className="sell-2-summary-container">
              <div className="sell2-content1 sell2-iner">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Documents That You’ll Receive Between Contract and Close
                </Heading>
                <ul>
                  <li>Home Inspection Report</li>
                  <li>Home Appraisal Report</li>
                </ul>
              </div>
              <div className="sell2-content2">
                <Heading heading="heading2" style={HeadingStyle2}>
                  Final Documents Needed To Close the Deal
                </Heading>
                <ul>
                  <li>Most Recent Tax Statement</li>
                  <li>
                    Seller’s Estimated Settlement Statement (aka the Closing
                    Statement)
                  </li>
                  <li>The Deed</li>
                  <li>1099-S Tax Form</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sell-3">
          <div className="sell-content sell-content-3">
            <Heading heading="heading2" style={HeadingStyle}>
              Documents You Need to Gather Before Listing Your Home
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Original Sales Contract
            </Heading>
            <p className="about-dis">
              It’s the circle of life… at one point in time, you bought the
              house that you’re now selling! And there should be a record of it.
              <span className="line-height"></span>
              The original sales contract is the agreement you made with the
              previous owner of your home when you bought it. This contract
              outlines the terms of the purchase and maps out the “who”, “what”,
              “where”, “when”, and “why” of the transaction. This way, the buyer
              makes no mistake about who has previously owned the house, and the
              terms and conditions under which it was transferred to a new
              owner. The sales contract notes the price at which the house was
              sold, and elaborates on any disclosures about the property that
              were made before the sale.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Professional Appraisal From The Original Purchase of Your Home
            </Heading>
            <p className="about-dis">
              An appraisal is a professional assessment of the fair market value
              of your home that determines how much a mortgage lender will lend
              to a buyer. To go forward with the sale, you’ll need a brand new
              appraisal (unless you’re working with a cash buyer who doesn’t
              need financing, and we’ll dive into that below).
              <span className="line-height"></span>
              But first, another flashback! You need to provide the buyer with
              the appraisal report from the time you purchased your home as well
              as any documented updates since the original appraisal (such as in
              the case of a refinance).
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Mortgage Statement (Payoff Amount)
            </Heading>
            <p className="about-dis">
              If you’re selling before you pay off your current mortgage in
              full, contact your lender or servicer and request a statement
              showing your payoff amount. The payoff amount is the total you’ll
              have to pay to satisfy the terms of your mortgage loan, including
              any interest you owe until the day you plan to pay your loan in
              full.
              <span className="line-height"></span>
              The payoff amount is not the same as your current balance, which
              will appear on your most recent account statement and may not
              include interest. Your lender is required to provide your payoff
              amount to you, according to the Consumer Financial Protection
              Bureau, so don’t be shy about asking. With that information,
              you’ll be able to calculate your estimated home sale proceeds.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Homeowners Insurance Records
            </Heading>
            <p className="about-dis">
              Before you sell your home, you want to be transparent with your
              buyer about any damages and repairs made to your home. You’ll need
              to provide the buyer with proof of your homeowners insurance
              information as well as a claims report or a list of all the claims
              on your home since the time of purchase.
              <span className="line-height"></span>
              This will also give the buyer an idea of how much their homeowners
              insurance will cost when they move in.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Homeowners Association Documents
            </Heading>
            <p className="about-dis">
              If you want to sell property that is part of a development, odds
              are you’re already part of a Homeowners Association (HOA) that
              runs the whole thing.
              <span className="line-height"></span>
              The HOA—which sometimes acts as the fun police, and other times
              takes care of all your yardwork, both!—has certain guidelines
              about the appearance of your home, what you pay for assessments of
              your property, and if you can rent your home to other parties.
              <span className="line-height"></span>
              These are all key pieces of information the buyer will need to
              know before they make a purchase. They will need the following
              governing HOA documents:
              <span className="line-height"></span>
              <ul>
                <li>Articles of incorporation</li>
                <li>Bylaws</li>
                <li>Rules and regulations</li>
                <li>Homeowners dues amount statement</li>
                <li>
                  Copies of the minutes from the Association’s meetings of the
                  past two years
                </li>
                <li>
                  The Declaration of Covenants, Conditions, and Restrictions
                </li>
              </ul>
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Home Repair and Maintenance Records
            </Heading>
            <p className="about-dis">
              Home repair and maintenance records are hard evidence of all that
              work you’ve done to your home while you’ve proudly owned it. These
              records also let the buyers know what needs immediate attention
              when they move in. Your home repair and maintenance records should
              contain the following:
              <span className="line-height"></span>
              <ul>
                <li>
                  Maintenance receipts such as roof repairs, chimney cleanings,
                  appliance warranty plans, etc.
                </li>
                <li>
                  Dated records of your most recent painting, gutter cleanings,
                  window washings
                </li>
                <li>Utility maps for your electric and gas systems</li>
              </ul>
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Receipts for Capital Improvements
            </Heading>
            <p className="about-dis">
              Capital improvements are things like kitchen and bath remodels, or
              big additions like a swimming pool or new roof. They mitigate the
              capital gains taxes you owe on your home sale by adding to your
              adjusted cost basis.
              <span className="line-height"></span>
              Figuring in capital improvements come tax time will be much easier
              if you’ve kept a record of improvements you made over the course
              of ownership of the house, so make sure you always hang onto those
              receipts. Don’t forget that capital improvements do not include
              items necessary for the maintenance and repair of your home—only
              those improvements that have added to or increased your home’s
              value.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Manuals and Warranties
            </Heading>
            <p className="about-dis">
              Like the home repair and maintenance records, appliance manuals
              and warranties let the buyer know what shape they’re inheriting
              these items in when they move into their new home. You’ll want to
              provide the buyers with manuals and warranties for things like:
              <span className="line-height"></span>
              <ul>
                <li>Washers and dryers</li>
                <li>Refrigerators</li>
                <li>Dishwashers</li>
                <li>Stoves</li>
                <li>Garbage compactor/disposals</li>
              </ul>
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Past Utility Bills
            </Heading>
            <p className="about-dis">
              Buyers will be curious to know how the electricity, gas, water,
              and sewer bills for your house shake out each month so they can
              budget accordingly. You’re not required to provide this
              information, but you can expect them to at least inquire about it.
              Consider offering them a copy of whatever records you’ve got
              handy, whether it be hard or digital copies.
              <span className="line-height"></span>
              “During the negotiations, the buyer will also, of course, ask for
              a record of [the seller’s] utility bills,” says Jacki Shafer, a
              top real estate agent in the Louisville, KY area. “They will want
              a 12-month average; they want to see the detail of each and every
              month, what the seller paid going back a year. Sometimes they ask
              for two years, just to get a really good idea of what utilities
              are going to cost them.”
            </p>
            <Heading heading="heading2" style={HeadingStyle}>
              Documents Needed To Launch Your Home Sale Into Action
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Comparative Market Analysis
            </Heading>
            <p className="about-dis">
              Not sure how much your house could go for on the current real
              estate market? That’s why you hired an agent, and they will
              generate a comparative market analysis report for you.
              <span className="line-height"></span>A comparative market analysis
              compiles all of the information about home sales in your immediate
              area including homes that are currently for sale, homes midway
              through transactions, and homes that sold recently.
              <span className="line-height"></span>
              Your agent will scrutinize all of this data and be able to tell
              you how much you should sell your home for. This information is
              imperative before you put your home on the market, as a bad
              pricing strategy spells doom for your sale.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Listing Agreement
            </Heading>
            <p className="about-dis">
              A listing agreement makes the arrangement between you and your
              real estate agent official and gives your agent the exclusive
              rights to sell your home within a given time frame.
              <span className="line-height"></span>A comparative market analysis
              The contract lays out the terms of how the real estate agent can
              promote your home. You will also grant the agent the rights to use
              the listing content which includes photos, graphics, videos,
              drawings, virtual tours, written descriptions, and any other
              copyrightable elements relation to the property, according to the
              National Association of Realtors.
              <span className="line-height"></span>
              The terms involved in the agreement serve as the foundation of
              your entire real estate transaction, so read each line carefully.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Proposed Marketing Plan
            </Heading>
            <p className="about-dis">
              Much like the listing agreement, the proposed marketing plan lays
              out how your agent will go about marketing and selling your home.
              The marketing plan offers a game plan for home showings, open
              houses, social media marketing, and promoting your home across the
              top real estate websites to capture buyers’ attention.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Seller’s Net Sheet
            </Heading>
            <p className="about-dis">
              A seller’s net sheet is an organizational worksheet that your
              agent will fill out to show you how much you’ll pocket from your
              home sale after factoring in expenses like taxes, your real estate
              agent’s commission, your remaining mortgage, and escrow fees.
              <span className="line-height"></span>
              You might receive a seller’s net sheet more than once over the
              course of your transaction—most likely at the time of listing your
              property, and after you receive an offer, as the numbers will
              shift depending on how much your house sells for.
            </p>
            <Heading heading="heading2" style={HeadingStyle}>
              Documents to Have at the Ready While Your Home’s on the Market
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Preliminary Title Report or “Prelim”
            </Heading>
            <p className="about-dis">
              A preliminary title report, or in real estate speak a “prelim” is
              a financial and legal summary document that tells you, the seller,
              if there’s anything outstanding on your property before you put
              your house on the market. In other words, it’s a precautionary
              report.
              <span className="line-height"></span>A comparative market analysis
              A “prelim” shows you what taxes are owed on the property, what
              kinds of conditions and restrictions are recorded on your
              property, etc. A “prelim” also preps you for disclosing these
              restrictions and information to your agent and your potential
              buyers. You can get a title report using the one of the four
              biggest title companies for a couple hundred dollars:
              <span className="line-height"></span>
              <ul>
                <li>Fidelity</li>
                <li>First American</li>
                <li>Stewart</li>
                <li>Old Republic</li>
              </ul>
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Mandatory Disclosures
            </Heading>
            <p className="about-dis">
              When you come to an agreement on a price with a buyer,
              transparency is important. You don’t want your buyer to move in
              unaware that the house you sold to them has lead-based paint or
              asbestos.
              <span className="line-height"></span>A comparative market analysis
              A That is a lawsuit waiting to happen.
              <span className="line-height"></span>
              You are required to follow “mandatory disclosure” laws and make
              known to the buyer any hazards affecting the property before the
              sale is official.
              <span className="line-height"></span>
              Some examples of mandatory disclosures include:
              <span className="line-height"></span>
              <ul>
                <li>Lead-based paint</li>
                <li>Asbestos</li>
                <li>
                  Environmental hazards such as oil, gas, or toxic chemicals
                </li>
                <li>Water damage</li>
                <li>Defects/malfunctions of major appliances or systems</li>
                <li>Neighborhood nuisances</li>
                <li>
                  Past disputes over things like property lines or fencing
                </li>
              </ul>
              <span className="line-height"></span>
              Some Caveat Emptor (aka “buyer beware”) states don’t have required
              disclosures, but real estate experts will recommend that you err
              on the side of transparency out of good faith and to avoid any
              legal issues down the line.
              <span className="line-height"></span>
              Find a copy of your state’s unique real estate disclosure form
              here — we’ve compiled all 50 set of requirements into a handy
              list.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Pre-Inspection Report
            </Heading>
            <p className="about-dis">
              You have the option to hire a home inspector for a pre-inspection
              to get ahead on any material defects that might come up later.
              <span className="line-height"></span>If you’re selling an older
              home, a pre-listing inspection can save you from any big surprises
              down the line. However, a pre-listing inspection can also open a
              can of worms, and it means you have to disclose whatever you find
              to buyers (in writing) before they make an offer.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Transfer Disclosure Statement (CA)
            </Heading>
            <p className="about-dis">
              A transfer disclosure statement is a bit like a mandatory
              disclosure, but more “in-depth” and is required only in the state
              of California. A transfer disclosure statement describes the
              condition of the home, and its purpose is to help buyers decide
              whether or not they want to move forward with the transaction. A
              transfer disclosure statement includes information pertaining to
              the following items:
              <span className="line-height"></span>
              <ul>
                <li>
                  The date of the disclosure (the date that you’ve filled out
                  your form completely)
                </li>
                <li>
                  The presence and condition of appliances like washing
                  machines, gazebos, sump pumps, etc.
                </li>
                <li>
                  Defects and malfunctions on the property and the
                  infrastructure of the house.
                </li>
                <li>
                  Flooding, drainage, and other material facts about your home.
                </li>
                <li>Smoke detector installation and function</li>
              </ul>
              <span className="line-height"></span>
              Please also note that you, the seller must complete the transfer
              disclosure statement in your own handwriting. Failure to do so is
              legally dangerous.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Natural Hazard Report (CA)
            </Heading>
            <p className="about-dis">
              Put simply, the natural hazard report is a one page form
              containing “yes or no” questions about how hazardous your land and
              property is.
              <span className="line-height"></span>
              The state of California is more prone to mudslides, brush fires,
              seismic movement, etc. So you can understand the necessity of this
              document. You must check off which hazards apply (if any) to your
              property so that the buyer knows what kinds of damage the house
              has endured (and could face in the future). You don’t want to
              surprise buyers with a house right on the California fault lines.
              These hazards include:
              <span className="line-height"></span>
              <ul>
                <li>A Special Flood Hazard Area</li>
                <li>Dam Inundation</li>
                <li>Very High Fire</li>
                <li>Wildland fire</li>
                <li>Earthquake fault zone</li>
                <li>Seismic hazard</li>
                <li>Radon Gas exposure</li>
                <li>Airport influence area</li>
                <li>Megan’s Law disclosures</li>
                <li>Military ordinance</li>
              </ul>
            </p>
            <Heading heading="heading2" style={HeadingStyle}>
              Documents That Come Into Play Once a Buyer Makes an Offer
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Purchase Offer and Counteroffer Forms
            </Heading>
            <p className="about-dis">
              A purchase offer is a documented first step to a buyer closing on
              a home. The purchase offer lays out an acceptable agreement
              between the buyer and seller. Any back and forth negotiations on
              the purchase offer will be documented in writing with
              counteroffers. Once signed, the purchase offer becomes a purchase
              agreement (or contract) that is subject to amendments once the
              transaction moves into the latter stages. The purchase contract
              elaborates on details of a purchase such as the identification and
              specification of the property as well as the price the buyer has
              offered to the seller for the house.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Final Purchase and Sale Agreement
            </Heading>
            <p className="about-dis">
              Together the buyers’ and seller’s real estate agents/real estate
              attorneys draft up the Final Purchase and Sale Agreement, a
              contract that states the selling price of the home, the terms of
              the purchase, the earnest money amount, the closing date (that’s a
              big one, as you’ll need to be 100% moved out by that date!) and
              any contingencies. Both the buyer and the seller need to agree to
              the terms and sign the document before they can move forward with
              the sale of the house.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Contingency Removal Form (CA-specific)
            </Heading>
            <p className="about-dis">
              A contingency is a clause in your real estate contract that needs
              to be met before the deal closes or the contract becomes
              “binding.” The most common contingencies will be for the home
              inspection, home appraisal, and your buyer’s financing. While real
              estate deals across the U.S. can include contingencies, California
              is the only state where you need to complete a contingency removal
              form in order to lift the contingency restraints so that the sale
              can move forward and close. Consult our guide to the CA
              contingency removal form to learn more. (With most states,
              contingencies are automatically removed after the set time period
              passes or the contingency is met).
            </p>
            <Heading heading="heading2" style={HeadingStyle}>
              Documents That You’ll Receive Between Contract and Close
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Home Inspection Report
            </Heading>
            <p className="about-dis">
              You can count your buyers putting a home inspection contingency in
              the contract, which means they’ll arrange for an inspector to come
              through and evaluate the house before the deal can close.
              <span className="line-height"></span>A typical home inspection
              takes a few hours for a regular house, then the report takes about
              3-4 days to complete. The home inspector goes through the interior
              and exterior of the house to record any broken, defected, or
              hazardous issues with the house and surrounding area.
              <span className="line-height"></span>
              Then, the inspector drafts up a home inspection report that spans
              about 30-50 pages in length (with pictures). The document details
              the state of your home’s structure, the electrical system,
              plumbing, heating, fireplaces, etc. Separate inspections and
              inspection reports like pool and pest inspections should also be
              included in your paperwork if your home requires them.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Home Appraisal Report
            </Heading>
            <p className="about-dis">
              If your buyer is financing their home with a mortgage, the lender
              will require an appraisal to determine your home’s fair market
              value. After the appraiser evaluates your home, the appraisal
              report should come back in less than a week.
              <span className="line-height"></span>As the seller, you won’t
              automatically get a copy of the appraisal report, but you can
              request one and the lender will have to provide it to you in 30
              days time.
              <span className="line-height"></span>
              If the appraisal came in under the offer, your real estate agent
              will be able to fill you in on the details right away.
              <span className="line-height"></span>
              The report, which is typically about 10 pages or less (though some
              can stretch to 100 pages), will contain local comparable
              properties with photos and details of each property including the
              home being appraised, the appraised value, how the appraiser
              determined the value, and what factors the appraiser took into
              consideration.
            </p>
            <Heading heading="heading2" style={HeadingStyle}>
              Final Documents Needed To Close the Deal
            </Heading>
            <Heading heading="heading2" style={HeadingStyle2}>
              Most Recent Tax Statement
            </Heading>
            <p className="about-dis">
              You must provide property tax receipts to calculate any
              outstanding property taxes you owe on your house so the buyers can
              estimate the cost of taxes on their new property at the time of
              closing.
              <span className="line-height"></span>Whether or not you (or the
              buyers) will have to pay property taxes at the time of your home
              sale depends on your municipality’s real estate tax schedule. In
              some instances, cities and towns will collect taxes for the
              upcoming year, meaning that the sale of your home midway through
              the calendar could result in a refund.
              <span className="line-height"></span>
              In other states, homeowners pay property taxes “in arrears,”
              meaning you’re paying taxes for the time period leading up to the
              billing cycle. That could leave you with unpaid property taxes,
              and you are responsible for paying property taxes on your home up
              to (but not including) the day you close.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              Seller’s Estimated Settlement Statement (aka the Closing
              Statement)
            </Heading>
            <p className="about-dis">
              Near the end of your transaction, a seller’s closing statement
              shows you how much money you’ll receive after accounting for
              closing costs, taxes, and other transaction fees on your home
              sale. The closing agent or title company will generate the closing
              statement.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              The Deed
            </Heading>
            <p className="about-dis">
              “Deed” is not just an old-timey term that’s thrown around in
              Western films from the ’60s. A deed (not to be confused with the
              title, which isn’t a physical document but a legal concept that
              grants someone ownership of the home) is a physical legal document
              that officially transfers ownership (title) of a house from the
              seller to the buyer. The deed includes the identification of both
              parties as well as a thorough description of the property itself.
            </p>
            <Heading heading="heading2" style={HeadingStyle2}>
              1099-S Tax Form
            </Heading>
            <p className="about-dis">
              If you don’t qualify for the capital gains tax exclusion (which
              covers up to $250,000 of the net profit on your home sale, or up
              to $500,000 if filing jointly), then you will have to fill out a
              1099-S form to report taxes owed to the IRS on the sale of your
              home come tax season.
            </p>
            <div className="sell-text">
              <Heading heading="heading2" style={HeadingStyle}>
                Congratulations! You’ve Got All The Right Documents To Sell Your
                Home
              </Heading>
            </div>
            <p className="about-dis last-para">
              Phew! We never said selling your home would be easy, but we did
              say it would be worth it (just ask your bank account). The
              documents needed to sell a house are extensive and complicated.
              You’ll want——
              <div className="sell-link">
                <Link to="/agentfinder"> an experienced real estate agent</Link>
              </div>
              ——who’s decoding the jargon throughout the process. That way, all
              you have to do is “sign here.”
            </p>
          </div>
        </div>
        <div className="sell-4-background-conteainer">
          <img src={LastSVG} className="sell-4-background" alt="Taking-Note" />
        </div>
        <div className="sell-4">
          <Heading style={ListHeading1}>Vists realHousey office</Heading>
          <Heading heading="heading2" style={ListHeading2}>
            For More Listing Related Clarification
          </Heading>
          <Link
            to={{
              pathname: "/",
              hash: "#hash",
            }}
          >
            <Button>Learn More</Button>
          </Link>
        </div>
        <FooterSmall />
      </div>
    </div>
  );
};

export default Sell;
