FROM cypress/base:24.17.0

WORKDIR /app

COPY . .

ENV ENVIRONMENT=prod

RUN npm install
RUN npx playwright install

CMD ["npx", "playwright", "test"]