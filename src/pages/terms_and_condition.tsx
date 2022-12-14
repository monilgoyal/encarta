import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'

function Privacy_policy() {

    return (
        <>
            <Header title="Encarta - Schedule" header_content="Terms and conditions for Encarta" />
            <Navbar />
            <section className=" py-20 lg:py-24  min-h-[50vh] md:min-h-[70vh] ">

                <div className='text-white text-xl md:text-2xl lg:text-3xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >TERMS AND CONDITIONS</h1>
                </div>

                <section id='education' className="text-white body-font mx-auto  mb-4 py-4 px-5 md:px-15 lg:px-20 pt-10 lg:pt-12 text-lg lg:text-xl" >
                    <div className='container mx-auto  leading-9 text-justify border-2 border-white border-opacity-10 backdrop-blur-[2px] bg-black/60 rounded-xl py-4 px-8 lg:px-12 '>
                        <p>
                            Please read these terms of use carefully by accessing or using this internet-based platform, you agree to be bound by the terms described herein and all terms incorporated by reference. If you do not agree to all of these terms, do not use this internet-based platform.
                        </p>
                        <br />
                        <p>
                            All the text and trademarks displayed on this site are owned by Encarta. You may print copies of the information on this site, or store the data on your computer, for your private use. You may not distribute text or graphics to others without the written consent of Encarta. Nor may you without our permission, copy and distribute this information on any other server, or modify or reuse text or trademarks on this or any another system. No reproduction of any part of the site may be sold or distributed for commercial gain, nor may it be modified or incorporated in any other work, publication or site, whether in hard copy or electronic format, including postings to any other site. Encarta reserves all other rights. The information on this site has been included in good faith and is for general purposes only. It should not be relied upon for any specific purpose and no representation or warranty is given as regards to its accuracy or completeness. Neither Encarta and its affiliates nor their students, employees or faculty shall be liable for any loss, damage or expense arising out of any access to or use of this site or any site linked to it, including, without limitation, any loss of profit, indirect, incidental or consequential loss. Encarta reserves the right to change or modify these Terms of Use or any policy or guideline of the Website including the Privacy Policy, at any time and in its sole discretion. Any changes or modifications will be effective immediately upon posting the revisions on the Website and You waive any right You may have to receive specific notice of such changes or modifications, provided however that, we will inform You of such changes at least once a year. Your continued use of the Website will confirm Your acceptance of such changes or modifications; therefore, You should frequently review these Terms of Use and applicable policies to understand the terms and conditions that apply to Your use of the Website. As a condition to Your use of the Website, You must be 18 (eighteen) years of age or older to use or visit the Website in any manner. By visiting the Website or accepting these Terms of Use, You represent and warrant to Encarta that You are 18 (eighteen) years of age or older, and that You have the right, authority and capacity to use the Website and agree to and abide by these Terms of Use.
                        </p>
                        <br />
                        <ol className='list-decimal list-outside'>
                            <li>
                                You agree and acknowledge that You would (i) create only 1 (one) account; (ii) provide accurate, truthful, current and complete information when creating Your account and in all Your dealings through the Website; (iii) maintain and promptly update Your account information; (iv) maintain the security of Your account by not sharing Your password with others and restricting access to Your account and Your computer; (v) promptly notify Encarta if You discover or otherwise suspect any security breaches relating to the Website; and (vi) take responsibility for all the activities that occur under Your account and accept all risk of unauthorized access.
                            </li>
                            <li>
                                The Website uses temporary cookies to store certain data (that is not sensitive personal data or information) that is used by Encarta for the technical administration of the Website, research and development, and for User administration. In the course of serving advertisements or optimizing services to You, Encarta may allow authorized third parties to place or recognize a unique cookie on the Your browser. Encarta does not store personally identifiable information in the cookies.
                            </li>
                            <li>
                                Encarta at its sole discretion, reserves the right to permanently or temporarily suspend Users, to bar their use and access of the Website and App, at any time while Encarta investigates complaints or alleged violations of these Terms of Use or any Services, or for any other reason.
                            </li>
                        </ol>
                        <br />
                        <p>
                            Other Parties accept and acknowledge that Encarta shall not be liable for any loss or damage caused to the User as a result of delay or default or deficiency or failure in the Services as a result of any natural disasters, fire, riots, civil disturbances, actions or decrees of governmental bodies, communication line failures (which are not caused due to the fault of Encarta), or any other delay or default or deficiency or failure which arises from causes beyond Encarta reasonable control (“Force Majeure Event”). In the event of any Force Majeure Event arising, Encarta, depending on whose performance has been impacted under the Terms of Use, shall immediately give notice to the Other Party(s) of the facts which constitute the Force Majeure Event.
                        </p>
                        <br />
                        <p className='underline'>Contact Information</p>
                        <p>
                            If any Other Party(s) has any grievance, comment, question or suggestion regarding any of
                            our Services, please contact our team. If any Other Party(s) has any questions concerning
                            Encarta (MBM-U), the Website, these Terms of Use, or anything related to any of the
                            foregoing,Encarta can be reached at the following email address – <a className='text-[#E93E53]' href='mailto:contact@encarta.tech'>contact@encarta.tech</a>
                        </p>
                    </div>
                </section >
            </section>
            <Footer />
        </>
    )
}

export default Privacy_policy