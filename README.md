# Auto completion demo chrome extension

## Project setup
```
yarn
```

### Installing the chrome extension
```
yarn build and uploading the newly made dist folder at chrome://extensions -> Load Unpacked
```

### Where that actually works

Google search https://www.google.com/search?q=try+me

StackOverflow https://stackoverflow.com/

W3Schools https://www.w3schools.com/html/html_forms.asp

Some random website https://www.merriam-webster.com/dictionary/input

And other untested lucky websites..

### What sentences to search for and what to expect
  "Do you have time to meet next week?"
  "I have forwarded this message to the appropriate service rep"
  "If you're not the right person, can you please put me in touch with whoever is?"
  "Thanks again for chatting today and I look forward to hearing from you!"
  
  ----
  
  Expect auto completion at 40% and a completion using the TAB key at 50%.
  Completion proposal: "Do you have time" = 40%.
  Completion using the Tab key: "Do you have time to" = 50%.
