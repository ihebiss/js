// decodeToken.js

const jwt = require('jsonwebtoken');

// Remplacez ceci par votre token JWT
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZQjgxQUJsazhMbnQ5aXk1cmU3a2FCSHQzdmNwa0hPd2kxVnJRNVBGa2ljIn0.eyJleHAiOjE3MjIyNjE4NjUsImlhdCI6MTcyMjI2MTU2NSwiYXV0aF90aW1lIjoxNzIyMjUwOTY4LCJqdGkiOiJiN2RhYjJjMy1jMmFiLTQwM2MtODA3NS03ZDE5MjE4M2VmOGIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvcmVhbG1zL215cmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzIyY2JhMzktYTBkNC00MzY3LTgzNWItY2Y3ODUzZTMwZGIzIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibXloYW5lbiIsInNpZCI6IjZkOGU1OWNhLTgwNjAtNDdlZS1iNjgxLTQzNWVhNmRkYWY0ZSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW15cmVhbG0iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiVGVhbUxlYWQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiRmlyYXMgQWxvdWxvdSIsInByZWZlcnJlZF91c2VybmFtZSI6ImZpcmFzIiwiZ2l2ZW5fbmFtZSI6IkZpcmFzIiwiZmFtaWx5X25hbWUiOiJBbG91bG91IiwiZW1haWwiOiJmaXJhc0BnbWFpbC5jb20ifQ.qdcT6k2DnlhHGcwIpNkBnDuiXcBewH0QzUOlR6AIobzJ9njEVhaA0L9TfYb8PyhfX6DMeuahylJ0l_ePIWizYTt7-JopyLOIAf3cH9HX_1sFD-q2VsSm0QETwQT3rq1zMsdWfLV3IcU46VMyDADrKjyutS-2n_5to7IBrTrgXI6K_9b49S78IN_4oqP1ikfNJ5i7hqZUWoYu4CStXifHiyH-tqLkso_9HGOHlLsvaxUv6eomBkh8YAKvUO2Iw9flxypjED2F0uJjtPNqV920wvTkgZug5ncUjIA4SEkiodCGrgjEQN_wxASq5ziXaIxQdNuWiDeqHP11YRfPkChlRw';

// Décodez le token pour vérifier le champ 'iss'
const decoded = jwt.decode(token, { complete: true });

if (decoded) {
  console.log('Issuer (iss):', decoded.payload.iss);  // Vérifiez la valeur du champ 'iss'
} else {
  console.error('Token non valide ou non décodable');
}
