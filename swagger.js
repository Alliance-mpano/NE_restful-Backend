const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config();

const PORT = process.env.PORT;

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'RTB Equipmnet Distribution APIs',
            version: '1.0.0',
            description: 'Documentation of Equipment Distribution APIs'
        },
        servers: [
            {
                url: `http://localhost:4000`
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        fullnames: {
                            type: 'string'
                        },
                        email: {
                            type: 'string'
                        },
                        NID: {
                            type: 'integer'
                        },
                        phoneNumber: {
                            type: 'string'
                        },
                        username: {
                            type: 'string'
                        },
                        password: {
                            type: 'string'
                        },
                    },
                },
                Employee: {
                    type: 'object',
                    properties: {
                        firstName: {
                            type: 'string'
                        },
                        lastName: {
                            type: 'string'
                        },
                        NID: {
                            type: 'string'
                        },
                        phone: {
                            type: 'string'
                        },
                        email: {
                            type: 'string'
                        },
                        department: {
                            type: 'integer'
                        },
                        position: {
                            type: 'string',
                        },
                        
                        model: {
                            type: 'string'
                        },
                        createdBy: {
                            type: 'string',
                            description: 'Foreign key referencing the User model'
                        }
                    }
                },
                
            },
        },
    },
    apis: ['./src/routes/*.js']
};

const specs = swaggerJsDoc(options)

module.exports = (app) => {
    app.use('/api-docs',swaggerUi.serve)
    app.get('/api-docs', swaggerUi.setup(specs))
}
