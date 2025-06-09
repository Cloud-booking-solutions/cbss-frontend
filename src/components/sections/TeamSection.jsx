// import { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const TeamSection = () => {
//   const [teamMembers, setTeamMembers] = useState([]);

//   useEffect(() => {
//     fetchTeamMembers();
//   }, []);

//   const fetchTeamMembers = async () => {
//     try {
//       const response = await fetch('https://cbss-backend.onrender.com/api/team');
//       if (response.ok) {
//         const data = await response.json();
//         setTeamMembers(data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch team members:', error);
//     }
//   };

//   const expertTeam = teamMembers.filter(member => member.type === 'expert');
//   const interns = teamMembers.filter(member => member.type === 'intern');

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Our Team</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Meet our expert team and talented interns who work together to deliver exceptional solutions.
//           </p>
//         </div>

//         {/* Expert Team Section */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold mb-8 text-center">Expert Team</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {expertTeam.map((member) => (
//               <TeamMemberCard key={member._id} member={member} />
//             ))}
//           </div>
//         </div>

//         {/* Interns Section */}
//         <div>
//           <h3 className="text-2xl font-bold mb-8 text-center">Our Interns</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {interns.map((member) => (
//               <TeamMemberCard key={member._id} member={member} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const TeamMemberCard = ({ member }) => (
//   <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-white shadow-md group">
//     <div className="aspect-square relative">
//       <img
//         src={member.image}
//         alt={member.name}
//         className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//         <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
//         <p className="text-sm text-gray-200">{member.role}</p>
//       </div>
//     </div>
//   </Card>
// );

// export default TeamSection; 