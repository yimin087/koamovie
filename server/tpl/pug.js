module.exports = `
DOCTYPE
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    link(href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css", rel="stylesheet")
    script(src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js")
    script(src="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js")
    title KOA MOIVE
  body
    .container
      .row
        .col-md-8
          h1 Left
          p #{name}
        .col-md-4
          h1 Right
          p #{text}
`
