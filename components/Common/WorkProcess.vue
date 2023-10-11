<template>
    <div class="workprocess">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="Our Work"
                        titleStyle="Process"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>Throughout this process, we will work closely with the client to ensure that they are satisfied with the work and that the project is delivered on time and within budget.</h3>
                </div>
            </div>
            <div class="workprocess__steps">
                <div class="row">
                    <div v-for="(step,i) in steps" :key="i" class="col-lg-6 col-md-6 col-xl-6 col-xxl-3">
                        <div class="workprocess__steps--block mt-4">
                            <div class="d-flex align-items-center">
                                <img :src="step.icon" :alt="step.alt" :width="step.width" :height="step.height"/>
                                <img :src="step.arrow" alt="Line" :class="step.noarrow" class="ms-2" width="232" height="12"/>                                
                            </div>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import line from '~/assets/svg/line-big.svg'
import step01 from '~/assets/svg/step01.svg';
import step02 from '~/assets/svg/step02.svg';
import step03 from '~/assets/svg/step03.svg';
import step04 from '~/assets/svg/step04.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WorkProcess',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },
    data() {
        return {
            subheaderFontStyle,
            steps: [
                {
                    title: 'Understand the values',
                    description: 'We will work with the client to understand their business needs, goals, and requirements for the project.',
                    icon: step01,
                    arrow: line,
                    alt: 'Understand the Values',
                    width: 71,
                    height: 71
                },
                {
                    title: 'Research the competition',
                    description: 'Based on the requirements, we conduct an analysis and create a plan outlining the scope, timeline, resources required, and deliverables.',
                    icon: step02,
                    arrow: line,
                    alt: 'Research the competition',
                    width: 74,
                    height: 71
                },
                {
                    title: 'Design your product',
                    description: 'Once the plan is approved, we proceed with the design and development phase, where the project is built as per the agreed-upon specifications.',
                    icon: step03,
                    arrow: line,
                    alt: 'Design your product',
                    width: 69,
                    height: 71
                },
                {
                    title: 'Development',
                    description: 'Once the testing is complete, we deploy the project to the production environment, and ongoing maintenance and support are provided to ensure the project runs smoothly.',
                    icon: step04,
                    arrow: line,
                    alt: 'Development',
                    noarrow: 'd-block d-xxl-none',
                    width: 71,
                    height: 71
                }                                                  
            ]
        }
    }
}
</script>