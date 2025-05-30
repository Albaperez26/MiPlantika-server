# MiPlantika

This repository is a [json-server](https://github.com/Albaperez26/MiPlantika-server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/Albaperez26/MiPlantika-client)

# Server Structure

## Collections

### species

```javascript
{
  nombre,
  imagen,
  numeroDeEspecies,
  descripcion,
  generos,
  id,
}
```

### plants

```javascript
 {
   nombre,
   colorDeMiPlanta,
   localizacion,
   características,
   comentarios,
   imagen,
   speciesId,
   id,
 }
```

## Used API Endpoints in the App

| HTTP Method | URL                                | Description                           |
| ----------- | ---------------------------------- | ------------------------------------- |
| GET         | `/species`                         | Fetches all species                   |
| GET         | `/species/:speciesId`              | Fetches details of a specific species |
| GET         | `/plants/:plantsId`                | Fetches details of a specific plant   |
| POST        | `/species/:speciesId/create-plant` | Creates a new plant under a species   |
| PUT         | `/plants/:plantsId/edit`           | Updates a specific plant              |
| DELETE      | `/plants/:plantsId/edit`           | Deletes a specific plant              |

## Links

### Collaborators

[Alba Pérez](https://github.com/Albaperez26)

### Project

#### [Client Repo here](https://github.com/Albaperez26/MiPlantika-client)

#### [Server Repo here](https://github.com/Albaperez26/MiPlantika-server)

[Deploy Link](mi-plantika.netlify.app)
