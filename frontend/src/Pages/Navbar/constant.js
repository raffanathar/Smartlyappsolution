
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
                name: "File Manager",
                link: "/apps/file-manager",
            },
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
