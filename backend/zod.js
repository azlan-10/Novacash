const {z, string} = require('zod');

const Signupschema = z.object({
    username:z.string(),
    firstname:z.string(),
    lastname:z.string(),
    password:z.string().min(6),
})

const Signinschema = z.object({
    username:z.string(),
    password:z.string().min(6),
})

module.exports={
    Signinschema,
    Signupschema
}


/// farhan: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODliYjUyNjRjYjBlNDdjZDZlMGNiNjEiLCJpYXQiOjE3NTUwMzQ5MTh9.w-cb2GC2CKJWL6q5KwAaA7xcCiVfzxZjkUwlwbHC8WU
/// amaz : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODliYjU2NjRjYjBlNDdjZDZlMGNiNjYiLCJpYXQiOjE3NTUwMzQ5ODJ9.qSDfb5ML392Ju5qSk71yuPExi5nK5oYGq1-UvCitdJA
/// arqam" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODliYjU4NjRjYjBlNDdjZDZlMGNiNmIiLCJpYXQiOjE3NTUwMzUwMTR9.H7h_-8fuv921X2e2EhZ2KSDiK07yRtsRGSD7WxmKDp0