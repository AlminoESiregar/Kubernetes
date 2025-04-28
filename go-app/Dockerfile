# Build Stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy go mod files first (good practice for caching)
COPY go.mod ./
RUN go mod tidy

# Now copy all the source code
COPY . .

# Build the Go app
RUN go build -o main .

# Run Stage (smaller image)
FROM alpine:latest

WORKDIR /root/

# Copy only the built binary from builder
COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
