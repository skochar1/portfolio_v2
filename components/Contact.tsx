import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you'll need to replace these with actual values)
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shreya.kochar@columbia.edu'
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shreya.kochar@columbia.edu",
      href: "mailto:shreya.kochar@columbia.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "510-386-0022",
      href: "tel:+15103860022"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chicago, IL / New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/skochar1/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shreyakochar/", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss potential collaborations, research opportunities, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm mt-2">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm mt-2">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center w-12 h-12 bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Let's Collaborate</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in discussing new research opportunities, 
                  industry partnerships, or innovative project ideas. Feel free to reach out!
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Research collaborations</p>
                  <p>• Privacy and AI/ML consulting</p>
                  <p>• Speaking engagements</p>
                  <p>• Academic reviewing (Journal of Privacy and Confidentiality)</p>
                  <p>• Editorial work (Journal of Emerging Investigators)</p>
                  <p>• Mentorship opportunities</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}