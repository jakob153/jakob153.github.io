export type Jobs = Array<Job>;

interface Job {
  id: number;
  duration: string;
  description: string;
  url: string;
  activities: Array<string>;
}
