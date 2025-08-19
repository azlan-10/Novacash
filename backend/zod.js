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

