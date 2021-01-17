import { AuthState } from "./reducers/types";

export * from "./actions/types";
export * from "./reducers/types";

export type RootState = {
  auth: AuthState;
};

export type PetType = "archer";

export type Pet = {
  type: PetType;
  name: string;
  level: number;
  stats: {
    hp: number;
    hunger: number;
    thirst: number;
    attack: number;
    defense: number;
    magic: number;
  };
};

export type Course = {
  id: string;
  name: string;
  progress?: number;
  color: string;
  backgroundColor: string;
  icon: string;
};

export type Mission = {
  description: string;
};

export type User = {
  username: string;
  name: string;
  displayName: string;
  profilePic: string | null;
  level: number;
  points: number;
  rankPosition: number;
  pet: Pet | null;
  ongoingCourses: Course[];
  missions: Mission[];
};
