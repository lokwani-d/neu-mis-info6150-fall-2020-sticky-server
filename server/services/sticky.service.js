import Sticky from './../models/sticky';

const search = (filter) => {
    const promise = Sticky.find(filter).exec();
    return promise;
};

const get = (id) => {
    const promise = Sticky.findById(id).exec();
    return promise;
}

const create = (newSticky) => {
    const sticky = new Sticky(newSticky);
    const promise = sticky.save();
    return promise;
}

const update = (id, updatedSticky) => {
    const promise = Sticky.findByIdAndUpdate(
        { _id: id },
        updatedSticky,
        { new: true }
    ).exec();
    return promise;
}

const remove = (id) => {
    const promise = Sticky.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}