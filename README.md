


## Instructions:

- Download the zip file of project or clone repository.
- To run correctly the App & to install packages,dependecies etc.
`npm install`
- To open the app to toyr local browser
- `npm start` 
##  Suggestions:
Open the project at 1920 x 1080 (no resposivness on other breakpoints applied)

## Notifications:
Project develop time: 6h 20min.

# Cause/Problems:
> 1)I don't have much experience in styling table type html elements,
so i wasted too much time, finding always margin and padding bugs (sadly).
So,i recreated it with divs and spans (designed proper).
> 
> 2)Users top left icon is not provided from invision for download,
so i spent a bunch of time trying to see how to download it (i finally import another icon).
> 
> 3)Input type='checkbox' background-color and border make me waste the most time to pair it with the design
because, this type of element cannot take styling, only with pseudoelements and absolute positioned spans
writing 200 lines of Css (or some library but i had spent too much time to experiment),so my decision was
after spending the most time there to leave the default styling as it is (on checked it is proper as the design)
>
>4)The PUT method i don't know if it's build to work or it's is only for the assigment purpose and it's not
updating really the api? . I spend a little bit time to check, all was good the headers, the body of request,
i don't found something wrong. So i put logic on my redux reducer to update the state because
refetching with GET don't updating anything after PUT.I think it's ok you will see.
*******I'dont conclude api urls in .env to let you see if something is wrong with my api call.

# Monospace labs assignment
