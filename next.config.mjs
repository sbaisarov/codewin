/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // используем явно указанные пакеты для серверных компонентов
        serverComponentsExternalPackages: ['sequelize', 'pg'],
    },
};

export default nextConfig;
