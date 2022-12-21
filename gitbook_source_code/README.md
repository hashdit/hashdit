# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to Add Documentations
Documentations are located at `gitbook_source_code/docs`, simply add a file to this directory will insert a new tag in the documentation part.

Note that the documentation files are written in **MarkDown** format and are ended with `.md`.

Remember to add:
```markdown
---
sidebar_position: x
---
```
to the front of the documentation. `x` repersents the location of the tag in the documentation and starts from 1.

If you want to add multiple files to one tag, create a directory and add files into it. Each sub-file should also start with `sidebar_position` to indicate its poistion in the tag. You may also need to configure a `_category_.json` file, that contains `label`, `position`, and `link`. An example is shown below:
```json
{
  "label": "HashDit API",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "HashDit API"
  }
}
``` 
This indicates the multi-file tag's title is "HashDit API" with tag position 2 and desciption "HashDit API". Every other things are automatic.

## How to Add Blogs
Blogs are located at `gitbook_source_code/blogs`, just like adding documentations, adding blogs are also quite stright forward. The blog file supports `.md` and `.mdx` types, and directory is used when you need to insert pictures to the blog, by placing the blog content and the pic in one directory.

Before every blog file you need to add
```markdown
---
slug: SLUG
title: TITLE
authors: [AUTHOR1, AUTHOR2]
tags: [TAG1, TAG2]
---
```
to the front of the blog. `slug` stands for the identification of the blog, and the `title` will be shown as the blog title. `authors` can either be defined in the file, or pre-defined in the `gitbook_source_code/blogs/authors.yml` and referenced. Lastly, the `tag` represents the tag you want to categroize this blog.

More information for blogs can be found at https://docusaurus.io/docs/blog


## Local Deployment

### Change to Source Directory
```
$ cd gitbook_source_code
```

### Package Installation

```
$ npm install
```

### Local Build

```
$ npm run build
```

### Local Development

```
$ npm run serve
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.



### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
