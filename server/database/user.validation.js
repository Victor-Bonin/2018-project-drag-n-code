db.createCollection("users",
{
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [
                "username",
                "password"
            ],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
                },
             password: {
                bsonType: "string",
                description: "must be a string and is required"
                }
            }
        }
    },
    validationAction: "error"
});