import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {AppModule} from "./app.module";


const main = async () => {
  const port = process.env.Port || 7001
  const app = await NestFactory.create(AppModule)


  // Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS Backend')
    .setDescription('Документация REST API')
    .setVersion('1.0.1')
    .addTag('Dissmind')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)


  await app.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port: ${port}`)
  })
}

main()