# Use a single base image for consistency
FROM node:18-alpine AS base

# Set working directory once to avoid repetition
WORKDIR /home/node/app

# Install dependencies in a separate stage to leverage caching
FROM base AS dependencies
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build stage
FROM dependencies AS builder
COPY . .
RUN yarn build

# Production runtime image
FROM node:18-alpine AS runtime

# Set environment variables for production
ENV NODE_ENV=production \
  PAYLOAD_CONFIG_PATH=dist/payload.config.js

# Set the working directory
WORKDIR /home/node/app

# Copy production dependencies only
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy build artifacts from builder stage
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

# Expose port for the application
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]
