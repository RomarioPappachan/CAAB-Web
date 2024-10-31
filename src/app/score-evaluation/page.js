"use client";
import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function ScoreEvaluation() {
  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);

      return () => clearTimeout(timer);
  }, []);


  if(isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-[#000000c1]">
        <div className="size-24 rounded-full animate-spin">
            <img 
              src="/caab-score-icon.jpg" 
              alt="Logo"
              className='w-full object-cover rounded-full'
            />
        </div>
      </div>
    )
  }


  return (
    <div className="w-screen h-screen m-0 p-0">
        <Navbar/>

        <div className='w-full mt-[100px] md:mt-[130px] xl:mt-[152px] m-0 px-4 md:px-8 lg:px-[72px] py-[72px]'>

            <div className='w-full flex flex-col lg:flex-row gap-6'>
              <div className='w-full flex justify-center items-center lg:inline-block lg:w-1/2 lg:relative'>
                <img 
                  src="/score-evaluation.svg" 
                  alt="Score Evaluation" 
                  className='w-2/3 lg:w-full lg:absolute lg:right-0 xl:-top-14'
                />
              </div>
              <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                <h1 className='text-4xl font-semibold text-[#191C21] leading-10'>CAAB Score</h1>
                <div className='w-full flex flex-col gap-10'>
                  <p className='text-[#424752] text-base leading-10'>
                    CAAB Score is a comprehensive corporate compliance rating system that evaluates companies' adherence to laws, 
                    regulations, and industry standards. It provides a benchmark for compliance excellence and attitudes towards mandatory Acts and Rules.
                  </p>
                  <p className='text-[#424752] text-base leading-10'>
                    <span className='font-semibold text-[#003E82]'>CAAB Pvt Ltd</span> is the forerunner of benchmarking corporate entities vis-à-vis corporate compliance. 
                    In the benchmarking arena today, we are the one and only platform to rate and award a business enterprise in accordance with their corporate compliance performance. 
                    Eventually, <span className='font-semibold text-[#003E82]'>'CAAB Score'</span> will be the Bench Mark criteria of corporate compliance in the corporate world as well as among its stakeholders. 
                    In due course, top <span className='font-semibold text-[#003E82]'>'CAAB Score'</span> achieving establishments alone will be generally regarded as truly legal, ethical and employees friendly entities. 
                    Such entities will be widely accepted and considered worldwide as perfect in all their compliance commitment and got loyal customer perception. 
                    Brand image, reputation and popularity will be built up on <span className='font-semibold text-[#003E82]'>'CAAB Score'</span> and enshrining <span className='font-semibold text-[#003E82]'>'CORPORATE COMPLIANCE'</span> as <span className='font-semibold text-[#003E82]'>'A SOCIAL RESPONSIBILITY'</span>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className='py-10'>
              <p className='text-[#424752] text-base leading-10'>
                'CAABScore' provides a comprehensive and objective assessment in organization's overall compliance performance. 
                Eventually, it is a groundbreaking tool that provides a comprehensive and objective assessment of your organization's compliance maturity.  
                <span className='font-semibold text-[#003E82]'>'CAAB Score'</span> goes beyond traditional compliance performance and audits by utilizing an advanced algorithms and 
                data analysis to identify areas of strength, weakness, opportunity, potential risks and threats towards mandate compliance checklists or parameters. 
                It includes aggregated scores, departmental breakdowns, areas for improvement and suggestions to showcase your company as an esteemed one before the stakeholders and general public also.
              </p>
            </div>

            <div className='w-full lg:px-6 py-10 block-animation'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[72px]'>

                <div className='p-4 flex flex-col gap-6 text-[#404A38] bg-white border-[#BFCAB3] border-[1px] rounded-lg group transition-all duration-500 hover:bg-[#406926] hover:text-white transform hover:scale-105 hover:ease-in hover:duration-300'>
                  <h2 className='text-[32px] font-semibold leading-10 text-[#406926] group-hover:text-white'>CAAB Score Evaluation Criteria</h2>
                  <div>
                    <p className='text-base font-normal leading-10'>1. Compliance with laws and regulations.</p>
                    <p className='text-base font-normal leading-10'>2. Ethics and business conduct.</p>
                    <p className='text-base font-normal leading-10'>3. Social responsibility and community engagement.</p>
                    <p className='text-base font-normal leading-10'>4. Environmental sustainability.</p>
                    <p className='text-base font-normal leading-10'>5. Human rights and labor practices.</p>
                    <p className='text-base font-normal leading-10'>6. Transparency and accountability.</p>
                  </div>
                </div>

                <div className='p-4 flex flex-col gap-6 text-[#404A38] bg-[#CBDBFF] border-[#2262B7] border-[1px] rounded-lg group transition-all duration-500 hover:bg-[#003E82] hover:text-white transform hover:scale-105 hover:ease-in hover:duration-300'>
                  <h2 className='text-[32px] font-semibold leading-10 text-[#003E82] group-hover:text-white'>CAAB Score supports CCSR</h2>
                  <div>
                    <p className='text-base font-normal leading-10'>1. Evaluating compliance risks and vulnerabilities</p>
                    <p className='text-base font-normal leading-10'>2. Providing transparency and accountability.</p>
                    <p className='text-base font-normal leading-10'>3. Encouraging ethical business practices.</p>
                    <p className='text-base font-normal leading-10'>4. Promoting regulatory compliance.</p>
                    <p className='text-base font-normal leading-10'>5. Enhancing reputation and stakeholder trust.</p>
                  </div>
                </div>

                <div className='p-4 flex flex-col gap-6 text-[#404A38] bg-[#CBDBFF] border-[#2262B7] border-[1px] rounded-lg group transition-all duration-500 hover:bg-[#003E82] hover:text-white transform hover:scale-105 hover:ease-in hover:duration-300'>
                  <h2 className='text-[32px] font-semibold leading-10 text-[#003E82] group-hover:text-white'>Role of CorpRank</h2>
                  <div>
                    <p className='text-base font-normal leading-10'>CorpRank through CAABScore, plays a crucial role in promoting CCSR by.</p>
                    <p className='text-base font-normal leading-10'>1. Providing a compliance benchmarking framework.</p>
                    <p className='text-base font-normal leading-10'>2. Offering risk assessment and mitigation strategies.</p>
                    <p className='text-base font-normal leading-10'>3. Enhancing transparency and accountability.</p>
                    <p className='text-base font-normal leading-10'>4. Supporting regulatory compliance and reporting.</p>
                    <p className='text-base font-normal leading-10'>5. Recognizing and rewarding compliant companies.</p>
                  </div>
                </div>

                <div className='p-4 flex flex-col gap-6 text-[#404A38] border-[#BFCAB3] border-[1px] rounded-lg group transition-all duration-500 hover:bg-[#406926] hover:text-white transform hover:scale-105 hover:ease-in hover:duration-300'>
                  <h2 className='text-[32px] font-semibold leading-10 text-[#406926] group-hover:text-white'>Benefits of CAAB Score to CCSR</h2>
                  <div>
                    <p className='text-base font-normal leading-10'>1. Improved compliance and risk mitigation management.</p>
                    <p className='text-base font-normal leading-10'>2. Enhanced reputation and stakeholder trust.</p>
                    <p className='text-base font-normal leading-10'>3. Increased transparency and accountability.</p>
                    <p className='text-base font-normal leading-10'>4. Better informed decision-making and strategic planning.</p>
                    <p className='text-base font-normal leading-10'>5. Reduced regulatory risks and costs.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className='text-base font-normal leading-10 text-[#424752]'>
              By connecting CCSR with CAAB Score, CorpRank encourages companies to prioritize compliance, ethics, 
              and social responsibility, ultimately contributing to sustainable business growth and a better success. 
              The <span className='font-semibold text-[#003E82]'>'CAAB Score' framework</span> assesses four key dimensions of corporate compliance: 
              <span className='font-semibold text-[#003E82]'> Culture, Accountability, Assurance and Behaviour</span>.
            </div>


        </div>

        <Footer/>
    </div>
  )
}

export default ScoreEvaluation