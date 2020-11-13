import stickyService from './../services/sticky.service';

const index = (request, response) => {
    stickyService.search({})
        .then((stickies) => {
            response.status(200);
            response.json(stickies);
        })
        .catch(handleError(response));
};

const get = (request, response) => {
    const id = request.params.id;
    stickyService.get(id)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};

const create = (request, response) => {
    const newSticky = Object.assign({}, request.body);
    stickyService.create(newSticky)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};

const update = (request, response) => {
    const id = request.params.id;
    const updateSticky = Object.assign({}, request.body);
    stickyService.update(id, updateSticky)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};

const remove = (request, response) => {
    const id = request.params.id;
    stickyService.remove(id)
        .then((sticky) => {
            response.status(200);
            response.json({
                message: "Delete Successful"
            });
        })
        .catch(handleError(response));
};

const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}