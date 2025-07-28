import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Trophy, DollarSign, Users } from 'lucide-react';

export function Honors() {
  const awards = [
    {
      title: "Privacy Law Scholars Conference (PLSC) 2025",
      description: "Law paper draft 'Beyond Creepiness: Predictive Privacy' accepted for presentation",
      year: "2025",
      type: "Academic Conference",
      icon: Award
    },
    {
      title: "Cornell, Maryland, Max Planck Pre-doctoral Research School",
      description: "Accepted to CMMRS 2025 with EUR €1300 travel stipend",
      year: "2025",
      type: "Research Fellowship",
      icon: DollarSign
    },
    {
      title: "NSF Travel Grant - ACM CS&Law Symposium",
      description: "Received $750 NSF travel grant to attend ACM Symposium (CS&Law '25)",
      year: "2025",
      type: "Research Grant",
      icon: DollarSign
    },
    {
      title: "Stanford HAI Workshop Invitations",
      description: "Invited to 'World Wide Knowledge AI Assistant' and 'Trusting Digital Content in the Age of AI' workshops",
      year: "2024-2025",
      type: "Research Recognition",
      icon: Users
    },
    {
      title: "University of Pennsylvania Roundtable Representative",
      description: "Invited to represent Professor Steven M. Bellovin at roundtable on law and computer science",
      year: "2024-2025",
      type: "Academic Recognition",
      icon: Users
    },
    {
      title: "Data Science Institute Scholar",
      description: "Selected as 1 of 9 students across Columbia University with $3000 research stipend",
      year: "2024",
      type: "Research Fellowship",
      icon: DollarSign
    },
    {
      title: "TrustCon 2024 Scholar",
      description: "Received scholarship covering hotel, ticket, and expenses for TrustCon 2024",
      year: "2024",
      type: "Conference Scholarship",
      icon: DollarSign
    },
    {
      title: "NSF Travel Grant - ACM CS&Law Symposium",
      description: "Received $1000 NSF travel grant to attend ACM Symposium (CS&Law '24)",
      year: "2024",
      type: "Research Grant",
      icon: DollarSign
    },
    {
      title: "Berkman Klein Center Workshop",
      description: "Accepted to 'Designing Safe(r) Digital Intimacy' Workshop with white paper in progress",
      year: "2024",
      type: "Research Recognition",
      icon: Users
    },
    {
      title: "Stanford TreeHacks Travel Grant",
      description: "Received $500 travel grant to attend Stanford TreeHacks",
      year: "2023",
      type: "Hackathon Recognition",
      icon: DollarSign
    },
    {
      title: "Microsoft Azure Certifications",
      description: "Passed Azure Certified exams for AI Engineer Associate and Azure Fundamentals",
      year: "2023",
      type: "Professional Certification",
      icon: Trophy
    },
    {
      title: "Magna Cum Laude",
      description: "Graduated with honors from Wellesley College (GPA: 3.86/4.00)",
      year: "2022",
      type: "Academic Achievement",
      icon: Award
    },
    {
      title: "Harvard WeCode Tech Fellow",
      description: "Awarded the Harvard WeCode Tech Fellow Certification",
      year: "2022",
      type: "Professional Recognition",
      icon: Trophy
    },
    {
      title: "Rewriting the Code Fellow",
      description: "Selected as a fellow in the Rewriting the Code organization",
      year: "2021-2022",
      type: "Professional Fellowship",
      icon: Users
    },
    {
      title: "Girls Who Code Club President",
      description: "Served as President of Wellesley College's Girls Who Code Club",
      year: "2021-2022",
      type: "Leadership Role",
      icon: Users
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'Research Fellowship':
      case 'Research Grant':
        return 'text-blue-600';
      case 'Academic Achievement':
      case 'Academic Conference':
        return 'text-purple-600';
      case 'Professional Certification':
      case 'Professional Recognition':
        return 'text-green-600';
      case 'Leadership Role':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="honors" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Honors & Awards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, research contributions, and professional achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <award.icon className={`h-6 w-6 mr-3 mt-1 flex-shrink-0 ${getIconColor(award.type)}`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold leading-tight">{award.title}</h3>
                        <span className="text-sm text-muted-foreground ml-2">{award.year}</span>
                      </div>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {award.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}