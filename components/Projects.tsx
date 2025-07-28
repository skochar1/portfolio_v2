import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Predictive Privacy Framework",
      description: "End-to-end framework for quantifying informational privacy harm combining synthetic data generation, unsupervised clustering, human harm scoring via surveys, and supervised ML to predict perceived privacy harm under different disclosure scenarios.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Python", "Differential Privacy", "Machine Learning", "Survey Research", "Clustering"],
      github: "https://github.com/skochar1/PredictivePrivacy",
      demo: "https://academiccommons.columbia.edu/doi/10.7916/82f3-e448",
      type: "Master's Thesis"
    },
    {
      title: "Career Site - AI-Powered Job Platform",
      description: "Comprehensive job search platform with AI-powered recommendations, semantic search, and personalized career guidance. Features advanced resume analysis, intelligent job matching, and AI career assistant.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b903?w=600&h=400&fit=crop",
      technologies: ["Next.js 15", "TypeScript", "OpenAI GPT-4", "PostgreSQL", "Vector Embeddings", "React"],
      github: "https://github.com/skochar1/career",
      demo: "https://career-gamma-one.vercel.app",
      type: "Full-Stack Application"
    },
    {
      title: "Picket - Digital Picket Line",
      description: "Built the first digital picket line at Treehacks 2023. With the click of a button, anyone can join a coordinated collective of users determined to push back against unethical tech.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      technologies: ["React", "JavaScript", "Web APIs", "Collective Action"],
      github: "https://devpost.com/software/picket-nacou0",
      demo: "https://devpost.com/software/picket-nacou0",
      type: "Hackathon Project"
    },
    {
      title: "Winterest: Networking App for Wellesley",
      description: "Winterest was a social media platform for Wellesley students and alumni to network, as a hybrid of Tinder & LinkedIn. Aimed to create meaningful relationships and overcome COVID isolation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Authentication", "Social Media"],
      github: "https://github.com/melguzman/winterest",
      demo: "https://github.com/melguzman/winterest",
      type: "Social Platform"
    },
    {
      title: "The Pile: US State Analysis",
      description: "Analyzed sentiment via the GPT-J model to view trends and emotions on specific topics within the US. Constructed a pipeline to generate sentences with data associated with each US state.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "GPT-J", "NLP", "Data Analysis", "Sentiment Analysis"],
      github: "https://github.com/skochar1/the-pile-state-analysis/tree/main",
      demo: "https://github.com/skochar1/the-pile-state-analysis/blob/main/the-pile-analysis.pdf",
      type: "Research Project"
    },
    {
      title: "PACISCA - Synaptic Calcium Activity Analysis",
      description: "Machine learning system to automate the detection of synaptic regions of interest in drosophila brain images. Published at IEEE MIT URTC conference.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Image Processing", "Neuroscience"],
      github: "#",
      demo: "https://ieeexplore.ieee.org/document/9668612",
      type: "Research Project"
    },
    {
      title: "Marvel Research Program Platform",
      description: "Co-founded program to teach middle and high school students programming basics, hands-on Python project development, and competitive programming preparation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["Python", "Education", "Mentorship", "Web Platform"],
      github: "#",
      demo: "https://www.marvelprogram.com",
      type: "Educational Platform"
    },
    {
      title: "Microsoft Azure Anomaly Detection",
      description: "Built anomaly detecting models for subscription data using Azure and KQL. Created PowerBI reports and set up incident alerting systems for renewal failure analysis.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Azure", "KQL", "PowerBI", "C#", ".NET Core", "Anomaly Detection"],
      github: "#",
      demo: "#",
      type: "Industry Project"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of research projects and practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => project.github !== '#' && window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => project.demo !== '#' && window.open(project.demo, '_blank')}
                      disabled={project.demo === '#'}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}