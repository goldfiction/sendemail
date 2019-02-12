#!/usr/bin/env node
var program = require('commander');
var gqemail=require("gqemail");

gqemail.setServer({
    user: "notify553@gmail.com", // leave this account alone
    password: "bfjqlwbhekzvkhuy",            // don't change password
    host: "smtp.gmail.com",      // use your own gmail account for privacy
    port: 465,
    ssl: true
});

program.version('0.0.1')
    .arguments('<to> <msg>')
    .action(function(to,msg){
        gqemail.emailit({to:to,text:msg},function(e,r){
           if(e) console.log(e);
           console.log("to: %s, message: %s",to,msg)
        });
    })
    .parse(process.argv);

if (process.argv.length < 3) {
    program.help();
}

