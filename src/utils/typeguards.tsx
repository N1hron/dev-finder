import { GithubError, GithubUser } from 'types';

function isGithubUser(parameter: unknown): parameter is GithubUser {
    if (parameter && typeof parameter === 'object') {
        return 'id' in parameter;
    } else {
        return false;
    }
}

function isGithubError(parameter: unknown): parameter is GithubError {
    if (parameter && typeof parameter === 'object') {
        return 'message' in parameter && 'status' in parameter;
    } else {
        return false;
    }
}

export { isGithubError, isGithubUser };