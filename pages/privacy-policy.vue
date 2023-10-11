<template>
    <section>
        <Nav/>
        <div class="privacy__policy">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Privacy policy</h2>
                        <h3>Last Updated - Oct 12, 2022</h3>
                        <p>The following Privacy Policy (the "Policy") outlines the policies and procedures OpenSoftTech, LLC uses in association with the collection, use, and disclosure of your information on the Videotc.com and videotimecapsule.com websites (“Website”) and the services, features, content, or applications Videotc offers (collectively, with the Website, referred to as “Services”). Your information may be obtained from multiple sources including information you submit through the Website or to Videotc and/or information obtained from various third parties and/or services.</p>
                        <p>OpenSoftTech owns and operates the Website and is committed to your privacy. OpenSoftTech demonstrates this commitment by posting this privacy policy ("Privacy Policy") to inform you of:</p>
                        <ul>
                            <li>The Personal Data Videotc collects from you through the Website and Services;</li>
                            <li>How OpenSoftTech uses the information;</li>
                            <li>With whom OpenSoftTech shares the information and why;</li>
                            <li>Your choices regarding collection, use, and distribution of the information;</li>
                            <li>The security procedures in place to protect the information under OpenSoftTech control;</li>
                            <li>How you can correct any inaccuracies in the information;</li>
                            <li>Procedures relating to unauthorized usage of the Website; and</li>
                            <li>Changes to this Privacy Policy.</li>
                        </ul>
                        <h4 class="mt-5">Personal Data Processing</h4>
                        <h5 class="mt-4 mb-4">1. Social media</h5>
                        <p>The Website allows you to access social media sites such as Facebook to interact with others and to share information. If you connect to a social media site through the Website, such as "Connect with Facebook" your profiles will merge. By merging your accounts you are allowing the Website to access your information and you are agreeing to the terms of use of the associated social media website. You have the option to disable such social media connections at any time by logging into "Profile" on the Website. You may also disable the connection through the social media website.</p>
                        <h5 class="mt-4 mb-4">2. Data security</h5>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>                        
                        <p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
                        <h5 class="mt-4 mb-4">3. Disclosures of your personal data</h5>
                        <p>We may have to share your personal data with the parties set out below for the purposes set out in the table.</p>                                                
                        <ul>
                            <li>Internal Third Parties as set out in the Glossary;</li>
                            <li>External Third Parties as set out in the Glossary;</li>
                            <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice.</li>                            
                        </ul>
                        <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

export default {
    name: 'PrivacyPolicy',
    components: {
        Nav,
        Footer
    }
}
</script>