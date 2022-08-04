export default {

    oidc: {
        //public identifier of client app
        clientId: '0oa62as84aVBmmHLa5d7',
        // issuer of tokens, url for authorizing with Okta Auth Server
        issuer: 'https://dev-33653187.okta.com/oauth2/default',
        // where to send user once logged in
        redirectUri: 'http://localhost:4200/login/callback',
        //provides access to information about user
        scopes: ['openid', 'profile', 'email']
    }


}
