import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.AUTH_GOOGLE_ID,
  process.env.AUTH_GOOGLE_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
});

/* 
  After the user authenticates, this URL will redirect to `GOOGLE_REDIRECT_URL`
  with a code query param; e.g., /oauthcallback?code={authorizationCode}
  The code can then be used to request an access token:
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens);
  This provides an object with access_token and refresh_token,
  which can be saved (securely) to be used at a later time.
*/
const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline", // 'online' (default) or 'offline' (gets refresh_token)
  scope: SCOPES,
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  const calendar = google.calendar({ version: "v3", auth });
  calendar.events.list(
    {
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const events = res.data.items;
      if (events.length) {
        console.log("Upcoming 10 events:");
        events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          console.log(`${start} - ${event.summary}`);
        });
      } else {
        console.log("No upcoming events found.");
      }
    }
  );
}

////////////////////////////////

// class ApiCalendar {
//   sign = false;
//   gapi = null;
//   onLoadCallback = null;
//   calendar = "primary";

//   constructor() {
//     try {
//       this.updateSigninStatus = this.updateSigninStatus.bind(this);
//       this.initClient = this.initClient.bind(this);
//       this.handleSignoutClick = this.handleSignoutClick.bind(this);
//       this.handleAuthClick = this.handleAuthClick.bind(this);
//       this.createEvent = this.createEvent.bind(this);
//       this.listUpcomingEvents = this.listUpcomingEvents.bind(this);
//       this.listEvents = this.listEvents.bind(this);
//       this.createEventFromNow = this.createEventFromNow.bind(this);
//       this.listenSign = this.listenSign.bind(this);
//       this.onLoad = this.onLoad.bind(this);
//       this.setCalendar = this.setCalendar.bind(this);
//       this.updateEvent = this.updateEvent.bind(this);
//       this.deleteEvent = this.deleteEvent.bind(this);
//       this.getEvent = this.getEvent.bind(this);
//       this.getBasicUserProfile = this.getBasicUserProfile.bind(this);
//       this.handleClientLoad();
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   /**
//    * Update connection status.
//    * @param {boolean} isSignedIn
//    */
//   private updateSigninStatus(isSignedIn: boolean): void {
//     this.sign = isSignedIn;
//   }

//   /**
//    * Auth to the google Api.
//    */
//   private initClient(): void {
//     this.gapi = window["gapi"];
//     this.gapi.client
//       .init(Config)
//       .then(() => {
//         // Listen for sign-in state changes.
//         this.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
//         // Handle the initial sign-in state.
//         this.updateSigninStatus(this.gapi.auth2.getAuthInstance().isSignedIn.get());
//         if (this.onLoadCallback) {
//           this.onLoadCallback();
//         }
//       })
//       .catch((e: any) => {
//         console.log(e);
//       });
//   }

//   /**
//    * Init Google Api
//    * And create gapi in global
//    */
//   private handleClientLoad(): void {
//     this.gapi = window["gapi"];
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     document.body.appendChild(script);
//     script.onload = (): void => {
//       window["gapi"].load("client:auth2", this.initClient);
//     };
//   }

//   /**
//    * Sign in Google user account
//    */
//   public handleAuthClick(): Promise<any> {
//     if (this.gapi) {
//       return this.gapi.auth2.getAuthInstance().signIn();
//     } else {
//       console.log("Error: this.gapi not loaded");
//       return Promise.reject(new Error("Error: this.gapi not loaded"));
//     }
//   }

//   /**
//    * Set the default attribute calendar
//    * @param {string} newCalendar
//    */
//   public setCalendar(newCalendar: string): void {
//     this.calendar = newCalendar;
//   }

//   /**
//    * Execute the callback function when a user is disconnected or connected with the sign status.
//    * @param callback
//    */
//   public listenSign(callback: any): void {
//     if (this.gapi) {
//       this.gapi.auth2.getAuthInstance().isSignedIn.listen(callback);
//     } else {
//       console.log("Error: this.gapi not loaded");
//     }
//   }

//   /**
//    * Execute the callback function when gapi is loaded
//    * @param callback
//    */
//   public onLoad(callback: any): void {
//     if (this.gapi) {
//       callback();
//     } else {
//       this.onLoadCallback = callback;
//     }
//   }

//   /**
//    * Sign out user google account
//    */
//   public handleSignoutClick(): void {
//     if (this.gapi) {
//       this.gapi.auth2.getAuthInstance().signOut();
//     } else {
//       console.log("Error: this.gapi not loaded");
//     }
//   }

//   /**
//    * List all events in the calendar
//    * @param {number} maxResults to see
//    * @param {string} calendarId to see by default use the calendar attribute
//    * @returns {any}
//    */
//   public listUpcomingEvents(maxResults: number, calendarId: string = this.calendar): any {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.list({
//         calendarId: calendarId,
//         timeMin: new Date().toISOString(),
//         showDeleted: false,
//         singleEvents: true,
//         maxResults: maxResults,
//         orderBy: "startTime",
//       });
//     } else {
//       console.log("Error: this.gapi not loaded");
//       return false;
//     }
//   }

//   /**
//    * List all events in the calendar queried by custom query options
//    * See all available options here https://developers.google.com/calendar/v3/reference/events/list
//    * @param {object} queryOptions to see
//    * @param {string} calendarId to see by default use the calendar attribute
//    * @returns {any}
//    */
//   public listEvents(queryOptions: object, calendarId: string = this.calendar): any {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.list({
//         calendarId,
//         ...queryOptions,
//       });
//     } else {
//       console.log("Error: this.gapi not loaded");
//       return false;
//     }
//   }

//   /**
//    * Create an event from the current time for a certain period
//    * @param {number} time in minutes for the event
//    * @param {string} summary of the event
//    * @param {string} description of the event
//    * @param {string} calendarId
//    * @param {string} timeZone The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
//    * @returns {any}
//    */
//   public createEventFromNow(
//     { time, summary, description = "" },
//     calendarId: string = this.calendar,
//     timeZone = "Europe/Paris"
//   ) {
//     const event = {
//       summary,
//       description,
//       start: {
//         dateTime: new Date().toISOString(),
//         timeZone: timeZone,
//       },
//       end: {
//         dateTime: new Date(new Date().getTime() + time * 60000),
//         timeZone: timeZone,
//       },
//     };

//     return this.createEvent(event, calendarId);
//   }

//   /**
//    * Create Calendar event
//    * @param {string} calendarId for the event.
//    * @param {object} event with start and end dateTime
//    * @param {string} sendUpdates Acceptable values are: "all", "externalOnly", "none"
//    * @returns {any}
//    */
//   public createEvent(event: object, calendarId: string = this.calendar, sendUpdates = "none"): any {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.insert({
//         calendarId: calendarId,
//         resource: event,
//         sendUpdates: sendUpdates,
//       });
//     } else {
//       console.log("Error: this.gapi not loaded");
//       return false;
//     }
//   }

//   /**
//    * Delete an event in the calendar.
//    * @param {string} eventId of the event to delete.
//    * @param {string} calendarId where the event is.
//    * @returns {any} Promise resolved when the event is deleted.
//    */
//   deleteEvent(eventId: string, calendarId: string = this.calendar): any {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.delete({
//         calendarId: calendarId,
//         eventId: eventId,
//       });
//     } else {
//       console.log("Error: gapi is not loaded use onLoad before please.");
//       return null;
//     }
//   }

//   /**
//    * @returns {any} Get the user's basic profile information. Documentation: https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
//    */
//   getBasicUserProfile(): any {
//     if (this.gapi) {
//       return this.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
//     } else {
//       console.log("Error: gapi is not loaded use onLoad before please.");
//       return null;
//     }
//   }

//   /**
//    * Update Calendar event
//    * @param {string} calendarId for the event.
//    * @param {string} eventId of the event.
//    * @param {object} event with details to update, e.g. summary
//    * @param {string} sendUpdates Acceptable values are: "all", "externalOnly", "none"
//    * @returns {any}
//    */
//   updateEvent(
//     event: object,
//     eventId: string,
//     calendarId: string = this.calendar,
//     sendUpdates = "none"
//   ) {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.patch({
//         calendarId: calendarId,
//         eventId: eventId,
//         resource: event,
//         sendUpdates: sendUpdates,
//       });
//     } else {
//       console.log("Error: gapi is not loaded use onLoad before please.");
//       return null;
//     }
//   }

//   /**
//    * Get Calendar event
//    * @param {string} calendarId for the event.
//    * @param {string} eventId specifies individual event
//    * @returns {any}
//    */

//   getEvent(eventId: string, calendarId: string = this.calendar): any {
//     if (this.gapi) {
//       return this.gapi.client.calendar.events.get({
//         calendarId: calendarId,
//         eventId: eventId,
//       });
//     } else {
//       console.log("Error: gapi is not loaded use onLoad before please.");
//       return null;
//     }
//   }
// }

// let apiCalendar;
// try {
//   apiCalendar = new ApiCalendar();
// } catch (e) {
//   console.log(e);
// }
// export default apiCalendar;
