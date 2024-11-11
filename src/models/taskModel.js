const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (id) => {
    const tasks = await prisma.task.findMany({
        where: {
            creatorId: +id,
        },
        orderBy: {
            status: 'desc',
        }
    });
    return tasks;
};

const selectTask = async (id) => {
    const task = await prisma.task.findFirst({
        where: {
            id: +id,
        },
    });
    return task;
};

const createTask = async (title, id) => {
    const createdTask = await prisma.task.create({
        data: {
            title: title,
            status: "pendente",
            creatorId: +id,
        },
    });
    return { insertId: +createdTask.id };
};

const updateTask = async (task) => {
    const { id, status } = task;

    const updatedTask = await prisma.task.update({
        where: {
            id: +id,
        },
        data: {
            status: status,
        },
    });

    return updatedTask;
};

const updateTitle = async (task) => {
    const { id, title } = task;

    const updatedTask = await prisma.task.update({
        where: {
            id: +id,
        },
        data: {
            title: title,
        },
    });

    return updatedTask;
};

const createUser = async (user) => {
    const { name, email, password } = user;
    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    return { insertId: +createdUser.id, user: createdUser };
};

const selectUser = async (email) => {
    const userExists = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if (userExists) {
        return true;
    } else {
        return false;
    }
};

const auth = async (user) => {
    const { email, password } = user;
    const auth = await prisma.user.findFirst({
        where: {
            email: email,
            password: password,
        },
    });
    if (auth) {
        return {
            userAuth: true,
            result: auth,
        };
    } else {
        return {
            userAuth: false,
        };
    }
};

const deleteTask = async (id) => {
    const removedTask = await prisma.task.delete({
        where: {
            id: +id,
        },
    });
    return removedTask;
};

module.exports = {
    getAll,
    createTask,
    selectTask,
    updateTask,
    updateTitle,
    createUser,
    selectUser,
    auth,
    deleteTask,
};
