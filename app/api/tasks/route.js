import Task from '../../../models/Task';

export async function GET(request) {
    try {
        // Retrieve a single task by its ID
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');
        if (id) {
            const task = await Task.findByPk(id);
            if (!task) {
                return Response.json({ message: 'Task not found' }, { status: 404 });
            }
            return Response.json(task);
        }
        else {
            const tasks = await Task.findAll();
            return Response.json(tasks);
        }
        // Retrieve all tasks from the database
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        if (!body.name) {
            return Response.json({ message: 'Task name is required' }, { status: 400 });
        }
        const newTask = await Task.create({
            name: body.name,
            description: body.description,
            category: body.category,
            status: body.status || false
        });
        return Response.json(newTask, { status: 201 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 400 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');
        if (id) {
            const task = await Task.findByPk(id);
            if (!task) {
                return Response.json({ message: 'Task not found' }, { status: 404 });
            }
            await task.destroy();
            return Response.json({ message: 'Task deleted successfully' }, { status: 204 });
        }
        else {
            return Response.json({ message: 'Task ID is required' }, { status: 400 });
        }
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
