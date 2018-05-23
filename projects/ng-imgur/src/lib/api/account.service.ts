/**
 * Imgur API
 * ![image](https://i.imgur.com/n744BL9.png)  ## API Status Status for the API can be found at [status.imgur.com](http://status.imgur.com)!  ## Getting Started Imgur's API exposes the entire Imgur infrastructure via a standardized programmatic interface. Using Imgur's API, you can do just about anything you can do on imgur.com, while using your programming language of choice. The Imgur API is a RESTful API based on HTTP requests and JSON responses.  This version of the API, version 3, uses OAuth 2.0. This means that all requests will need to be encrypted and sent via HTTPS. It also means that you need to register your application, even if you aren't allowing users to login.  The easiest way to start using the Imgur API is by clicking the **Run in Postman** button above. [Postman](https://www.getpostman.com/) is a free tool which helps developers run and debug API requests, and is the source of truth for this documentation. Every endpoint you see documented here is readily available by running our Postman collection.   ## Example code These examples serve as a starting point to help familiarize you with the basics of the Imgur API. * [Official Python library](https://github.com/Imgur/imgurpython) * [Android Upload Example](https://github.com/AKiniyalocts/imgur-android) * [Older Example Android app](https://github.com/talklittle/ImgurAPIv3ExampleAndroid) * [Example HTML5/JavaScript app](https://github.com/eirikb/gifie) - [Javascript OAuth](https://gist.github.com/eirikb/7404666)—[Live Demo](http://eirikb.github.io/gifie/) (uses your webcam) * [Example Objective C library](https://github.com/geoffmacd/ImgurSession)  ## Need help? The Imgur engineers are always around answering questions. The quickest way to get help is by posting your question on StackOverflow with the [Imgur tag](https://stackoverflow.com/questions/tagged/imgur).  ## Register an Application (IMPORTANT) Each client must register their application and receive the `client_id` and `client_secret`.  For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests. This also works if you'd like to upload images anonymously (without the image being tied to an account), or if you'd like to create an anonymous album. This lets us know which application is accessing the API.      Authorization: Client-ID <YOUR_CLIENT_ID>   ### Registration Quickstart If you are just getting started, an easy way to explore the endpoints is by creating an application using following instructions below.  1. Download [Postman](https://www.getpostman.com/) and click the **Run in Postman** button at the top of this page. This will load our collection of endpoints into Postman for easy debugging. 2. [Register your application](https://api.imgur.com/oauth2/addclient) using the postman callback URL: `https://www.getpostman.com/oauth2/callback` ![Image](https://i.imgur.com/Ied42En.png) 3. In Postman, under the main request builder panel, click the Authorization tab. Click the **Get New Access Token** button. Set **Auth URL** to `https://api.imgur.com/oauth2/authorize` and **Access Token URL** to `https://api.imgur.com/oauth2/token`. Add the **Client ID** and **Client Secret** you received from registering your application above, then click **Request Token** ![Image](https://i.imgur.com/iKHSGFD.png) 4. After logging in and granting access to your application, you should receive a refresh token. ![Image](https://i.imgur.com/0dN8cyJ.png) Copy this refresh token, then click the gear icon in the top right of Postman. Click **Manage Environments** then **Add**, and add the `refreshToken`, `clientId`, and `clientSecret` fields as shown below ![Image](https://i.imgur.com/DaFV5ux.png) 5. Inside the **Account** folder, run the **Generate Access Token** endpoint. The response you receive will give you an access token which will be valid for about a month. This token is automatically saved to your Postman environment via the JavaScript test for that endpoint as seen below. Whenever your token expires, just re-run this endpoint and a new token will be saved to your environment. ![Image](https://i.imgur.com/5Ed4RhP.png) 6. Run any endpoint within the collection. You have authorized your app and logged in with your username, so you are now making authenticated requests against the Imgur API. Happy hacking!    ## Commercial Usage Your application is commercial if you're making any money with it (which includes in-app advertising), if you plan on making any money with it, or if it belongs to a commercial organization.  To use Imgur's API commercially, you must first [register your application](https://api.imgur.com/oauth2/addclient). Once that's done, you must [register with Mashape](https://market.mashape.com/imgur/imgur-9). Mashape allows you to choose a pricing plan that fits your needs. From then on, the API endpoint is `https://imgur-apiv3.p.mashape.com/` which must be used in place of `https://api.imgur.com/`. Additionally, you must set a `X-Mashape-Key` request header with the key obtained from Mashape.  ## Free Usage The Imgur API is free for non-commercial usage. Your application is probably free if you don't plan on making any money with it, or if it's open source.  ## Endpoints The API is accessed by making HTTP requests to a specific version endpoint URL, in which GET or POST variables contain information about what you wish to access. Every endpoint is accessed via an SSL-enabled HTTPS (port 443), this is because everything is using OAuth 2.0.  Everything (methods, parameters, etc.) is fixed to a version number, and every call must contain one. Different Versions are available at different endpoint URLs. The latest version is Version 3.  The stable HTTP endpoint for the latest version is: `https://api.imgur.com/3/`  ## Responses Each response is wrapped in a data tag. This means if you have a response, it will always be within the data field. We also include a status code and success flag in the response. For more information and examples go to the [data models](https://api.imgur.com/models) page.  Responses are either JSON (the default), JSONP, or XML. Response formats are specified by supplying an extension to the API call. For example, if you want to access the gallery information with JSON:      https://api.imgur.com/3/gallery.json      JSONP responses are made by adding the callback parameter via either GET or POST to the request. For example:      https://api.imgur.com/3/gallery.json?callback=function_name      and to specify an XML response, the URL is:      https://api.imgur.com/3/gallery.xml      ## Paging Results For the most part, if the API action is plural, you can page it via a query string parameter.  NOTE: /gallery endpoints do not support the perPage query string, and /album/{id}/images is not paged.  | Query String Parameter | Required | Description                                                   | |------------------------|----------|---------------------------------------------------------------| | page                   | optional | Page number of the result set (default: 0)                    | | perPage                | optional | Limit the number of results per page. (default: 50, max: 100) |  Example:      https://api.imgur.com/3/account/imgur/images/0.json?perPage=42&page=6      ## Authentication The API requires each client to use OAuth 2 authentication. This means you'll have to [register your application](https://api.imgur.com/oauth2/addclient), and generate an access_code if you'd like to log in as a user. For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests. This also works if you'd like to upload images anonymously (without the image being tied to an account), or if you'd like to create an anonymous album. This lets us know which application is accessing the API.      Authorization: Client-ID <YOUR_CLIENT_ID>  For accessing a user's account, please visit the OAuth2 section of the docs. OAuth Endpoints To access OAuth, the following endpoints must be used:      https://api.imgur.com/oauth2/addclient     https://api.imgur.com/oauth2/authorize     https://api.imgur.com/oauth2/token      You can also verify your OAuth 2.0 tokens by setting your header and visiting the page       https://api.imgur.com/oauth2/secret      ## Rate Limits The Imgur API uses a credit allocation system to ensure fair distribution of capacity. Each application can allow *approximately 1,250 uploads per day or approximately 12,500 requests per day*. If the daily limit is hit five times in a month, then the app will be blocked for the rest of the month. The remaining credit limit will be shown with each requests response in the `X-RateLimit-ClientRemaining` HTTP header.  We also limit each user (via their IP Address) for each application, this is to ensure that no single user is able to spam an application. This limit will simply stop the user from requesting more data for an hour. We recommend that each application takes precautions against spamming by implementing rate limiting on their own applications. Each response will also include the remaining credits for each user in the `X-RateLimit-UserLimit` HTTP header.  Each request contains rate limit information in the HTTP response headers.  | HTTP Header                 | Description                                                       | |-----------------------------|-------------------------------------------------------------------| | X-RateLimit-UserLimit       | Total credits that can be allocated.                              | | X-RateLimit-UserRemaining   | Total credits available.                                          | | X-RateLimit-UserReset       | Timestamp (unix epoch) for when the credits will be reset.        | | X-RateLimit-ClientLimit     | Total credits that can be allocated for the application in a day. | | X-RateLimit-ClientRemaining | Total credits remaining for the application in a day.             |  Unless otherwise noted, an API call deducts 1 credit from your allocation. However, uploads have a significantly higher computational cost on our back-end, and deduct 10 credits per call. All OAuth calls, such as refreshing tokens or authorizing users, do not deduct any credits. You can also check the current rate limit status on your application by sending a GET request to       https://api.imgur.com/3/credits  Your use of the Imgur API is also limited by the number of POST requests your IP can make across all endpoints. This limit is *1,250 POST requests per hour*. [Commercial Usage](http://api.imgur.com/#commercial) is not impacted by this limit. Each POST request will contain the following headers.  | HTTP Header                 | Description                                        | |-----------------------------|----------------------------------------------------| | X-Post-Rate-Limit-Limit     | Total POST credits that are allocated.             | | X-Post-Rate-Limit-Remaining | Total POST credits available.                      | | X-Post-Rate-Limit-Reset     | Time in seconds until your POST ratelimit is reset |  # Authorization and OAuth  ## OAuth 2.0 Overview The Imgur API uses OAuth 2.0 for authentication. OAuth 2.0 has four steps: registration, authorization, making the request, and getting new access_tokens after the initial one expired.  * [Registration](https://api.imgur.com/oauth2/addclient) gives you your `client_id` and `client_secret`, which is then used to authorize the user to your app. * Authorization is the process of the user saying \"I would like YourSuperAwesomeImgurApp to access my data\". YourSuperAwesomeImgurApp cannot access the user's account without them agreeing to it. After they agree, you will get refresh and access tokens.     * `access_token`: is your secret key used to access the user's data. It can be thought of the user's password and username combined into one, and is used to access the user's account. It expires after 1 month.     * `refresh_token`: is used to request new access_tokens. Since access_tokens expire after 1 month, we need a way to request new ones without going through the entire authorization step again. It does not expire.     * `authorization_code`: is used for obtaining the the access and refresh tokens. It's purpose is to be immediately exchanged for an access_token and refresh_token.     * Finally, after obtaining your access_token, you make your API requests by sending the Authorization header as such:      ```Authorization: Bearer YOUR_ACCESS_TOKEN```      * Registration  Each client must register their application and receive the client_id and client_secret.  For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests. This also works if you'd like to upload images anonymously (without the image being tied to an account), or if you'd like to create an anonymous album. This lets us know which application is accessing the API.      Authorization: Client-ID YOUR_CLIENT_ID  ## Authorization  > _NOTE:_ If your app is not only requesting public read-only information, then you may skip this step.  To access a user's account, the user must first authorize your application so that you can get an access token. Requesting an access token is fairly straightforward: point a browser (pop-up, or full page redirect if needed) to a URL and include a set of query string parameters.      https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE      The user will now be able to enter their password and accept that they'd like to use your application. Once this happens, they will be redirected to your redirect URL (that you entered during registration) with the access token. You can now send the access token in the headers to access their account information.  #### Forming the authorization URL  Authorization Endpoint: `https://api.imgur.com/oauth2/authorize`  | Parameter     | Values                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | |---------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | response_type | `token`, `code`, or `pin`                    | _Only `token` should be used, as the other methods have been deprecated._ Determines if Imgur returns an access_token, authorization_code (_deprecated_), or a PIN code(_deprecated_). When using `token`, the `access_token` and `refresh_token` will be given to you in the form of query string parameters attached to your redirect URL, which the user may be able to read.                                                                                                                                          | | client_id     | the Client ID you recieved from registration | Indicates the client that is making the request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | | state         | any string                                   | This optional parameter indicates any state which may be useful to your application upon receipt of the response. Imgur round-trips this parameter, so your application receives the same value it sent. Possible uses include redirecting the user to the correct resource in your site, nonces, and cross-site-request-forgery mitigations.                                                                                                                                                                             |  #### The `response_type` Parameter  `token`: This authorization flow will directly return the `access_token` and `refresh_token` via the redirect URL you specified during registration, in the form of hash query string parameters. Example: `http://example.com#access_token=ACCESS_TOKEN&token_type=Bearer&expires_in=3600`  The `code` and `pin` response types have been deprecated and will soon no longer be supported.  ### Handling the Authorization Response  The response will be sent to the redirect URL that was specified during registration. The contents and format of the response is determined by the value of the response_type parameter. You're able to change your applications redirect URL at any time by accessing the ['apps' section of your account settings](http://imgur.com/account/settings/apps).  #### JavaScript responses for the response_type: `token`  Imgur returns an access token to your application if the user grants your application the permissions it requested. The access token is returned to your application in the fragment as part of the `access_token` parameter. Since a fragment (the part of the URL after the `#`) is not sent to the server, client side javascript must parse the fragment and extract the value of the `access_token` parameter. Other parameters included in the response include `expires_in` and `token_type`. These parameters describe the lifetime of the token in seconds, and the kind of token that is being returned. If the `state` parameter was included in the request, then it is also included in the response. An example User Agent flow response is shown below:      https://example.com/oauthcallback#access_token=ACCESS_TOKEN&token_type=Bearer&expires_in=3600      Below is a JavaScript snippet that parses the response and returns the parameters to the server.  ```js // First, parse the query string var params = {}, queryString = location.hash.substring(1),     regex = /([^&=]+)=([^&]*)/g, m; while (m = regex.exec(queryString)) {   params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]); }  // And send the token over to the server var req = new XMLHttpRequest(); // consider using POST so query isn't logged req.open('GET', 'https://' + window.location.host + '/catchtoken?' + queryString, true);  req.onreadystatechange = function (e) {   if (req.readyState == 4) {      if(req.status == 200){        window.location = params['state']    }   else if(req.status == 400) {         alert('There was an error processing the token.')     }     else {       alert('something else other than 200 was returned')     }   } }; req.send(null); ```  This code sends the parameters received on the fragment to the server using XMLHttpRequest and writes the access token to local storage in the browser. The latter is an optional step, and depends on whether or not the application requires other JavaScript code to make calls to the Imgur API. Also note that this code sends the parameters to the token endpoint, and they are sent over an HTTPS channel.  #### Error Response  The Imgur API returns an error if the user did not grant your application the permissions it requested. The error is returned to the application in the query string parameter error if the web server flow is used. If the user agent flow was used, then the error is returned in the fragment. If the state parameter was included in the request, it is also present in the error response.  An example error response for the web server flow is shown below:      https://example.com/oauthcallback?error=access_denied      ### Making your requests Congrats! You must have the user's access_token at this point and you're ready to start making API requests to their account. All that's required for this is to set the header in your requests:      Authorization: Bearer YOUR_ACCESS_TOKEN      ### Refresh Tokens  If a user has authorized their account but you no longer have a valid access_token for them, then a new one can be generated by using the refresh_token.  When your application receives a refresh token, it is important to store that refresh token for future use. If your application loses the refresh token, you will have to prompt the user for their login information again.  To obtain a new access token, your application performs a POST to `https://api.imgur.com/oauth2/token`. The request must include the following parameters to use a refresh token:  | Field         | Description                                                                               | |---------------|-------------------------------------------------------------------------------------------| | refresh_token | The refresh token returned from the authorization code exchange                           | | client_id     | The client_id obtained during application registration                                    | | client_secret | The client secret obtained during application registration                                | | grant_type    | As defined in the OAuth2 specification, this field must contain a value of: `refresh_token` |  As long as the user has not revoked the access granted to your application, the response includes a new access token. A response from such a request is shown below:  ```json {     \"access_token\":\"5c3118ebb73fbb275945ab340be60b610a3216d6\",     \"refresh_token\":\"d36b474c95bb9ee54b992c7c34fffc2cc343d0a7\",     \"expires_in\":3600,     \"token_type\":\"Bearer\",     \"account_username\":\"saponifi3d\" } ```  ### More OAuth 2 help and documentation For more information about how to use OAuth 2, please visit the great documentation from Google. At the time of writing, our OAuth 2 server is completely compatible with theirs. The documentation may be found here: https://developers.google.com/accounts/docs/OAuth2    # Performance Tips Below are a few ways you can speed up your application's use of the Imgur API.   If you have any additional feature requests, please reach out on Twitter [@imgurAPI](https://twitter.com/imgurAPI)!  ### ETag Support The Imgur API supports [ETags](http://en.wikipedia.org/wiki/HTTP_ETag), which allows the API to signal to developers whether or not data from previous queries have changed.   Usage: 1. When fetching from the Imgur API, the response header will include an ETag with a digest of the response data. Save this ETag value for future requests to the same route.       An example ETag response header:           `ETag: \"a695f4e9672bf7fc7a779ac12ead684d72292506\"` 1. On the next request to the same route, include a If-None-Match header in the request with the ETag from the first step. (Note: the quotations around the hash must be included)       An example ETag request header:           `If-None-Match: \"a695f4e9672bf7fc7a779ac12ead684d72292506\"` 1. If the data hasn't changed, the response status code will be *304* (Not Modified) and no data will be returned. 1. If the response data has changed since the last request, the data is returned normally with a new ETag in the response header. Save this value for future requests.      *Note:* Although ETags help speed up your application, requests with the *If-None-Match* header will still count towards rate limits.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import {
  SampleResponse,
  UnfollowTagSuccess,
  FollowTagSuccess,
  AccountDeleteMerequest
} from '..';

@Injectable()
export class AccountService {
  protected basePath = 'https://api.imgur.com';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional()
    @Inject(BASE_PATH)
    basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Album Deletion
   * Delete an Album with a given id.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param albumHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAlbumByUsernameAndAlbumHashDelete(
    username: string,
    albumHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAlbumByUsernameAndAlbumHashDelete(
    username: string,
    albumHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAlbumByUsernameAndAlbumHashDelete(
    username: string,
    albumHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAlbumByUsernameAndAlbumHashDelete(
    username: string,
    albumHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAlbumByUsernameAndAlbumHashDelete.'
      );
    }
    if (albumHash === null || albumHash === undefined) {
      throw new Error(
        'Required parameter albumHash was null or undefined when calling 3AccountAlbumByUsernameAndAlbumHashDelete.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/album/${encodeURIComponent(String(albumHash))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album
   * Get additional information about an album, this endpoint works the same as the [Album Endpoint](). You can also use any of the additional routes that are used on an album in the album endpoint.  #### Response Model: [Album](https://api.imgur.com/models/album)
   * @param username
   * @param albumHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAlbumByUsernameAndAlbumHashGet(
    username: string,
    albumHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAlbumByUsernameAndAlbumHashGet(
    username: string,
    albumHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAlbumByUsernameAndAlbumHashGet(
    username: string,
    albumHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAlbumByUsernameAndAlbumHashGet(
    username: string,
    albumHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAlbumByUsernameAndAlbumHashGet.'
      );
    }
    if (albumHash === null || albumHash === undefined) {
      throw new Error(
        'Required parameter albumHash was null or undefined when calling 3AccountAlbumByUsernameAndAlbumHashGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/album/${encodeURIComponent(String(albumHash))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Albums (Un-Authed / Authed)
   * Get all the albums associated with the account. Must be logged in as the user to see secret and hidden albums.  #### Response Model: [Album](https://api.imgur.com/models/album)  #### Parameters | Key  | Required | Description                                                                                     | |------|----------|-------------------------------------------------------------------------------------------------| | page | optional | integer - allows you to set the page number so you don&#39;t have to retrieve all the data at once. |
   * @param username
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAlbumsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAlbumsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAlbumsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAlbumsByUsernameAndPageGet(
    username: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAlbumsByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountAlbumsByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;
    console.log(headers);
    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    console.log(headers);
    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/albums/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album Count (Un-Authed / Authed)
   * Return the total number of albums associated with the account.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAlbumsCountByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAlbumsCountByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAlbumsCountByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAlbumsCountByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAlbumsCountByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/albums/count`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album IDs (Un-Authed / Authed)
   * Return an array of all of the album IDs (hashes).  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAlbumsIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAlbumsIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAlbumsIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAlbumsIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAlbumsIdsByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountAlbumsIdsByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/albums/ids/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Available Avatars (Un-authed / Authed)
   * If unauthentiated, get list of default trophies a user can select from. The username need not exist to get the listing.  If authenticated, get the list of available avatars for the given user.
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAvailableAvatarsByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAvailableAvatarsByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAvailableAvatarsByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAvailableAvatarsByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAvailableAvatarsByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/available_avatars`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Avatar (Authed)
   * Get the current account&#39;s avatar URL and avatar name.
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountAvatarByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountAvatarByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountAvatarByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountAvatarByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountAvatarByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/avatar`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Base
   * Request standard user information. If you need the username for the account that is logged in, it is returned in the request for an [access token](/account/current_account). Note: This endpoint also supports the ability to lookup account base info by account ID. To do so, pass the query parameter &#x60;account_id&#x60;.  #### Response Model: [Account](https://api.imgur.com/models/account)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SampleResponse>;
  public accountByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SampleResponse>>;
  public accountByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SampleResponse>>;
  public accountByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<SampleResponse>(
      `${this.basePath}/3/account/${encodeURIComponent(String(username))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Comment Deletion
   * Delete a comment. You are required to be logged in as the user whom created the comment.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param commentId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountCommentByUsernameAndCommentIdDelete(
    username: string,
    commentId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountCommentByUsernameAndCommentIdDelete(
    username: string,
    commentId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountCommentByUsernameAndCommentIdDelete(
    username: string,
    commentId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountCommentByUsernameAndCommentIdDelete(
    username: string,
    commentId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountCommentByUsernameAndCommentIdDelete.'
      );
    }
    if (commentId === null || commentId === undefined) {
      throw new Error(
        'Required parameter commentId was null or undefined when calling 3AccountCommentByUsernameAndCommentIdDelete.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/comment/${encodeURIComponent(String(commentId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Comment
   * Return information about a specific comment. This endpoint works the same as the [Comment Endpoint](https://api.imgur.com/endpoint/comment/). You can use any of the additional actions that the comment endpoint allows on this end point.
   * @param username
   * @param commentId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountCommentByUsernameAndCommentIdGet(
    username: string,
    commentId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountCommentByUsernameAndCommentIdGet(
    username: string,
    commentId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountCommentByUsernameAndCommentIdGet(
    username: string,
    commentId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountCommentByUsernameAndCommentIdGet(
    username: string,
    commentId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountCommentByUsernameAndCommentIdGet.'
      );
    }
    if (commentId === null || commentId === undefined) {
      throw new Error(
        'Required parameter commentId was null or undefined when calling 3AccountCommentByUsernameAndCommentIdGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/comment/${encodeURIComponent(String(commentId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Comment Count
   * Return a count of all of the comments associated with the account.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountCommentsCountByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountCommentsCountByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountCommentsCountByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountCommentsCountByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountCommentsCountByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/comments/count`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Comment IDs
   * Return an array of all of the comment IDs.  #### Response Model: [Basic](https://api.imgur.com/models/basic)  #### Parameters  | Key  | Required | Value                                                         | |------|----------|---------------------------------------------------------------| | commentSort | optional | &#x60;best&#x60;, &#x60;worst&#x60;, &#x60;oldest&#x60;, or &#x60;newest&#x60;. Defaults to &#x60;newest&#x60;. | | page | optional | Page number (50 items per page). Defaults to &#x60;0&#x60;.               |
   * @param username
   * @param sort
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountCommentsIdsPageByUsernameAndSortGet(
    username: string,
    sort: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountCommentsIdsPageByUsernameAndSortGet(
    username: string,
    sort: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountCommentsIdsPageByUsernameAndSortGet(
    username: string,
    sort: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountCommentsIdsPageByUsernameAndSortGet(
    username: string,
    sort: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountCommentsIdsPageByUsernameAndSortGet.'
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        'Required parameter sort was null or undefined when calling 3AccountCommentsIdsPageByUsernameAndSortGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountCommentsIdsPageByUsernameAndSortGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/comments/ids/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(page)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Comments
   * Return the comments the user has created.  #### Response Model: [Comment](https://api.imgur.com/models/comment)  #### Parameters  | Key  | Required | Value                                                         | |------|----------|---------------------------------------------------------------| | commentSort | optional | &#x60;best&#x60;, &#x60;worst&#x60;, &#x60;oldest&#x60;, or &#x60;newest&#x60;. Defaults to &#x60;newest&#x60;. | | page | optional | Page number (50 items per page). Defaults to &#x60;0&#x60;.               |
   * @param username
   * @param commentSort
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountCommentsPageByUsernameAndCommentSortGet(
    username: string,
    commentSort: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountCommentsPageByUsernameAndCommentSortGet(
    username: string,
    commentSort: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountCommentsPageByUsernameAndCommentSortGet(
    username: string,
    commentSort: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountCommentsPageByUsernameAndCommentSortGet(
    username: string,
    commentSort: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountCommentsPageByUsernameAndCommentSortGet.'
      );
    }
    if (commentSort === null || commentSort === undefined) {
      throw new Error(
        'Required parameter commentSort was null or undefined when calling 3AccountCommentsPageByUsernameAndCommentSortGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountCommentsPageByUsernameAndCommentSortGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/comments/${encodeURIComponent(
        String(commentSort)
      )}/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Favorites
   * Returns the users favorited images, only accessible if you&#39;re logged in as the user.  #### Response Model: [Gallery Image](https://api.imgur.com/models/gallery_image) OR [Gallery Album](https://api.imgur.com/models/gallery_album)  *Note:* vote data (&#39;ups&#39;, &#39;downs&#39;, and &#39;score&#39;) may be null if the favorited item hasn&#39;t been submitted to gallery   #### Parameters  | Key  | Required | Description                                                                                     | |------|----------|-------------------------------------------------------------------------------------------------| | page | optional | integer - allows you to set the page number so you don&#39;t have to retrieve all the data at once. | | sort | optional | &#39;oldest&#39;, or &#39;newest&#39;. Defaults to &#39;newest&#39;.                                                    |
   * @param username
   * @param page
   * @param favoritesSort
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }
    if (favoritesSort === null || favoritesSort === undefined) {
      throw new Error(
        'Required parameter favoritesSort was null or undefined when calling 3AccountFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/favorites/${encodeURIComponent(String(page))}/${encodeURIComponent(
        String(favoritesSort)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Gallery Favorites
   * Return the images the user has favorited in the gallery.  #### Response Model: [Gallery Image](https://api.imgur.com/models/gallery_image) OR [Gallery Album](https://api.imgur.com/models/gallery_album)   #### Parameters  | Key  | Required | Description                                                                                     | |------|----------|-------------------------------------------------------------------------------------------------| | page | optional | integer - allows you to set the page number so you don&#39;t have to retrieve all the data at once. | | favoriteSort | optional | &#x60;oldest&#x60;, or &#x60;newest&#x60;. Defaults to &#x60;newest&#x60;.                                                    |
   * @param username
   * @param page
   * @param favoritesSort
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountGalleryFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountGalleryFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountGalleryFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountGalleryFavoritesFavoritesSortByUsernameAndPageGet(
    username: string,
    page: string,
    favoritesSort: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountGalleryFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountGalleryFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }
    if (favoritesSort === null || favoritesSort === undefined) {
      throw new Error(
        'Required parameter favoritesSort was null or undefined when calling 3AccountGalleryFavoritesFavoritesSortByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/gallery_favorites/${encodeURIComponent(
        String(page)
      )}/${encodeURIComponent(String(favoritesSort))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Image
   * Return information about a specific image. This endpoint works the same as the [Image Endpoint](https://api.imgur.com/endpoints/image/). You can use any of the additional actions that the image endpoint with this endpoint.  #### Response Model: [Image](https://api.imgur.com/models/image)
   * @param username
   * @param imageId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountImageByUsernameAndImageIdGet(
    username: string,
    imageId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountImageByUsernameAndImageIdGet(
    username: string,
    imageId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountImageByUsernameAndImageIdGet(
    username: string,
    imageId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountImageByUsernameAndImageIdGet(
    username: string,
    imageId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountImageByUsernameAndImageIdGet.'
      );
    }
    if (imageId === null || imageId === undefined) {
      throw new Error(
        'Required parameter imageId was null or undefined when calling 3AccountImageByUsernameAndImageIdGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/image/${encodeURIComponent(String(imageId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Images
   * Return all of the images associated with the account. You can page through the images by setting the page, this defaults to 0.  #### Response Model: [Image](https://api.imgur.com/models/image)
   * @param username
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountImagesByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountImagesByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountImagesByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountImagesByUsernameAndPageGet(
    username: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountImagesByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountImagesByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/images/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Image Count
   * Returns the total number of images associated with the account.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountImagesCountByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountImagesCountByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountImagesCountByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountImagesCountByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountImagesCountByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/images/count`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Image IDs
   * Returns an array of Image IDs that are associated with the account.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountImagesIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountImagesIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountImagesIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountImagesIdsByUsernameAndPageGet(
    username: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountImagesIdsByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountImagesIdsByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/images/ids/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Unfollow tag
   * Unfollows the {{tagName}} specified for the currently logged in user.
   * @param tagName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountMeFollowTagByTagNameDelete(
    tagName: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<UnfollowTagSuccess>;
  public accountMeFollowTagByTagNameDelete(
    tagName: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<UnfollowTagSuccess>>;
  public accountMeFollowTagByTagNameDelete(
    tagName: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<UnfollowTagSuccess>>;
  public accountMeFollowTagByTagNameDelete(
    tagName: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (tagName === null || tagName === undefined) {
      throw new Error(
        'Required parameter tagName was null or undefined when calling 3AccountMeFollowTagByTagNameDelete.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<UnfollowTagSuccess>(
      `${this.basePath}/3/account/me/follow/tag/${encodeURIComponent(
        String(tagName)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Follow User
   * Follows the {{follow_user_id}} specified for the currently logged in user.
   * @param tagName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountMeFollowTagByTagNamePost2(
    tagName: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<FollowTagSuccess>;
  public accountMeFollowTagByTagNamePost2(
    tagName: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<FollowTagSuccess>>;
  public accountMeFollowTagByTagNamePost2(
    tagName: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<FollowTagSuccess>>;
  public accountMeFollowTagByTagNamePost2(
    tagName: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (tagName === null || tagName === undefined) {
      throw new Error(
        'Required parameter tagName was null or undefined when calling 3AccountMeFollowTagByTagNamePost2.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.post<FollowTagSuccess>(
      `${this.basePath}/3/account/me/follow/tag/${encodeURIComponent(
        String(tagName)
      )}`,
      null,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Images
   * To make requests for the current account, you may use &#x60;me&#x60; as the &#x60;{{username}}&#x60; parameter. For example, &#x60;https://api.imgur.com/3/account/me/images&#x60; will request all the images for the account that is currently authenticated.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountMeImagesGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountMeImagesGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountMeImagesGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountMeImagesGet(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(`${this.basePath}/3/account/me/images`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Account Settings
   * Returns the account settings, only accessible if you&#39;re logged in as the user.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountMeSettingsGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountMeSettingsGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountMeSettingsGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountMeSettingsGet(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(`${this.basePath}/3/account/me/settings`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Replies
   * Returns all of the reply notifications for the user. Required to be logged in as that user.  #### Response Model: [Notification](https://api.imgur.com/models/notification)  #### Parameters  | Key | Required | Value                                                                                          | |-----|----------|------------------------------------------------------------------------------------------------| | new | optional | boolean - &#x60;false&#x60; for all notifications, &#x60;true&#x60; for only non-viewed notification. Default is &#x60;true&#x60;. |
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountNotificationsRepliesByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountNotificationsRepliesByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountNotificationsRepliesByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountNotificationsRepliesByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountNotificationsRepliesByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/notifications/replies`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Gallery Profile
   * Returns the totals for the gallery profile.  #### Response Model: [Gallery Profile](https://api.imgur.com/models/gallery_profile)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountSettingsByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountSettingsByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountSettingsByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountSettingsByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountSettingsByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/settings`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Change Account Settings
   * Updates the account settings for a given user, the user must be logged in.  #### Response Model: [Basic](https://api.imgur.com/models/basic)  #### Parameters  | Key                    | Required | Description                                                                           | |------------------------|----------|---------------------------------------------------------------------------------------| | bio                    | optional | The biography of the user, is displayed in the gallery profile page.                  | | public_images          | optional | Set the users images to private or public by default                                  | | messaging_enabled      | optional | true &amp;#124; false - Allows the user to enable / disable private messages                   | | album_privacy          | optional | public &amp;#124; hidden &amp;#124; secret - Sets the default privacy level of albums the users creates | | accepted_gallery_terms | optional | true &amp;#124; false - The user agreement to the Imgur Gallery terms.                         | | username               | optional | A valid Imgur username (between 4 and 63 alphanumeric characters)                     | | show_mature            | optional | true &amp;#124; false - Toggle display of mature images in gallery list endpoints.             | | newsletter_subscribed  | optional | true &amp;#124; false - Toggle subscription to email newsletter.                               |
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountSettingsByUsernamePut(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountSettingsByUsernamePut(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountSettingsByUsernamePut(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountSettingsByUsernamePut(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountSettingsByUsernamePut.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.put<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/settings`,
      null,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Submissions
   * Return the images a user has submitted to the gallery. You can add sorting as well after paging. Sorts can be: newest (default), oldest, worst, best.   #### Response Model: [Gallery Image](https://api.imgur.com/models/gallery_image) OR [Gallery Album](https://api.imgur.com/models/gallery_album)
   * @param username
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountSubmissionsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountSubmissionsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountSubmissionsByUsernameAndPageGet(
    username: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountSubmissionsByUsernameAndPageGet(
    username: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountSubmissionsByUsernameAndPageGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3AccountSubmissionsByUsernameAndPageGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/submissions/${encodeURIComponent(String(page))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Verify User&#39;s E-mail
   * Checks to see if user has verified their email address.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountVerifyemailByUsernameGet(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountVerifyemailByUsernameGet(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountVerifyemailByUsernameGet(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountVerifyemailByUsernameGet(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountVerifyemailByUsernameGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/verifyemail`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Send Verification E-mail
   * Sends an email to the user to verify that their email is valid to upload to gallery. Must be logged in as the user to send.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param username
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public accountVerifyemailByUsernamePost(
    username: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public accountVerifyemailByUsernamePost(
    username: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public accountVerifyemailByUsernamePost(
    username: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public accountVerifyemailByUsernamePost(
    username: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling 3AccountVerifyemailByUsernamePost.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.post<any>(
      `${this.basePath}/3/account/${encodeURIComponent(
        String(username)
      )}/verifyemail`,
      null,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Account Delete (me)
   * Delete the account of the auth&#39;d user with delete feedback.  note: password is left blank to avoid accidental account deletion, to delete account you must add account password to body.
   * @param clientId
   * @param body
   * @param contentType
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deletePost(
    clientId: string,
    body: AccountDeleteMerequest,
    contentType: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public deletePost(
    clientId: string,
    body: AccountDeleteMerequest,
    contentType: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public deletePost(
    clientId: string,
    body: AccountDeleteMerequest,
    contentType: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public deletePost(
    clientId: string,
    body: AccountDeleteMerequest,
    contentType: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (clientId === null || clientId === undefined) {
      throw new Error(
        'Required parameter clientId was null or undefined when calling deletePost.'
      );
    }
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling deletePost.'
      );
    }
    if (contentType === null || contentType === undefined) {
      throw new Error(
        'Required parameter contentType was null or undefined when calling deletePost.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (clientId !== undefined) {
      queryParameters = queryParameters.set('client_id', <any>clientId);
    }

    let headers = this.defaultHeaders;
    if (contentType !== undefined && contentType !== null) {
      headers = headers.set('Content-Type', String(contentType));
    }

    // authentication (auth) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === 'function'
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<any>(`${this.basePath}/delete`, body, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Generate Access Token
   * Given a user&#39;s refresh token, this endpoint generates an access token.
   * @param refreshToken The refresh token returned from the authorization code exchange
   * @param clientId The client_id obtained during application registration
   * @param clientSecret The client secret obtained during application registration
   * @param grantType As defined in the OAuth2 specification, this field must contain a value of: &#x60;refresh_token&#x60;
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public oauth2TokenPost(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public oauth2TokenPost(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public oauth2TokenPost(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public oauth2TokenPost(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (refreshToken === null || refreshToken === undefined) {
      throw new Error(
        'Required parameter refreshToken was null or undefined when calling oauth2TokenPost.'
      );
    }
    if (clientId === null || clientId === undefined) {
      throw new Error(
        'Required parameter clientId was null or undefined when calling oauth2TokenPost.'
      );
    }
    if (clientSecret === null || clientSecret === undefined) {
      throw new Error(
        'Required parameter clientSecret was null or undefined when calling oauth2TokenPost.'
      );
    }
    if (grantType === null || grantType === undefined) {
      throw new Error(
        'Required parameter grantType was null or undefined when calling oauth2TokenPost.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/x-www-form-urlencoded'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): void };
    const useForm = false;
    const convertFormParamsToString = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new HttpParams({
        encoder: new CustomHttpUrlEncodingCodec()
      });
    }

    if (refreshToken !== undefined) {
      formParams =
        formParams.append('refresh_token', <any>refreshToken) || formParams;
    }
    if (clientId !== undefined) {
      formParams = formParams.append('client_id', <any>clientId) || formParams;
    }
    if (clientSecret !== undefined) {
      formParams =
        formParams.append('client_secret', <any>clientSecret) || formParams;
    }
    if (grantType !== undefined) {
      formParams =
        formParams.append('grant_type', <any>grantType) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/oauth2/token`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
