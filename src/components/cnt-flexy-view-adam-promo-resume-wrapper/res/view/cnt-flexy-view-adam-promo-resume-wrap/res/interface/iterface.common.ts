export interface PromoResumeInterface {
  skillsBlock: {
    technology: string;
    percent: string;
  }[];
  educationBlock: {
    institution: string;
    date: string;
    speciality: string;
  }[];
  employmentBlock: {
    job: string;
    speciality: string;
    date: string;
  },
  resumeBlockDescription: string;
}
