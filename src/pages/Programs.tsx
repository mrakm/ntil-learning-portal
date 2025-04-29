
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      name: "AWS",
      fullName: "Amazon Web Services",
      description: "Hands-on cloud certification training",
      courses: ["AWS Solutions Architect", "AWS Developer", "AWS SysOps Administrator"],
      features: ["Cloud infrastructure", "Serverless computing", "Storage solutions"],
      duration: "40-60 hours",
    },
    {
      name: "Microsoft",
      fullName: "Microsoft Certification",
      description: "Microsoft Office and Azure certifications",
      courses: ["Microsoft Azure Administrator", "Microsoft 365", "Azure Developer"],
      features: ["Cloud services", "Identity management", "Security solutions"],
      duration: "30-50 hours",
    },
    {
      name: "CompTIA",
      fullName: "CompTIA Certification",
      description: "A+, Network+, Security+, and more",
      courses: ["CompTIA A+", "CompTIA Network+", "CompTIA Security+"],
      features: ["Hardware troubleshooting", "Network security", "IT operations"],
      duration: "40-60 hours",
    },
    {
      name: "Cisco",
      fullName: "Cisco Certification",
      description: "CCNA, CCNP training",
      courses: ["CCNA", "CCNP Enterprise", "CCNP Security"],
      features: ["Network design", "Implementation", "Troubleshooting"],
      duration: "60-80 hours",
    },
    {
      name: "ISACA",
      fullName: "ISACA Certification",
      description: "CISA, CISM, CRISC programs",
      courses: ["CISA", "CISM", "CRISC"],
      features: ["IT audit", "Security management", "Risk control"],
      duration: "40-60 hours",
    },
    {
      name: "Palo Alto",
      fullName: "Palo Alto Networks",
      description: "Cybersecurity certifications",
      courses: ["PCNSA", "PCNSE", "PCSAE"],
      features: ["Network security", "Cloud security", "Security operations"],
      duration: "30-50 hours",
    },
    {
      name: "PMI",
      fullName: "Project Management Institute",
      description: "PMP & project management skills",
      courses: ["PMP", "CAPM", "PMI-ACP"],
      features: ["Project planning", "Risk management", "Team leadership"],
      duration: "35-50 hours",
    },
    {
      name: "CIA",
      fullName: "Certified Internal Auditor",
      description: "Internal audit preparation",
      courses: ["CIA Part 1", "CIA Part 2", "CIA Part 3"],
      features: ["Internal audit basics", "Practice of internal auditing", "Business knowledge"],
      duration: "60-80 hours",
    },
    {
      name: "Mirantis",
      fullName: "Mirantis Certification",
      description: "Container & Kubernetes training",
      courses: ["Docker Certified Associate", "Kubernetes Administrator", "OpenStack Associate"],
      features: ["Container orchestration", "Microservices", "Cloud-native applications"],
      duration: "30-50 hours",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')",
          }}
        >
          <div className="gradient-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Training Programs
            </h1>
            <p className="text-lg md:text-xl">
              Comprehensive certification training from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Certification Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of training programs designed to help you advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-ntil-100 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-ntil-800">{program.name}</h3>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.fullName}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ntil-600 hover:bg-ntil-700">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{program.fullName}</DialogTitle>
                        <DialogDescription>
                          Detailed information about the {program.name} certification program.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Available Courses</h4>
                          <ul className="space-y-1">
                            {program.courses.map((course, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Course Duration</h4>
                          <p>{program.duration}</p>
                        </div>
                        <Button className="w-full bg-ntil-600 hover:bg-ntil-700">
                          Enroll Now
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed to provide you with the skills and knowledge you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from certified professionals with real-world experience.",
                icon: "👨‍🏫",
              },
              {
                title: "Hands-on Training",
                description: "Practical exercises and labs to reinforce your learning.",
                icon: "💻",
              },
              {
                title: "Exam Preparation",
                description: "Comprehensive study materials and practice tests.",
                icon: "📚",
              },
              {
                title: "Flexible Learning",
                description: "Choose between online, in-person, or hybrid training options.",
                icon: "🕒",
              },
              {
                title: "Post-Training Support",
                description: "Continued assistance even after your course completion.",
                icon: "🛠️",
              },
              {
                title: "Industry Recognition",
                description: "Certifications recognized by top employers worldwide.",
                icon: "🏆",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
