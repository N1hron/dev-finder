import { RemoveUnderscore } from './utility';

interface GithubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string | null;
    blog: string | null;
    location: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

type User = {
    [K in keyof GithubUser as RemoveUnderscore<K>]: GithubUser[K];
};

interface GithubError {
    message: string;
    status: string;
}

export type { GithubUser, GithubError, User };