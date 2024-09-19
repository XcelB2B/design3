"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/Textarea";
import { BottomGradient, LabelInputContainer } from "@/app/_components/Form";

const jobs = [
  {
    id: 1,
    title: "Senior Web Developer",
    description:
      "We're looking for an experienced web developer to join our team and lead complex projects.",
    requirements: [
      "5+ years of experience",
      "Proficient in React and Node.js",
      "Strong problem-solving skills",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description:
      "Join our creative team to design intuitive and beautiful user interfaces for our clients.",
    requirements: [
      "3+ years of experience",
      "Proficiency in Figma or Sketch",
      "Strong portfolio",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description:
      "We need a versatile developer who can work on both front-end and back-end technologies.",
    requirements: [
      "4+ years of experience",
      "Proficient in React, Node.js, and databases",
      "Experience with cloud platforms",
    ],
  },
];

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (e) => {
    e.preventDefault();
    console.log("Application submitted for job:", selectedJob?.title);
    alert("Application submitted successfully!");
    setSelectedJob(null);
  };

  return (
    <section className="py-8 md:py-16">
      <div className="min-h-screen bg-gradient-to-b from-black-800 to-neutral-950 py-8 md:py-16 text-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Careers at Desire Div
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center mb-12"
          >
            Join our team of passionate developers and designers
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass border-gray-700 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-purple-400">
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="mb-4 text-gray-300">{job.description}</p>
                    <h4 className="font-semibold mb-2 text-purple-300">
                      Requirements:
                    </h4>
                    <ul className="list-disc list-inside mb-6 text-gray-300 pl-5 flex-grow">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="mb-1">
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => setSelectedJob(job)}
                          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        >
                          Apply Now &rarr;
                          <BottomGradient />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass text-white p-6 sm:p-10 max-w-[90vw] w-full sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-purple-400 mb-4">
                            Apply for {selectedJob?.title}
                          </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleApply} className="space-y-4">
                          <LabelInputContainer>
                            <Label htmlFor="name" className="text-gray-300">
                              Full Name
                            </Label>
                            <Input
                              id="name"
                              required
                              placeholder="John Doe"
                              className="bg-gray-800 text-white"
                            />
                          </LabelInputContainer>

                          <LabelInputContainer>
                            <Label htmlFor="email" className="text-gray-300">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              required
                              className="bg-gray-800 text-white"
                            />
                          </LabelInputContainer>
                          <LabelInputContainer>
                            <Label htmlFor="phone" className="text-gray-300">
                              Phone
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              required
                              className="bg-gray-800 text-white"
                            />
                          </LabelInputContainer>
                          <LabelInputContainer>
                            <Label htmlFor="resume" className="text-gray-300">
                              Resume Link
                            </Label>
                            <Input
                              id="resume"
                              placeholder="Link to your resume"
                              type="url"
                              required
                              className="bg-gray-800 text-white"
                            />
                          </LabelInputContainer>
                          <LabelInputContainer>
                            <Label
                              htmlFor="cover-letter"
                              className="text-gray-300"
                            >
                              Cover Letter
                            </Label>
                            <TextArea
                              id="cover-letter"
                              placeholder="Write a cover letter"
                              required
                              className="bg-gray-800 text-white min-h-[100px]"
                            />
                          </LabelInputContainer>
                          <Button
                            type="submit"
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                          >
                            Submit Application
                            <BottomGradient />
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
