export type Maybe<T> = T | null;

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  mySpaces: Space[];

  me?: Maybe<User>;
}

export interface Space {
  id: string;

  name: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  pages: Page[];
}

export interface Page {
  id: string;

  root?: Maybe<Block>;

  content?: Maybe<Block[]>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface Block {
  id: string;

  alive: boolean;

  isPageRoot: boolean;

  title?: Maybe<string>;

  content: string;

  createdBy: User;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface User {
  id: string;

  email: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  fullName?: Maybe<string>;

  profilePhoto?: Maybe<string>;

  createdAt: DateTime;

  onboardingCompleted: boolean;

  spaces: Space[];
}

export interface Mutation {
  createSpace: Space;

  login: boolean;

  logout: boolean;

  register: boolean;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateSpaceMutationArgs {
  name: string;
}
export interface LoginMutationArgs {
  email: string;

  password: string;
}
export interface RegisterMutationArgs {
  email: string;

  password: string;
}
