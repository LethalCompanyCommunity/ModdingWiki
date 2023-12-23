---
prev: false
next: false
description: How to contribute new articles to the wiki.
---

# Contributing Articles

Thank you for deciding to contribute articles to this wiki! The only way this wiki has come this far, and for it to continue to grow is through contributions.

This guide will help you write, format, and implement your article into the wiki.

## Forking the GitHub Repository {#forking-the-repo}

## Creating the File



## Frontmatter

VitePress uses `YAML Frontmatter` for article configs. There are three commonly used settings, `description`, `prev`, and `next`.

### Description

In order to have descriptive info for search engines and embeds, you have to add a description to the front matter. To do so, you need the following code at the start of your article:

```md
---
description: Example description
---
```

### Previous & Next

You may have seen previous or next article buttons at the bottom of wiki pages. They can be enabled or disabled in the frontmatter section, using `prev` and `next`.

By default, the previous and next buttons are disabled. To enable these buttons, you need to set the options to true:

```md
---
prev: true // [!code ++]
next: true // [!code ++]
description: Example description
---
```

::: danger IMPORTANT
The frontmatter section **must** be at the beginning of the file, otherwise it will not work. For example, `correct.md` will display a correct markdown file, and `incorrect.md` will display an incorrectly written markdown file.

:::code-group
```md [correct.md]
---
description: Example description
---

# Example Article
```

```md [incorrect.md]
<!-- Extra space causes errors -->
---
description: Example description
---

# Example Article
```
:::

## Formatting

### Markdown

This wiki uses a modified version of markdown (.md) files for articles, allowing a fairly easy process to write a new article.
Markdown essentially is a simple text file with "shortcuts" that help with formatting.
An example of this is in Discord, where you can easily format your messages to be bold, italicized, etc.

::: tip
[This Markdown Guide](https://www.markdownguide.org/basic-syntax/) goes into greater detail than the basics given in this article.
:::

#### Common Usages

There are a few simple ways to format text.

- Using `**` on either side of a word/phrase will **bold that word/phrase**.
- Using `_` on either side of a word/phrase will _italicize that word/phrase_.
- Using `***` on either side of a word/phrase will ***bold and italicize that word/phrase***.
- Using `~~` on either side of a word/phrase will ~~strike that word/phrase out~~.

::: warning
These symbols generally ***must not*** have spaces between them and the word(s) you are formatting.
:::

#### Headings

You may want headings in your article. These are places you can link to which will bring readers to that exact spot on the page. For example, [this links to the formatting heading](#formatting).

There are several different heading "sizes" you can use.

- Using `#` will create the main heading (h1). For example, [this links to a main heading](#contributing-articles).
- Using `##` wil create the an h2 heading.

This pattern continues all the way until `######`, which creates an h6 heading.

::: info
Unless there is an empty line between lines of text, headings, or other line symbols, the lines of text, heading, code, or whatever else will either not work or be separated as intended.

::: code-group
``` [Correct]
This text is correctly formatted.

Extra sentence.

---

This text is correctly formatted.
Extra sentence.
```

``` [Incorrect]
This text is incorrectly formatted.
Extra sentence.

---

This text is incorrectly formatted. Extra sentence.

```
:::

#### Code

You likely will want to display code as examples for readers to view. To do this, there are both code and code blocks.

The main usage of code formatting is to `highlight a method` or `a field`. You can do so using a backtick (`` ` ``) around the code.

You may, however, want to display codeblocks instead. To do so, you can use three backticks (`` ``` ``) around the code. You can also use the [language identifier](https://shikiji.netlify.app/languages) to use color highlighting specific to that language.

For example, the following text, marked as a `C# Script`:

\```cs<br>
public void TestMethod()<br>
{<br>
&emsp;// code<br>
}<br>
\```

Will be formatted to look like this:

```cs
public void TestMethod()
{
    // code
}
```

### VitePress

This wiki uses [VitePress](https://vitepress.dev/) to turn markdown files into a working website. This comes with additional methods to format text into a prettier-looking article.

::: tip
[This Vitepress Guide](https://vitepress.dev/guide/markdown) goes into greater detail than the basics given in this article
:::

#### Containers

Containers hold little snippets of text that can be small asides, or important to pay attention to. The general method of creating a container is the following:

\::: info<br>
Example container text<br>
\:::

This will become formatted by VitePress to look like this:

::: info
Example container text
:::

Common containers are:

- `info`
- `tip`
- `warning`
- `danger`
- `details`

These will vary the coloring of the container. `details` specifically creates a hidden container that can hold more information.

::: details Example Details Container
Hidden info
:::

#### Code

You may want to highlight a line/section of code to bring attention to it. You can do this by specifying what lines you want highlighted in braces next to the language identifier.

\```cs {2,4-6}<br>
//Example Line 1<br>
//Example Line 2<br>
//Example Line 3<br>
//Example Line 4<br>
//Example Line 5<br>
//Example Line 6<br>
//Example Line 7<br>
\```

```cs {2,4-6}
//Example Line 1
//Example Line 2
//Example Line 3
//Example Line 4
//Example Line 5
//Example Line 6
//Example Line 7
```

You might also want to display the line numbers of code, which can be done by adding `:line-numbers` after the language identifier.

\```cs:line-numbers<br>
//Example Line 1<br>
//Example Line 2<br>
//...<br>
\```

```cs:line-numbers
//Example Line 1
//Example Line 2
//...
```

## Adding to Sidebar

In order for people to easily navigate to your article, you must add it to the sidebar. You can do so in `docs/.vitepress/config.mts`.

First, you have to decide which sidebar you want to add your article to. `'/'` is the `Beginner's Guide` sidebar and `'/modding/'` is the `Developer's Guide` sidebar.

Next, insert the following into your article location:
```ts
{
    text: 'Modding APIs',
        items: [
        { text: 'Modding APIs Overview', link: '/apis/modding-apis' },
        { text: 'CustomSounds', link: '/apis/customsounds'},
        { text: 'Overview', link: '/modding/apis/overview' },
        {
            text: 'Asset APIs',
            collapsed: false,
            items: [
                { text: 'CustomSounds', link: '/modding/apis/customsounds'},
            ]
        },
        {
            text: 'Programming APIs',
            collapsed: false,
            items: [
                { text: 'Example Article', link: '<directory>' }, // [!code focus] // [!code highlight]
            ]
        }
    ]
},
``` 

Where `Example Article` is the article name, and `<directory>` is the location and name of the article file. For example, `/modding/apis/example-article` would be a correct directory/link.

::: tip
Please ensure your article name is in **Title Case** when adding it to the sidebar.
:::

## Submitting to GitHub