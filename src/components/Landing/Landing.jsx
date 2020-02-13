import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./frontpage.css";
import LandingTop from '../../app/assets/img/landing-top.svg'
import Withdraw from '../../app/assets/img/withdraw.jpg'
import LandingBottom from '../../app/assets/img/landing-bottom.svg'


class Landing extends Component {
  render() {
    return (
      <div>
        <main>
          <div class="Landing__LandingWrp___20cMt">
            <img class="Landing__TopBackgroundSVG___16PSs" src={LandingTop} alt="top background" />
            <div class="Header__Header___14mLX">
              <div class="Header__Logo___3vZ1T">
                <div class="Logo__Logo___19WaN">Bithela</div>
              </div>
              <div class="Header__RightSide___Ok8qJ">
                <div class="Header__Proportions___1VI-P">
                  <span class="Header__Currencies___BKg2U">BTC / KSH</span>
                  <span class="Header__Value___1HtWF">223.649</span>
                </div>
                <div class="Header__Proportions___1VI-P">
                  <span class="Header__Currencies___BKg2U">BTC / UGX</span>
                  <span class="Header__Value___1HtWF">223.649</span>
                </div>
                <div class="Header__SignUp___BwXtN">
                  <Link className='nav-link ' to='/register'>
                    <a aria-current="false" >Sign Up</a>
                  </Link>

                </div>
                <div class="Header__SignIn___16IPf">
                  <Link className='nav-link ' to='/login'>
                    <a aria-current="false" >Sign In</a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="Intro__IntroWrp___2Zn-2">
              <h1>
                <span class="Intro__Top___4svCW">Africa's easiest way to</span>
                <span class="Intro__Bottom___2aY2c">
                  <span class="Intro__Emphasis___12HTN">trade</span>,
                                        <span class="Intro__Emphasis___12HTN"> buy</span> and
                                        <span class="Intro__Emphasis___12HTN"> sell</span> crypto-currencies</span>
              </h1>
              <div class="Intro__Advertise___2oE9v">Buy, sell and trade digital currencies safely at your convenience</div>
              <div class="Intro__CreateAccount___1QNhO">

                <Link to='/register'><a aria-current="false">Create Account</a> </Link>
              </div>
            </div>

            <div class="WhyUse__WhyUseWrp___L0fqg">
              <h2>Why use Bithela</h2>
              <div class="WhyUse__TabsWrp___zE8Ay">
                <div class="WhyUse__Tab___1e3PB Inactive">
                  <div class="WhyUse__Icon___1IvOw">
                    <svg viewBox="0 0 512 512">
                      <g id="Group_4" data-name="Group 4">
                        <g id="Group_3" data-name="Group 3">
                          <path id="Path_6" data-name="Path 6" d="M257,90C166.019,90,90,164.019,90,255s76.019,167,167,167,165-76.019,165-167S347.981,90,257,90Zm30,240H272v15c0,19.773-30,19.854-30,0V330H197c-19.773,0-19.854-30,0-30h15V210H197c-19.773,0-19.854-30,0-30h45V165c0-19.773,30-19.854,30,0v15h15c38.5,0,59.664,45.761,33.3,75C346.664,284.239,325.5,330,287,330Z" style={{ fill: "rgb(206, 65, 161)" }}>
                          </path>
                        </g>
                      </g>
                      <g id="Group_6" data-name="Group 6">
                        <g id="Group_5" data-name="Group 5">
                          <path id="Path_7" data-name="Path 7" d="M287,270H242v30h45C306.828,300,306.828,270,287,270Z" style={{ fill: "rgb(206, 65, 161)" }}>
                          </path>
                        </g>
                      </g>
                      <g id="Group_8" data-name="Group 8"><g id="Group_7" data-name="Group 7">
                        <path id="Path_8" data-name="Path 8" d="M287,210H242v30h45C306.828,240,306.828,210,287,210Z" style={{ fill: "rgb(206, 65, 161)" }}></path>
                      </g>
                      </g>
                      <g id="Group_10" data-name="Group 10"><g id="Group_9" data-name="Group 9">
                        <path id="Path_9" data-name="Path 9" d="M75,60a45,45,0,1,0,45,45A45.05,45.05,0,0,0,75,60Z" style={{ fill: "rgb(147, 44, 136)" }}></path>
                      </g></g><g id="Group_12" data-name="Group 12"><g id="Group_11" data-name="Group 11"><path id="Path_10" data-name="Path 10" d="M257,0C206.849,0,156.744,14.949,115.53,42.081a75.436,75.436,0,0,1,22.076,21.81A230.2,230.2,0,0,1,257,29.8c124.072,0,225.2,101.128,225.2,225.2a231.5,231.5,0,0,1-15.846,83.006,75.067,75.067,0,0,1,25.239,17.908A261.2,261.2,0,0,0,512,255C512,114.39,397.61,0,257,0Z" style={{ fill: "rgb(147, 44, 136)" }}></path></g></g>
                      <g id="Group_14" data-name="Group 14"><g id="Group_13" data-name="Group 13"><path id="Path_11" data-name="Path 11" d="M374.394,448.109C339.264,469.791,299.036,482.2,257,482.2,132.928,482.2,29.8,379.072,29.8,255a220.924,220.924,0,0,1,15.848-81.006,75.074,75.074,0,0,1-25.241-17.908A261.2,261.2,0,0,0,0,257C0,397.61,116.39,512,257,512a253.075,253.075,0,0,0,139.47-42.081A75.436,75.436,0,0,1,374.394,448.109Z" style={{ fill: "rgb(147, 44, 136)" }}></path></g></g><g id="Group_16" data-name="Group 16"><g id="Group_15" data-name="Group 15"><path id="Path_12" data-name="Path 12" d="M437,362a45,45,0,1,0,45,45A45.05,45.05,0,0,0,437,362Z" style={{ fill: "rgb(147, 44, 136)" }}></path></g></g></svg></div>
                  <div class="WhyUse__Title___2Ohre">
                    <span>Trade</span> <span>Bitcoin</span> <span>and</span> <span>Ethereum</span> <span>easily</span></div>
                  <div class="WhyUse__Description___Hm_ah">Join the growing world of digital currencies using our platform</div>
                </div>
                <div class="WhyUse__Tab___1e3PB Inactive">
                  <div class="WhyUse__Icon___1IvOw">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.4 489.7"><g id="padlock" transform="translate(-511 -260)"><g id="Group_1" data-name="Group 1" transform="translate(422.35 260)"><path id="Path_1" data-name="Path 1" d="M244.85,177.3A156.222,156.222,0,0,0,88.65,333.5c0,86.2,70,156.2,156.2,156.2s156.2-70,156.2-156.2A156.222,156.222,0,0,0,244.85,177.3Zm19.8,164.4v42.4a20.571,20.571,0,0,1-20.6,20.6h0a20.571,20.571,0,0,1-20.6-20.6V341.7a42.381,42.381,0,0,1-21.4-41.6c2.3-19.4,17.9-35,36.9-36.9a42.393,42.393,0,0,1,47,42A41.751,41.751,0,0,1,264.65,341.7Z" style={{ fill: "rgb(206, 65, 161)" }}></path><path id="Path_2" data-name="Path 2" d="M186.95,115.5a56.7,56.7,0,0,1,113.4,0v51.2a176.689,176.689,0,0,1,58.3,32.9V115.5C359.55,51.7,307.85,0,244.05,0a115.4,115.4,0,0,0-115.4,115.5v86.1a174.224,174.224,0,0,1,58.3-34.1Z" style={{ fill: "rgb(147, 44, 136)" }}></path></g></g></svg></div>
                  <div class="WhyUse__Title___2Ohre"><span>Trust</span> <span>and</span> <span>Security</span></div>
                  <div class="WhyUse__Description___Hm_ah">Avoid perennial inflation by buying into deflationary currencies</div>
                </div>
                <div class="WhyUse__Tab___1e3PB Inactive">
                  <div class="WhyUse__Icon___1IvOw">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.997 705.299"><g id="time-control-tool" transform="translate(-721 -129)"><g id="Group_2" data-name="Group 2" transform="translate(674.349 129)"><path id="Path_3" data-name="Path 3" d="M395.233,117.99V91.6l64.906.023v-5.55A86.049,86.049,0,0,0,374.08,0H311.448a86.086,86.086,0,0,0-86.06,86.071v5.515l66.343.023v26.163C152.565,141.993,46.651,263.051,46.651,409.157c0,163.594,132.571,296.142,296.107,296.142S638.865,572.751,638.865,409.157C638.876,263.557,533.7,142.786,395.233,117.99ZM342.758,637.52c-125.907,0-228.339-102.433-228.339-228.362,0-125.9,102.433-228.3,228.339-228.3S571.1,283.263,571.1,409.158C571.1,535.087,468.665,637.52,342.758,637.52Z" style={{ fill: "rgb(147, 44, 136)" }}></path><path id="Path_4" data-name="Path 4" d="M651.987,153.333,603.97,105.3a22.744,22.744,0,0,0-32.2-.023l-38.929,38.939,80.246,80.2L651.986,185.5A22.751,22.751,0,0,0,651.987,153.333Z" style={{ fill: "rgb(147, 44, 136)" }}></path><path id="Path_5" data-name="Path 5" d="M341.724,195.237c-117.714.54-212.966,96.125-212.966,213.92,0,118.231,95.815,214.022,214.012,214.022s213.989-95.769,214-214H341.724Z" style={{ fill: "rgb(206, 65, 161)" }}></path></g></g></svg>
                  </div>
                  <div class="WhyUse__Title___2Ohre"><span>Buy</span> <span>and</span> <span>Sell</span> <span>in</span> <span>Seconds</span></div>
                  <div class="WhyUse__Description___Hm_ah">Use our fast responsive platform that  helps you manage the market</div>
                </div>
              </div>
            </div>
            <div class="Exchange__ExchangeWrp___1HmpS">
              <div class="Exchange__Steps___3GHLW">
                <h2><span>Bithela</span> Exchange</h2>
                <div role="button" tabindex="0" class="Exchange__Step___29YM5 Exchange__Active___CH7mZ">
                  <div class="Exchange__Title___37qyG">Deposit and Withdraw</div>
                  <div class="Exchange__Description___Rn9DR">Deposit and withdraw to and from your Bithela wallet, mobile money wallet, and bank account at a low to zero cost</div>
                </div>
                <div role="button" tabindex="0" class="Exchange__Step___29YM5 Inactive">
                  <div class="Exchange__Title___37qyG">Trade Conveniently</div>
                  <div class="Exchange__Description___Rn9DR">Buy, sell, and manage your digital assets instantly, anytime and accessible anywhere at your convenience</div>
                </div>
                <div role="button" tabindex="0" class="Exchange__Step___29YM5 Inactive">
                  <div class="Exchange__Title___37qyG">Transact Securely</div>
                  <div class="Exchange__Description___Rn9DR">We go to lengths to secure your digital assets by using the latest known security measures and best practices currently available</div>
                </div>
              </div>
              <div class="Exchange__InteractiveView___Ux-FE Exchange__Trade-Bitcoin___2rIrf" style={{ backgroundImage: "url(&quot;assets/browser-window.jpg&quot;)" }}><img src={Withdraw} alt="Deposit and Withdraw" />
              </div>
            </div>
            <div class="Landing__Footer___3z0Vl">
              <div class="BuildPortfolio__BuildPortfolioWrp___23WG0">
                <h2>Build Your Digital Portfolio!</h2>
                <div class="BuildPortfolio__Advantages___3Kcxy">With no hidden fees, transparent trading and a commitment to regulatory compliance, we are the <span>ideal platform for</span> building <span>your</span> digital portfolio</div>
                <div class="BuildPortfolio__CreateAccount___drNM1" before-text="Create account">
                  {/* <a aria-current="false" href="/sign-up">Create account</a> */}
                  <Link to='/register'>
                    <a aria-current="false" >Create Account</a>
                  </Link>
                </div>
              </div>
              <div class="Footer__FooterWrp___3D6n7">
                <div class="Footer__Footer___5MPho">
                  <div class="Footer__LeftSide___y-BZC">
                    <div class="Footer__Terms___2Q7qG">
                      <a aria-current="false" href="/terms">Terms and Conditions</a>
                    </div>
                    <div class="Footer__Social___1a6C2">Social</div>
                    <div class="Footer__Telegram___1EORi">
                      <a aria-current="false" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Telegram" x="0px" y="0px" viewBox="0 0 300 300"><g id="XMLID_496_"><path id="XMLID_497_" d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412   c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22   c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207   c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146   c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"></path></g></svg></a></div><div class="Footer__Facebook___2e1_S"><a aria-current="false" href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 96.124 96.123"><g><path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"></path></g></svg></a></div><div class="Footer__Twitter___3aHzg"><a aria-current="false" href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 612 612" width="512px" height="512px"><g><g><path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" fill="#FFFFFF"></path></g></g></svg></a></div></div><div class="Footer__MiddleSide___1lcis">© 2019 Bithela.com All Rights Reserved</div><div class="Footer__RightSide___3OBq2"><div class="Footer__TrandingVolume___1wlHL">Trading Volume:</div><div class="Footer__ProportionBtc___1SSFQ"><span class="Footer__Key___TLPY1">BTC / USD</span><span class="Footer__Value___2HnOw">2654.35</span></div><div class="Footer__ProportionEth___2dXGj"><span class="Footer__Key___TLPY1">ETH / USD</span><span class="Footer__Value___2HnOw">658.47</span></div></div><div class="Footer__SocialIconsPhone___Le_bO"><div class="Footer__Telegram___1EORi"><a aria-current="false" href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Telegram" x="0px" y="0px" viewBox="0 0 300 300"><g id="XMLID_496_"><path id="XMLID_497_" d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412   c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22   c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207   c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146   c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"></path></g></svg></a></div><div class="Footer__Facebook___2e1_S"><a aria-current="false" href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 96.124 96.123"><g><path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#FFFFFF"></path></g></svg></a></div><div class="Footer__Twitter___3aHzg"><a aria-current="false" href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 612 612" width="512px" height="512px"><g><g><path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" fill="#FFFFFF"></path></g></g></svg></a></div></div></div></div></div><img class="Landing__BottomBackgroundSVG___1o1pc" src={LandingBottom} alt="bottom background" /></div></main>
      </div>
    )
  }
}

export default Landing
