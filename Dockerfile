FROM node:12.18.0
WORKDIR /app
COPY . .
RUN cd FRONTEND \
&& npm install --silent \
&& npm run build \
&& rm -r node_modules \
&& mv build ../BACKEND/ \
&& npm install --prefix ../BACKEND/

WORKDIR /app/BACKEND/

ENV MONGO_URI=your_mongo_db_uri_string
ENV JWT_SECRET=your_jwt_secret

CMD ["node","server.js"]