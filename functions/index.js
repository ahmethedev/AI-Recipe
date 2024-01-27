// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

// Listens for new messages added to /messages/:documentId/original
// and saves an uppercased version of the message
// to /messages/:documentId/uppercase
exports.createrecipe = onDocumentCreated("/Recipes/{documentId}", (event) => {
  // Grab the current value of what was written to Firestore.
  const title = event.data.data().title;
  const recipe = {
    title: title,
    description: "this is a test recipe",
    ingredients : ["ing 1", "ing 2"],
    steps: ["step1", "step2"],
  }; 

  const uppercase = original.toUpperCase();

  // You must return a Promise when performing
  // asynchronous tasks inside a function
  // such as writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return event.data.ref.set({ recipe  }, { merge: true });
});
