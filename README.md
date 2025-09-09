# Next Web Form

Next Web Form is a no-code style web form system.<br>
Build by nextjs/TypeScript.

![Editor view](/readme/screen.png)

⚠️This system for learning no-code and NextJS. Therefore, there are few excellent functions and screens. In particular, there is no authentication function, so it is very dangerous to deploy it as it is.

## How to use.
Set up Database with docker.
```
cd docker
docker build -t <image_name> .
docker run --name <container_name> -p 5432:5432 <image_name>
```
Install dependencies.
```
bun install
```

Update database with prisma
```
npx prisma db push
```

Run app.
```
bun dev
```