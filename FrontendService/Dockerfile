# Stage 1: Compile and Build angular codebase
FROM node:16 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:alpine
COPY --from=build /app/dist/FrontendService /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
