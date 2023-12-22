---
prev: false
next: false
description: How to contribute new articles to the wiki.
---

# Contributing Articles

Thank you for deciding to contribute articles to this wiki! The only way this wiki has come this far, and for it to continue to grow is through contributions.

This guide will help you write, format, and implement your article into the wiki.

## Adding a Description



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

::: info Note
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