export default {
  openapi: '3.0.0',
  info: {
    title: 'Albums store',
    description: 'Add your description',
    license: {
      name: 'MIT',
      url: '',
    },
    termsOfService: '',
    version: '1.0.0',
  },
  servers: [],
  components: {
    schemas: {
      Song: {
        description: 'A song',
        required: [
          'title',
        ],
        type: 'object',
        properties: {
          title: {
            description: 'The title',
            type: 'string',
          },
          artist: {
            description: 'The artist',
            type: 'string',
          },
          year: {
            description: 'The year',
            type: 'integer',
          },
        },
      },
    },
  },
  paths: {
    '/api/v1/songs': {
      post: {
        deprecated: false,
        summary: '',
        security: [],
        responses: {
          200: {
            description: 'song response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
        parameters: [],
        tags: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Song',
              },
            },
          },
          description: 'song info',
          required: true,
        },
      },
    },
    '/api/v1/albums': {
      post: {
        deprecated: false,
        summary: '',
        security: [],
        responses: {
          200: {
            description: 'song response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
        parameters: [],
        tags: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Song',
                },
              },
            },
          },
          description: '',
          required: true,
        },
      },
    },
    '/api/v1/name': {
      post: {
        deprecated: false,
        summary: '',
        security: [],
        responses: {
          200: {
            description: 'song response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                },
              },
            },
          },
        },
        parameters: [],
        tags: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'string',
              },
            },
          },
          description: 'name body description',
          required: true,
        },
      },
    },
  },
  tags: [],
};
