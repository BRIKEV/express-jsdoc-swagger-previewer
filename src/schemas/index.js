const COMPONENTS = `
/**
 * A song
 * @typedef {object} Song
 * @property {string} title.required - The title
 * @property {string} artist - The artist
 * @property {number} year - The year - double
 */
`;

const RESPONSES = `
/**
 * GET /api/v1
 * @summary This is the summary or description of the endpoint
 * @return {string} 200 - success response
 * @return {object} 400 - Bad request response
 */
`;

const REQUEST_BODY = `
/**
 * A song
 * @typedef {object} Song
 * @property {string} title.required - The title
 * @property {string} artist - The artist
 * @property {string} cover - image cover - binary
 * @property {integer} year - The year - int64
 */

/**
 * POST /api/v1/album
 * @param {Song} request.body.required - songs info - multipart/form-data
 * @return {object} 200 - Album created
 */
`;

const PARAMETERS = `
/**
 * GET /api/v1/albums
 * @summary This is the summary or description of the endpoint
 * @param {string} name.query.required - name param description - enum:type1,type2
 * @param {string} license.query - enum:MIT,ISC - name param description
 * @return {object} 200 - success response - application/json
 */
`;

const EXAMPLE = `
/**
 * POST /api/v1/song
 * @param {Song} request.body.required - Song info
 * @return {object} 200 - Success response
 * @return {object} 400 - Bad request response
 * @example request - example payload
 * {
 *   "title": "Bury The Light",
 *   "artist": "Casey Edwards ft. Victor Borba",
 *   "year": 2020
 * }
 * @example request - other payload example
 * {
 *   "title": "The war we made",
 *   "artist": "Red",
 *   "year": 2020
 * }
 * @example response - 200 - example success response
 * {
 *   "message": "You have added a song!"
 * }
 * @example response - 400 - example error response
 * {
 *   "message": "Failed to save song because you did not specify a title",
 *   "errCode": "EV121"
 * }
 */
`;

const TAG = `
/**
 * GET /api/v1/album
 * @tags Album - everything about album
 */
`;

const EXAMPLES = {
  COMPONENTS,
  RESPONSES,
  REQUEST_BODY,
  PARAMETERS,
  EXAMPLE,
  TAG,
};

export default EXAMPLES;
