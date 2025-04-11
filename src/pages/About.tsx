import React, { useEffect } from 'react'
import bgImage from '../assets/images/IMG-20250319-WA0012.jpg'
import {  Target, Award, Heart, Lightbulb } from 'lucide-react';


const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Founder & Executive Director",
      bio: "A visionary educator with 20 years of experience in community development and educational innovation."
    },
    {
      name: "Michael Chen",
      role: "Chief Program Officer",
      bio: "An expert in curriculum design with a passion for creating transformative learning experiences."
    },
    {
      name: "Sarah Njeri",
      role: "Community Engagement Director",
      bio: "A dedicated professional committed to bridging educational gaps in underserved communities."
    }
  ]

  const coreValues = [
    {
      id: 1,
      title: "Compassion",
      icon: <Heart className="h-10 w-10 mb-4 text-pink-600" />,
      description: "We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
    },
    {
      id: 2,
      title: "Integrity",
      icon: <Award className="h-10 w-10 mb-4 text-blue-600" />,
      description: "We maintain transparency in our operations and are accountable to our beneficiaries, donors, and the communities we serve.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      id: 3,
      title: "Innovation",
      icon: <Lightbulb className="h-10 w-10 mb-4 text-yellow-600" />,
      description: "We constantly seek creative solutions to address complex social challenges and improve our impact.",
      color: "bg-yellow-50 border-yellow-200",
      iconBg: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Sustainability",
      icon: <Target className="h-10 w-10 mb-4 text-green-600" />,
      description: "We design programs with long-term impact in mind, focusing on creating lasting change rather than temporary solutions.",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
    },
  ];

  return (
    <div className="space-y-12 mt-8">
      {/* Hero Banner */}
      <section
  className="relative bg-cover bg-center bg-no-repeat py-24 px-6 mt-20"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0"></div>

  <div className="relative container mx-auto text-center text-white">
    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-500 to-white text-transparent bg-clip-text animate-pulse">
      About the Braiiny Bear Society
    </h1>
    <div className="w-32 h-1 bg-yellow-500 mx-auto mb-8"></div>
    <p className="max-w-3xl mx-auto text-white text-xl mb-10 leading-relaxed">
      Empowering minds, transforming communities through accessible education
      and innovative learning experiences.
    </p>
    <div className="flex justify-center gap-4">
      <button className="bg-white text-yellow-700 hover:bg-yellow-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Discover Our Programs
      </button>
      <button className="bg-black text-yellow-400 hover:bg-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        Join Us
      </button>
    </div>
  </div>

  {/* Decorative Elements */}
 
</section>

      {/* Mission and Vision Section */}
  <section className="bg-gradient-to-b from-white-500 to-gray-600 text-center py-10">
  <div className="container mx-auto px-4">    
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Mission Section */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="flex flex-col md:flex-row">
          <div className="bg-yellow-700 w-full md:w-2/12 p-6 flex items-center justify-center">
            <span className="text-3xl text-white font-bold">Mission</span>
          </div>
          <div className="p-8 md:p-10 text-left w-full md:w-10/12">
            <h3 className="text-3xl font-semibold mb-6 text-yellow-700 border-b-2 border-yellow-200 pb-2">Our Purpose</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Brainy Bear Educational and Training Society is dedicated to empowering individuals 
              and communities through accessible, high-quality education and skill development 
              programs. We believe in the transformative power of learning to create sustainable 
              social change and unlock human potential.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We strive to create educational environments where creativity flourishes, critical thinking 
              is nurtured, and every learner discovers their unique capabilities. Our programs are designed 
              to bridge educational gaps and provide opportunities for personal and professional growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through partnerships with educational institutions, corporations, and community organizations, 
              we extend our reach to underserved populations and areas with limited educational resources, 
              ensuring that quality learning experiences are available to all.
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="flex flex-col md:flex-row">
        <div className="bg-yellow-700 w-full md:w-2/12 p-6 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">Vision</span>
          </div>
          <div className="p-8 md:p-10 text-left w-full md:w-10/12">
            <h3 className="text-3xl font-semibold mb-6 text-yellow-700 border-b-2 border-yellow-200 pb-2">Our Aspiration</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To be a leading catalyst for educational excellence, bridging knowledge gaps 
              and creating opportunities for lifelong learning across diverse communities. 
              We strive to build a world where quality education is a fundamental right, 
              not a privilege.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              By 2030, we envision Brainy Bear Society as an influential force in educational innovation, 
              having transformed the learning journeys of over one million individuals worldwide. We aspire 
              to establish educational hubs in underserved regions, providing state-of-the-art learning 
              facilities and resources.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision encompasses a future where education transcends traditional boundaries, embracing 
              technological advancement while preserving human connection. We see a world where learning 
              is personalized, engaging, and aligned with evolving global needs, preparing individuals 
              not just for careers but for meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Approach Section
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-black rounded-xl shadow-xl overflow-hidden">
        <div className="p-10">
          <h3 className="text-3xl font-semibold mb-6 text-yellow-400">Our Approach</h3>
          <p className="text-lg mb-8 text-white">
            At Brainy Bear Society, we combine traditional wisdom with cutting-edge educational practices to create meaningful learning journeys. Our programs are:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-yellow-300">Learner-Centered</h4>
              <p className="text-gray-200">Tailored to individual needs and learning styles, ensuring that each person's unique journey is supported and valued.</p>
            </div>
            <div className="bg-yellow-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-yellow-300">Community-Driven</h4>
              <p className="text-gray-200">Developed with and for the communities we serve, addressing real-world challenges and cultural contexts.</p>
            </div>
            <div className="bg-yellow-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-yellow-300">Results-Oriented</h4>
              <p className="text-gray-200">Focused on practical skills and measurable outcomes that translate into tangible benefits for learners and communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>

      {/* Team Section */}
      <section className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-brainy-blue">Our Leadership Team</h3>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              {/* <img 
                src={TeamPlaceholder} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              /> */}
              <h4 className="text-xl font-semibold text-brainy-blue">{member.name}</h4>
              <p className="text-brainy-green font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

  {/* Our Core Values */}
  <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Core Values</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              These principles guide our work and shape our approach to creating sustainable change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div 
                key={value.id} 
                className={`${value.color} border p-6 rounded-lg transition-all duration-300 hover:shadow-lg text-center`}
              >
                <div className={`${value.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Journey</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              From humble beginnings to impactful change - the story of our foundation
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right pb-8 md:pb-0">
                      <div className="bg-yellow-100 inline-block px-3 py-1 rounded-full text-yellow-800 font-medium mb-2">2010</div>
                      <h3 className="text-xl font-bold mb-2">Foundation Established</h3>
                      <p className="text-gray-600">Started with a small team of 5 volunteers focused on educational support in one rural community.</p>
                    </div>
                    <div className="md:pl-8">
                      <img src="/api/placeholder/400/220" alt="Foundation established" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-600 border-4 border-white"></div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last md:text-left pb-8 md:pb-0">
                      <div className="bg-yellow-100 inline-block px-3 py-1 rounded-full text-yellow-800 font-medium mb-2">2015</div>
                      <h3 className="text-xl font-bold mb-2">Expansion of Programs</h3>
                      <p className="text-gray-600">Added six new focus areas including women empowerment and environmental conservation, reaching 20,000 beneficiaries.</p>
                    </div>
                    <div className="md:order-first md:text-right md:pr-8">
                      <img src="/api/placeholder/400/220" alt="Program expansion" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-600 border-4 border-white"></div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right pb-8 md:pb-0">
                      <div className="bg-yellow-100 inline-block px-3 py-1 rounded-full text-yellow-800 font-medium mb-2">2020</div>
                      <h3 className="text-xl font-bold mb-2">Technology Initiative</h3>
                      <p className="text-gray-600">Launched digital literacy programs and technology hubs in 30 communities, bridging the digital divide.</p>
                    </div>
                    <div className="md:pl-8">
                      <img src="/api/placeholder/400/220" alt="Technology initiative" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-600 border-4 border-white"></div>
                </div>

                {/* Item 4 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last md:text-left">
                      <div className="bg-yellow-100 inline-block px-3 py-1 rounded-full text-yellow-800 font-medium mb-2">Today</div>
                      <h3 className="text-xl font-bold mb-2">National Recognition</h3>
                      <p className="text-gray-600">Operating in over 120 communities with 50,000+ lives impacted through our holistic development approach.</p>
                    </div>
                    <div className="md:order-first md:text-right md:pr-8">
                      <img src="/api/placeholder/400/220" alt="National recognition" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-600 border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
