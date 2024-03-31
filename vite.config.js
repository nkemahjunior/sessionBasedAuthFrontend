import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /*server:{
    https:{
      key: './ssl/localhost-key.pem',
      cert:'./ssl/localhost.pem'
    }
  },*/
  plugins: [react()],
})


//I GOT THE SSL CERTIIFICATES FROM MKCERT GITHUB
//ADD THIS TO YOUR JSON FILE INCASE YOU WANT TO ACTIVATE THAT SERVER OPTION
//*"dev": "HTTPS=true SSL_CRT_FILE=./ssl/localhost.pem SSL_KEY_FILE=./ssl/localhost.key.pem vite",*/