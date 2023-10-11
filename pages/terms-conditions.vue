<template>
    <section>
        <Nav/>
        <div class="terms__conditions">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Terms &amp; conditions</h2>
                        <h3>Last Updated - Oct 12, 2022</h3>
                        <p>By accessing this website, you acknowledge that you are either: 1) at least 18 years of age; or 2) at least 13 years of age AND accessing the Services with the permission of your parent and/or legal guardian. By accessing this website, you also acknowledge that all of the information you provide through the Services shall be correct and complete. Additional terms governing your use of the Services may apply and will be disclosed to you when you sign up for a new aspects of the Service or if you take advantage of a new promotion or special offer which, if you use those aspects, promotions, or offers, become part of the Agreement. If any additional terms conflict with this Agreement, those additional terms will prevail. If you have any questions about this Agreement or the Services, please contact OpenSoftTech.</p>
                        <h5 class="mt-4 mb-4">1. No storage</h5>
                        <p>You are soley in charge of downloading and/or backing up any of your content you wish to preserve. If you wish to preserve any of your content, you must back up such content on storage facilities under your control and unrelated to OpenSoftTech. You hereby acknowledge that OpenSoftTech, in its sole discretion, may remove and/or delete all or a portion your Submissions, as well as any additional information collected from, or about you, or produced for you, at any time, without notice or liability to you.</p>
                        <h5 class="mt-4 mb-4">2. No class actions</h5>
                        <p>You and OpenSoftTech each agree that each party may only resolve disputes with the other on an individual basis and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provisions set forth above shall be deemed null and void in their entirety and the parties shall be deemed to have not agreed to arbitrate disputes.</p>                        
                        <h5 class="mt-4 mb-4">3. No refunds</h5>
                        <p>Payments are nonrefundable and there are no refunds or credits for partially used membership periods. Following any cancellation, however, you will continue to have access to the service through the end of your current billing period. At any time, and for any reason, we may provide a refund, discount, or other consideration to some or all of our members ("credits"). The amount and form of such credits, and the decision to provide them, are at our sole and absolute discretion. The provision of credits in one instance does not entitle you to credits in the future for similar instances, nor does it obligate OpenSoftTech to provide credits in the future, under any circumstance.</p>                        
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
    name: 'TermsConditions',
    components: {
        Nav,
        Footer
    }  
}
</script>