import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Code2,
  Database,
  Workflow,
  Brain,
  Network,
  GitBranch,
  ShoppingCart,
  Eye,
  FileText,
  Stethoscope,
  TrendingUp,
  Users,
  MessageSquare,
  Target,
  BookOpen,
  Film,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsLoaded(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, index * 100);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <GeometricBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium" data-testid="badge-location">
                <MapPin className="w-3 h-3 mr-2" />
                Eluru, Andhra Pradesh
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse" style={{ animationDuration: "3s" }} data-testid="text-name">
              Srujan Prabhu Kumar Mygapula
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-tagline">
              Data Engineer & AI Automation Specialist
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-subtitle">
              Building intelligent systems that solve real-world problems through workflow automation and AI-driven solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="min-w-[160px]"
                data-testid="button-view-work"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="min-w-[160px] bg-background/50 backdrop-blur-sm"
                data-testid="button-get-in-touch"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="animate-bounce"
              data-testid="button-scroll-down"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-about">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-professional-summary">
                  Recent Computer Science graduate specializing in AI & ML with hands-on experience in workflow automation, API integration, and AI-driven systems. Proficient in building scalable automation pipelines using n8n, Python, and JavaScript to connect cloud APIs, trigger intelligent workflows, and optimize business processes. Passionate about designing automation-first solutions that improve efficiency and reduce manual effort.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" data-testid="text-ieee-publications">4 IEEE Research Publications</h3>
                      <p className="text-sm text-muted-foreground">Published research in AI, ML, and assistive technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-md">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" data-testid="text-current-role">Data Engineer at Relu Consultancy</h3>
                      <p className="text-sm text-muted-foreground">April 2025 – Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-chart-3/10 rounded-md">
                      <GraduationCap className="w-6 h-6 text-chart-3" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" data-testid="text-education">B.E. Computer Science (AI & ML)</h3>
                      <p className="text-sm text-muted-foreground">CGPA: 8.04 (2021-2025)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-muted/30 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-skills">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SkillCategory icon={Code2} title="Programming" skills={["Python", "JavaScript"]} />
                <SkillCategory icon={Workflow} title="Automation" skills={["n8n", "Selenium", "PyAutoGUI"]} />
                <SkillCategory icon={Brain} title="AI/ML" skills={["Machine Learning", "Deep Learning", "Computer Vision", "GenAI", "LLMs", "RAG", "Agentic AI"]} />
                <SkillCategory icon={Network} title="Frameworks" skills={["TensorFlow"]} />
                <SkillCategory icon={GitBranch} title="APIs & Integration" skills={["REST APIs", "OAuth2", "Google APIs"]} />
                <SkillCategory icon={Database} title="Databases" skills={["SQL", "MongoDB", "Snowflake"]} />
                <SkillCategory icon={Github} title="Tools" skills={["GitHub", "NLP"]} />
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <SkillProgress skill="Team Leadership" level={90} />
                  <SkillProgress skill="Communication Skills" level={95} />
                  <SkillProgress skill="Problem Solving" level={92} />
                  <SkillProgress skill="Analytical Skills" level={88} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-experience">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <Card className="hover-elevate transition-all duration-300 border-l-4 border-l-primary bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <CardTitle className="text-2xl" data-testid="text-job-title">Data Engineer</CardTitle>
                <Badge variant="default" data-testid="badge-job-duration">Apr 2025 – Present</Badge>
              </div>
              <CardDescription className="text-lg font-medium" data-testid="text-company">
                Relu Consultancy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3" data-testid="text-responsibility-1">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-muted-foreground">
                    Built scalable web scraping pipelines to extract and preprocess data using Python and LLMs
                  </p>
                </li>
                <li className="flex items-start gap-3" data-testid="text-responsibility-2">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-muted-foreground">
                    Designed and implemented n8n-based automation workflows for data transformation, AI integration, and cross-system triggers
                  </p>
                </li>
                <li className="flex items-start gap-3" data-testid="text-responsibility-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-muted-foreground">
                    Developed REST API-based workflows and integrated third-party SaaS tools using OAuth2 authentication
                  </p>
                </li>
                <li className="flex items-start gap-3" data-testid="text-responsibility-4">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-muted-foreground">
                    Worked closely with product teams to automate repetitive business processes, increasing operational efficiency
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="publications" className="py-24 px-6 bg-muted/30 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-publications">
              Research Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">4 IEEE Conference Publications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PublicationCard
              title="GAN-based Image Generation Research"
              conference="IEEE"
              link="https://ieeexplore.ieee.org/document/10841324"
              index={1}
            />
            <PublicationCard
              title="Performance Evaluation of Heart Failure Prediction using Machine Learning"
              conference="IEEE 2023 International Conference on Sustainable Communication Networks and Application (ICSCNA)"
              link="https://ieeexplore.ieee.org/document/10368606"
              index={2}
            />
            <PublicationCard
              title="Cursor Movement with Eye Movement - Assistive Technology"
              conference="IEEE International Conference SPARC 2024"
              link="https://ieeexplore.ieee.org/document/10828631"
              index={3}
            />
            <PublicationCard
              title="Additional IEEE Publication"
              conference="IEEE"
              note="Link available upon request"
              index={4}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-projects">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              icon={ShoppingCart}
              title="Smart Cart Recovery System"
              subtitle="E-commerce Automation"
              description="Designed an n8n workflow that triggers when someone abandons a cart. Automatically generates a personalized AI video showcasing the product with the product page background (CG), then sends it via email and MMS."
              impact="Increased customer conversion without spamming, saved 90% of client's time and effort on customer follow-ups"
              technologies={["n8n", "AI Video Generation", "Email/MMS Integration", "Workflow Automation"]}
              index={1}
            />
            <ProjectCard
              icon={Eye}
              title="Eye-Controlled Cursor System"
              subtitle="Assistive Technology"
              description="Developed a system for physically disabled individuals to control computer cursors using eye movements. Enables hands-free computer interaction for accessibility."
              achievement="Published research paper in IEEE International Conference SPARC 2024"
              technologies={["MediaPipe", "Computer Vision", "PyAutoGUI", "Python"]}
              link="https://ieeexplore.ieee.org/document/10828631"
              index={2}
            />
            <ProjectCard
              icon={FileText}
              title="AI-Powered Due Diligence Generator"
              subtitle="Automated Report Generation"
              description="Built an n8n workflow that takes a company name as input, crawls the website, performs Google searches, and gathers context about revenue and key metrics. Uses AI with optimized prompts to automatically create and deploy a comprehensive due diligence webpage."
              impact="Saved 95% of client's time in creating due diligence reports"
              technologies={["n8n", "Web Scraping", "AI/LLMs", "Automated Deployment"]}
              index={3}
            />
            <ProjectCard
              icon={Stethoscope}
              title="Medical Diagnosis AI Assistant"
              subtitle="RAG System"
              description="Developed a medical diagnosis model using Large Language Models and RAG (Retrieval-Augmented Generation) techniques to diagnose diseases based on user-provided symptoms. System retrieves relevant medical data for accurate, context-aware disease predictions."
              technologies={["LLMs", "RAG", "Snowflake SQL", "Python"]}
              index={4}
            />
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-24 px-6 bg-muted/30 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-hobbies">
              Hobbies & Interests
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid="text-hobby-chess">Chess Enthusiast</h3>
                <p className="text-muted-foreground">
                  Strategic thinking on and off the board - I love the mental challenge of chess
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Film className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid="text-hobby-movies">Movie Lover</h3>
                <p className="text-muted-foreground">
                  Passionate about cinema and storytelling - appreciating the art of filmmaking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-contact">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">
              Let's connect and discuss how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:srujanprabhu18@gmail.com"
                        className="font-medium hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        srujanprabhu18@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-md">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+917382099233"
                        className="font-medium hover:text-accent transition-colors"
                        data-testid="link-phone"
                      >
                        +91 7382099233
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-chart-3/10 rounded-md">
                      <MapPin className="w-6 h-6 text-chart-3" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium" data-testid="text-location">Eluru, Andhra Pradesh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                  data-testid="link-linkedin"
                >
                  <a
                    href="https://linkedin.com/in/srujan-prabhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                  data-testid="link-github"
                >
                  <a
                    href="https://github.com/srujanprabhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                  data-testid="link-instagram"
                >
                  <a
                    href="https://instagram.com/srujan.__.prabhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="hover-elevate transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle data-testid="heading-contact-form">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-name"
                              disabled={contactMutation.isPending}
                            />
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
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              data-testid="input-email"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              data-testid="input-subject"
                              disabled={contactMutation.isPending}
                            />
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
                              placeholder="Your message..."
                              rows={5}
                              {...field}
                              data-testid="input-message"
                              disabled={contactMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Srujan Prabhu Kumar Mygapula. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

function SkillCategory({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary" />
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SkillProgress({ skill, level }: { skill: string; level: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setProgress(level), 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" data-testid={`text-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>{skill}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

function PublicationCard({
  title,
  conference,
  link,
  note,
  index,
}: {
  title: string;
  conference: string;
  link?: string;
  note?: string;
  index: number;
}) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-publication-title-${index}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3" data-testid={`text-publication-conference-${index}`}>
              {conference}
            </p>
            {link ? (
              <Button
                variant="outline"
                size="sm"
                asChild
                data-testid={`link-publication-${index}`}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Paper
                </a>
              </Button>
            ) : note ? (
              <p className="text-xs text-muted-foreground italic" data-testid={`text-publication-note-${index}`}>{note}</p>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({
  icon: Icon,
  title,
  subtitle,
  description,
  impact,
  achievement,
  technologies,
  link,
  index,
}: {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  impact?: string;
  achievement?: string;
  technologies: string[];
  link?: string;
  index: number;
}) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all duration-300 group h-full flex flex-col bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-md group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {link && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid={`link-project-${index}`}
            >
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>
          {title}
        </CardTitle>
        <CardDescription data-testid={`text-project-subtitle-${index}`}>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
          {description}
        </p>
        {impact && (
          <div className="mb-4 p-3 bg-chart-3/10 rounded-md border border-chart-3/20">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-chart-3 font-medium" data-testid={`text-project-impact-${index}`}>{impact}</p>
            </div>
          </div>
        )}
        {achievement && (
          <div className="mb-4 p-3 bg-accent/10 rounded-md border border-accent/20">
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-accent font-medium" data-testid={`text-project-achievement-${index}`}>{achievement}</p>
            </div>
          </div>
        )}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs" data-testid={`badge-tech-${index}-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
