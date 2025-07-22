
export const routes = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Apps",
        link: "/apps",

        subRoutes: [
            {
                name: "SMS Backup & Restore",
                link: "/apps/sms-backup",
            },
            {
                name: "Remote",
                link: "/apps/remote",
            }, 
            {
                name: "QR-Reader",
                link: "/apps/qr-reader",
            },
        ],
    },
];
