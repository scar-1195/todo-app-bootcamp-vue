import Vue from "vue";
import VueRouter from "vue-router";

//* Login
import LoginIndex from "../auth/LoginIndex.vue";
import RegisterMain from "../auth/components/RegisterMain.vue";

//* Admin
import TasksIndex from "../pages/tasks/TasksIndex.vue";
import CreateTask from "../components/tasks/CreateTask.vue";
import CompletedTasks from "../components/tasks/CompletedTasks.vue";
import PendingTasks from "../components/tasks/PendingTasks.vue";
Vue.use(VueRouter);

const prefix = "/admin";

const routes = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: LoginIndex,
            name: "login",
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("authFlag")) {
                    next({ name: "tasks" });
                } else {
                    next();
                }
            },
        },
        {
            path: "/register",
            component: RegisterMain,
            name: "register",
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("authFlag")) {
                    next({ name: "tasks" });
                } else {
                    next();
                }
            },
        },
        {
            path: prefix + "/tasks",
            component: TasksIndex,
            name: "tasks",
            meta: {
                requiresAuth: true,
                title: "Tasks",
            },
        },
        {
            path: prefix + "/create-task",
            component: CreateTask,
            name: "create_task",
            meta: {
                requiresAuth: true,
                title: "Create Tasks",
            },
        },
        {
            path: prefix + "/completed-tasks",
            component: CompletedTasks,
            name: "completed_tasks",
            meta: {
                requiresAuth: true,
                title: "Completed Tasks",
            },
        },
        {
            path: prefix + "/pending-tasks",
            component: PendingTasks,
            name: "pending_tasks",
            meta: {
                requiresAuth: true,
                title: "Pending Tasks",
            },
        },
        {
            path: "*",
            redirect: { name: "tasks" },
        },
    ],
});

routes.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("authFlag")) {
            next();
        } else {
            next({ name: "login" });
        }
    } else {
        next();
    }
});

export default routes;
