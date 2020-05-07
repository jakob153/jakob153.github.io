export type Education = Array<Edu>;
export type Jobs = Array<Job>;

interface Edu {
  id: number;
  duration: string;
  description: string;
}

interface Job {
  id: number;
  duration: string;
  description: string;
  url: string;
  activities: Array<string>;
}
