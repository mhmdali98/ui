import login from "@/views/login.vue";
import layout from "@/views/layout.vue";
import home from "@/views/home.vue";
import Users from "@/views/users.vue";
import addUser from "@/views/add_user.vue";
import contracts from "@/views/contracts.vue";
import addContract from "@/views/add_contract.vue";

let router = [
    {
        path: "login",
        name: "LOGIN",
        component: login
    },
    {
        path: "",
        name: "Layout",
        component: layout,
        children: [
            {
                path: "",
                name: "Home",
                component: home
            },
            {
                path: "users",
                name: "Users",
                component: Users,
                beforeEnter: (to, from, next) => {
                    next();
                }
            },

            {
                path: "add-user",
                name: "Add-User",
                component: addUser
            },
            {
                path: "contracts",
                name: "Contracts",
                component: contracts
            },
            {
                path: "add-contract",
                name: "AddContract",
                component: addContract
            }
        ]
    }
];

export default router;
