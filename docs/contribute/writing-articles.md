---
prev: false
next: false
description: How to contribute new articles to the wiki.
---

# Contributing Articles

Thank you for deciding to contribute articles to this wiki! The only way this wiki has come this far, and for it to continue to grow is through contributions.

This guide will help you write, format, and implement your article into the wiki.

## Forking the GitHub Repository {#forking-the-repo}

In order to send a Pull Request (PR) to the wiki to request your article to be added, you have to fork the [ModdingWiki repository](https://github.com/LethalCompany/ModdingWiki) (repo). 

To fork the wiki, it's fairly simple. You'll click the `Fork` button on the webpage, then click `Create fork`.

![GitHub Fork Repo Button](/public/images/writing-articles/forkgithubrepobutton.png)

![GitHub Create Fork Dialog](/public/images/writing-articles/forkgithubrepopopup.png)

Now we've created the fork! From there you can make changes to a branch on the fork and create the PR when you're finished.

## Creating the File

Creating the article file is pretty simple. Add the file to the folder/subsection you are adding to, such as `/docs/dev/api/` for APIs, and create a markdown file (.md).

::: danger IMPORTANT
Make sure you make your file name with no spaces or symbols, other than `-` to replace spaces!

For example, this article is named `writing-articles.md` and is located in `/docs/extras/`.
:::

The terminal will then display the following, at which point you can go to the url given in the terminal:

![Displayed Text in Terminal](/public/images/writing-articles/runvitepressterminal.png)

## Viewing Your Article

This website uses VitePress to turn the markdown files into viewable webpages. To view your article in context as a webpage, it's simple.

To run VitePress and view as a local site, run the following command in the terminal:

```shell
npm run dev
```

::: tip
This must be ran in your repo folder. You can do so using the terminal in the code editor/IDE that you use. 
:::

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
prev: false
next: false
description: Example description
---

# Example Article
```

```md [incorrect.md]
<!-- Extra space causes errors -->
---
prev: false
next: false
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

### Links & Images

Adding links and images to your article is simple using Markdown, although the link itself is more special.

::: tip
Directory references start from `/docs/`, so don't add `/docs/` to references when linking to another article or an image.
:::

#### Links

Using [markdown syntax](https://www.markdownguide.org/basic-syntax/#links), a link is as simple as wrapping the text in brackets and adding the link in parenthesis. For example, to link to the Wikipedia article on Lethal Company, one could do the following:

```md
Look at [this wikipedia article](https://en.wikipedia.org/wiki/Lethal_Company) for basic info about the game.
```

To specifically link to another article in this wiki, you should use a `relational link` instead of a `hard link`. A `relational link` is the file directory, whereas a `hard link` is the actual website url.

To link to another article, say the `Contributing Translations` article, you use the following syntax:

```md
[text](/contribute/translating-the-wiki)
```

::: warning
Do not use file extensions in the `relational link` for webpages/articles, doing so can lead to un-clean urls (ex. translating-the-wiki.html)
:::

To link to a specific heading, you can add `#heading-anchor` to the link, where `heading-anchor` is the specific heading anchor you want to use. To find what anchor to use, click on the heading, and see what anchor is in the url.

```md
[heading of another article](/installation/syncing-mods#exporting-a-profile)
```

::: tip
If you want to do it to another heading in your article, you can drop the link and only have the anchor, like so:

```md
[heading](#example-heading-anchor)
```
:::

#### Images

To add images to your article, there are two steps:

::: info 1. Save the image in the correct directory
Images should be saved in a folder within `/docs/public/images`, where the folder is labeled the same as your article file name (minus `.md`).

For example, all images used in this article are saved within `/docs/public/images/writing-articles`.
:::

::: info 2. Add it with the correct syntax
The syntax to add an image is like adding a link.

```md
![Example Image Alt Text](/public/images/writiing-articles/example-image.png)
```

There are three important parts in this:

- The Exclamation Mark
  - This marks the link as an image.
- The Alt Text
  - This text will show if the image is not loaded.
- The Image Link
  - The directory of the image as well as the file name ***and extension***.
:::

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