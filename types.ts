export interface Education {
  id: number;
  duration: string;
  description: string;
}

export interface Job {
  id: number;
  duration: string;
  description: string;
  url: string;
  activities: Array<string>;
}
