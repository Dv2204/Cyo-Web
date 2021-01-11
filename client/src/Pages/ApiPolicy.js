import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivacyNav from "../components/Nav/PrivacyNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";

const ApiPolicy = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <PrivacyNav toggle={toggle} />
        <Grid container lg={12} md={12} xs={12} sm={12}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="h2" className={classes.text} justify="center">
              API POLICY
            </Typography>
            <Typography variant="h2" className={classes.name} justify="center">
              Choose Your Option Pvt. Ltd.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="body1" style={{ color: "#494848" }}>
              By accepting these License Agreement Terms of Use{" "}
              <b>(“License Agreement”)</b> you and your controlled affiliates,
              where applicable, agree to enter into a legally binding agreement{" "}
              <b>(“Agreement”)</b> with Choose Your Option Pvt. Ltd. and its
              affiliates <b>(collectively, “CYOGYMS”)</b> regarding use of
              CyoGyms Licensed Content, Marks <b>(each as defined below)</b> and
              application programming interface <b>(“API”)</b>. The following
              terms shall govern your use of API and relationship with CyoGyms.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Account Creation
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              You must create an account in order to use CyoGyms Licensed
              Content, Marks and API. To create an account, you will be asked to
              provide certain basic information. This information may include
              your name, address, company/organization, telephone number and
              email address. Such information will be held and used by CyoGyms
              in accordance with CyoGyms privacy policy, which governs the use
              of any personal information provided by you to CyoGyms.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Purpose
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              This License Agreement governs your use of Licensed Content and
              Marks, API licensed to you pursuant to the terms hereto, and any
              accompanying or related documentation, source code, executable
              applications and other materials CyoGyms determines to provide to
              you in the development or operation of your website and / or
              mobile application <b>(“Developer Platform”)</b>.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Grant of License
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              1. <b>License to Content:</b> Subject to the terms and conditions
              of this License Agreement and the License Content Usage
              Guidelines, CyoGyms hereby grants you a non-transferable,
              non-exclusive, revocable, non-sublicensable, royalty-free right
              and license to (i) use, perform and display{" "}
              <b> (publicly or otherwise)</b> the Licensed Content in your
              applications <b>(the “Developer Application”)</b> on the Developer
              Platform, and (ii) allow users of the Developer Platform{" "}
              <b>(“Users”)</b> to access the Licensed Content using the
              Developer Applications on the Developer Platform.
              <br />
              <br />
              2. <b>Licensed Content:</b> Licensed Content shall include such
              restaurant information as may be provided by CyoGyms at its sole
              discretion from time to time. The Licensed Content shall be shared
              with you on a real time basis and you will be permitted to make a
              maximum of thousand (1000) calls to the API per day to access the
              Licensed Content. CyoGyms hereby reserves the right to modify,
              change, or delete any of the Licensed Content and API, including
              but not limited to alter, modify, change or delete the terms of
              this License Agreement, from time to time, at its sole discretion.
              Further, any modification, change or deletion made by CyoGyms to
              the Licensed Content, API or this License Agreement shall be
              applicable to you. If you do not wish to be bound to any new
              modification introduced by CyoGyms to the Licensed Content, API or
              this License Agreement, you must terminate this License Agreement
              be ceasing to use the API and Licensed Content within 10 (ten)
              days from such modification.
              <br />
              <br />
              3. <b>License to CyoGyms Marks:</b> Subject to the terms of this
              License Agreement, CyoGyms hereby grants you a non-transferable,
              nonexclusive, revocable, non-sublicensable, royalty-free license
              to use, reproduce and display Zomato’s name, trademarks, service
              marks and logos identified as set out in the License Content Usage
              Guidelines <b>(collectively, “Marks”)</b>, solely for purposes of
              performing your obligations or exercising your rights under this
              License Agreement and strictly in accordance with the License
              Content Usage Guidelines.
              <br />
              <br />
              4. <b> Attribution:</b> All content pages which contain Licensed
              Content will have a ‘Powered By CyoGyms’ attribution as described
              in the Trademark Use Guidelines. Each website content page will
              have a dofollow link to www.cyogyms.com, which link will open
              www.cyogyms.com in a new window. Each mobile app content page will
              have a link to open the CyoGyms mobile app or, if the CyoGyms app
              is not installed, to the mobile device’s app store{" "}
              <b>(e.g., Google Play or Apple’s App Store)</b>.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Obligations of Developer
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              1. <b>Developer Platform:</b> You are responsible for all costs
              and expenses related to the Developer Application, the Developer
              Platform, and the integration of the API and/ or the Licensed
              Content (as applicable) therein.
              <br />
              <br />
              2. <b>Compliance:</b> You shall comply with this License
              Agreement, the CyoGyms Terms of Use, the Trademark Usage
              Guidelines, the CyoGyms Privacy Policy and any other CyoGyms
              policy to your use of the API, Licensed Content, Marks and
              documentation, as the same may be amended by CyoGyms from time to
              time.
              <br />
              <br />
              3. <b>Credentials:</b> You will be provided with the API
              credentials , which will be in the form of a secure electronic key
              provided by CyoGyms. You shall not share API key with any third
              party and shall keep the API key safe and secure. You shall only
              use the API key for the Developer Applications. CyoGyms reserves
              the right to (a) issue new API keys to you from time to time; and
              (b) suspend your API key at its sole discretion. In the event you
              are unable to access the API with your existing API key, please
              contact CyoGyms.
              <br />
              <br />
              4. <b>Reporting:</b> You will immediately report any security
              flaws in the API or the Licensed Content or infringement of Marks,
              and any actual or suspected unauthorized access to the API.
              <br />
              <br />
              5. <b>No Modification of Licensed Content:</b> You shall not
              modify or edit Licensed Content except for formatting changes
              solely for the purpose of integrating the Licensed Content into
              the Developer Application, provided that such modification shall
              not adversely affect the attribution required by CyoGyms.
              <br />
              <br />
              6. <b>Privacy:</b> You shall not violate the privacy rights of any
              individual or entity.
              <br />
              <br />
              7. <b>No Interference or Reverse Engineering:</b> You won’t
              attempt to (i) copy, rent, lease, sell, transfer, assign,
              sublicense, interfere with, modify or disable any features,
              functionality or security controls of the API and Licensed
              Content, (ii) defeat, avoid, bypass, remove, deactivate or
              otherwise circumvent any protection mechanisms for the Licensed
              Content or Marks, or (iii) reverse engineer, decompile,
              disassemble or derive source code, underlying.
              <br />
              <br />
              8. <b>Data received from CyoGyms:</b> <br />
              &nbsp;&nbsp; i. Under this License Agreement, you will receive the
              Licensed Content through the API key provided by CyoGyms.
              <br />
              &nbsp;&nbsp; ii. You cannot cache or store, record, pre-fetch or
              otherwise store any portion of the Licensed Content or undertake
              any bulk download operations.
              <br />
              &nbsp;&nbsp; iii. You will not directly or indirectly transfer any
              data received from CyoGyms to any third party and shall limit
              access to your employees and contractors with a need to know such
              information in performance of their duties.
              <br />
              &nbsp;&nbsp; iv. You shall not create or disclose metrics about,
              or perform any statistical analysis of, the Licensed Content. You
              shall not disclose any such metrics or analyses related to or
              connected with the Licensed Content to any third party, during the
              validity of this Licensed Agreement and for a further period of 3
              years following termination of this API Agreement.
              <br />
              &nbsp;&nbsp; v. You shall not use the Licensed Content on your
              Developer Platform and/or Developer Application to (i) create/
              generate additional data or (ii) provide any functionality whereby
              you or any third party is able to generate additional data using
              the Licensed Content.
              <br />
              &nbsp;&nbsp; vi. You shall not, directly or indirectly, sell,
              misuse or abuse the Licensed Content received by you through the
              API key.
              <br />
              &nbsp;&nbsp; vii. You shall not, directly or indirectly, create
              enhancements, derivatives, teaser content in all media, mediums,
              and formats (including, without limitation, all languages), to the
              Licensed Content.
              <br />
              &nbsp;&nbsp; viii. You shall not comingle the Licensed Content
              with third party content. Further, you shall not display Licensed
              Content and Marks along with content that under law are considered
              to be unlawful, blasphemous, derogatory, objectionable, against
              public policy and derogatory or detrimental to CyoGyms reputation.
              <br />
              &nbsp;&nbsp; ix. In the event that you stop using the Licensed
              Content or if this License Agreement is terminated, you must
              delete all Licensed Content you have received from CyoGyms or
              through use of the API and CyoGyms reserves the right to
              deactivate the API key provided to you.
              <br />
              &nbsp;&nbsp; x. CyoGyms may require you to inter alia promptly
              delete and remove all calls to the API made by you including but
              not limited to any data received from the API and cease all use of
              the Marks if you violate the terms and conditions of this License
              Agreement or any other conditions that CyoGyms may in the future
              make applicable to you with regard to the API, the Licensed
              Content or the Marks.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Recognition of Absolute Ownership
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              CyoGyms shall own and retain all right, title and interest to all
              the Licensed Content and enhancement thereof, the Marks, the API,
              and all content displayed on CyoGyms’s website (except the
              Developer Application and the Developer Platform) and you hereby
              recognize and acknowledge such ownership by CyoGyms. CyoGyms shall
              also own all right, title and interest in and to all reviews,
              photographs, and other user-generated content posted by Users with
              respect to establishments included in the Licensed Content, all
              derivative works based upon any of CyoGyms’s intellectual property
              and Licensed Content, including any and all intellectual property
              rights in such user-generated content and in such derivative
              works; provided, however, that you shall own your confidential
              information on your website pages, metrics, and internal reporting
              (including metrics generated on the Developer Platform, even if it
              is generated on the basis of data that is provided to you by
              CyoGyms). To the extent that any of such derivative works does not
              constitute a work made for hire, you hereby assign to CyoGyms all
              right, title and interest that you may have or may hereafter
              acquire in all such derivative works, including all intellectual
              property rights therein. At CyoGyms’s expense, you shall execute
              all documents and take all actions necessary for CyoGyms to
              document, obtain, maintain or assign its rights to such derivative
              works. All such materials will be deemed to be the confidential,
              proprietary and trade secret information of CyoGyms.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Developer Obligations and Protection of Information and Access Key
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              In the event of any breach of this License Agreement (including
              without limitation the confidentiality provisions herein) or
              unauthorized use of the API and/ or Licensed Content is committed
              by you and your authorized personnel or others with access to the
              API key or Licensed Content through you, you shall be liable for
              such breach or disclosure.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Confidentiality
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              1. “Confidential Information” means any confidential and/or
              proprietary information of CyoGyms or any of its affiliates
              disclosed to you, and/or obtained by you through CyoGyms under
              this License Agreement, either directly or indirectly, in writing
              or orally and whether or not in tangible or fungible form.
              Notwithstanding the foregoing, it is clarified that Confidential
              Information does not include any information which you can
              demonstrate by reasonable evidence: <br />
              i. is generally known to, and available for use by, the public
              other than as a result of the breach of this License Agreement or
              a breach of another obligation to CyoGyms of which you are aware;
              <br />
              ii. was known to you at the time of receipt of such information
              from CyoGyms without obligation of confidentiality to CyoGyms or
              any third party; or
              <br />
              iii. is disclosed to you on a non-confidential basis by a third
              party; provided, that such third party is not, to your knowledge
              after due inquiry, bound by an obligation of confidentiality to
              CyoGyms or any of its affiliates with respect to such confidential
              information.
              <br />
              <br />
              2. You shall restrict all access to Confidential Information to
              your authorised personnel on strict a “need to know” basis and
              apprise them of the confidentiality requirements. This obligation
              shall survive the termination of this License Agreement for a
              period of 5 (five) years. Nothing (Confidentiality) will prevent
              you from disclosing Confidential Information where it is required
              to be disclosed by judicial, administrative, governmental or
              regulatory process in connection with any action, suit, proceeding
              or claim or otherwise by applicable law (provided, however, that
              you use reasonable efforts to provide notice of such disclosure to
              CyoGyms and the opportunity for CyoGyms to seek a protective order
              to guard the confidentiality of the disclosed confidential
              information).
              <br />
              <br />
              3. During the validity of this License Agreement and for a period
              of 3 (three) years following expiration or termination hereof, you
              will not directly or indirectly make or publish any statement or
              do anything which might reasonably be expected to damage the
              reputation or any other business interests of CyoGyms.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              CyoGyms Use of Developers Trademarks
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              You hereby grant to CyoGyms a nonexclusive, royalty-free, license
              during the validity of this License Agreement, to use your name
              and trademarks solely to promote and advertise the relationship
              between CyoGyms and you pursuant to this License Agreement. You
              understand and agree that CyoGyms has no obligation (i) to use
              your name or trademarks or (ii) to promote you or its services.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Independent Parties
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              This License Agreement is on a “principal to principal” basis and
              the Parties are independent of each other and nothing contained
              herein is intended to or shall be deemed to create any
              partnership, joint venture, employment or relationship of
              principal and agent between the Parties hereto or between CyoGyms
              and you and if applicable your representatives and employees or
              between you and the representatives and employees of CyoGyms or to
              provide either of the Parties with any right, power or authority,
              whether express or implied to create any such duty or obligation
              on behalf of the other party.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Indemnity
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              1. You will indemnify and hold harmless CyoGyms, its affiliates
              and network partners, and any of their respective officers,
              directors, employees and agents from and against any claims,
              costs, charges, damages, losses and expenses (including reasonable
              attorneys and consultants fees and expenses) with respect to any
              third party claim relating to or arising out of: (a) your use of
              any Licensed Content in a manner inconsistent with the terms of
              this License Agreement; (b) your breach of this License Agreement,
              (c) breach of any applicable laws, regulations, or ordinances; (d)
              the Developer Platform or (e) the Developer Applications. CyoGyms
              will: (i) promptly notify you of such claim (provided, however,
              that a failure to provide such notice shall not limit your
              indemnification obligation hereunder except to the extent that you
              are materially prejudiced thereby) and (ii) permit you to
              participate in the defense of any such claim at its expense, with
              counsel reasonably acceptable to CyoGyms.
              <br />
              <br />
              2. <b>Limitation of Liability:</b> IN ADDITION TO YOUR LIABILITY
              FOR BREACH OF THE TERMS OF THIS AGREEMENT YOU SHALL BE LIABLE FOR
              BREACHES OF CONFIDENTIALITY, YOUR USE OF THE LICENSED CONTENT,IN A
              MANNER INCONSISTENT WITH THE TERMS OF THIS LICENSE AGREEMENT.
              NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOST DATA, LOST PROFITS,
              LOST REVENUE OR COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR
              SERVICES, HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY,
              INCLUDING BUT NOT LIMITED TO CONTRACT OR TORT (INCLUDING PRODUCT
              LIABILITY, STRICT LIABILITY AND NEGLIGENCE), AND WHETHER OR NOT
              SUCH PARTY WAS OR SHOULD HAVE BEEN AWARE OR ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGE AND NOTWITHSTANDING THE FAILURE OF
              ESSENTIAL PURPOSE OF ANY LIMITED REMEDY STATED HEREIN.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Termination
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              CyoGyms reserves the right, in its sole discretion (for any reason
              or for no reason) and at any time without notice or liability, to
              change, suspend or discontinue the API, Licensed Content and/or
              suspend or terminate your rights under this Licensed Agreement to
              access, use and/or display (as applicable) the API, and/or any
              Licensed Content.
              <br />
              1. Any termination of this License Agreement shall also terminate
              the licenses granted hereunder. Upon termination of this License
              Agreement for any reason, you will promptly stop all calls to the
              API and stop using, and either return to CyoGyms or destroy and
              remove, all copies of the Licensed Content, Marks, API Key and any
              Confidential Information in your possession. Upon such termination
              or early expiration, CyoGyms reserves the right to suspend the API
              key without notice to you.
              <br />
              <br />
              2. Notwithstanding the above, the provisions of this License
              Agreement regarding confidentiality and indemnification and all
              obligations of Parties arising prior to the expiration or
              termination of this License Agreement shall survive the expiration
              or termination of this License Agreement.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Governing Law and Jurisdiction
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              The validity, construction and performance of this License
              Agreement shall be governed by, and construed and enforced in
              accordance with, the laws of India. Any dispute or difference
              whatsoever arising between the parties out of or relating to the
              construction, meaning, scope, operation or effect of this
              agreement or the validity or the breach thereof shall be settled
              by arbitration in accordance with the Rules of International
              Commercial Arbitration of the Indian Council of Arbitration and
              the award made in pursuance thereof shall be binding on the
              parties. The Parties specifically exclude from application to the
              Agreement the United Nations Convention on Contracts for the
              International Sale of Goods and the Uniform Computer Information
              Transactions Act.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              WARRANTY DISCLAIMER
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              CYOGYMS MAKES NO REPRESENTATION OR WARRANTY WITH RESPECT TO THE
              CYOGYMS SITE, THE API, THE LICENSED CONTENT AND CYOGYMS EXPRESSLY
              DISCLAIMS ANY AND ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR
              STATUTORY, WITH RESPECT TO CYOGYMS, THE CYOGYMS SITE, THE API, THE
              LICENSED CONTENT, AND THE MARKS, INCLUDING WITHOUT LIMITATION ANY
              IMPLIED WARRANTY OF MERCHANTABILITY, INFRINGEMENT OR FITNESS FOR A
              PARTICULAR PURPOSE, OR ANY IMPLIED WARRANTY ARISING FROM COURSE OF
              PERFORMANCE, COURSE OF DEALING OR USAGE OF TRADE. CYOGYMS DOES NOT
              WARRANT THAT USE OF THE API WILL BE UNINTERRUPTED OR ERROR-FREE.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Force Majeure
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              Any delay in or failure of performance by CyoGyms under this
              License Agreement will not be considered a breach of this License
              Agreement and will be excused to the extent caused by any
              occurrence beyond its reasonable control, including, but not
              limited to, acts of God, power outages, failures of the Internet,
              failures of banking or any other unforeseeable event.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Legal Compliance
            </Typography>
            <Typography variant="body1" className={classes.textbody}>
              You and CyoGyms will each comply with all laws, rules and
              regulations, if any, applicable in connection the performance of
              their respective obligations under this License Agreement.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={10} sm={10} xs={10} md={10} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Miscellaneous
            </Typography>
            <Typography variant="body1" className={classes.textbodylast}>
              The parties agree that CyoGyms may assign any of its rights or
              transfer by novation any of its rights and obligations under this
              License Agreement to any of its affiliates or to any acquirer of
              substantially all of its business without notice to You or Your
              consent. You may not assign your rights and obligations under this
              License Agreement without the prior written consent of CyoGyms,
              which consent shall be at the discretion of CyoGyms and may also
              be subject to conditions as deemed appropriate by CyoGyms.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <ContactUsNew />
        </Grid>
      </div>
    </>
  );
};

export default ApiPolicy;
