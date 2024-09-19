// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvFsfzTViSHbIsJeyeU6eFEpbLiLrk-5Q",
    authDomain: "chatbot-organization.firebaseapp.com",
    projectId: "chatbot-organization",
    storageBucket: "chatbot-organization.appspot.com",
    messagingSenderId: "591124487047",
    appId: "1:591124487047:web:798e8459c0feb040849122",
    measurementId: "G-KLY4F4LBKH"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-in logic
document.getElementById('signInBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('chat-container').style.display = 'flex';
        })
        .catch((error) => {
            alert('Authentication Failed: ' + error.message);
        });
});

// Send button logic
document.getElementById('sendBtn').addEventListener('click', sendMessage);

// Handle file uploads
let attachmentMenuVisible = false;

document.getElementById('attachmentBtn').addEventListener('click', () => {
    const attachmentMenu = document.querySelector('.attachment-menu');

    if (attachmentMenuVisible) {
        if (attachmentMenu) {
            attachmentMenu.remove();
        }
        attachmentMenuVisible = false;
    } else {
        if (!attachmentMenu) {
            const newMenu = document.createElement('div');
            newMenu.classList.add('attachment-menu');
            
            newMenu.innerHTML = `
                <button id="uploadDocument">Upload Document</button>
                <button id="uploadImage">Upload Image</button>
            `;
            
            document.body.appendChild(newMenu);

            document.getElementById('uploadDocument').addEventListener('click', () => {
                document.getElementById('documentInput').click();
                newMenu.remove();
                attachmentMenuVisible = false;
            });

            document.getElementById('uploadImage').addEventListener('click', () => {
                document.getElementById('imageInput').click();
                newMenu.remove();
                attachmentMenuVisible = false;
            });

            attachmentMenuVisible = true;
        }
    }
});

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messageContainer = document.getElementById("messages");

    if (userInput.value.trim() === "") return;

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerText = userInput.value;
    messageContainer.appendChild(userMessage);

    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.innerText = "Bot is in training: " + userInput.value;
        messageContainer.appendChild(botMessage);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 1000);

    userInput.value = "";
}
