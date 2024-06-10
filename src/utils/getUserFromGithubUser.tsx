import { User, GithubUser } from 'types';

function getUserFromGithubUser(githubUser: GithubUser): User {
    return {
        ...githubUser,
        avatarUrl: githubUser.avatar_url,
        twitterUsername: githubUser.twitter_username,
        publicRepos: githubUser.public_repos,
        createdAt: githubUser.created_at,
    };
}

export default getUserFromGithubUser;