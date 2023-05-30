FROM node:18

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

RUN mkdir /home/nodejs/api

WORKDIR /home/nodejs/api

COPY ./app/backend/package.json ./app/backend/yarn.lock* ./app/backend/package-lock.json* ./app/backend/pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY ./app/backend/src/ ./src
COPY ./app/backend/.env .
COPY ./app/backend/.sequelizerc .
COPY ./app/backend/tsconfig.json .

EXPOSE 3001

CMD npm run dev
