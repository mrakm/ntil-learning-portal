
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')",
          }}
        >
          <div className="gradient-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl">
              Learn more about ntil.in and our commitment to education.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-ntil-800">Our Story</h2>
              <p className="text-lg mb-4">
                ntil.in is committed to delivering world-class training and affordable certification access for IT professionals and language learners.
              </p>
              <p className="text-lg mb-4">
                Founded with the vision to bridge the gap between education and industry requirements, we specialize in providing comprehensive training programs and certification vouchers to help students and professionals advance their careers.
              </p>
              <p className="text-lg">
                With a focus on quality education and student success, we've helped thousands of individuals achieve their certification goals and secure better career opportunities.
              </p>
            </div>
            <div className="bg-ntil-50 p-8 rounded-lg">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-ntil-700">Mission</h3>
                  <p className="text-lg italic mb-8">
                    "Empower students and professionals with globally recognized skills and credentials."
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-ntil-700">Vision</h3>
                  <p className="text-lg italic">
                    "To become India's most trusted learning partner for IT and language certification."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ntil.in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our training materials to customer service.",
                icon: "🌟",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical conduct in all our dealings.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                description: "We continuously improve our offerings to meet the evolving needs of the industry.",
                icon: "💡",
              },
              {
                title: "Student Success",
                description: "We measure our success by the achievements of our students and their career growth.",
                icon: "🎯",
              },
            ].map((value, index) => (
              <Card key={index} className="border-t-4 border-t-ntil-600">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals behind ntil.in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Verma",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in IT training and certification.",
              },
              {
                name: "Priya Shah",
                role: "Head of Training",
                bio: "Expert in curriculum development and instructional design.",
              },
              {
                name: "Amit Kumar",
                role: "Technical Director",
                bio: "Certified AWS and Microsoft trainer with industry experience.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-ntil-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-ntil-200 flex items-center justify-center text-ntil-600 text-4xl font-bold">
                    {member.name.split(" ").map(name => name[0]).join("")}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-ntil-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
