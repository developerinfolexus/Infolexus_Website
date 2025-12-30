import React, { useState } from 'react';
import HRHero from './sections/HRHero';
import HRServiceSection from './sections/HRServiceSection';
import HRInquiryModal from './components/HRInquiryModal';

// Importing images downloaded from the reference site (Update paths to be relative to this file's location if needed, using ../../../assets)
import service1 from '../../assets/hr-services/service-1.webp';
import service2 from '../../assets/hr-services/service-2.webp';
import service3 from '../../assets/hr-services/service-3.webp';
import service4 from '../../assets/hr-services/service-4.webp';
import service5 from '../../assets/hr-services/service-5.webp';
import service6 from '../../assets/hr-services/service-6.webp';
import service7 from '../../assets/hr-services/service-7.webp';
import service8 from '../../assets/hr-services/service-8.webp';
import service9 from '../../assets/hr-services/service-9.webp';

const HRServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCategory, setModalCategory] = useState('Job Seeker');
    const [modalSubject, setModalSubject] = useState('');

    const openModal = (category, item) => {
        setModalCategory(category);
        setModalSubject(item ? item.title : '');
        setIsModalOpen(true);
    };

    const companiesData = [
        {
            id: 'hr-recruitment',
            title: "Recruitment & Staffing Solutions",
            description: `At Infolexus, We Provide Expert Recruitment And Staffing Solutions For Both It And Non-it Sectors, Helping Businesses Find The Perfect Talent To Drive Success. Our It Recruitment Services Cover A Range Of Roles, From Software Development And Cybersecurity To Data Science And It Project Management. 
      
      For Non-it Roles, We Specialize In Staffing Across Sales, Marketing, Finance, Hr, Operations, And Customer Service. Whether You're Looking For Temporary Staffing Or Permanent Placements, Our Tailored Solutions Ensure You Get The Right Professionals To Meet Your Business Needs And Fuel Long-term Growth.`,
            image: service1
        },
        {
            id: 'hr-training',
            title: "Outbound & Training Programs",
            description: `We offer leadership development, communication, soft skills, and team-building programs to enhance your workforce's capabilities. Our outbound training initiatives are designed to foster teamwork, improve interpersonal relationships, and boost overall organizational productivity.`,
            image: service3
        },
        {
            id: 'hr-teambuilding',
            title: "Team Building & Engagement",
            description: `Our customized team building activities and engagement drives are tailored to your company's culture. We create immersive experiences that motivate employees, strengthen bonds, and create a positive work environment.`,
            image: service2
        },
        {
            id: 'hr-drives',
            title: "Customized Drives",
            description: `Tailored talent acquisition and employee engagement initiatives to fit your specific organizational culture and needs. We organize campus drives, walk-ins, and specialized hiring events to help you connect with large pools of qualified candidates efficiently.`,
            image: service4
        },
        {
            id: 'hr-marketing',
            title: "Digital Marketing & SEO",
            description: `Boost your brand visibility with our comprehensive digital marketing strategies and search engine optimization services. From content creation and social media management to technical SEO and paid advertising, we help you reach your target audience and grow your digital presence.`,
            image: service5
        }
    ];

    const collegesData = [
        {
            id: 'hr-college-placements',
            title: "Placements",
            description: `We Specialize In Providing Placement Services For Colleges, Bridging The Gap Between Talented Graduates And Top-tier Employers. Our Goal Is To Connect Students With Career Opportunities That Align With Their Skills, Interests, And Aspirations. 
      
      We Work Closely With Colleges To Understand The Specific Needs Of Both Students And Companies, Ensuring A Seamless Recruitment Process. Through Tailored Placement Programs, We Help Students Kick-start Their Careers While Enabling Companies To Access A Pool Of Fresh, Qualified Talent Ready To Contribute To Their Success.`,
            image: service6
        },
        {
            id: 'hr-college-trainings',
            title: "Trainings",
            description: `Our training programs for colleges focus on bridging the industry-academia gap. We offer technical training in trending technologies like Python, Java, Data Science, and Full Stack Development.
      
      Additionally, our soft skills modules cover communication, resume building, interview preparation, and aptitude to ensure students are 360-degree ready for the corporate world.`,
            image: service7
        }
    ];

    const jobSeekersData = [
        {
            id: 'hr-job-placements',
            title: "Placements",
            description: `We Specialize In Connecting Job Seekers With The Right Career Opportunities. Whether You're Looking For A Fresh Start Or Seeking To Advance Your Career, Our Placement Services Are Designed To Match You With Employers Who Align With Your Skills, Experience, And Career Goals. 
      
      We Work Closely With You To Understand Your Aspirations and Provide Personalized Guidance Throughout The Job Search Process. With Our Vast Network Of Top Employers And Industry Expertise, We Help You Unlock The Doors To Exciting Career Opportunities And Achieve Long-term Success.`,
            image: service8
        },
        {
            id: 'hr-skill-dev',
            title: "Skill Development Training",
            description: `We Offer Comprehensive Skill Development Training Designed To Empower Individuals And Organizations To Thrive In A Rapidly Evolving Job Market. Our Training Programs Focus On Both Technical And Soft Skills, Including Leadership, Communication, Problem-solving, Data Analysis, Programming, And More.
      
      Tailored To Meet The Specific Needs Of Your Team Or Career Goals, Our Skill Development Courses Are Aimed At Enhancing Capabilities, Boosting Productivity, And Driving Long-term Success.`,
            image: service9
        }
    ];

    return (
        <div className="font-sans">
            <HRHero />

            <HRServiceSection
                id="for-companies-sec"
                title="COMPANIES"
                subtitle="Empower Your Business with the Right Talent"
                items={companiesData}
                actionLabel="Enquire Now"
                onEnquire={(item) => openModal('Company', item)}
            />

            <HRServiceSection
                id="for-colleges-sec"
                title="COLLEGES"
                subtitle="Bridging the Gap Between Education & Employment"
                items={collegesData}
                bgColor="bg-slate-50"
                actionLabel="Partner With Us"
                onEnquire={(item) => openModal('College', item)}
            />

            <HRServiceSection
                id="for-job-seekers-sec"
                title="JOB SEEKERS"
                subtitle="Your Path to a Successful Career Starts Here"
                items={jobSeekersData}
                actionLabel="Apply Now"
                onEnquire={(item) => openModal('Job Seeker', item)}
            />

            <HRInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCategory={modalCategory}
                initialSubject={modalSubject}
            />
        </div>
    );
};

export default HRServices;
