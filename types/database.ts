export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id'>;
        Update: Partial<Omit<Profile, 'id'>>;
      };
    };
  };
}

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
}
