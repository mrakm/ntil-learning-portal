
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  message: z.string().min(10, { message: "Message is required" }),
  examType: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const Vouchers = () => {
  const { toast } = useToast();
  
  const vouchers = [
    {
      name: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      price: "₹15,000 - ₹20,000",
      description: "Widely accepted English proficiency test for university admissions worldwide.",
      forWhom: "Students applying to English-speaking universities, especially in the US and Canada.",
      features: ["Internet-based test", "Measures reading, listening, speaking, and writing skills", "Valid for 2 years"],
    },
    {
      name: "PTE",
      fullName: "Pearson Test of English Academic",
      price: "₹13,000 - ₹18,000",
      description: "Computer-based English test accepted by thousands of institutions globally.",
      forWhom: "Students and professionals seeking to study or work in English-speaking countries.",
      features: ["Computer-based assessment", "Results available within 5 business days", "Accepted in Australia, UK, USA, and more"],
    },
    {
      name: "GRE",
      fullName: "Graduate Record Examination",
      price: "₹16,000 - ₹21,000",
      description: "Standardized test for graduate school admissions in the United States and other countries.",
      forWhom: "Students applying for master's degrees, MBA programs, and doctoral programs.",
      features: ["Measures verbal reasoning, quantitative reasoning, and analytical writing", "Score valid for 5 years", "Computer-delivered test"],
    },
    {
      name: "Duolingo English Test",
      fullName: "Duolingo English Test",
      price: "₹3,500 - ₹5,000",
      description: "Online English proficiency test that can be taken from home.",
      forWhom: "Students applying to universities that accept Duolingo as an English proficiency test.",
      features: ["Take at home anytime", "Results within 48 hours", "Adaptive test format"],
    },
    {
      name: "PSI-SELT UKVI",
      fullName: "PSI Secure English Language Test for UK Visas and Immigration",
      price: "₹12,000 - ₹16,000",
      description: "English language test approved for UK visa and immigration purposes.",
      forWhom: "Individuals applying for UK visas or settlement.",
      features: ["Approved for UK visa applications", "Tests speaking, listening, reading, and writing", "Results typically available within 7 days"],
    },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      examType: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Voucher request submitted",
      description: "We will contact you shortly with more information.",
    });
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
          }}
        >
          <div className="gradient-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exam Vouchers
            </h1>
            <p className="text-lg md:text-xl">
              Get affordable exam vouchers for language tests and IT certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Vouchers List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Exam Vouchers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer vouchers for a wide range of exams at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vouchers.map((voucher) => (
              <Card key={voucher.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-ntil-50 pb-4">
                  <CardTitle>{voucher.name}</CardTitle>
                  <CardDescription>{voucher.fullName}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <p className="text-lg font-bold text-ntil-700 mb-1">Price Range</p>
                    <p>{voucher.price}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-bold text-ntil-700 mb-1">Description</p>
                    <p className="text-gray-600">{voucher.description}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-bold text-ntil-700 mb-1">For Whom</p>
                    <p className="text-gray-600">{voucher.forWhom}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-lg font-bold text-ntil-700 mb-1">Features</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {voucher.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ntil-600 hover:bg-ntil-700">
                        Get Quote
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Request {voucher.name} Voucher</DialogTitle>
                        <DialogDescription>
                          Fill out this form and we'll get back to you with pricing and availability.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <input 
                            type="hidden" 
                            {...form.register("examType")}
                            value={voucher.name}
                          />
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 9876543210" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Let us know any specific requirements or questions you have."
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <DialogFooter>
                            <Button type="submit" className="w-full bg-ntil-600 hover:bg-ntil-700">
                              Submit Request
                            </Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting your exam voucher is quick and easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Request a Quote",
                description: "Fill out the form for the exam voucher you need.",
                icon: "📝",
              },
              {
                step: "2",
                title: "Confirm and Pay",
                description: "Review the quote and complete the payment process.",
                icon: "💳",
              },
              {
                step: "3",
                title: "Receive Your Voucher",
                description: "Get your voucher code via email within 24-48 hours.",
                icon: "📧",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-ntil-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <CardContent className="p-6 pt-8">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our exam vouchers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to receive the voucher?",
                answer: "Most vouchers are delivered within 24-48 hours after payment confirmation."
              },
              {
                question: "Do vouchers have an expiration date?",
                answer: "Yes, most exam vouchers have an expiration date, typically 6-12 months from the purchase date."
              },
              {
                question: "Can I reschedule my exam after purchasing the voucher?",
                answer: "Yes, you can reschedule your exam according to the exam provider's policies, usually up to 48 hours before the scheduled time."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept credit/debit cards, net banking, UPI, and other payment methods available in India."
              },
              {
                question: "Do you offer discounts for bulk purchases?",
                answer: "Yes, we offer special rates for organizations or groups purchasing multiple vouchers. Contact us for details."
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vouchers;
