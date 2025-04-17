const Status = {
    BACKLOG: `backlog`,
    PROCESSING: `processing`,
    DONE: `done`,
    BASKET: `basket`
};

const StatusLabel = {
    [Status.BACKLOG]: `Backlog`,
    [Status.PROCESSING]: `In proccess`,
    [Status.DONE]: `Done`,
    [Status.BASKET]: `Basket`
}

export {Status, StatusLabel};