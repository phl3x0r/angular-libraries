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

import { ModelDefault } from '../model/modelDefault';
import { SampleResponse15 } from '../model/sampleResponse15';
import { SampleResponse17 } from '../model/sampleResponse17';
import { SampleResponse24 } from '../model/sampleResponse24';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class GalleryService {
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
   * Share with Community (Album)
   * Share an Album or Image to the Gallery.
   * @param title Required. The title of the image.
   * @param topic Optional. Topic name
   * @param terms Optional. If the user has not accepted our terms yet, this endpoint will return an error. To by-pass the terms in general simply set this value to &#x60;1&#x60;.
   * @param mature Optional. If the post is [mature](http://imgur.com/rules), set this value to &#x60;1&#x60;.
   * @param tags Optional. The name of the tags you wish to associate with a post. Can be passed as &#x60;tags[]&#x3D;funny&amp;tags[]&#x3D;cat&#x60; or &#x60;tags&#x3D;funny,cat&#x60;
   * @param albumHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryAlbumByAlbumHashPost(
    title: string,
    topic: string,
    terms: string,
    mature: string,
    tags: string,
    albumHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryAlbumByAlbumHashPost(
    title: string,
    topic: string,
    terms: string,
    mature: string,
    tags: string,
    albumHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryAlbumByAlbumHashPost(
    title: string,
    topic: string,
    terms: string,
    mature: string,
    tags: string,
    albumHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryAlbumByAlbumHashPost(
    title: string,
    topic: string,
    terms: string,
    mature: string,
    tags: string,
    albumHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (title === null || title === undefined) {
      throw new Error(
        'Required parameter title was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
      );
    }
    if (topic === null || topic === undefined) {
      throw new Error(
        'Required parameter topic was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
      );
    }
    if (terms === null || terms === undefined) {
      throw new Error(
        'Required parameter terms was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
      );
    }
    if (mature === null || mature === undefined) {
      throw new Error(
        'Required parameter mature was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
      );
    }
    if (tags === null || tags === undefined) {
      throw new Error(
        'Required parameter tags was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
      );
    }
    if (albumHash === null || albumHash === undefined) {
      throw new Error(
        'Required parameter albumHash was null or undefined when calling 3GalleryAlbumByAlbumHashPost.'
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

    if (title !== undefined) {
      formParams = formParams.append('title', <any>title) || formParams;
    }
    if (topic !== undefined) {
      formParams = formParams.append('topic', <any>topic) || formParams;
    }
    if (terms !== undefined) {
      formParams = formParams.append('terms', <any>terms) || formParams;
    }
    if (mature !== undefined) {
      formParams = formParams.append('mature', <any>mature) || formParams;
    }
    if (tags !== undefined) {
      formParams = formParams.append('tags', <any>tags) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/3/gallery/album/${encodeURIComponent(
        String(albumHash)
      )}`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gallery Album
   * Get additional information about an album in the gallery.  #### Response Model: [Gallery Album](https://api.imgur.com/models/gallery_album)
   * @param albumHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryAlbumByGalleryHashGet(
    albumHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryAlbumByGalleryHashGet(
    albumHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryAlbumByGalleryHashGet(
    albumHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryAlbumByGalleryHashGet(
    albumHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (albumHash === null || albumHash === undefined) {
      throw new Error(
        'Required parameter albumHash was null or undefined when calling 3GalleryAlbumByGalleryHashGet.'
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
      `${this.basePath}/3/gallery/album/${encodeURIComponent(
        String(albumHash)
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
   * Remove from Gallery
   * Remove an image from the public gallery. You must be logged in as the owner of the item to do this action.
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryByGalleryHashDelete(
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryByGalleryHashDelete(
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryByGalleryHashDelete(
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryByGalleryHashDelete(
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryByGalleryHashDelete.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(String(galleryHash))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album / Image Comment
   * Information about a specific comment. This action also allows any of the additional actions provided in the [Comment Endpoint](https://api.imgur.com/endpoints/comment).
   * @param galleryHash
   * @param commentId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryCommentByGalleryHashAndCommentIdGet(
    galleryHash: string,
    commentId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryCommentByGalleryHashAndCommentIdGet(
    galleryHash: string,
    commentId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryCommentByGalleryHashAndCommentIdGet(
    galleryHash: string,
    commentId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryCommentByGalleryHashAndCommentIdGet(
    galleryHash: string,
    commentId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryCommentByGalleryHashAndCommentIdGet.'
      );
    }
    if (commentId === null || commentId === undefined) {
      throw new Error(
        'Required parameter commentId was null or undefined when calling 3GalleryCommentByGalleryHashAndCommentIdGet.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
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
   * Album / Image Comment Creation
   * #### Response Model: [Basic](https://api.imgur.com/models/basic)  #### Parameters  | Key     | Required | Value                    | |---------|----------|--------------------------| | comment | required | The text of the comment. |
   * @param comment
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryCommentByGalleryHashPost(
    comment: string,
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryCommentByGalleryHashPost(
    comment: string,
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryCommentByGalleryHashPost(
    comment: string,
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryCommentByGalleryHashPost(
    comment: string,
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (comment === null || comment === undefined) {
      throw new Error(
        'Required parameter comment was null or undefined when calling 3GalleryCommentByGalleryHashPost.'
      );
    }
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryCommentByGalleryHashPost.'
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

    if (comment !== undefined) {
      formParams = formParams.append('comment', <any>comment) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
      )}/comment`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album / Image Comments
   * Get comments on an image or album in the gallery.  &#x60;galleryHash&#x60; is the unique identifier of an album or image in the gallery.  &#x60;commentSort&#x60; is one of &#x60;best&#x60; | &#x60;top&#x60; | &#x60;new&#x60; - defaults to &#x60;best&#x60;.
   * @param galleryHash
   * @param commentSort
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryCommentsByGalleryHashAndCommentSortGet(
    galleryHash: string,
    commentSort: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryCommentsByGalleryHashAndCommentSortGet(
    galleryHash: string,
    commentSort: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryCommentsByGalleryHashAndCommentSortGet(
    galleryHash: string,
    commentSort: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryCommentsByGalleryHashAndCommentSortGet(
    galleryHash: string,
    commentSort: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryCommentsByGalleryHashAndCommentSortGet.'
      );
    }
    if (commentSort === null || commentSort === undefined) {
      throw new Error(
        'Required parameter commentSort was null or undefined when calling 3GalleryCommentsByGalleryHashAndCommentSortGet.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
      )}/comments/${encodeURIComponent(String(commentSort))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gallery Image
   * Get additional information about an image in the gallery.
   * @param imageHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryImageByGalleryImageHashGet(
    imageHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryImageByGalleryImageHashGet(
    imageHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryImageByGalleryImageHashGet(
    imageHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryImageByGalleryImageHashGet(
    imageHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (imageHash === null || imageHash === undefined) {
      throw new Error(
        'Required parameter imageHash was null or undefined when calling 3GalleryImageByGalleryImageHashGet.'
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
      `${this.basePath}/3/gallery/image/${encodeURIComponent(
        String(imageHash)
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
   * Share with Community (Image)
   * Share an Album or Image to the Gallery.
   * @param title Required. The title of the image.
   * @param topic Optional. Topic name
   * @param terms Optional. If the user has not accepted our terms yet, this endpoint will return an error. To by-pass the terms in general simply set this value to &#x60;1&#x60;.
   * @param tags Optional. The name of the tags you wish to associate with a post. Can be passed as &#x60;tags[]&#x3D;funny&amp;tags[]&#x3D;cat&#x60; or &#x60;tags&#x3D;funny,cat&#x60;
   * @param imageHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryImageByImageHashPost(
    title: string,
    topic: string,
    terms: string,
    tags: string,
    imageHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryImageByImageHashPost(
    title: string,
    topic: string,
    terms: string,
    tags: string,
    imageHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryImageByImageHashPost(
    title: string,
    topic: string,
    terms: string,
    tags: string,
    imageHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryImageByImageHashPost(
    title: string,
    topic: string,
    terms: string,
    tags: string,
    imageHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (title === null || title === undefined) {
      throw new Error(
        'Required parameter title was null or undefined when calling 3GalleryImageByImageHashPost.'
      );
    }
    if (topic === null || topic === undefined) {
      throw new Error(
        'Required parameter topic was null or undefined when calling 3GalleryImageByImageHashPost.'
      );
    }
    if (terms === null || terms === undefined) {
      throw new Error(
        'Required parameter terms was null or undefined when calling 3GalleryImageByImageHashPost.'
      );
    }
    if (tags === null || tags === undefined) {
      throw new Error(
        'Required parameter tags was null or undefined when calling 3GalleryImageByImageHashPost.'
      );
    }
    if (imageHash === null || imageHash === undefined) {
      throw new Error(
        'Required parameter imageHash was null or undefined when calling 3GalleryImageByImageHashPost.'
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

    if (title !== undefined) {
      formParams = formParams.append('title', <any>title) || formParams;
    }
    if (topic !== undefined) {
      formParams = formParams.append('topic', <any>topic) || formParams;
    }
    if (terms !== undefined) {
      formParams = formParams.append('terms', <any>terms) || formParams;
    }
    if (tags !== undefined) {
      formParams = formParams.append('tags', <any>tags) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/3/gallery/image/${encodeURIComponent(
        String(imageHash)
      )}`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album / Image Reporting
   * Report an Image in the gallery  #### Response Model: [Basic](https://api.imgur.com/models/basic)  #### Parameters  | Key    | Required | Description                                       | |--------|----------|---------------------------------------------------| | reason | optional | An integer representing the reason for the report (see codes below) |   #### Report Reason Codes  | Value | Description                         | |-------|-------------------------------------| | 1     | Doesn&#39;t belong on Imgur             | | 2     | Spam                                | | 3     | Abusive                             | | 4     | Mature content not marked as mature | | 5     | Pornography                         |
   * @param reason
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryImageReportByGalleryHashPost(
    reason: string,
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryImageReportByGalleryHashPost(
    reason: string,
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryImageReportByGalleryHashPost(
    reason: string,
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryImageReportByGalleryHashPost(
    reason: string,
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (reason === null || reason === undefined) {
      throw new Error(
        'Required parameter reason was null or undefined when calling 3GalleryImageReportByGalleryHashPost.'
      );
    }
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryImageReportByGalleryHashPost.'
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

    if (reason !== undefined) {
      formParams = formParams.append('reason', <any>reason) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/3/gallery/image/${encodeURIComponent(
        String(galleryHash)
      )}/report`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Subreddit Image
   * View a single image in the subreddit  | Key       | Required | Value                         | |-----------|----------|-------------------------------| | subreddit | required | A valid subreddit name, ie &#x60;earthporn&#x60; | | image_id  | required | The ID for the image.         |
   * @param subreddit
   * @param subredditImageId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryRBySubredditAndSubredditImageIdGet(
    subreddit: string,
    subredditImageId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SampleResponse17>;
  public galleryRBySubredditAndSubredditImageIdGet(
    subreddit: string,
    subredditImageId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SampleResponse17>>;
  public galleryRBySubredditAndSubredditImageIdGet(
    subreddit: string,
    subredditImageId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SampleResponse17>>;
  public galleryRBySubredditAndSubredditImageIdGet(
    subreddit: string,
    subredditImageId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (subreddit === null || subreddit === undefined) {
      throw new Error(
        'Required parameter subreddit was null or undefined when calling 3GalleryRBySubredditAndSubredditImageIdGet.'
      );
    }
    if (subredditImageId === null || subredditImageId === undefined) {
      throw new Error(
        'Required parameter subredditImageId was null or undefined when calling 3GalleryRBySubredditAndSubredditImageIdGet.'
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

    return this.httpClient.get<SampleResponse17>(
      `${this.basePath}/3/gallery/r/${encodeURIComponent(
        String(subreddit)
      )}/${encodeURIComponent(String(subredditImageId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Subreddit Galleries
   * View gallery images for a subreddit  | Key       | Required | Value                                                                                                        | |-----------|----------|--------------------------------------------------------------------------------------------------------------| | subreddit | required | pics - A valid subreddit name                                                                                | | sort      | optional | &#x60;time&#x60; &amp;#124; &#x60;top&#x60; - defaults to time                                                                                | | page      | optional | integer - the data paging number                                                                             | | window    | optional | Change the date range of the request if the sort is \&quot;top\&quot;. Options are  &#x60;day&#x60; &amp;#124; &#x60;week&#x60; &amp;#124; &#x60;month&#x60; &amp;#124; &#x60;year&#x60; &amp;#124; &#x60;all&#x60;. Defaults to week |
   * @param subreddit
   * @param sort
   * @param window
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryRWindowPageBySubredditAndSortGet(
    subreddit: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SampleResponse15>;
  public galleryRWindowPageBySubredditAndSortGet(
    subreddit: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SampleResponse15>>;
  public galleryRWindowPageBySubredditAndSortGet(
    subreddit: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SampleResponse15>>;
  public galleryRWindowPageBySubredditAndSortGet(
    subreddit: string,
    sort: string,
    window: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (subreddit === null || subreddit === undefined) {
      throw new Error(
        'Required parameter subreddit was null or undefined when calling 3GalleryRWindowPageBySubredditAndSortGet.'
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        'Required parameter sort was null or undefined when calling 3GalleryRWindowPageBySubredditAndSortGet.'
      );
    }
    if (window === null || window === undefined) {
      throw new Error(
        'Required parameter window was null or undefined when calling 3GalleryRWindowPageBySubredditAndSortGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3GalleryRWindowPageBySubredditAndSortGet.'
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

    return this.httpClient.get<SampleResponse15>(
      `${this.basePath}/3/gallery/r/${encodeURIComponent(
        String(subreddit)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(window)
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
   * Gallery Search
   * Search the gallery with a given query string.   #### Parameters | Key    | Required | Value                                                                                                        | |--------|----------|--------------------------------------------------------------------------------------------------------------| | sort   | optional | time &amp;#124; viral &amp;#124; top - defaults to time                                                                        | | window | optional | Change the date range of the request if the sort is &#39;top&#39;, day &amp;#124; week &amp;#124; month &amp;#124; year &amp;#124; all, defaults to all. | | page   | optional | integer - the data paging number                                                                             |   #### Simple Search Query Parameters  | Key | Value                                                                                                                                                                                                                                                                                    | |-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | q   | Query string (note: if advanced search parameters are set, this query string is ignored). This parameter also supports boolean operators (AND, OR, NOT) and indices (tag: user: title: ext: subreddit: album: meme:). An example compound query would be &#39;title: cats AND dogs ext: gif&#39; |    #### Advanced Search Query Parameters  | Key       | Value                                                                                                                                                                                                | |-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | q_all     | Search for all of these words (and)                                                                                                                                                                  | | q_any     | Search for any of these words (or)                                                                                                                                                                   | | q_exactly | Search for exactly this word or phrase                                                                                                                                                               | | q_not     | Exclude results matching this                                                                                                                                                                        | | q_type    | Show results for any file type, jpg  &amp;#124; png  &amp;#124; gif  &amp;#124; anigif (animated gif)  &amp;#124; album                                                                                                                      | | q_size_px | Size ranges, small (500 pixels square or less)  &amp;#124; med (500 to 2,000 pixels square)  &amp;#124; big (2,000 to 5,000 pixels square)  &amp;#124; lrg (5,000 to 10,000 pixels square)  &amp;#124; huge (10,000 square pixels and above) |
   * @param q
   * @param sort
   * @param window
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public gallerySearchPageBySortAndWindowGet(
    q: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public gallerySearchPageBySortAndWindowGet(
    q: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public gallerySearchPageBySortAndWindowGet(
    q: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public gallerySearchPageBySortAndWindowGet(
    q: string,
    sort: string,
    window: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (q === null || q === undefined) {
      throw new Error(
        'Required parameter q was null or undefined when calling 3GallerySearchPageBySortAndWindowGet.'
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        'Required parameter sort was null or undefined when calling 3GallerySearchPageBySortAndWindowGet.'
      );
    }
    if (window === null || window === undefined) {
      throw new Error(
        'Required parameter window was null or undefined when calling 3GallerySearchPageBySortAndWindowGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3GallerySearchPageBySortAndWindowGet.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (q !== undefined) {
      queryParameters = queryParameters.set('q', <any>q);
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
      `${this.basePath}/3/gallery/search/${encodeURIComponent(
        String(sort)
      )}/${encodeURIComponent(String(window))}/${encodeURIComponent(
        String(page)
      )}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gallery Tag
   * Returns tag metadata, and posts tagged with the &#x60;tagName&#x60; provided
   * @param tagName
   * @param sort
   * @param window
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryTWindowPageByTagNameAndSortGet(
    tagName: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryTWindowPageByTagNameAndSortGet(
    tagName: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryTWindowPageByTagNameAndSortGet(
    tagName: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryTWindowPageByTagNameAndSortGet(
    tagName: string,
    sort: string,
    window: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (tagName === null || tagName === undefined) {
      throw new Error(
        'Required parameter tagName was null or undefined when calling 3GalleryTWindowPageByTagNameAndSortGet.'
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        'Required parameter sort was null or undefined when calling 3GalleryTWindowPageByTagNameAndSortGet.'
      );
    }
    if (window === null || window === undefined) {
      throw new Error(
        'Required parameter window was null or undefined when calling 3GalleryTWindowPageByTagNameAndSortGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3GalleryTWindowPageByTagNameAndSortGet.'
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
      `${this.basePath}/3/gallery/t/${encodeURIComponent(
        String(tagName)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(window)
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
   * Gallery Tag Info
   * Gets metadata about a tag
   * @param tagName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryTagInfoByTagNameGet(
    tagName: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SampleResponse24>;
  public galleryTagInfoByTagNameGet(
    tagName: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SampleResponse24>>;
  public galleryTagInfoByTagNameGet(
    tagName: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SampleResponse24>>;
  public galleryTagInfoByTagNameGet(
    tagName: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (tagName === null || tagName === undefined) {
      throw new Error(
        'Required parameter tagName was null or undefined when calling 3GalleryTagInfoByTagNameGet.'
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

    return this.httpClient.get<SampleResponse24>(
      `${this.basePath}/3/gallery/tag_info/${encodeURIComponent(
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
   * Gallery Item Tags
   * | Key | Required | Value                  | |-----|----------|------------------------| | id  | required | ID of the gallery item |
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryTagsByGalleryHashGet(
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryTagsByGalleryHashGet(
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryTagsByGalleryHashGet(
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryTagsByGalleryHashGet(
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryTagsByGalleryHashGet.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
      )}/tags`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Update Gallery Item Tags
   * Update the tags for a post in the gallery
   * @param id Required. ID of the gallery item
   * @param tags Required. The name of the tags you wish to associate with a post. Can be passed as tags[]&#x3D;funny&amp;tags[]&#x3D;cat or tags&#x3D;funny,cat
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryTagsByGalleryHashPost(
    id: string,
    tags: string,
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryTagsByGalleryHashPost(
    id: string,
    tags: string,
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryTagsByGalleryHashPost(
    id: string,
    tags: string,
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryTagsByGalleryHashPost(
    id: string,
    tags: string,
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling 3GalleryTagsByGalleryHashPost.'
      );
    }
    if (tags === null || tags === undefined) {
      throw new Error(
        'Required parameter tags was null or undefined when calling 3GalleryTagsByGalleryHashPost.'
      );
    }
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryTagsByGalleryHashPost.'
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

    if (id !== undefined) {
      formParams = formParams.append('id', <any>id) || formParams;
    }
    if (tags !== undefined) {
      formParams = formParams.append('tags', <any>tags) || formParams;
    }

    return this.httpClient.post<any>(
      `${this.basePath}/3/gallery/tags/${encodeURIComponent(
        String(galleryHash)
      )}`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Album / Image Voting
   * Vote for an image, &#x60;up&#x60; or &#x60;down&#x60; vote. Send &#x60;veto&#x60; to undo a vote.  #### Response Model: [Basic](https://api.imgur.com/models/basic)
   * @param galleryHash
   * @param vote
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryVoteByGalleryHashAndVotePost(
    galleryHash: string,
    vote: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryVoteByGalleryHashAndVotePost(
    galleryHash: string,
    vote: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryVoteByGalleryHashAndVotePost(
    galleryHash: string,
    vote: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryVoteByGalleryHashAndVotePost(
    galleryHash: string,
    vote: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryVoteByGalleryHashAndVotePost.'
      );
    }
    if (vote === null || vote === undefined) {
      throw new Error(
        'Required parameter vote was null or undefined when calling 3GalleryVoteByGalleryHashAndVotePost.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
      )}/vote/${encodeURIComponent(String(vote))}`,
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
   * Album / Image Votes
   * Get the vote information about an image  #### Response Model: [Vote](https://api.imgur.com/models/vote)
   * @param galleryHash
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryVotesByGalleryHashGet(
    galleryHash: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryVotesByGalleryHashGet(
    galleryHash: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryVotesByGalleryHashGet(
    galleryHash: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryVotesByGalleryHashGet(
    galleryHash: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (galleryHash === null || galleryHash === undefined) {
      throw new Error(
        'Required parameter galleryHash was null or undefined when calling 3GalleryVotesByGalleryHashGet.'
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(galleryHash)
      )}/votes`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gallery
   * | Key       | Required | Value                                                                                             | |-----------|----------|---------------------------------------------------------------------------------------------------| | section   | optional | &#x60;hot&#x60; &amp;#124; &#x60;top&#x60; &amp;#124; &#x60;user&#x60;. Defaults to &#x60;hot&#x60; | sort      | optional | &#x60;viral&#x60; &amp;#124; &#x60;top&#x60; &amp;#124; &#x60;time&#x60; &amp;#124; &#x60;rising&#x60; (only available with &#x60;user&#x60; section). Defaults to &#x60;viral&#x60; | | page      | optional | integer - the data paging number                                                                  | | window    | optional | Change the date range of the request if the section is &#x60;top&#x60;. Accepted values are &#x60;day&#x60; &amp;#124; &#x60;week&#x60; &amp;#124; &#x60;month&#x60; &amp;#124; &#x60;year&#x60; &amp;#124; &#x60;all&#x60;. Defaults to &#x60;day&#x60; |
   * @param showViral
   * @param mature
   * @param albumPreviews
   * @param section
   * @param sort
   * @param window
   * @param page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public galleryWindowPageBySectionAndSortGet(
    showViral: string,
    mature: string,
    albumPreviews: string,
    section: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public galleryWindowPageBySectionAndSortGet(
    showViral: string,
    mature: string,
    albumPreviews: string,
    section: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public galleryWindowPageBySectionAndSortGet(
    showViral: string,
    mature: string,
    albumPreviews: string,
    section: string,
    sort: string,
    window: string,
    page: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public galleryWindowPageBySectionAndSortGet(
    showViral: string,
    mature: string,
    albumPreviews: string,
    section: string,
    sort: string,
    window: string,
    page: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (showViral === null || showViral === undefined) {
      throw new Error(
        'Required parameter showViral was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (mature === null || mature === undefined) {
      throw new Error(
        'Required parameter mature was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (albumPreviews === null || albumPreviews === undefined) {
      throw new Error(
        'Required parameter albumPreviews was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (section === null || section === undefined) {
      throw new Error(
        'Required parameter section was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        'Required parameter sort was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (window === null || window === undefined) {
      throw new Error(
        'Required parameter window was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling 3GalleryWindowPageBySectionAndSortGet.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (showViral !== undefined) {
      queryParameters = queryParameters.set('showViral', <any>showViral);
    }
    if (mature !== undefined) {
      queryParameters = queryParameters.set('mature', <any>mature);
    }
    if (albumPreviews !== undefined) {
      queryParameters = queryParameters.set(
        'album_previews',
        <any>albumPreviews
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
      `${this.basePath}/3/gallery/${encodeURIComponent(
        String(section)
      )}/${encodeURIComponent(String(sort))}/${encodeURIComponent(
        String(window)
      )}/${encodeURIComponent(String(page))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gallery Tags
   * Gets a list of default tags
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public tagsGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ModelDefault>;
  public tagsGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ModelDefault>>;
  public tagsGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ModelDefault>>;
  public tagsGet(
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

    return this.httpClient.get<ModelDefault>(`${this.basePath}/3/tags`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Random Gallery Images
   * *DEPRECATED* Returns a random set of gallery images.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public unnammedEndpointGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public unnammedEndpointGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public unnammedEndpointGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public unnammedEndpointGet(
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

    return this.httpClient.get<any>(`${this.basePath}//`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
