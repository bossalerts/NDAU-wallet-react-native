import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, SafeAreaView } from 'react-native';
import CheckBox from 'react-native-check-box';
import CommonButton from '../components/CommonButton';
import Stepper from '../components/Stepper';
import cssStyles from '../css/styles';

class SetupTermsOfService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkedAgree = () => {
    this.setState({ agree: !this.state.agree });
  };

  showNextSetup = () => {
    this.props.navigation.navigate('SetupEAINode');
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={cssStyles.container}>
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            indicatorStyle="white"
          >
            <Stepper screenNumber={7} />
            <View>
              <Text style={styles.legalTextHeading}>{'\n'}1. Scope</Text>
              <Text style={styles.legalText}>
                {'\n'}1.1. These Terms of Use (“<Text style={styles.legalTextBold}>Terms</Text>”),
                together with our Privacy Notice, are a legally binding agreement between you (“<Text style={styles.legalTextBold}>User</Text>”,
                “you”, or any variations thereof) and Oneiro NA Inc. (collectively: “<Text style={styles.legalTextBold}>Oneiro</Text>”,
                “us”, “we”, or any variations thereof).
                {'\n'}1.2. THESE TERMS GOVERN YOUR BROWSING AND ANY OTHER USE OF THE NDAU.IO
                WEBSITE, (THE “<Text style={styles.legalTextBold}>WEBSITE</Text>”) AND OUR NDAU
                MOBILE APPLICATION, AS APPLICABLE (THE “<Text style={styles.legalTextBold}>APPLICATION</Text>”,
                AND COLLECTIVELY: THE “<Text style={styles.legalTextBold}>PLATFORM</Text>”).
                {'\n'}1.3. THESE TERMS MAY ALSO PERTAIN TO MATTERS REGARDING POTENTIAL SUBSCRIPTION
                FOR THE NDAU TOKENS (“<Text style={styles.legalTextBold}>TOKENS</Text>”), AS FURTHER
                DETAILED ON [HTTPS://NDAU.IO] (THE “<Text style={styles.legalTextBold}>
                  GENERAL PURPOSE
                </Text>”).
                {'\n'}1.4. IF YOU DO NOT AGREE WITH ANY OF THE TERMS HEREIN, KINDLY AND IMMEDIATELY
                CEASE ANY USE OF THE WEBSITE AND/OR, AS APPLICABLE, CEASE ANY USE OF THE APPLICATION
                AND PROMPTLY DELETE IT FROM YOUR DEVICE.
                {'\n'}1.5. We may amend, change, or replace these Terms, by posting updated versions
                on the Platform or by notifying you by other means. All such modifications to the
                Terms shall become effective upon the posting of the revised Terms or by receipt of
                notification of a change to the Terms. If you do not agree to the new or different
                Terms, you must act in accordance with instructions of Section ‎1.4 above.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}2. The Platform</Text>
              <Text style={styles.legalText}>
                {'\n'}2.1. The Platform is designated to enable you to receive information regarding
                a unique type of Tokens by the name of ndau, which we contemplate on issuing, as
                further detailed on the Platform.
                {'\n'}2.2. Users who desire to be eligible to subscribe for the Tokens, will be
                required to provide us with certain information and details which may contain
                personal information. Our collection, processing, and use of such personal
                information is as described under our Privacy Notice. However, when subscribing for
                our tokens, we may require you to provide us with additional personal information
                which we do not collect from you while making use of the Platform for the General
                Purpose (the “<Text style={styles.legalTextBold}>Additional Information</Text>”). In
                such an event, we will, if applicable, provide you with information regarding our
                use, processing, and/other matters pertaining to such Additional Information.
                {'\n'}2.3 YOUR USE OF THE PLATFORM DOES NOT INDICATE ANY COMMITMENT THAT WE CONSIDER
                YOU AS ELIGIBLE TO SUBSCRIBE FOR ANY TOKENS.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}3. Tokens</Text>
              <Text style={styles.legalText}>
                {'\n'}3.1.{' '}
                <Text style={styles.legalTextBold}>
                  Further Information Regarding Token Issuance
                </Text>. The designated issuance of the Tokens is as further detailed here
                https://ndau.io.
                {'\n'}3.2.{' '}
                <Text style={styles.legalTextBold}>
                  No Representations Regarding Cryptocurrency Trade
                </Text>. We do not make any representation and/or commitment in connection with the
                Tokens. In that respect, you hereby warrant and acknowledge that you have experience
                in cryptocurrency trading and acknowledge that (i) the cryptocurrency market is
                inherently volatile and is characterized as high risk, and thus subject to inherent
                uncertainties (such that no profits might be derived in your favor, and furthermore
                that you might be subject to substantial losses regarding the Tokens, or the
                cryptocurrency acquired by you used to purchase our Tokens), and that (ii) you are
                able to bear the economic risk associated with subscribing for the Tokens or other
                applicable cryptocurrency, and have such knowledge and experience in order to
                evaluate the merits and risks of the provision of subscribing for the Tokens.
                {'\n'}3.3. UNDER NO CIRCUMSTANCES SHOULD YOU DEEM ANY INFORMATION PRESENTED ON THE
                PLATFORM PERTAINING TO THE TOKENS, AND SPECIFICALLY, ANY WHITE PAPER WE PROVIDE, AS
                ANY RECOMMENDATION TO PURCHASE, SELL, OR OTHERWISE TRADE IN ANY CRYPTOCURRENCIES
                PRESCRIBED UNDER THE PLATFORM. WE DO NOT POSSESS ANY LICENSE OR PERMIT TO RECOMMEND
                AND/OR OTHERWISE MAKE ANY INVESTMENT ON YOUR BEHALF OR FAVOR, AND THUS YOU SHOULD
                CONSULT WITH APPLICABLE PROFESSIONALS PRIOR TO MAKING ANY DECISIONS INVOLVING THE
                TRADE OF ANY CRYPTOCURRENCY.
                {'\n'}3.4. SPECIFICALLY, WE MAKE NO COMMITMENT AS TO THE VALUE OF THE TOKENS, THEIR
                ECONOMIC VALUE, NOR THE TRADABILITY OF ANY TOKENS. WE ASSUME NO RESPONSIBILITY
                REGARDING ANY DECISION UNDERTAKEN BY THE APPLICABLE BODIES WHICH MAY AFFECT THE
                VALUE OF THE TOKENS. FURTHERMORE, WE MAKE NO WARRANTY REGARDING THE CLASSIFICATION
                OF THE TOKENS (E.G., UTILITY, CURRENCY, EQUITY, OR ANY EQUIVALENT THEREOF), SUCH
                THAT, AMONG OTHER MATTERS, WE CANNOT REASONABLY ADVISE WHICH TAX REGIME AND/OR
                SECURITIES REGULATION SHALL APPLY TO THE TOKENS, IF ANY. IT IS YOUR RESPONSIBILITY
                TO UNDERSTAND THE APPLICABLE REGULATION THAT APPLIES TO YOU. HOWEVER, WE MAY, AT OUR
                SOLE DISCRETION, REQUIRE YOU TO PROVIDE US WITH CERTAIN INFORMATION /
                REPRESENTATIONS (SUCH AS YOUR STATUS AS AN ACCREDITED INVESTOR) IN ORDER FOR US TO
                DETERMINE WHETHER OR NOT TO ALLOW YOU TO SUBSCRIBE FOR OUR TOKENS.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}4. Third party Vendors</Text>
              <Text style={styles.legalText}>
                {'\n'}4.1. We may use third-party vendors (each: a “<Text style={styles.legalTextBold}>Third-Party Vendor</Text>”),
                in order to assist us in the operation of the Platform.
                {'\n'}4.2.{' '}
                <Text style={styles.legalTextBold}>
                  Limited Warranties Regarding Third-Party Vendors
                </Text>. You understand that we have no control over Third-Party Vendors and their
                specific terms and conditions / privacy policies (regarding specific privacy
                matters, we do however periodically review our Third-Party Vendors) and thus shall
                not be responsible for any services provided by Third-Party Vendors. Furthermore,
                you will be solely responsible to meet all applicable requirements and/or license
                terms imposed by Third-Party Vendors you may use. A list of current Third-Party
                Vendors can be found in our Privacy Statement.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}5. Security</Text>
              <Text style={styles.legalText}>
                {'\n'}DESPITE MAINTAINING REASONABLE MEASURES TO SECURE THE PLATFORM, WE CANNOT
                ENSURE FULL PROTECTION FROM EXPOSURE DUE TO MALICIOUS ACTS, AND THEREFORE ARE NOT
                LIABLE FOR ANY DAMAGES, WHETHER DIRECT, INDIRECT, INCIDENTAL OR CONSEQUENTIAL,
                INCURRED BY ANY USER.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}6. Use of Platform</Text>
              <Text style={styles.legalText}>
                {'\n'}6.1. ANY USE OF THE CONTENT OFFERED TO YOU AND/OR MADE AVAILABLE TO YOU VIA
                THE PLATFORM IS SUBJECT TO THESE TERMS AND IS NOT PROVIDED EXCLUSIVELY FOR YOU.
                {'\n'}6.2. <Text style={styles.legalTextBold}>Legal Age</Text>. You are not allowed
                to make any use of the Platform in the event that you are under the age of 16.
                {'\n'}6.3. <Text style={styles.legalTextBold}>Compliance</Text>. Notwithstanding
                anything to the contrary herein, you agree to abide by all applicable local, state,
                national, and international laws and regulations in regard to your use of the
                Platform and any content offered therein. For the avoidance of doubt, the ability to
                access our Platform does not necessarily mean that your use is permitted under
                relevant laws, regulations, and directives.
                {'\n'}6.4. <Text style={styles.legalTextBold}>Additional Policies</Text>. In
                addition to the foregoing, while using the Platform, you will strictly adhere to the
                respective Platform policies published by us from time to time, such that you should
                not:
                {'\n\t'} (a) Browse, surf, process, scan, or use the Platform via operation of a
                computer program designed to gather information or perform operations imitating a
                human user (including, without limitation, Bots or Crawlers);
                {'\n\t'}(b) Manipulate the URL of the Website (or if applicable, the Application),
                gain access to any internal pages to which we did not provide you with a direct link
                (including, without limitation, URL Hacking), whether via the Website and/or
                Application, nor otherwise create any link to (or otherwise embed) the Platform via
                any Application Program Interface (API);
                {'\n\t'}(c) Transmit or otherwise make available any worm, virus, Trojan Horse,
                web-bug, spyware, or any other program that is intended to damage the operation of
                the Platform;
                {'\n\t'}(d) Carry out any action which may infringe upon the copyrights and/or any
                other intellectual property rights and/or information of us or any other copyright
                holder;
                {'\n\t'}(e) Promote advertisements or disruptive commercial messages; Copy,
                transmit, decompile, modify, create derivative works, reproduce, disassemble,
                republish, scrape, and/or reverse engineer any algorithm, code, syntax and/or any
                other content associated with the Platform and/or any components thereof and/or act
                to collect, harvest, and/or data mine any data associated with the Platform and/or
                any of its users (whether by computer programs, identity theft, impersonation, or
                otherwise) and/or take any action which may be deemed as impersonating another
                person or entity, identity theft, holding multiple accounts (if applicable), etc.;
                {'\n\t'}(f) Handle and/or otherwise use any content offered or displayed on the
                Platform in any manner or way that violates these Terms;
                {'\n\t'}(g) Carry out any action which may infringe upon any laws, regulations,
                orders, or any guidelines of any governmental authority, and/or is likely to offend
                or harm any other users of the Platform and/or the general public;
                {'\n\t'}(h) Intimidate, threaten, harass, or abuse anyone in any manner;
                {'\n\t'}(i) Steal or attempt to steal passwords or other private information from
                other users of the Platform;
                {'\n\t'}(j) Distribute, post or make any other use (or otherwise encourage or
                solicit the consumption or performance) of any illegal, explicit, inappropriate,
                racist, offending, defaming, disparaging and/or abusing content, or any content
                which might be deemed as infringing any third-party intellectual property rights
                (including our rights); and,
                {'\n\t'}(k) Carry out any action which violates any community guidelines, Terms
                and/or Privacy Notice, as prescribed herein and/or as otherwise published by us.
                {'\n'}6.5. <Text style={styles.legalTextBold}>External Links</Text>. The Platform
                may contain external links to third-party websites (“<Text style={styles.legalTextBold}>External Content</Text>”).
                External Content might be based upon information collected by us from our users, in
                accordance with our Privacy Notice. Regardless, we have no control over the content
                of External Content, the order of its presentation or its accuracy, and we are not a
                direct party to any transaction resulting from such External Content (if
                applicable), and therefore assume no responsibility and/or liability in that
                respect. In addition, we provide no warranty that the access, browsing and/or
                consummation of any External Content shall be safe, nor that the owners or
                controllers of such External Content have undertaken any security or protection
                measures (for example, we cannot verify, nor do we warrant, that the External
                Content shall be free of any errors, malware, spyware, phishing, Trojan horses, data
                mining and/or collection, etc.). Your use of any External Content shall be at your
                sole risk. We highly recommend that you verify the origin of any External Content
                prior to gaining access or otherwise using it.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}7. Content and Ownership</Text>
              <Text style={styles.legalText}>
                {'\n'}7.1. <Text style={styles.legalTextBold}>Ownership</Text>. As between you and
                Oneiro, other than Tokens that you have subscribed in full compliance with all of
                our requirements and other materials licensed to us, Oneiro is the sole owner, and
                retains all rights, titles, and interest in and to the Platform, including any and
                all copyrightable materials or any other content included in the Platform, whether
                or not registrable rights under any applicable law (“<Text style={styles.legalTextBold}>Proprietary Content</Text>”).
                In the event that the Proprietary Content is licensed to us, then such content might
                be subject to additional restrictions by its owners.
                {'\n'}7.2. <Text style={styles.legalTextBold}>Right to Use</Text>. You may only use
                the Proprietary Content in the context of viewing it as an integral part of our
                Platform, and for the General Purpose alone; subject further to the specific
                provisions of these Terms. In order to remove any doubt, you are restricted from
                making any copies of the Proprietary Content (whether tangible or electronic),
                transferring, distributing, and/or otherwise disseminating any Proprietary Content
                (or any portion thereof).
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}8. Privacy and Data Protection</Text>
              <Text style={styles.legalText}>
                {'\n'}8.1. In addition to these Terms, your use of the Platform is also subject to
                our Privacy Notice, which informs you of our policies and procedures regarding the
                collection, use, and disclosure of information we receive when you visit our
                Platform and when communicating with us.
                {'\n'}8.2. DESPITE MAINTAINING REASONABLE MEASURES TO SECURE AND PROTECT YOUR
                ACCOUNT INFORMATION REGARDING USERS’ ACCESS TO THE PLATFORM, WE CANNOT ENSURE FULL
                PROTECTION FROM EXPOSURE DUE TO MALICIOUS ACTS, AND THEREFORE ARE NOT BE LIABLE FOR
                ANY DAMAGES, WHETHER DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL, INCURRED BY
                USERS DUE TO EXPOSURE OF ACCOUNT CONTENTS OR INFORMATION REGARDING USERS’ ACCESS.
                YOU ARE HIGHLY ENCOURAGED TO MAINTAIN REQUISITE PROTECTION FOR YOUR DEVICES, SUCH AS
                APPLYING UPDATES TO YOUR SOFTWARE AND HARDWARE WHEN THEY BECOME AVAILABLE, AND
                MAINTAINING UP-TO-DATE ANTIVIRUS, ANTI-MALWARE, OR ANTI-PHISHING SOFTWARE.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}9. Limited Warranties</Text>
              <Text style={styles.legalText}>
                {'\n'}9.1. THE PLATFORM AND ANY OF ITS CONTENT IS PROVIDED ON AN “AS IS” AND “AS
                AVAILABLE” BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF ANY RIGHTS.
                {'\n'}9.2. WITHOUT LIMITING THE ABOVE, WE MAKE NO WARRANTY (I) THAT THE PLATFORM,
                ANALYSIS UNDER ANY OF OUR WHITEPAPER AND/OR ANY OTHER CONTENT WILL MEET YOUR
                REQUIREMENTS, OR WILL BE UNINTERRUPTED, CONTINUOUS, TIMELY, SECURE, ACCURATE,
                CORRECT, COMPLETE OR AVAILABLE, INCLUDING WITHOUT LIMITATIONS, IN CONNECTION WITH
                ANY SERVER RUNTIME AND/OR DOWNTIME (INCLUDING ANY INTERRUPTION OR CESSATION OF ANY
                DATA RECEIVED AND/OR OTHERWISE TRANSMITTED WITHIN THE SCOPE OF THE USE OF THE
                PLATFORM), SERVER SECURITY MEASURES, CONTENT PROVIDED BY OTHER USERS AND/OR YOURSELF
                (INCLUDING ANY PERSONAL, FINANCIAL AND/OR ANY OTHER INFORMATION) OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE PLATFORM, NOR (II), THAT THE
                PLATFORM SHALL BE FREE OF VIRUSES, TROJAN HORSES AND/OR ANY OTHER FORM OF MALWARE
                UTILIZED BY THIRD PARTIES, OR OTHERWISE BE FREE OF ANY ERRORS AND/OR BUGS.
                {'\n'}9.3. WE DO NOT ENDORSE OR APPROVE ANY CONTENT PROVIDED BY ANY PARTY OTHER THAN
                US. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE RESULTS OF YOUR USE
                OF THE PLATFORM AND THEIR CORRECTNESS, COMPLETENESS, AVAILABILITY, ACCURACY AND/OR
                RELIABILITY.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}10. Limitation of Liability</Text>
              <Text style={styles.legalText}>
                {'\n'}10.1. TO THE FULLEST EXTENT PERMITTED BY LAW, UNDER NO CIRCUMSTANCES SHALL WE
                BE LIABLE FOR ANY DIRECT OR INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, EXEMPLARY OR
                CONSEQUENTIAL DAMAGES (INCLUDING ANY FINANCIAL LOSSES AND/OR LOSS OF PROFITS)
                ARISING OUT OF ANY THE USE, OR THE INABILITY (FOR ANY REASON) TO USE ANY PART OF THE
                PLATFORM. THIS LIMITATION WILL ALSO APPLY TO MATTERS PERTAINING TO INACCURACIES OR
                ERRORS OF INFORMATION AS A RESULT OF ACCESSING THE PLATFORM, ANY FAILED TRANSFER OF
                ANY FUNDS UNDER A WALLET TO ITS DESIGNATED LOCATION, DAMAGES CAUSED DUE TO VIRUSES
                AND/OR OTHER MALWARE, OR ANY OTHER ACTION OR INACTION IN CONNECTION WITH THESE TERMS
                (INCLUDING YOUR OR OTHER USERS’ STATEMENTS OR CONDUCT).
                {'\n'}10.2. THE CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS RELATING TO THE
                PLATFORM, SHALL BE LIMITED TO THE LOWER OF (I) THE TOTAL AMOUNT PAID BY USER AS
                CONSIDERATION FOR THE USE OF THE PLATFORM (IF PAID, AND SPECIFICALLY EXCLUDING ANY
                AMOUNTS PAID BY SUCH USER IN CONNECTION WITH THE SUBSCRIPTION OF ANY TOKENS), OR
                (II) USD $100.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}11. Indemnification</Text>
              <Text style={styles.legalText}>
                {'\n'}YOU SHALL INDEMNIFY <Text style={styles.legalTextBold}>ONEIRO</Text>,
                INCLUDING OUR DIRECTORS AND OFFICERS, EMPLOYEES, SERVICE PROVIDERS, AND/OR ANY
                AFFILIATES, FOR CLAIMS, SUITS, LOSSES AND/OR{' '}
                <Text style={styles.legalTextBold}>DAMAGES CAUSED, IF</Text> RESULTING FROM YOUR USE
                OF, ACCESS TO, OR RELIANCE ON THE <Text style={styles.legalTextBold}>PLATFORM</Text>
              </Text>
              <Text style={styles.legalTextHeading}>
                {'\n'}12. Governing Law; Class Action Waiver
              </Text>
              <Text style={styles.legalText}>
                {'\n'}12.1. Subject to any applicable law, all disputes between you and us shall
                only be resolved on an individual basis and you shall not have the right to bring
                any claim against us as a plaintiff or a member of a class, consolidated or
                representative actions (or any other legal proceedings conducted by a group or by
                representatives on behalf of others).
                {'\n'}12.2. These Terms are governed by the General Corporation Law of the State of
                Delaware. You hereby consent to the exclusive jurisdiction and venue of courts in
                Wilmington, New Castle County, Delaware 19801, U.S.A. in all disputes arising out of
                or relating to the use of the Platform. Use of the Platform is unauthorized in any
                jurisdiction that does not give effect to all provisions of these terms and
                conditions, including without limitation this paragraph. You agree that no joint
                venture, partnership, employment, or agency relationship exists between you and
                Oneiro as a result of these Terms and/or any use of the Platform (including any
                subscription for Tokens).
                {'\n'}12.3. Our performance of these Terms is subject to existing laws and legal
                process, and nothing contained in these Terms is in derogation of our right /
                obligation to comply with governmental, court and law enforcement requests or
                requirements relating to your use of the Platform or information provided to or
                gathered by us with respect to such use.
                {'\n'}12.4. If any part of these Terms is determined to be invalid or unenforceable
                pursuant to applicable law including, but not limited to, the warranty disclaimers
                and liability limitations set forth above, then the invalid or unenforceable
                provision will be deemed superseded by a valid, enforceable provision that most
                closely matches the intent of the original provision and the remainder of the
                agreement shall continue in effect.
                {'\n'}12.5. Unless otherwise specified herein, these Terms constitute the entire
                agreement between you and Oneiro with respect to the Platform and it supersedes all
                prior or contemporaneous communications and proposals, whether electronic, oral or
                written, between you and Oneiro with respect to the Platform.
                {'\n'}12.6. These Terms constitute the entire agreement between the User and Oneiro
                with respect to the Platform and it supersedes all prior or contemporaneous
                communications and proposals, whether electronic, oral or written, between the User
                and Oneiro with respect to the Platform.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}13. Assignment</Text>
              <Text style={styles.legalText}>
                {'\n'}You may not assign any rights and/or obligations you may have under these
                Terms and/or Privacy Notice without our prior written consent. We may freely assign
                any of its rights and/or obligations herein, without limitations; provided that your
                rights herein shall not be adversely affected.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}14. Termination and Survival</Text>
              <Text style={styles.legalText}>
                {'\n'}14.1. Our engagement will conclude when you delete the Application from your
                device, or, if applicable, cease browsing the Website and remove yourself from any
                mailing list you have subscribed to. We may also conclude our engagement by
                providing you with a notice to the email address you have provided us (if provided),
                or by taking any other measure which we deem suitable for concluding our engagement.
                {'\n'}14.2. IT IS HEREBY CLARIFIED THAT THE TERMS OF SECTIONS ‎7, ‎9 THROUGH ‎11
                (INCLUSIVE), AND SECTION ‎12 SHALL SURVIVE ANY TERMINATION OF OUR ENGAGEMENT IN
                CONNECTION WITH THE PLATFORM, REGARDLESS OF REASON.
              </Text>
              <Text style={styles.legalTextHeading}>{'\n'}15. Contacting Us</Text>
              <Text style={styles.legalText}>
                {'\n'}If you have cause to believe any content found in the Platform (including such
                content provided by other users) is in violation of these Terms and/or infringes any
                third-party proprietary rights and/or applicable law, kindly notify us of such
                content via email to info@oneiro.io stating the violating content and the nature of
                violation.{'\n'}
              </Text>
              <CheckBox
                style={cssStyles.checkbox}
                onClick={() => this.checkedAgree()}
                isChecked={this.state.agree}
                rightText="I agree to the terms of use"
                rightTextStyle={{
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'TitilliumWeb-Regular'
                }}
                checkBoxColor="#ffffff"
              />
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <CommonButton onPress={this.showNextSetup} title="Next" disabled={!this.state.agree} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1c2227'
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  footer: {
    justifyContent: 'flex-end',
    marginTop: 20
  },
  progress: {
    paddingTop: 30,
    paddingBottom: 30
  },
  legalText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular'
  },
  legalTextBold: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
    fontWeight: 'bold'
  },
  legalTextHeading: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

export default SetupTermsOfService;
