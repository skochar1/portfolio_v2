import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Building, GraduationCap, Calendar, Users } from 'lucide-react';

export function Experience() {
  const researchExperience = [
    {
      title: "Predoctoral Research Fellow",
      organization: "University of Chicago Computer Science Department",
      period: "Jan 2025 - Present",
      description: "Selected as a Predoctoral Research Fellow to work under Professor Nick Feamster. Studying questions around privacy and LLM bias using survey methodology and statistical analysis.",
      technologies: ["Privacy Research", "LLM Bias", "Survey Methodology", "Statistical Analysis"]
    },
    {
      title: "Master's Dissertation Research",
      organization: "Columbia University (advisor: Steven M. Bellovin)",
      period: "Jan 2023 - May 2025",
      description: "Developed the 'Predictive Privacy' framework to quantify privacy harm and provide concrete basis for regulators and courts to assess actual injury due to disclosure of private information. Published dissertation and co-authored law review article.",
      technologies: ["Privacy Engineering", "Legal Tech", "Differential Privacy", "Machine Learning"]
    },
    {
      title: "DSI Scholar",
      organization: "Bendesky Lab, Columbia University",
      period: "Jul 2024 - Present",
      description: "Selected as 1 of 9 students across Columbia University to be a DSI Scholar. Using Autoregressive Hidden Markov Models (AR-HMMs) to separate and analyze behaviors in adult mice across different environmental scenarios.",
      technologies: ["AR-HMMs", "Python", "Statistical Analysis", "Behavioral Data"]
    },
    {
      title: "Privacy Attacks and Auditing Group Member",
      organization: "OpenDP Project, Harvard University",
      period: "2023 - Present",
      description: "Member of the Privacy Attacks and Auditing group and the Women in DP working group. Contributing to OpenDP, a community effort to build open-source software tools for statistical analysis of sensitive private data with differential privacy.",
      technologies: ["Differential Privacy", "Python", "Open Source", "Documentation"]
    },
    {
      title: "Research Contributor",
      organization: "Harvard Open Access Project",
      period: "2023",
      description: "Helped continue work to build the Open Access Tracking Project (OATP) database and fixed bugs in the TagTeam database system.",
      technologies: ["Database Management", "Bug Fixes", "Open Access"]
    }
  ];

  const industryExperience = [
    {
      title: "Software Engineer/Data Engineer",
      organization: "Microsoft (C&AI Audits and Risk Management)",
      period: "May 2024 - Present",
      description: "Integrated quicker Azure OpenAI querying into backend processes (reducing query time from 20 seconds to 0.5 seconds). Automated security procedures ensuring accurate earning reports, boosting corporate revenue by approximately $100 million.",
      technologies: ["Azure OpenAI", "ETL", "Data Optimization", "Security Automation"]
    },
    {
      title: "Software Engineer",
      organization: "Microsoft (C&AI Security team)",
      period: "Nov 2022 - May 2024",
      description: "Created a template service to help teams transition from less secure authorization methods (certificates/secrets) to identities, reducing integration time from months to weeks. Implemented active learning using logs to output roles with least privileges.",
      technologies: ["Azure AD", "PIM", "IAM", "DevOps", "Identity Management"]
    },
    {
      title: "Software Engineering Intern",
      organization: "Microsoft (Commerce and Ecosystems)",
      period: "Summer 2022",
      description: "Machine Learning intern at Microsoft's Commerce and Ecosystems department working on ML models and data analysis.",
      technologies: ["Machine Learning", "Python", "Data Analysis"]
    },
    {
      title: "Microsoft Explore Intern",
      organization: "Microsoft",
      period: "Summer 2021",
      description: "Used Azure Development Environment and Kusto Query Language to build anomaly detecting models for subscriptions. Created reports in PowerBI and set up incident alerting. Wrote code in C# (.NET Core) to analyze renewal failures.",
      technologies: ["Azure", "KQL", "PowerBI", "C#", ".NET Core", "Anomaly Detection"]
    }
  ];

  const mentorshipExperience = [
    {
      title: "Undergraduate Research Mentor",
      organization: "Columbia University (Selected by Steven M. Bellovin)",
      period: "2024 - 2025",
      description: "Selected by Professor Steven M. Bellovin to supervise and advise an undergraduate student for research in data privacy. Providing guidance on research methodology, technical implementation, and academic writing.",
      technologies: ["Research Mentorship", "Data Privacy", "Academic Supervision", "Research Methods"]
    },
    {
      title: "Teaching Assistant",
      organization: "Columbia Computer Science Department",
      period: "Aug 2024 - May 2025",
      description: "TA for Advanced Software Engineering (COMS W4156) in Fall 2024 and Topics in Software Engineering research course (COMS E6156) in Spring 2025. Created course curriculum, homework assignments, and exam questions. Lectured in class and demonstrated skills for final projects.",
      technologies: ["Software Engineering", "Course Development", "Teaching", "Curriculum Design"]
    },
    {
      title: "Teaching Assistant",
      organization: "Wellesley College Computer Science Department",
      period: "Aug 2020 - May 2022",
      description: "TA'd and graded for CS232 (Artificial Intelligence course) and CS111 (Introductory Python course), providing support to students learning fundamental programming and AI concepts.",
      technologies: ["Python", "AI", "Teaching", "Course Support"]
    },
    {
      title: "Associate Editor",
      organization: "Journal of Emerging Investigators",
      period: "Feb 2024 - Present",
      description: "Mentoring high school students through the research and publication process. Guiding student research projects and helping them develop scientific writing and research skills.",
      technologies: ["Research Mentorship", "Scientific Writing", "Editorial Work", "Student Development"]
    },
    {
      title: "Program Co-Director",
      organization: "Marvel Research Program",
      period: "2022 - Present",
      description: "Co-founded program to teach middle and high school students programming basics, hands-on Python project development, and competitive programming preparation. Mentored students and inspired them to pursue technical roles.",
      technologies: ["Python", "Education", "Mentorship", "Program Development"]
    }
  ];

  const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl mb-2">{experience.title}</h3>
              <p className="text-muted-foreground mb-2">{experience.organization}</p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {experience.period}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of research excellence, industry innovation, and educational mentorship
          </p>
        </motion.div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8">
            <TabsTrigger value="research" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Research
            </TabsTrigger>
            <TabsTrigger value="industry" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Industry
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Mentorship
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research">
            <div className="max-w-4xl mx-auto">
              {researchExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="industry">
            <div className="max-w-4xl mx-auto">
              {industryExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship">
            <div className="max-w-4xl mx-auto">
              {mentorshipExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}