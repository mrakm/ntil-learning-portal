import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const services = [{
    title: "IT Certification Training",
    description: "Professional training for AWS, Microsoft, Cisco, and more.",
    icon: "🖥️"
  }, {
    title: "English Exam Vouchers",
    description: "Affordable vouchers for TOEFL, PTE, GRE, and more.",
    icon: "🎓"
  }, {
    title: "Expert Support",
    description: "Dedicated team to guide you through the certification journey.",
    icon: "👨‍💼"
  }];
  const testimonials = [{
    name: "Sumit Parab",
    role: "Student",
    comment: "Fantastic support team, affordable prices, and easy process!"
  }, {
    name: "Katie Daniel",
    role: "IT Professional",
    comment: "ISACA training was smooth and detailed. Highly recommended."
  }, {
    name: "Rahul Sharma",
    role: "Software Engineer",
    comment: "The AWS training helped me secure a better job. Thank you!"
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')"
      }}>
          <div className="gradient-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Launch Your Career with Global Certifications
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Online and in-person training for IT and language exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs">
                <Button size="lg" className="bg-ntil-600 hover:bg-ntil-700">
                  Explore Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-900">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help students and professionals achieve their career goals with comprehensive training and certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Certification Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most in-demand training programs and certification courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["AWS", "Microsoft", "CompTIA", "Cisco", "ISACA", "PMI"].map(program => <Card key={program} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-ntil-100 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-ntil-800">{program}</h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Instructor-led training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hands-on labs & exercises</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Exam preparation materials</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-ntil-600 hover:bg-ntil-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/programs">
              <Button variant="outline" size="lg">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ntil-950 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from students who have successfully completed our certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-ntil-900 border-ntil-800 text-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-ntil-500">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="mb-4 text-gray-300">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ntil-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Take the first step towards advancing your career with our globally recognized certification programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/programs">
              <Button size="lg" className="bg-ntil-600 hover:bg-ntil-700">
                Browse Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;