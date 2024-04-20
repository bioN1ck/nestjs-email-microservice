# Build stage
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

# Final stage
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3001
CMD ["node", "dist/main"]
