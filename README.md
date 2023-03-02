# 1- Url para obtener el build personalizado de CKEditor5.
Se compila online y se descarga al terminar el quinto paso de la compilacion personalizada.

[Crea tu compilacion personalizada de CKEditor5](https://ckeditor.com/ckeditor-5/online-builder/).

## 2- Descomprime la compilacion del editor en la raiz del proyecto

En este proyecto se incluye un zip con una compilacion bastante extensa en funcionalidades y con el plugin de conversion de imagenes a base64

## Instalar el modulo de CKEditor5 para React
```bash
    npm install @ckeditor/ckeditor5-react
```
## Agregar el directorio con la compilacion de CKEditor5 al control de archivos (en este caso el directorio lo hemos nombrado 'ckeditor5' pero puede llamarse como queramos)
```bash
     npm add file:./ckeditor5
```

##  Terminando
Listo, lo que sigue es agregar el CKEditor como un componente de React.

Y luego correr nuestra plicacion como es habitual con:
```bash
    npm run start
```

Eso es todo.

### PD:
Si queremos cambiar el tipo de editor y/o sus funcionalidades, es tan simple como descargarnos una nueva compilacion del sitio donde generamos la anterior y reemplazar una por otra o en su defecto utilizarla en otro componente.


