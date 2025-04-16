
// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Indu Negi",
//     role: "President",
//     about: "Alice brings over 15 years of leadership in tech, empowering teams to deliver innovation.",
//   },
//   {
//     id: 2,
//     name: "Rakshendu Vardhan",
//     role: "Secretary",
//     about: "Born on 10th August 1992, Rakshendu Vardhan is a graduate in Bachelor of Commerce (B.Com) and also holds a Diploma in Hotel Management with a specialization in Bartending. Beyond his academic qualifications, what truly defines Rakshendu is his unwavering passion for social service and community upliftment. From his school days, Rakshendu has actively participated in various volunteer programs, always driven by a genuine desire to make a difference. Over the years, this commitment grew stronger, leading him to work with multiple NGOs across India, contributing to diverse causes aimed at improving society. He, along with the BraiinyBear Educational Training and Society team, has been actively working for the \"Yamuna Bachao\" and \"Jaljeeva Mission\" for years—initiatives focused on environmental restoration and water conservation, showcasing his long-standing commitment to protecting natural resources and promoting sustainability. A humble and grounded individual, Rakshendu is known for his “out-of-the-box” thinking and his readiness to lend a helping hand, no matter the challenge. His journey reflects a blend of professional versatility and heartfelt dedication to social betterment—qualities that make him a valuable pillar of BraiinyBear Educational Training and Society.",
//   },
//   {
//     id: 3,
//     name: "Clara Smith",
//     role: "Product Designer",
//     about: "Clara crafts intuitive designs that delight users and solve real problems.",
//   },
// ];

import { Linkedin, Mail, Twitter } from 'lucide-react';

// Sample team data - replace with your actual team data
const teamMembers = [
  {
    id: 1,
    name: "Indu Negi",
    role: "President",
    bio: "Indu Negi has over 15 years of experience in leadership and strategic growth.",
    image: "/api/placeholder/400/400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "alex@example.com"
    }
  },
  {
    id: 2,
        name: "Rakshendu Vardhan",
        role: "Secretary",
    bio: "Born on 10th August 1992, Rakshendu Vardhan is a graduate in Bachelor of Commerce (B.Com) and also holds a Diploma in Hotel Management with a specialization in Bartending. Beyond his academic qualifications, what truly defines Rakshendu is his unwavering passion for social service and community upliftment. From his school days, Rakshendu has actively participated in various volunteer programs, always driven by a genuine desire to make a difference. Over the years, this commitment grew stronger, leading him to work with multiple NGOs across India, contributing to diverse causes aimed at improving society. He, along with the BraiinyBear Educational Training and Society team, has been actively working for the \"Yamuna Bachao\" and \"Jaljeeva Mission\" for years—initiatives focused on environmental restoration and water conservation, showcasing his long-standing commitment to protecting natural resources and promoting sustainability. A humble and grounded individual, Rakshendu is known for his “out-of-the-box” thinking and his readiness to lend a helping hand, no matter the challenge. His journey reflects a blend of professional versatility and heartfelt dedication to social betterment—qualities that make him a valuable pillar of BraiinyBear Educational Training and Society.",
    image: "/api/placeholder/400/400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "morgan@example.com"
    }
  },
  {
    id: 3,
    name: "Sanjay Goyal",
    role: "Treasurer",
    bio: "Sanjay brings creativity and user-centered design to all our projects.",
    image: "/api/placeholder/400/400",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "taylor@example.com"
    }
  },
];

const OurPeople = () => {  
  return (
    <div className="pt-28 pb-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Animated Underline */}
        <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4">
        Our <span className="text-yellow-500">People</span>
      </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team members who are the heart of our organization, 
            bringing passion and expertise to everything we do.
          </p>
        </div>

        {/* Team Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-64 overflow-hidden bg-blue-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-md font-medium text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-5">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 pt-3 border-t border-gray-100">
                  <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.socialLinks.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={`mailto:${member.socialLinks.email}`} className="text-gray-500 hover:text-red-500 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join Our Team CTA */}
        <div className="mt-20 text-center bg-blue-50 p-10 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our growing team.
            Check out our open positions and become part of our story.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
