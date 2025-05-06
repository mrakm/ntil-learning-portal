
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  message: z.string().min(10, { message: "Message is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Call the Google Apps Script API
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxab4cSKyy1vS22z-yzloONZ6oW2Mg7IDHQN02z2ozkHWTfk9k-hPUTr5VnNoLsK0nt/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            interest: "Contact Form Inquiry" // Default interest
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      console.log("Form submitted successfully");
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Get in touch with our team for any queries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our training programs or exam vouchers? We're here to help! Fill out the form or reach out to us directly using the contact information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-ntil-50 rounded-full">
                      <MapPin className="h-6 w-6 text-ntil-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Address</h3>
                    <p className="text-gray-600">
                      A-48 2nd Floor, Block A, Phase-2,<br />
                      Mangolpuri Industrial Area,<br />
                      Delhi 110034
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-ntil-50 rounded-full">
                      <Mail className="h-6 w-6 text-ntil-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ntilcrt.com" className="hover:text-ntil-700 transition-colors">
                        info@ntilcrt.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-ntil-50 rounded-full">
                      <Phone className="h-6 w-6 text-ntil-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918700823915" className="hover:text-ntil-700 transition-colors">
                        +91 8700823915
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="text-lg font-bold mb-4">Our Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8270392286196!2d77.1156489753404!3d28.697474982289904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d043cb207e5a7%3A0x726d7dd3009e6e83!2sMangolpuri%20Industrial%20Area%20Phase%202%2C%20Mangolpuri%2C%20Delhi%2C%20110034!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ntilcrt.com office location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="johndoe@example.com" {...field} />
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
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-ntil-600 hover:bg-ntil-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are your office hours?",
                answer: "Our office is open Monday to Friday, 9:00 AM to 6:00 PM IST. We are closed on weekends and national holidays.",
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We aim to respond to all inquiries within 24 hours during business days.",
              },
              {
                question: "Do you offer remote training options?",
                answer: "Yes, we offer both in-person and remote training options for all our certification programs.",
              },
              {
                question: "How can I book a consultation?",
                answer: "You can book a consultation by filling out the contact form on this page, calling our office, or sending an email to info@ntilcrt.com.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
