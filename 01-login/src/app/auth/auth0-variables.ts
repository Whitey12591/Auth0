interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'lufQJ1HgkKwEJoaxeyX0DxBYFq-aJJnx',
  domain: 'dev-j7u-vxut.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
