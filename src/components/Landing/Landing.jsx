import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import LandingTop from '../../app/assets/img/landing-top.svg'
import Withdraw from '../../app/assets/img/withdraw.jpg'
import LandingBottom from '../../app/assets/img/landing-bottom.svg'


const Landing = () => {
  return (
    <main>
      <div className={styles.Landing}>
        <img className={styles.Landing_TopBackground} src={LandingTop} alt='top background' />

        <div className={styles.Header}>
          <div className={styles.Header_logo}>
            <div className={styles.Logo}>Bithela</div>

          </div>
          <div className={styles.Header_Right}>
            <div className={styles.Header_Proportions}>
              <span className={styles.Header_Currencies}>BTC / ETC</span>
              <span className={styles.Header_Value}>223.649</span>
            </div>
            <div className={styles.SignUp}>
              {/* <a href="/sign-up">Sign Up</a> */}
              <Link to='register'>Sign Up</Link>

            </div>
            <div className={styles.SignIn}>
              {/* <a href="/sign-in">Sign in</a> */}
              <Link to='login'>Sign In</Link>
            </div>
          </div>
        </div>

        <div className={styles.Intro}>
          <h1>
            <span className={styles.Intro_Top}>Africa's easiest way to</span>
            <span className={styles.Intro_Bottom}>
              <span className={styles.Intro_Emphasis}> trade </span> ,
              <span className={styles.Intro_Emphasis}> buy </span> and
              <span className={styles.Intro_Emphasis}> sell </span>
              crypto-currencies
            </span>
          </h1>
          <div className={styles.Intro_Advertise}> Buy, sell and trade digital currencies safely at your convenience </div>
          <div className={styles.Intro_CreateAccount}>
            {/* <a aria-current='false' ><Link to='register'>Create Account</Link></a> */}
            <Link to='register'><a aria-current='false' >Create Account</a></Link>
          </div>
        </div>


        <div className={styles.WhyUse}>
          <h2>Why use Bithela</h2>
          <div className={styles.WhyUse_Tabs}>

            <div className={styles.WhyUse_Tab}>
              <div className={styles.WhyUse_Icon}>
                <svg viewBox="0 0 512 512"><g id="Group_4" data-name="Group 4"><g id="Group_3" data-name="Group 3">
                  <path id="Path_6" data-name="Path 6" d="M257,90C166.019,90,90,164.019,90,255s76.019,167,167,167,165-76.019,165-167S347.981,90,257,90Zm30,240H272v15c0,19.773-30,19.854-30,0V330H197c-19.773,0-19.854-30,0-30h15V210H197c-19.773,0-19.854-30,0-30h45V165c0-19.773,30-19.854,30,0v15h15c38.5,0,59.664,45.761,33.3,75C346.664,284.239,325.5,330,287,330Z" style={{ fill: 'rgb(206, 65, 161)' }}></path>
                </g></g><g id="Group_6" data-name="Group 6"><g id="Group_5" data-name="Group 5">
                  <path id="Path_7" data-name="Path 7" d="M287,270H242v30h45C306.828,300,306.828,270,287,270Z" style={{ fill: 'rgb(206, 65, 161)' }}></path>
                </g></g><g id="Group_8" data-name="Group 8"><g id="Group_7" data-name="Group 7">
                  <path id="Path_8" data-name="Path 8" d="M287,210H242v30h45C306.828,240,306.828,210,287,210Z" style={{ fill: "rgb(206, 65, 161)" }}></path>
                </g></g><g id="Group_10" data-name="Group 10"><g id="Group_9" data-name="Group 9">
                  <path id="Path_9" data-name="Path 9" d="M75,60a45,45,0,1,0,45,45A45.05,45.05,0,0,0,75,60Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                </g></g><g id="Group_12" data-name="Group 12"><g id="Group_11" data-name="Group 11">
                  <path id="Path_10" data-name="Path 10" d="M257,0C206.849,0,156.744,14.949,115.53,42.081a75.436,75.436,0,0,1,22.076,21.81A230.2,230.2,0,0,1,257,29.8c124.072,0,225.2,101.128,225.2,225.2a231.5,231.5,0,0,1-15.846,83.006,75.067,75.067,0,0,1,25.239,17.908A261.2,261.2,0,0,0,512,255C512,114.39,397.61,0,257,0Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                </g></g><g id="Group_14" data-name="Group 14"><g id="Group_13" data-name="Group 13">
                  <path id="Path_11" data-name="Path 11" d="M374.394,448.109C339.264,469.791,299.036,482.2,257,482.2,132.928,482.2,29.8,379.072,29.8,255a220.924,220.924,0,0,1,15.848-81.006,75.074,75.074,0,0,1-25.241-17.908A261.2,261.2,0,0,0,0,257C0,397.61,116.39,512,257,512a253.075,253.075,0,0,0,139.47-42.081A75.436,75.436,0,0,1,374.394,448.109Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                </g></g><g id="Group_16" data-name="Group 16"><g id="Group_15" data-name="Group 15">
                  <path id="Path_12" data-name="Path 12" d="M437,362a45,45,0,1,0,45,45A45.05,45.05,0,0,0,437,362Z" style={{ fill: "rgb(147, 44, 136)" }}></path></g></g>
                </svg>
              </div>
              <div className={styles.WhyUse_Title}>
                <span>Trade </span> <span> Bitcoin</span> <span>and</span> <span>Ethereum</span>  <span>easily</span>
              </div>
              <div className={styles.WhyUse_Description}> Join the growing world of digital currencies using our platform</div>
            </div>


            <div className={styles.WhyUse_Tab}>
              <div className={styles.WhyUse_Icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.4 489.7">
                  <g id="padlock" transform="translate(-511 -260)"><g id="Group_1" data-name="Group 1" transform="translate(422.35 260)">
                    <path id="Path_1" data-name="Path 1" d="M244.85,177.3A156.222,156.222,0,0,0,88.65,333.5c0,86.2,70,156.2,156.2,156.2s156.2-70,156.2-156.2A156.222,156.222,0,0,0,244.85,177.3Zm19.8,164.4v42.4a20.571,20.571,0,0,1-20.6,20.6h0a20.571,20.571,0,0,1-20.6-20.6V341.7a42.381,42.381,0,0,1-21.4-41.6c2.3-19.4,17.9-35,36.9-36.9a42.393,42.393,0,0,1,47,42A41.751,41.751,0,0,1,264.65,341.7Z" style={{ fill: "rgb(206, 65, 161)" }}></path>
                    <path id="Path_2" data-name="Path 2" d="M186.95,115.5a56.7,56.7,0,0,1,113.4,0v51.2a176.689,176.689,0,0,1,58.3,32.9V115.5C359.55,51.7,307.85,0,244.05,0a115.4,115.4,0,0,0-115.4,115.5v86.1a174.224,174.224,0,0,1,58.3-34.1Z" style={{ fill: "rgb(147, 44, 136)" }}>
                    </path>
                  </g></g>
                </svg>
              </div>
              <div className={styles.WhyUse_Title}>
                <span>Trust </span> <span> and</span> <span> Security</span>
              </div>
              <div className={styles.WhyUse_Description}> Avoid perennial inflation by buying into deflationary currencies </div>
            </div>


            <div className={styles.WhyUse_Tab}>
              <div className={styles.WhyUse_Icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.997 705.299">
                  <g id="time-control-tool" transform="translate(-721 -129)"><g id="Group_2" data-name="Group 2" transform="translate(674.349 129)">
                    <path id="Path_3" data-name="Path 3" d="M395.233,117.99V91.6l64.906.023v-5.55A86.049,86.049,0,0,0,374.08,0H311.448a86.086,86.086,0,0,0-86.06,86.071v5.515l66.343.023v26.163C152.565,141.993,46.651,263.051,46.651,409.157c0,163.594,132.571,296.142,296.107,296.142S638.865,572.751,638.865,409.157C638.876,263.557,533.7,142.786,395.233,117.99ZM342.758,637.52c-125.907,0-228.339-102.433-228.339-228.362,0-125.9,102.433-228.3,228.339-228.3S571.1,283.263,571.1,409.158C571.1,535.087,468.665,637.52,342.758,637.52Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                    <path id="Path_4" data-name="Path 4" d="M651.987,153.333,603.97,105.3a22.744,22.744,0,0,0-32.2-.023l-38.929,38.939,80.246,80.2L651.986,185.5A22.751,22.751,0,0,0,651.987,153.333Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                    <path id="Path_5" data-name="Path 5" d="M341.724,195.237c-117.714.54-212.966,96.125-212.966,213.92,0,118.231,95.815,214.022,214.012,214.022s213.989-95.769,214-214H341.724Z" style={{ fill: "rgb(206, 65, 161)" }}></path>
                  </g></g>
                </svg>
              </div>
              <div className={styles.WhyUse_Title}>
                <span>Buy </span> <span>and</span> <span>Sell</span> <span>in</span> <span>Seconds</span>
              </div>
              <div className={styles.WhyUse_Description}> Use our fast responsive platform that helps you manage the market </div>
            </div>
          </div>
        </div>

        <div className={styles.Exchange}>
          <div className={styles.Exchange_Steps}>
            <h2>
              <span> Bithela </span> Exchange
            </h2>

            <div role='button' tabIndex='0' className={`${styles.Exchange_Step} ${styles.Exchange_Active}`}>
              <div className={styles.Exchange_Title}>Deposit and Withdraw</div>
              <div className={styles.Exchange_Description}>
                Deposit and Withdraw to and from your Bithela wallet, mobile money wallet, and bank account at a low to zero cost.
              </div>
            </div>

            <div role='button' tabIndex='0' className={styles.Exchange_Step}>
              <div className={styles.Exchange_Title}>Trade Conveniently</div>
              <div className={styles.Exchange_Description}>
                Buy, sell, and manage your digital assets instantly, anytime and accessible anywhere at your convenience.
              </div>
            </div>

            <div role='button' tabIndex='0' className={styles.Exchange_Step}>
              <div className={styles.Exchange_Title}>Transact Securely</div>
              <div className={styles.Exchange_Description}>
                We go to lengths to secure your digital assets  by using the latest known security measures and best practices currently
                available.
              </div>
            </div>
          </div>

          <div className={styles.Exchange_InteractiveView}>
            <img src={Withdraw} />
          </div>
        </div>

        <div className={styles.Landing_Footer}>
          <div className={styles.BuildPortfolio}>
            <h2>Build Your Digital Portfolio!</h2>
            <div className={styles.BuildPortfolio_Advantages}>
              With no hidden fees, transaparent trading and a commitment  to regulatory  compliance, we are the
              <span> ideal platform for </span>
              building
              <span> your </span>
              digital portfolio
            </div>
            <div className={styles.BuildPortfolio_CreateAccount}>
              <Link to='register'><a aria-current='false' >Create Account</a></Link>
            </div>
          </div>
          <div className={styles.Footer_Wrp}>
            <div className={styles.Footer}>
              <div className={styles.Footer_LeftSide}>

                <div className={styles.Footer_Terms}>
                  <a href="http://">Terms and Conditions</a>
                </div>
                <div className={styles.Footer_Social}> Social</div>
                <div className={styles.Footer_Instagram}>
                  <a href="http://"><i class="fab fa-instagram"></i></a>
                </div>
                <div className={styles.Footer_Facebook}>
                  <a href="http://"><i class="fab fa-facebook-f"></i></a>
                </div>
                <div className={styles.Footer_Twitter}>
                  <a href="http://"><i class="fab fa-twitter"></i></a>
                </div>
              </div>

              <div className={styles.Footer_MiddleSide}>
                &copy; 2019 Bithela.com All Rights Reserved
              </div>
              <div className={styles.Footer_RightSide}>
                <div className={styles.Footer_TradingVolume}> Trading Volume</div>
                <div className={styles.Footer_ProportionBtc}>
                  <span className={styles.Footer_key}>BTC / USD </span>
                  <span className={styles.Footer_Value}>2654.35 </span>
                </div>
                <div className={styles.Footer_ProportionEth}>
                  <span className={styles.Footer_key}>ETH / USD </span>
                  <span className={styles.Footer_Value}>654.35 </span>
                </div>
              </div>
              <div className={styles.Footer_SocialIcons}></div>
            </div>
          </div>
        </div>
        <img className={styles.Landing_BottomBackground} src={LandingBottom} />
      </div>
    </main>
  )
};

export default Landing;
