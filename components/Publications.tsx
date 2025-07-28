import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ExternalLink, BookOpen } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: "Predictive Privacy: Masters Dissertation",
      authors: ["Shreya Kochar"],
      journal: "Columbia Academic Commons",
      year: "2025",
      impact: "Master's Thesis",
      abstract: "Developed a novel 'Predictive Privacy' framework to quantify privacy harm and provide a concrete basis for regulators and courts to assess actual injury due to the disclosure of private information. Combined synthetic data generation, clustering, human harm scoring, and machine learning.",
      link: "https://academiccommons.columbia.edu/doi/10.7916/82f3-e448",
      tags: ["Privacy", "Machine Learning", "Legal Tech", "Differential Privacy"]
    },
    {
      title: "Beyond Creepiness: Predictive Privacy",
      authors: ["Shreya Kochar", "Steven M. Bellovin"],
      journal: "Privacy Law Scholars Conference (PLSC) 2025",
      year: "2025",
      impact: "Law Review Article - Accepted for Presentation",
      abstract: "Analyzed how traditional privacy paradigms fail to protect against modern ML-based inferences. Proposed the 'Predictive Privacy' model to quantify privacy harm from inferred personal attributes, addressing novel types of injury not captured by current laws.",
      link: "coming-soon",
      tags: ["Privacy Law", "Machine Learning", "Regulatory Policy"]
    },
    {
      title: "Voice-Cloning AI: Understanding Legal Implications Using the Voiceprint Definition",
      authors: ["Shreya Kochar"],
      journal: "Legal Research Paper",
      year: "2024",
      impact: "Legal Framework Research",
      abstract: "Proposed a pioneering legal framework for assessing the implications of AI-generated voice cloning in cases of fraud and rights to publicity, outlining a procedure for evaluating damages.",
      link: "https://docs.google.com/document/d/1pmCtB_5hHfZ7vzfVMdKKdv5QrM5n0-M77DtWFvRjvtI/edit#heading=h.400kqnlcu6r1",
      tags: ["AI Law", "Voice Cloning", "Legal Framework"]
    },
    {
      title: "Comparing and evaluating ChatGPT's performance giving financial advice with Reddit questions and answers",
      authors: ["S. Samant", "A. Dhar", "S. Kochar", "A. Sreerama", "A. Wang", "A. Sreerama"],
      journal: "Journal of Emerging Investigators",
      year: "2024",
      impact: "Peer-reviewed Publication",
      abstract: "Paper submitted by students mentored by our program. Accepted for publication by the Journal of Emerging Investigators evaluating ChatGPT's financial advice capabilities.",
      link: "https://emerginginvestigators.org/articles/23-296",
      tags: ["ChatGPT", "Financial Advice", "AI Evaluation"]
    },
    {
      title: "Probabilistic Analysis of Confocally Imaged Synaptic Calcium Activity (PACISCA)",
      authors: ["G. Tang", "S. Kochar", "S. K. Jetti", "D. L. Castro Perez", "S. Chakravarty", "Y. Akbergenova", "A. Weiss", "C. Sorensen", "E. N. Brown", "T. J. Littleton"],
      journal: "IEEE MIT Undergraduate Research Technology Conference (URTC)",
      year: "2020",
      impact: "IEEE Conference Publication",
      abstract: "Co-authored a paper detailing the machine learning techniques used to automate the detection of synaptic regions of interest in drosophila brain images. Accepted by MIT's IEEE URTC conference for presentation & publication.",
      link: "https://ieeexplore.ieee.org/document/9668612",
      tags: ["Machine Learning", "Neuroscience", "Image Analysis"]
    },
    {
      title: "The Pile: US State Analysis - Designing Probes to Analyze GPT-J Predictions",
      authors: ["Shreya Kochar"],
      journal: "Research Project",
      year: "2023",
      impact: "Technical Research",
      abstract: "Analyzed sentiment via the GPT-J model to view trends and emotions on specific topics within the US. Constructed a pipeline to generate sentences with the data associated with each US state in the Pile database.",
      link: "https://github.com/skochar1/the-pile-state-analysis/blob/main/the-pile-analysis.pdf",
      tags: ["NLP", "GPT-J", "Sentiment Analysis"]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions published in top-tier journals and conferences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {publications.map((publication, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start mb-4">
                          <BookOpen className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="mb-2 leading-tight">{publication.title}</h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              {publication.authors.join(', ')}
                            </p>
                            <p className="text-sm text-muted-foreground mb-1">
                              {publication.journal} ({publication.year})
                            </p>
                            <p className="text-xs text-muted-foreground mb-3">
                              {publication.impact}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">
                          {publication.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {publication.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {publication.link === "coming-soon" ? (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            disabled
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Paper Coming Soon
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => window.open(publication.link, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Paper
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}