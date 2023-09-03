---
title: '¿Es el pixel perfect una mentira?'
description: '¿Se puede realmente lograr el pixel perfect? Pensamientos y propuestas sobre cómo mejorar nuestros métodos de diseño y programación mediante el uso de las herramientas de interfaz de usuario.'
pubDate: 'Jan 01 2021'
heroImage: '/pixel-perfect.jpg'
category: 'Frontend'
url: 'https://chic-belekoy-9dad76.netlify.app/'
---

> Mi carrera en diseño web comenzó en 2018. En ese momento y por muchos años anteriores, se usaba **Photoshop** e **Illustrator** para el diseño de interfaces, sí, la misma herramienta utilizada para la edición de fotos y gráficos vectoriales se empleaba para diseñar páginas web. Con esta herramienta, exportaba imágenes que luego se pasaban al equipo de desarrollo, quienes hacían la programación. Sin embargo, siempre parecía que la implementación no coincidía exactamente con lo que yo había diseñado, lo cual resultaba muy frustrante. Incapaz de comprender la razón detrás de esto, **decidí aprender a programar para abordar el problema de raíz**. <br><br>

> A medida que mejoraba mis habilidades de programación, me di cuenta de que el enfoque convencional de diseñar imágenes estáticas no se adaptaba bien a la naturaleza dinámica de la web. **¿Por qué estábamos diseñando imágenes estáticas cuando la web era dinámica?** **¿Por qué no podía diseñar un botón que se adaptara automáticamente a su contenido en lugar de ajustar manualmente los márgenes?** ¿Por qué mis diseños no se adaptaban al ancho de la pantalla con estilos relativos, como lo hacían cuando programaba? ¿Por qué parecía que diseñaba con "position: absolute;"? <br><br>

> La llegada de Sketch en 2014 fue un cambio de juego para los diseñadores, ya que permitía una creación más eficiente de interfaces de usuario. Sin embargo, la desconexión entre el diseño y el desarrollo persistía. <br><br>

> En 2017, Figma apareció como una alternativa a Sketch, destacando por su colaboración en tiempo real y su historial de versiones. Aunque hubo mejoras significativas, aún se necesita un control de versiones más sólido y una API más potente para una integración más eficaz entre el diseño y el desarrollo.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
