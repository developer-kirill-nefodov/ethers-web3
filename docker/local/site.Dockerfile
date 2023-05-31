FROM node:18

WORKDIR /app

COPY ./app/frontend/package.json ./app/frontend/yarn.lock* ./app/frontend/package-lock.json* ./app/frontend/pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY ./app/frontend/public ./public
COPY ./app/frontend/src ./src
COPY ./app/frontend/tsconfig.json .
COPY ./app/frontend/globals.d.ts .
COPY ./app/frontend/.env .

EXPOSE 3000

CMD npm run start
