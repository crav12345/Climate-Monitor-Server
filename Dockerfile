FROM node:lts-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build

FROM deps AS development
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]

FROM base AS production
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 8000
CMD ["node", "dist/server.js"]
