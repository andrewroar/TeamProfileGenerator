# Week 10, HTML Generator

## Description

By prompting a list of question, you can generate a html for your employee/manager/engineer/intern

## Method

To generate the html, open the "template" folder. the index.js starting generate their respective employee using the template in the template folder

The first question is what is the position of the category, once the category is identified, it will run the function to create or append the employee to the index.html according to the information provided. All four function (createEmployee,createManager,createIntern, createEngineer) is basically the same with small twist to fit the requirement.

The data output will be stored an array, once the user designed not to append anymore employee, the array will be rended by "lib/html.Renderer.js" and generate a new html call "output.html"

## User Story

While generating the html with inquirer and fs is easy, I was not sure how to handle the data and pass it on to Render.js.

## Test

I run the test and it passed all of them. See png for result or feel free to re-run
