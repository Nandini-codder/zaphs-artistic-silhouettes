
import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully", {
        description: "I'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-12">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-zaph-cream/90 mb-6">
              Interested in a custom photoshoot, artwork, or collaboration? Let's connect.
            </p>
            <div className="w-16 h-1 bg-zaph-gold mx-auto"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-zaph-cream/80">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zaph-black border-zaph-gray/30 focus:border-zaph-gold/50 text-zaph-cream"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zaph-cream/80">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zaph-black border-zaph-gray/30 focus:border-zaph-gold/50 text-zaph-cream"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-zaph-cream/80">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-zaph-black border-zaph-gray/30 focus:border-zaph-gold/50 text-zaph-cream"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zaph-cream/80">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-zaph-black border-zaph-gray/30 focus:border-zaph-gold/50 text-zaph-cream resize-none"
              />
            </div>
            
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-zaph-black border border-zaph-gold text-zaph-gold hover:bg-zaph-gold hover:text-zaph-black transition-colors px-8 py-2 rounded-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
