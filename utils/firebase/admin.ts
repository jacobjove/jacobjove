import admin from "firebase-admin";

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
    : undefined;
  // const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
    }),
    // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    // credential: admin.credential.cert(serviceAccount){
    // "type": "service_account",
    // "project_id": "selfbuilder2",
    // "private_key_id": "ca018f58906293a0a4c3449cbe3bba9e7ae42bb7",
    // "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCysra/0S23yOtC\nI2NcrXF0bda5OavGxgZTjzyaC1Y6cBi+YErFvwFp2yxEJjyrx+3ecBaJAyq7AhQe\n4/NHW48JwnhVWglcbzMjBM/K4WO5t7RjJ5WM8RqyfnAxKCplBRaBJbKfRc3kI1jJ\n8CNH4psx/TGOXL994H/IuRkhludK3XZDQsrQy92sWMl9ldjj2ODW2y8fO8DVFOSG\nk1ZeEHiINje429khCDK+j4wIw9pxRD4pLvI98QIYV6fbErLg+MLyVf8DBBuhQfMg\nWIxgXYVt1rFNFLFS+IpAkVw6xVBtyMgpHT3iRQoeAK115i4JMoSSkNq9nrNwCyuN\nl3rE+36BAgMBAAECggEACZ5L7twr+Unzu74a4YimZC1rUtHzWIIdIg9CJEp67C9P\nbaPSMn2a7l8xLUPfnSFoQMJIvDwy5xjwC0+arxsTAmP4xSNRAKwtlPNz2cgy7XKh\nX3rodksd9ECQ+lxel8xjzzS/vgnsUJzEcS4fQAXG87Rcn/yHBBf62Mt5ulCch294\nIBmEM7ivb0fK0USYTgHjeqe6xcxLuTsIf6Lz2cSjQTg/r3Wy1SJl3gtD7ifPRhdp\ndSEgEq9ZRtKQs1yFDBRevS61/MMsmWF+CMMvbS/ePnRL1fD47iF+IMlvve3EaNrz\ngPA7sU+g9nrXKs99bsbde3wQ89bPoSb6fbxQ2PMEHwKBgQDaI9fVmFZfT2NcGpxa\nWhXKmubjYb0EHu+q+k+5+oMJhYeeyabmgVmUjiysrAdrAMjxMcqbqaw/bBDm8yaJ\nqtu0hxjWxHhq/UEUI966VJlvQ01Kqmoa2w+C+FUnPcA+ivjR4bmz4phDbEu1t+MR\nIvH9pFqhb9xe91K/3mOBc9AN7wKBgQDRtm5iGTmAQKOO6SrygHVvYvJqCYvVv0Vb\nm8MMpIrId3N+biURxQEGJ04VEl40cetr/PlZ97LkaCRjgqGisNcAJ5GL/1K7A7hX\nQcRNdwsRURHjlpjRGX+07Z+hIaHNXldR+383TIrUHLrDTCup0O4ssoRs6OZ5MiwE\nuXxugK2qjwKBgFTG5VTvtXGpKtZayTUcGaf5942bKJh3ZXGvglinEVIcAQ8nE6Q1\n1Ri1AIvC98cQMQf779/7WyPy3cbD7NBIBMbuUir1hE8gSbCIGEGWK2NgZqOEA2SY\niji+RmnPx+0GmZkH/uH4SHC7n9jptGeuixmmTEq9bInD2PcUeNuQpOUlAoGBAJjh\nBVc+TEzS0mk8UbK3MuUgnNfwXaBU75r40hhFW2cIrYldgmiR1U1HGgUCfup8ocL3\niE+t4xvfT6e7c1nG0PWr4s7MMuNist/pcdGHFupoz0G6Z20HybF8CQLOIcY1IDMD\nxJnrkslOqFf3D12ckgTDnwZGQr3XdX98ONnVtMTBAoGATspH8bl4Kd3yBXXX5o7s\n6FdDps/y+XxfbCql/ScJ/6roMFX8tkWq9yMKKFSI+UQzAXprq9xnIVKJtGaM1qhT\ne8xuZkiQljhFr+GmrBAloMmaMbxbrNaGqMghOjTsBPTJdMRQyvwKJDMtgb90FzJY\nLgDdQTypdTI5auizzBdG+kA=\n-----END PRIVATE KEY-----\n",
    // "client_email": "firebase-adminsdk-g8d4o@selfbuilder2.iam.gserviceaccount.com",
    // "client_id": "113432676492756716954",
    // "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    // "token_uri": "https://oauth2.googleapis.com/token",
    // "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    // "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-g8d4o%40selfbuilder2.iam.gserviceaccount.com"
  });
  admin.firestore().settings({ ignoreUndefinedProperties: true });
}

export const firestore = admin.firestore();

export default admin;
