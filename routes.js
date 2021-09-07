let express = require('express');
let router = express.Router();
let clientController = require('./controllers/clientController');
let providerController = require('./controllers/providerController');


/**
 * @openapi
 * /clients:
 *  get:
 *     description: Get all clients
 *     responses:
 *       200:
 *         description: Returns all Clients
 */
router.get('/clients', clientController.listAllClients)

/**
 * @openapi
 * /clients:
 *  post:
 *     description: Create a new client
 *     responses:
 *       201:
 *         description: Client created successfully
 */
router.post('/clients', clientController.createClient);

/**
 * @openapi
 * /clients/:id:
 *  get:
 *      description: Get one client
 *      responses:
 *      200:
 *          description: Returns one client
 *
 */
router.get('/clients/:id', clientController.getClient);

/**
 * @openapi
 * /clients/:id:
 *  put:
 *      description: Update one client
 *      responses:
 *      201:
 *          description: Client updated successfully
 *
 */
router.put('/clients/:id', clientController.updateClient);

/**
 * @openapi
 * /clients/:id:
 *  delete:
 *      description: Delete one client
 *      responses:
 *      201:
 *          description: Client deleted successfully
 *
 */
router.delete('/clients/:id', clientController.deleteClient);


//Providers
/**
 * @openapi
 * /providers:
 *  get:
 *      description: Gets all Providers
 *      responses:
 *      200:
 *          description: Returned all providers
 *
 */

router.get('/providers',providerController.listAllProviders);

/**
 * @openapi
 * /providers:
 *  post:
 *      description: Creates a provider
 *      responses:
 *      200:
 *          description: Created provider successfully
 *
 */
router.post('/providers',providerController.createProvider);

/**
 * @openapi
 * /providers/:id:
 *  get:
 *      description: Get one provider
 *      responses:
 *      201:
 *          description: Returned Provider  successfully
 *
 */
router.put('/providers/:id', providerController.updateProvider);

/**
 * @openapi
 * /providers/:id:
 *  put:
 *      description: Update one provider
 *      responses:
 *      201:
 *          description: Provider updated successfully
 *
 */
router.put('/providers/:id', providerController.updateProvider);

/**
 * @openapi
 * /providers/:id:
 *  delete:
 *      description: Delete one provider
 *      responses:
 *      201:
 *          description: Provider deleted successfully
 *
 */
router.delete('/providers/:id', providerController.deleteProvider);


module.exports = router;