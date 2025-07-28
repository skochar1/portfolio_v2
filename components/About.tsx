import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const skills = [
    'Data Privacy', 'Synthetic Data', 'Responsible AI/ML', 'Python', 'C#', 
    'Azure Synapse', 'Statistical Analysis', 'DevOps', 'Machine Learning',
    'Research Methods', 'Academic Writing'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research areas include data privacy, synthetic data, and responsible AI/ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  I am a Predoctoral Research Fellow at the University of Chicago, working under Professor Nick Feamster 
                  on privacy and LLM bias research. I recently completed my Master's in Computer Science at Columbia University, 
                  where I developed the 'Predictive Privacy' framework for quantifying informational privacy harm.
                </p>
                <p className="text-muted-foreground mb-6">
                  My research bridges computer science and law, focusing on creating standardized metrics for privacy harm 
                  that can support regulatory and legal assessments. I combine technical approaches like differential privacy 
                  and machine learning with survey methodology and legal analysis.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Education</h4>
                    <p className="text-muted-foreground">MS, Computer Science '25 @ Columbia University</p>
                    <p className="text-muted-foreground">BA, Computer Science '22 @ Wellesley College (Magna Cum Laude)</p>
                  </div>
                  <div>
                    <h4 className="mb-2">Current Role</h4>
                    <p className="text-muted-foreground">Predoctoral Research Fellow @ University of Chicago</p>
                  </div>
                  <div>
                    <h4 className="mb-2">Contact</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:shreya.kochar@columbia.edu" className="hover:text-foreground transition-colors">
                        shreya.kochar@columbia.edu
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Skills &amp; Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}